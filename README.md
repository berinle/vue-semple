# Vue Sample Application

A modern Vue.js application with a Node.js backend that can be run both locally and deployed to Cloud Foundry.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Cloud Foundry CLI (for deployment)

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start both frontend and backend development servers:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`
The backend will be available at `http://localhost:3001`

## Building for Production

To build the frontend for production:

```bash
npm run build
```

This will create a `dist` directory with the production-ready files.

## Deploying to Cloud Foundry

1. Make sure you're logged in to Cloud Foundry:
```bash
cf login
```

2. Build the frontend:
```bash
npm run build
```

3. Deploy both frontend and backend to Cloud Foundry:
```bash
cf push
```

The application will be deployed and URLs will be provided in the output for both frontend and backend.

## Project Structure

- `src/` - Frontend source files
  - `App.vue` - Main application component
  - `main.js` - Application entry point
  - `views/` - Vue components for different routes
  - `components/` - Reusable Vue components
- `server/` - Backend source files
  - `index.js` - Express server implementation
- `public/` - Static assets
- `dist/` - Production build output
- `manifest.yml` - Cloud Foundry deployment configuration

## Available Scripts

- `npm run dev` - Start both frontend and backend development servers
- `npm run dev:frontend` - Start frontend development server only
- `npm run dev:backend` - Start backend development server only
- `npm run build` - Build frontend for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm start` - Start production backend server

## Features

- Vue 3 frontend with Vite
- Express.js backend
- Random programming jokes from JokeAPI
- Responsive design
- Cloud Foundry deployment ready 