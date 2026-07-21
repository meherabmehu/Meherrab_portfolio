# Meherab Hossain Talukder — Portfolio

A full-stack personal portfolio: Next.js frontend, a small Node.js backend
(API routes for the contact form + a password-protected messages inbox), and
a real database that stores every message visitors send you.

Dark, modern, gradient-accented design. Fully responsive. Built with:

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** for styling, **Framer Motion** for scroll animations
- A tiny **database layer** (`lib/db.ts`): SQLite locally (Node's built-in
  driver, zero setup), Postgres in production (via the `pg` package)
- No CMS, no admin dashboard for content — **you edit one file** to update
  everything on the site (see below). There *is* a small password-protected
  page to read messages people send through your Contact form.

---

## 1. Updating your content

Everything you see on the site — your name, summary, projects, skills,
achievements, education, certifications, references — comes from **one
file**:

```
content/data.ts
```

Open it, find the section you want to change (they're clearly labeled and
commented), edit the text/links, save. That's it — no other file needs to
change.

- Adding a new project? Copy one of the existing objects in the `projects`
  array, change the fields, keep the commas.
- Don't have a GitHub repo for a project? Set `githubUrl: ""` and the "Code"
  button is automatically hidden for that card.
- Want the "Download Resume" button to work? Drop a PDF named
  `Meherab_Hossain_Resume.pdf` into the `public/` folder (already done — the
  resume you had built earlier is already sitting there).

**Locally:** save the file, the dev server hot-reloads instantly.
**On Vercel:** commit the change and push — Vercel redeploys automatically.

---

## 2. Running it locally

You'll need [Node.js 22.5+](https://nodejs.org) (for the built-in SQLite
driver used in local dev).

```bash
npm install
cp .env.example .env
# open .env and set ADMIN_PASSWORD to something only you know
npm run dev
```

Open http://localhost:3000. The contact form on this local copy writes to a
`dev.db` SQLite file that appears automatically in this folder — nothing
else to configure.

To read messages people "sent" you locally, go to
http://localhost:3000/admin/login and sign in with the `ADMIN_PASSWORD` you
set in `.env`.

---

## 3. Deploying to Vercel

### Step 1 — push this project to GitHub
Create a new GitHub repository and push this folder to it (Vercel deploys
straight from a Git repo).

### Step 2 — get a free Postgres database
SQLite's file storage does **not** persist on Vercel's serverless functions,
so production needs a real hosted database. Two easy, free options:

- **[Neon](https://neon.tech)** — sign up, create a project, copy the
  connection string it gives you (starts with `postgresql://`).
- **Vercel Postgres** — from your Vercel project dashboard → Storage → Create
  Database → Postgres. It sets the `DATABASE_URL` environment variable for
  you automatically.

### Step 3 — import the project on Vercel
1. Go to [vercel.com/new](https://vercel.com/new) and import your GitHub repo.
2. It will auto-detect Next.js — no build settings to change.
3. Under **Environment Variables**, add:
   - `DATABASE_URL` → your Postgres connection string from Step 2
     (skip this if you used Vercel Postgres — it's already set)
   - `ADMIN_PASSWORD` → a password only you know, for the messages inbox
4. Click **Deploy**.

That's it — the app automatically detects the `postgresql://` prefix on
`DATABASE_URL` and switches to the Postgres code path, creating the
`messages` table itself on first run. No migration commands to run.

### Step 4 — check the messages inbox in production
Visit `https://your-site.vercel.app/admin/login` and sign in with the
`ADMIN_PASSWORD` you set. Every contact-form submission on the live site
will show up there, with buttons to mark as read or delete.

---

## 4. Project structure

```
content/data.ts        ← the file you edit to update the site
app/page.tsx            ← the homepage, assembles all sections
app/layout.tsx          ← global HTML shell, fonts, metadata
app/globals.css         ← global styles / design tokens
components/             ← Hero, Projects, Skills, Achievements, Journey,
                          Contact, Nav, Footer — one file per section
app/api/contact/        ← POST endpoint the Contact form submits to
app/admin/login/        ← password screen for the messages inbox
app/admin/messages/     ← the messages inbox itself (password-protected)
lib/db.ts               ← the database layer (SQLite dev / Postgres prod)
lib/adminAuth.ts         ← password check + signed session cookie
public/                 ← static files (put your resume PDF here)
```

## 5. Changing the design

- Colors: `tailwind.config.ts` → `theme.extend.colors` (the whole palette —
  background, accents, borders — is defined there).
- Fonts: self-hosted via `@fontsource-variable/inter` and
  `@fontsource-variable/jetbrains-mono` (no external network calls at
  runtime — swap the imports in `app/layout.tsx` for different
  `@fontsource-variable/*` packages if you want a different typeface).
- Section order: reorder the component tags in `app/page.tsx`.

## 6. Security notes

- The `/admin/messages` password is checked against `ADMIN_PASSWORD` with a
  constant-time comparison, and the session cookie is HMAC-signed — but this
  is a lightweight scheme meant for a single owner reading their own inbox,
  not a multi-user auth system. Keep your password private.
- The contact form has a honeypot field and server-side validation (Zod) to
  cut down on basic spam bots.
