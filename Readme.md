# 🔮 Celestial Compass

A modern astrology web application built with **React, TypeScript, Vite, Tailwind CSS, and Node.js**.

The project was originally generated using Replit and has been successfully configured to run locally in **Visual Studio Code** on Windows.

---

# 📖 Project Overview

Celestial Compass is a full-stack web application consisting of two main parts:

- **Frontend** – React + Vite + TypeScript
- **Backend** – Node.js + TypeScript API Server

The frontend communicates with the backend through REST APIs.

---

# 🏗 Project Architecture

```
Celestial-Compass
│
├── artifacts
│   ├── astrology-website      # React Frontend
│   ├── api-server             # Backend API
│   └── mockup-sandbox
│
├── attached_assets            # Images and static assets
├── scripts                    # Helper scripts
├── node_modules
├── package.json               # Workspace configuration
├── pnpm-workspace.yaml
└── README.md
```

---

# ⚙️ Technology Stack

## Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Hook Form
- Framer Motion
- Radix UI

---

## Backend

- Node.js
- TypeScript

---

## Package Manager

- PNPM

---

# 📂 Folder Structure

## Root

Contains the workspace configuration and shared dependencies.

```
package.json
pnpm-workspace.yaml
```

---

## Frontend

```
artifacts/
    astrology-website/
```

Contains

- Pages
- Components
- Hooks
- UI
- Forms
- Routing
- Tailwind CSS

Runs on

```
http://localhost:5173
```

---

## Backend

```
artifacts/
    api-server/
```

Responsible for

- REST APIs
- Business Logic
- Database Communication
- Authentication

Runs on

```
http://localhost:3000
```

---

## Attached Assets

```
attached_assets/
```

Contains

- Images
- Icons
- Logos
- Static Files

---

# 🚀 Installation

## Prerequisites

Install

- Node.js 22 LTS
- PNPM

Verify installation

```bash
node -v
pnpm -v
```

---

# 📦 Install Dependencies

From project root

```bash
pnpm install
```

---

# ▶️ Running the Project

## Start Backend

Open Terminal 1

```bash
cd artifacts/api-server
```

Windows PowerShell

```powershell
$env:PORT=3000
pnpm start
```

Backend runs on

```
http://localhost:3000
```

---

## Start Frontend

Open Terminal 2

```bash
cd artifacts/astrology-website
```

If `vite.config.ts` already has default values:

```bash
pnpm dev
```

Otherwise

```powershell
$env:PORT=5173
$env:BASE_PATH="/"
pnpm dev
```

Frontend runs on

```
http://localhost:5173
```

---

# 🌐 Application Flow

```
User

   │

   ▼

React Frontend

   │ HTTP Request

   ▼

Backend API

   │

   ▼

Business Logic

   │

   ▼

Database

   │

   ▼

JSON Response

   │

   ▼

Frontend Updates UI
```

---

# 🛠 Development

Frontend automatically reloads after every file save.

Backend must remain running in a separate terminal.

---

# 📁 Important Files

## Root

```
package.json
pnpm-workspace.yaml
```

---

## Frontend

```
vite.config.ts
package.json
src/
```

---

## Backend

```
package.json
src/
```

---

# 📌 Useful Commands

Install dependencies

```bash
pnpm install
```

Run frontend

```bash
cd artifacts/astrology-website
pnpm dev
```

Run backend

```bash
cd artifacts/api-server
pnpm start
```

Build frontend

```bash
pnpm build
```

---

# 🧩 Troubleshooting

## PORT environment variable required

Set

```powershell
$env:PORT=5173
```

or use the default value in `vite.config.ts`.

---

## Backend not starting

Set

```powershell
$env:PORT=3000
```

before running

```bash
pnpm start
```

---

## Missing dependencies

Run

```bash
pnpm install
```

---

# 📄 License

This project is intended for educational and development purposes.

---

# 👨‍💻 Author

Project Name: **Celestial Compass**

Developed using **Replit** and configured for local development in **Visual Studio Code**.

Maintained by **Shivam Pandey**.