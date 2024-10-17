# InnerBhakti_assignment Backend

## Overview

The Inner Bhakti backend is built using Node.js and Express, providing RESTful APIs for managing meditation programs and tracks. The application interacts with a MongoDB database to store and retrieve data.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance (local or cloud) set up and running.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/soumiguria/innerBhakti_backend.git
   cd innerBhakti_backend

## Installation

Install dependencies:
```bash
npm install
```

## Environment Variables
Create a `.env` file in the root directory and add your MongoDB connection string:

```plaintext
MONGODB_URI=<your_mongodb_uri>
PORT=<your_desired_port>  # Optional, defaults to 5000
```

## Running the Application
To start the server, use the following command:
```bash
npm start
```

# API Endpoints

## 1. Fetch Programs
- **Endpoint:** `GET /api/programs`
- **Description:** Fetch a list of meditation programs.

## 2. Fetch Program Details
- **Endpoint:** `GET /api/programs/:id`
- **Description:** Fetch details of a specific program, including audio tracks.

## 3. Create New Program
- **Endpoint:** `POST /api/programs`
- **Description:** (For backend use) Create a new program with audio tracks.
- **Request Body:**
```json
{
    "name": "Basic Meditation",
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9gQ9Nf2jXSOlmPiql7K405xxfzHqR2OQmVQ&s",
    "tracks": [
      {
        "title": "Track 1",
        "audioUrl": "https://drive.google.com/uc?export=download&id=1tfYfJgXfei8TqI22Tr_gImDaUSEdC0hB"
      },
      {
        "title": "Track 2",
        "audioUrl": "https://drive.google.com/uc?export=download&id=1tfYfJgXfei8TqI22Tr_gImDaUSEdC0hB"
      }
    ]
  }
```

# Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **CORS**
- **dotenv**

# Deployed API Link
The backend API is deployed and can be accessed at the following URL:

- [Inner Bhakti Backend API](https://innerbhakti-backend.onrender.com)

