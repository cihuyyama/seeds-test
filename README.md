# Documentation

## Introduction

This documentation provides an overview of the structure, functionality, and setup of the Next.js blog project using Tailwind CSS for styling and Redux Toolkit for state management.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Installation](#installation)
3. [Folder Structure](#folder-structure)
4. [Components](#components)
5. [Redux Store](#redux-store)
6. [Styling with Tailwind CSS](#styling-with-tailwind-css)
7. [Deployment](#deployment)

## 1. Project Overview

The project is a simple blog website created using Next.js, a React framework, for server-side rendering and routing. Tailwind CSS is used for styling to ensure a responsive and visually appealing design. Redux Toolkit is utilized for state management, especially for managing blog post data.

## 2. Get Started

### Run Project
To run the project locally in dev mode, follow these steps:

1. Install dependencies using npm or yarn:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to http://localhost:3000 to view the blog website.

### Run Project with Docker

1. Build App Image

```bash
docker-compose build --no-cache
```

2. Run Container

```bash
docker-compose up -d
```

3. Open your browser and navigate to http://localhost:3000 to view the blog website.

4. (Informational to stop docker compose)

```bash
docker-compose down
```


## 3. Folder Structure

The project follows a standard Next.js folder structure with additional folders for components, Redux store configuration, and styles. Here's a brief overview:

- **app**: Contains Next.js pages, including the homepage and individual blog post pages.
- **components**: Holds React components used throughout the application, such as BlogList, BlogPost, and Navigation.
- **lib**: Includes Redux store configuration and reducers for managing blog post state.

```bash
project-root/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── posts/
│   │   ├──page.tsx
│   │   ├──[slug]
│   │   │    ├──page.tsx
├── components/
│   ├── PostCard.tsx
│   ├── PostFormCreate.tsx
├── lib/
│   ├── features
│   │   ├──slices
│   ├── store
│   ├── hooks
└── package.json
```

## 4. Components

The components folder contains React components used to build the user interface of the blog website. Here are the main components:

- **PostCard**: Displays a single card of posts.
- **PostFormCreate**: Form component to create a post.