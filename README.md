# Personal Cloud Storage Application

This project is a personal cloud storage application inspired by iCloud. Built using the **t3 stack** (Next.js, TypeScript, TailwindCSS, tRPC), it features passwordless authentication, file uploads, and a note-taking system. It leverages **Supabase** for the database, **KindeAuth** for authentication, and **Uploadthing** for file storage.

![Project Preview]()

## Objective

The goal of this application is to provide a personal cloud storage system where users can manage their files, documents, and notes with passwordless authentication.

## Tech Stack

- **TurboRepo** (Monorepo)
- **Next.js** (TypeScript)
- **TailwindCSS** for responsive UI
- **tRPC** for typesafety API routes
- **Supabase** for the database
- **KindeAuth** for passwordless authentication using passkeys
- **Uploadthing** for file uploads
- **Drizzle ORM** for schema and database management

## Features

### Authentication

- Passwordless sign-in using [KindeAuth](https://authjs.dev/getting-started/providers/passkey) with **passkeys**.
- User information is stored securely in the database using **Supabase**.

### Dashboard

The application features a responsive dashboard, with sections for:
1. **User Profile**: Displays user details.
2. **Photos**: An image gallery with file upload functionality.
3. **Drive**: Document storage with upload and management capabilities.
4. **Notes**: A note-taking system where users can create, edit, and view notes.

### Backend (Next.js, TypeScript, tRPC, Drizzle ORM)

- **tRPC** is used for API routes.
- API endpoints include `/api/users` for fetching user information.
- Drizzle ORM is used for schema design and interacting with the database.

### Frontend (React, Next.js, TailwindCSS)

- Responsive UI using **TailwindCSS**.
- Used ShadcnUI for components.
- Components include:
  - User profile display
  - Image gallery for file uploads
  - Document list with upload functionality
  - Notes interface for creating, editing, and viewing notes

### File Storage

- File uploads are handled by **Uploadthing**.
- Metadata such as file name, size, and upload date is stored in **Supabase**.

### Notes System

- Users can create, edit, and view notes.
- Notes are stored in **Supabase**, associated with the user.
- Notes are displayed with titles and timestamps.

## Project Structure

```bash
my-turborepo/
├── apps/
│   ├── docs/                  # this workspace has not been used
│   └── web/                   # Next.js web app
├── packages/
│   ├── ui/                    # Shared UI components
│   ├── eslint-config/         # ESLint configurations
│   └── typescript-config/     # TypeScript configurations
├── .gitignore                 # Git ignore file
├── package.json               # Root dependencies and scripts
├── pnpm-workspace.yaml        # PNPM workspace configuration
└── README.md                  # Project documentation
```

## Database Schema

- **Users**: Stores user information such as email, name, and passkey details.
- **Files**: Stores file metadata (name, size, upload date) associated with the user.
- **Notes**: Stores user-created notes with titles, content, and timestamps.


### Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/personal-cloud-storage.git
   ```

2. Install dependencies using yarn:

   ```bash
   yarn 
   ```

3. Set up environment variables:
   - SUPABASE_URL
   - SUPABASE_ANON_KEY
   - KINDE_AUTH_KEY
   - UPLOADTHING_API_KEY

4. Run the development server:

   ```bash
   yarn run dev 
   ```

5. Visit the live application at `http://localhost:3000`.

### Deployment

Deploy the application to [Vercel](https://huddle-cloud.vercel.app).

