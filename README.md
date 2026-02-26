Cloud Instance Lister & Comparator

A Python-based web application that enables users to list and compare cloud compute instances from a single cloud provider based on vCPU, memory, storage, and pricing.

This project simplifies cloud instance selection by presenting structured comparisons through a clean and intuitive web interface built with Flask.

📌 Overview

Selecting the appropriate cloud instance can be challenging due to multiple configurations and pricing models. This application streamlines the process by:

Fetching instance data via cloud APIs

Processing and structuring data for comparison

Displaying specifications and pricing in a clear tabular format

Providing a simple cost-performance view

The application is deployed using Netlify.

🚀 Features

List available cloud compute instances

Compare vCPU, RAM, storage, and hourly pricing

Structured tabular comparison view

Lightweight and responsive web interface

API-driven backend data processing

🛠️ Tech Stack

Backend

Python

Flask

Requests

Pandas

Tabulate

Frontend

HTML

CSS

JavaScript

Deployment

Netlify

⚙️ Installation & Setup
Clone the Repository
git clone https://github.com/varshiniii2005/cc-internal
cd cc-internal
Install Dependencies
pip install flask pandas requests tabulate
Run the Application
python app.py

Access the application at:

http://localhost:5000
📂 Project Structure
cc-internal/
│
├── app.py
├── templates/
├── static/
├── requirements.txt
└── README.md
⚠️ Current Limitations

Supports a single cloud provider

No advanced benchmarking metrics

Limited visualization capabilities

🔮 Future Enhancements

Multi-cloud provider comparison (AWS, Azure, GCP)

Advanced performance benchmarking

Interactive dashboards and visual analytics

AI-based instance recommendation engine

👤 Author

Developed as part of a Cloud Computing internal project.

📄 License

This project is intended for educational and academic use.
