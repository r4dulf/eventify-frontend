# 🎫 Eventify Frontend

Eventify Frontend is a web application for browsing events, registering users, and managing personal event participation.

It works together with the Eventify API backend.

---

## ⚙️ Stack

- **React** — UI library

- **Vite** — build tool

- **TypeScript** — type safety

- **React Router** — routing

- **SCSS** — styling

- **Storybook** — UI component documentation

- **react-cookie-consent** — GDPR cookie banner

---

## 🚀 Project Launch

```bash

# 1. Install dependencies

npm  install



# 2. Start development server

npm  run  dev

```

App will be available at:

```

http://localhost:5173

```

---

## 📜 Available Scripts

### Development

```bash

npm  run  dev

```

Starts the development server with hot reload.

---

### Build

```bash

npm  run  build

```

Builds the project for production into the `dist` folder.

---

### Preview build

```bash

npm  run  preview

```

Runs a local server to preview the production build.

---

### Lint

```bash

npm  run  lint

```

Runs ESLint to check code quality and formatting issues.

---

### Storybook (UI components)

Run Storybook:

```bash

npm  run  storybook

```

Build static Storybook:

```bash

npm  run  build-storybook

```

---

## 🔗 Backend Connection

This project works with the [Eventify API backend](https://github.com/r4dulf/eventify-backend).

Make sure backend is running at:

```

http://localhost:3000

```

---

## 📄 Available Pages

- `/` — Events list

- `/events/:id` — Event details

- `/login` — User login

- `/register` — User registration

- `/privacy-policy` — Privacy Policy

- `/terms-of-use` — Terms of Use

---

## 🍪 Cookie Consent (GDPR)

The application includes a cookie consent banner shown on first visit.

Features:

- Accept / Decline cookies

- Stores user preference

- Links to Privacy Policy

---

## 📚 Storybook

Storybook is used for UI component development and documentation.

Run Storybook:

```bash

npm  run  storybook

```

Build static Storybook:

```bash

npm  run  build-storybook

```

---

## 🧩 Components

Documented in Storybook:

### Button

- Variants: primary, secondary, tertiary, danger

- States: loading, disabled

### Input

- States: default, error, success, disabled

- Supports label, hint, and validation messages

---

## 📜 Legal

- Privacy Policy: `/privacy-policy`

- Terms of Use: `/terms-of-use`

---

## 👨‍💻 Author

Bohdan Stetsiuk
