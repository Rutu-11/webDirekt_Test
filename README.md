# webDirekt_Test


The This app is a web application consisting of two main pages: the Users Page and the User Detail Page. It allows users to perform various operations on user data.

## Features

- Post functionality: Implemented using the `axios.post` method, allowing users to create and store new user data.
- Delete functionality: Implemented using the axios.delete method, enabling users to remove existing user records.
- Data Storage: Utilizes JSON Server to store data in a JSON file. The server is started on port 3004 using the command `json-server --watch db.json --port`.
- Smooth Data Circulation: Implements Context API for efficient data flow and management across different components.
- User Interface: Utilizes Chakra UI for a visually appealing and user-friendly interface.

## Prerequisites

Before running the THII app, make sure you have the following prerequisites installed:

- Node.js
- npm (Node Package Manager)
- JSON Server

## Getting Started

To run the THII app locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd thii-app`
3. Install dependencies: `npm install`
4. Start the JSON Server: `json-server --watch db.json --port 3004`
5. Start the app: `npm start`
6. Access the app in your browser at: `http://localhost:3000`

## Technologies Used

The THII app is built using the following technologies:

- React.js: A JavaScript library for building user interfaces.
- Context API: A React feature that provides a way to share data across the component tree without passing props manually.
- Chakra UI: A simple and modular UI component library for React.
- Axios: A popular HTTP client for making requests to a server.
- JSON Server: A full fake REST API server implemented with a JSON file.



## Conclusion

The THII app provides a simple and intuitive user interface for managing user data. It utilizes React, Context API, Chakra UI, and JSON Server to create a smooth user experience. Feel free to explore the codebase and customize the app as per your requirements.
