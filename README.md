# Dayflow – Human Resource Management System (HRMS)

Dayflow HRMS is a backend application used to manage employees, attendance, leave, payroll, and reports within an organization.  
The system is built using Node.js, Express, and MySQL.

## Technology Stack

- Node.js  
- Express.js  
- MySQL  
- JWT Authentication  
- Nodemailer (Email Verification)

## Project Structure

backend/
├── config/
│ ├── db.js
│ ├── auth.js
│ └── mail.js
├── controllers/
├── database/
│ ├── migrations/
│ └── seeders/
├── middleware/
├── models/
├── routes/
├── utils/
├── server.js
├── package.json
├── .env
├── .gitignore
└── README.md

yaml
Copy code

## Installation and Setup

### Install Dependencies

```bash
npm install
Environment Configuration
Create a .env file in the root directory.

env
Copy code
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASS=your_mysql_password
DB_NAME=dayflow_hrms

JWT_SECRET=dayflow_super_secret_key
JWT_EXPIRE=7d

MAIL_USER=your_email@gmail.com
MAIL_PASS=your_gmail_app_password

FRONTEND_URL=http://localhost:3000
Database Setup
Create Database
sql
Copy code
CREATE DATABASE dayflow_hrms;
Run Migrations
Run all .sql files inside the database/migrations/ folder in sequence.

Run Seeder
Execute the following file:

pgsql
Copy code
database/seeders/001_admin_user.sql
Default Admin Credentials
Email: admin@dayflow.com

Password: admin@123

Running the Server
Development Mode
bash
Copy code
npm run dev
Production Mode
bash
Copy code
npm start
Server URL
arduino
Copy code
http://localhost:5000
API Base URL
bash
Copy code
http://localhost:5000/api
Core Modules
Authentication (Register, Login, Email Verification)

User Management

Attendance Management

Leave Management

Payroll Management

Reports

Notes
JWT token must be sent in request headers:

makefile
Copy code
Authorization: Bearer <token>
Gmail SMTP requires an App Password

MySQL service must be running

Status
Backend setup is complete and ready for use.

yaml
Copy code

### ✅ FIXED ISSUES
- Single H1 only (MD025 fixed)  
- Blank lines around headings (MD022 fixed)  
- Lists wrapped with blank lines (MD032 fixed)  
- No multiple blank lines (MD012 fixed)  
- Code blocks properly spaced (MD031 fixed)
