-Cloud Instance Lister & Comparator
A Python-based web tool that helps users list and compare cloud instances from a single provider based on CPU, memory, and cost.
-Project Description
Choosing the right cloud instance is difficult because of many configurations and pricing options.
This project provides a simple Python + Flask application that:
Fetches cloud instance data using APIs
Compares instance specifications
Displays results in a clear table format
The project is deployed using Netlify.
-Features
List available cloud instances
Compare vCPU, RAM, storage, and price
Simple cost-performance comparison
Easy-to-use web interface
🛠️ Technologies Used
Python
Flask
HTML, CSS, JavaScript
Requests, Pandas, Tabulate
Netlify for deployment
-How It Works
User opens the web app
Flask backend fetches instance data from cloud API
Data is processed and compared
Results are shown in a table
-How to Run
git clone https://github.com/varshiniii2005/cc-internal
cd cc-internal
pip install flask pandas requests tabulate
python app.py
Open in browser:
http://localhost:5000
-Example Output
Instance
vCPU
RAM
Price/hr
t3.micro
2
1 GB
$0.01
m5.large
2
8 GB
$0.096
c5.xlarge
4
8 GB
$0.17
-Limitations
Works with one cloud provider only
No advanced benchmarking yet
-Future Improvements
Multi-cloud comparison
Better graphs and dashboards
AI-based recommendations
