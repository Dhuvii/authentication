# Group 04 - Web Application for Demonstrating SQL Triggers - Project (ADBMS)

### CS3122 Advanced Database Management Systems (2019/2020)

![Home Screen](https://firebasestorage.googleapis.com/v0/b/host-media-862d8.appspot.com/o/screen_c.jpeg?alt=media&token=f72eb4d7-6d02-481f-ad03-cded0326efe8)

![Register Screen](https://firebasestorage.googleapis.com/v0/b/host-media-862d8.appspot.com/o/screen_c_1.jpeg?alt=media&token=d46d9a57-812e-4c69-bd72-601044a23e78)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This web application demonstrates the use of SQL triggers in a real-world scenario. The application allows users to register with their email, name, and password, and logs them into the system. On the home page, it displays the last logged-in information in a table. For each subsequent login, the application sends an email to the registered email address. A SQL trigger is created to log every change in the last login information to a `logs` table, which is also displayed on the home route. The home route is protected and can only be accessed by authenticated users.

## Features

- User Registration: Allows users to sign up with an email, name, and password.
- User Authentication: Users can log in to the system securely.
- Protected Home Route: Only authenticated users can access the home page.
- Last Login Info: Displays the last logged-in information on the home page.
- Email Notification: Sends an email notification for each subsequent login.
- SQL Triggers: Automatically logs changes in the last login information to a `logs` table.
- Log Display: Shows the log entries on the home route.

## Technologies Used

### Backend

- **Node.js**: A JavaScript runtime for building fast, scalable server-side applications.
- **Express**: A web framework for Node.js, simplifying API and web application development.
- **Prisma**: An ORM (Object-Relational Mapping) tool for database access and management in TypeScript and Node.js.
- **Zod**: A TypeScript-first schema declaration and validation library.
- **TypeScript**: A superset of JavaScript that adds static typing, enhancing code quality and developer productivity.
- **MySQL**: A relational database management system known for reliability and ease of use.
- **Nodemailer**: A module for sending emails from Node.js applications.
- **Handlebars**: A templating engine for generating HTML emails.
- **JSON Web Tokens (JWT)**: A standard for securely transmitting information as a JSON object.
- **bcryptjs**: A library for hashing passwords to enhance security.
- **Google APIs**: APIs provided by Google for various services like email and authentication.

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects.
- **React Hook Form**: A library for managing form state and validation in React applications.
- **Zod**: Used on the frontend for client-side schema declaration and validation.
- **TypeScript**: Ensures type safety and improves the maintainability of JavaScript code.
- **TailwindCSS**: A utility-first CSS framework for rapid UI development.
- **Zustand**: A small, fast state-management library for React.
- **Axios**: A promise-based HTTP client for making API requests.
- **Tanstack React Query**: A library for fetching, caching, and updating server state in React applications.

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- Node.js
- MySQL

### Backend Setup

1. Clone the repository:

```bash
git clone https://github.com/Dhuvii/authentication.git
```

2. Cd into backend

```bash
   npm install
```

3. Set up the database

   - Create a MySQL database called `authentication`.
   - Configure the database connection in the `.env` file.

4. Run the Prisma migrations:

```bash
    npx prisma migrate dev
```

5. Start the backend server:

```bash
    npx run dev
```

### Frontend Setup

1. Cd into frontend

```bash
   npm install
```

2. Start the developement server:

```bash
    npx run dev
```

## Usage

1. Register a new user by providing an email, name, and password.
2. Log in with the registered credentials.
3. Access the protected home route to view the last login information and log entries.
4. For each subsequent login, an email will be sent to the registered email address, and a new log entry will be created in the `logs` table.

## Project Structure

```plaintext
├── backend
│   ├── .DS_Store
│   ├── .env
│   ├── .eslintrc.js
│   ├── .gitignore
│   ├── .prettierrc
│   ├── configs
│   │   ├── nodemailer.config.ts
│   │   └── prisma.config.ts
│   ├── package-lock.json
│   ├── package.json
│   ├── prisma
│   │   ├── migrations
│   │   │   ├── 20240511121424_init
│   │   │   │   └── migration.sql
│   │   │   ├── 20240511121921_last_logged_in_made_optional
│   │   │   │   └── migration.sql
│   │   │   ├── 20240511122405_password_added
│   │   │   │   └── migration.sql
│   │   │   ├── 20240522071848_logs_added
│   │   │   │   └── migration.sql
│   │   │   └── migration_lock.toml
│   │   ├── schema.prisma
│   │   └── trigger.txt
│   ├── src
│   │   ├── email
│   │   │   └── lastLoggedIn.handlebars
│   │   ├── handlers
│   │   │   └── healthcheck.ts
│   │   ├── helpers
│   │   │   └── error.ts
│   │   ├── middlewares
│   │   │   ├── httpLogger.ts
│   │   │   └── protectedRoute.ts
│   │   ├── routes
│   │   │   ├── auth
│   │   │   │   ├── auth.service.ts
│   │   │   │   ├── index.ts
│   │   │   │   └── log.service.ts
│   │   │   └── index.ts
│   │   ├── server.ts
│   │   └── utils
│   │       └── logger.ts
│   └── tsconfig.json
└── frontend
    ├── .env
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public
    │   ├── cover.jpeg
    │   └── vite.svg
    ├── src
    │   ├── api
    │   │   └── auth
    │   │       ├── useGetLogs.ts
    │   │       ├── useLogin.ts
    │   │       └── useRegister.ts
    │   ├── assets
    │   │   └── react.svg
    │   ├── components
    │   │   ├── Avatar.tsx
    │   │   ├── Button.tsx
    │   │   ├── Input.tsx
    │   │   ├── Spinner.tsx
    │   │   ├── Switch.tsx
    │   │   ├── Tab.tsx
    │   │   ├── Table.tsx
    │   │   └── alerts
    │   │       ├── Error.tsx
    │   │       ├── Info.tsx
    │   │       ├── PromiseAlert.tsx
    │   │       ├── Success.tsx
    │   │       └── Warning.tsx
    │   ├── hooks
    │   │   └── useLocalStorage.tsx
    │   ├── index.css
    │   ├── layout
    │   │   └── RootLayout.tsx
    │   ├── main.tsx
    │   ├── page
    │   │   ├── Alert.tsx
    │   │   ├── Home.tsx
    │   │   ├── Inputs.tsx
    │   │   ├── Register.tsx
    │   │   └── Signin.tsx
    │   ├── providers
    │   │   └── QueryProvider.tsx
    │   ├── schema
    │   │   ├── Login.Schema.ts
    │   │   └── Register.Schema.ts
    │   ├── store
    │   │   └── authStore.ts
    │   ├── utilities
    │   │   ├── cn.ts
    │   │   ├── fetcher.ts
    │   │   ├── isValid.ts
    │   │   └── router
    │   │       ├── OnlyPublicRoutes.tsx
    │   │       └── PrivateRoute.tsx
    │   ├── vite-env.d\ copy.ts
    │   └── vite-env.d.ts
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts

```

## Triggers

We have configured these triggers manually in mysql console.

### Triggers when user gets updated

![Update After](https://firebasestorage.googleapis.com/v0/b/host-media-862d8.appspot.com/o/update_c.jpeg?alt=media&token=ec4d2d57-4012-4e76-8d71-4c0e75281a30)

### Triggers when a new user gets inserted

![Insert After](https://firebasestorage.googleapis.com/v0/b/host-media-862d8.appspot.com/o/insert_c.jpeg?alt=media&token=d7dc5519-1aa5-4723-aae5-832b6dfe523f)

## Contributing

This is a group project for the Advanced Database Management Systems course. The group members are as follows:

- **Sajithan Erampamoorthy** - EUSL TC IS 2019 COM 02
- **Piriyavinojan Yogaraja** - EUSL TC IS 2019 COM 04
- **Thuvaragan Parameshwaran** - EUSL TC IS 2019 COM 13
- **Aathil Ihlaas** - EUSL TC IS 2019 COM 45
- **Dilakshan Thiyagaraja** - EUSL TC IS 2019 COM 56
- **Sabesh Wilson** - EUSL TC IS 2019 COM 82
- **Nilupul Tharanga** - EUSL TC IS 2019 COM 78

If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and submit a pull request.

## License

This project is licensed under the MIT License.
