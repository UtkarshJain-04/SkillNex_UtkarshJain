# SkillNex API

SkillNex is a student networking platform designed to help students connect, collaborate, discover events, and showcase projects. The backend provides secure authentication, profile management, event and project creation, AI-powered event analysis, and networking workflows for building academic and professional connections.

## Deployment

Live application: https://skill-nex-bvp-tau.vercel.app

This deployment hosts the SkillNex web app and connects to the backend API services used by the platform.

## Overview

The platform allows students to:
- sign up and log in securely
- manage personal profiles
- organize and join events
- create and update project portfolios
- send, accept, and reject connection requests
- explore personalized feeds and recommendations
- use AI-based event analysis for smarter networking decisions

## Features

- Student authentication and authorization with JWT
- Profile management for student details and updates
- Event creation, update, deletion, and feed retrieval
- Project creation, update, deletion, and personal feed access
- Connection request workflow with pending, accepted, and rejected states
- Personalized networking feed and accepted connections
- AI-powered event analysis endpoint for recommendations
- MongoDB-backed persistence with Express.js API

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for auth
- CORS enabled for frontend access

## Base URL

- API base: `${VITE_API_URL}/api` when running locally

Note: Protected endpoints require a valid JWT token in the Authorization header:

```http
Authorization: Bearer <token>
```

## Folder Structure

```text
skillnex/
├── Client/                  # Frontend application
├── Controllers/            # Route handlers and business logic
├── Middlewares/            # Auth middleware
├── Models/                 # MongoDB schema definitions
├── Repositories/           # Data access layer
├── Routes/                 # API routes
├── Services/               # Business service logic
├── server.js               # App bootstrap and route mounting
├── package.json            # Project dependencies and scripts
├── .env                    # Environment variables (local only)
└── README.md               # Project documentation
```

## API Workflow

1. User signs up or logs in via `/api/auth`.
2. Server verifies credentials and returns a JWT token.
3. Frontend stores the token and sends it in the `Authorization` header for protected routes.
4. Users can create or update events, projects, and profile information.
5. Connection requests enable peer networking and collaboration opportunities.
6. AI-powered event analysis provides feedback based on user event context.
7. MongoDB stores all user, event, project, and connection records.

## Endpoints

### Authentication

| Method | Endpoint | Description | Auth |
| --- | --- | --- | --- |
| POST | `/api/auth/signup` | Register a new student | No |
| POST | `/api/auth/login` | Log in a student and receive a JWT | No |

### Events

| Method | Endpoint | Description | Auth |
| --- | --- | --- | --- |
| POST | `/api/event/create` | Create a new event | Yes |
| PUT | `/api/event/update/:eventId` | Update an existing event | Yes |
| POST | `/api/event/delete/:eventId` | Delete an event | Yes |
| GET | `/api/event/eventfeed` | Fetch the event feed for the user | Yes |
| GET | `/api/event/myevents` | Fetch the user’s created events | Yes |

### Projects

| Method | Endpoint | Description | Auth |
| --- | --- | --- | --- |
| POST | `/api/project/create` | Create a new project | Yes |
| PUT | `/api/project/update/:projectId` | Update a project | Yes |
| POST | `/api/project/delete/:projectId` | Delete a project | Yes |
| GET | `/api/project/feed` | Fetch project feed | Yes |
| GET | `/api/project/myprojects` | Fetch user’s projects | Yes |

### Connections and Requests

| Method | Endpoint | Description | Auth |
| --- | --- | --- | --- |
| POST | `/api/request/send/:receiverId` | Send a connection request to another student | Yes |
| PUT | `/api/request/accept/:requestId` | Accept a pending connection request | Yes |
| PUT | `/api/request/reject/:requestId` | Reject a pending connection request | Yes |
| GET | `/api/request/feed` | Fetch connection feed | Yes |
| GET | `/api/request/accepted` | Fetch accepted connections | Yes |
| GET | `/api/request/pending` | Fetch pending connection requests | Yes |


### Profile

| Method | Endpoint | Description | Auth |
| --- | --- | --- | --- |
| GET | `/api/profile/info` | Fetch current user profile | Yes |
| PUT | `/api/profile/update` | Update current user profile | Yes |

### AI Event Analysis

| Method | Endpoint | Description | Auth |
| --- | --- | --- | --- |
| POST | `/api/event-ai/analyze` | Analyze events using AI-based logic | Yes |


## Summary

SkillNex brings together authentication, student profiles, project portfolios, networking, and event discovery into one collaborative student-focused platform. The API is designed to support a social and professional networking experience for students, with secure access and scalable database-driven features.
