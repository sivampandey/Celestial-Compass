# 🌌 Manas Astrology – Premium Astrology Consultation Website

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38BDF8?logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer--Motion-Latest-black)
![Render](https://img.shields.io/badge/Backend-Render-black?logo=render)
![Supabase](https://img.shields.io/badge/Database-Supabase-3ECF8E?logo=supabase)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)

---

## ✨ Overview

Manas Astrology is a modern, premium astrology consultation platform designed for **Pandit Vikas Chandra Tripathi Ji**.

The website combines traditional Vedic astrology with a modern UI to provide an elegant and engaging user experience.

Visitors can explore astrology services, learn about different consultation methods, understand common life problems, and instantly connect through WhatsApp or book consultations.

---

# 🌐 Live Architecture

- **Frontend:** React + Vite + TypeScript (Hosted on Vercel)
  `https://manasastrology.in`
- **Backend:** Node.js + Express API (Hosted on Render)
- **Database:** Supabase PostgreSQL
- **ORM:** Drizzle ORM
- **Package Manager:** `npm` (npm Workspaces)

---

# 👨‍💼 Client Information

**Pandit Vikas Chandra Tripathi Ji**

📍 Rashulpur Badagaon  
Varanasi, Uttar Pradesh  
India – 221204

📱 WhatsApp: 9918929709  
Instagram: @vikaspandit668

---

# 📦 Installation & Local Development

### Clone Repository

```bash
git clone https://github.com/sivampandey/Manas_Astrology.git
cd Manas_Astrology
```

### Install Dependencies

```bash
npm install
```

### Setup Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

### Run Development Server

```bash
# Start frontend
npm run dev --workspace=@workspace/astrology-website

# Start API server
npm run dev --workspace=@workspace/api-server
```

### Typecheck & Production Build

```bash
npm run typecheck
npm run build
```

---

# 🌍 Deployment Configuration

### 1. Database Setup (Supabase SQL Migration)
1. Open your project on [Supabase Dashboard](https://supabase.com/dashboard/project/twulimuwpfmujhyleays).
2. Go to **SQL Editor** -> **New Query**.
3. Copy the contents of `supabase/sql/001_create_consultations.sql`.
4. Click **Run** to execute the migration.
5. Verify in the **Table Editor** that `public.consultations` is created.

### 2. Backend (Render)
- Deploy `@workspace/api-server` as a Web Service on [Render](https://render.com/).
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start --workspace=@workspace/api-server`
- **Environment Variables:**
  - `NODE_ENV=production`
  - `SUPABASE_URL=https://twulimuwpfmujhyleays.supabase.co`
  - `SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key`
  - `RESEND_API_KEY=your_resend_key`
  - `RESEND_FROM_EMAIL=Manas Astrology <onboarding@resend.dev>`
  - `JWT_SECRET=your_secret`
  - `FRONTEND_URL=https://manasastrology.in`

### 3. Frontend (Vercel)
- Deploy `@workspace/astrology-website` on [Vercel](https://vercel.com/).
- **Root Directory:** `artifacts/astrology-website`
- **Build Command:** `npm run build`
- **Output Directory:** `dist/public`
- **Environment Variables:**
  - `VITE_API_URL=https://YOUR-RENDER-SERVICE.onrender.com/api`

---

# 📄 License

This project is developed for a private client. Unauthorized copying, distribution, or commercial use without permission is prohibited.

Maintained by **Shivam Pandey**.
