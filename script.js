let instances = [];
let sortColumn = 'Name';
let sortAscending = true;

// Load JSON data
fetch('instances.json')
  .then(response => response.json())
  .then(data => {
    instances = data;
    displayTable();
  })
  .catch(error => {
    console.error("Error loading instances.json:", error);
  });
function displayTable() {
  const tbody = document.querySelector('#instanceTable tbody');
  tbody.innerHTML = '';

  const minVCPUs = parseInt(document.getElementById('cpuFilter').value) || 0;
  const searchText = document.getElementById('searchBox').value.toLowerCase();

  let filtered = instances
    .filter(inst => inst.vCPUs >= minVCPUs)
    .filter(inst => inst.Name.toLowerCase().includes(searchText));

  // Sort
  filtered.sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortAscending ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortAscending ? 1 : -1;
    return 0;
  });

  // Display each instance with color coding
  filtered.forEach(inst => {
    const row = document.createElement('tr');

    // vCPU color
    let vcpuClass = '';
    if(inst.vCPUs <= 1) vcpuClass = 'low';
    else if(inst.vCPUs <= 2) vcpuClass = 'medium';
    else vcpuClass = 'high';

    // Memory color
    let memClass = '';
    if(inst.Memory_GB <= 2) memClass = 'low';
    else if(inst.Memory_GB <= 8) memClass = 'medium';
    else memClass = 'high';

    row.innerHTML = `
      <td>${inst.Name}</td>
      <td class="${vcpuClass}">${inst.vCPUs}</td>
      <td class="${memClass}">${inst.Memory_GB}</td>
      <td>${inst.Zone}</td>
    `;
    tbody.appendChild(row);
  });

  // Add summary row for max vCPUs and Memory
  if (filtered.length > 0) {
    const summaryRow = document.createElement('tr');
    summaryRow.style.fontWeight = 'bold';
    summaryRow.style.backgroundColor = '#e0e0e0';
    
    const maxVCPUs = Math.max(...filtered.map(inst => inst.vCPUs));
    const maxMemory = Math.max(...filtered.map(inst => inst.Memory_GB));

    summaryRow.innerHTML = `
      <td>Max</td>
      <td>${maxVCPUs}</td>
      <td>${maxMemory}</td>
      <td>-</td>
    `;
    tbody.appendChild(summaryRow);
  }
}
// Event listeners for filters
document.getElementById('cpuFilter').addEventListener('input', displayTable);
document.getElementById('searchBox').addEventListener('input', displayTable);

// Sorting
document.querySelectorAll('th[data-sort]').forEach(th => {
  th.addEventListener('click', () => {
    const column = th.getAttribute('data-sort');
    if (sortColumn === column) {
      sortAscending = !sortAscending; // toggle
    } else {
      sortColumn = column;
      sortAscending = true;
    }
    displayTable();

    // Update arrow
    document.querySelectorAll('th[data-sort]').forEach(h => h.innerHTML = h.getAttribute('data-sort') + ' ▲');
    th.innerHTML = column + (sortAscending ? ' ▲' : ' ▼');
  });
});
