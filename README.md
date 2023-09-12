# Todo Full Stack Application

Welcome to the README for the Todo Full Stack Application. This web application allows users to create, read, update, and delete todo items. It includes user authentication with bcrypt password hashing for secure access.

## Introduction

The Todo Full Stack Application is a versatile task management tool built to help users organize their tasks effectively. It combines a powerful backend with user-friendly frontend interactions to provide a seamless todo list experience.

## Features

The Todo Full Stack Application comes with a range of features:

- **User Authentication**: Users can sign up and log in securely with authentication. Passwords are hashed using bcrypt for added security.

- **Create, Read, Update, Delete (CRUD) Operations**: Users can create new todo items, view their existing tasks, update task details, and delete completed tasks.

- **Task Organization**: Todos are organized with categories, making it easier to manage different types of tasks.

- **Responsive Design**: The web application is designed to be responsive, ensuring that it functions well on various devices.

## Getting Started

To explore and use the Todo Full Stack Application, visit the live deployment at [Todo Full Stack Application](https://vizzusi-todo.vercel.app/).

If you want to run the application locally or deploy it yourself, follow these steps:

1. **Clone the Repository**: Begin by cloning this GitHub repository to your local machine.

   ```shell
   git clone https://github.com/yourusername/todo-full-stack.git

   ## Setup and Usage

### Backend Setup

1. **Navigate to the Server Directory**: Open your terminal and navigate to the server directory of the project.

    ```shell
    cd server
    ```

2. **Install Dependencies**: Install the required server-side dependencies.

    ```shell
    npm install
    ```

3. **Configure MongoDB**: Set up a `.env` file in the server directory with your MongoDB database connection string and a secret key for JWT (JSON Web Tokens) authentication.

### Frontend Setup

1. **Navigate to the Client Directory**: In your terminal, go to the client directory of the project.

    ```shell
    cd ../client
    ```

2. **Install Dependencies**: Install the required client-side dependencies.

    ```shell
    npm install
    ```

3. **Update API URL**: Modify the `config.js` file located in the client directory with the appropriate API URL for the backend server.

### Running the Application

To run the application:

1. **Backend Server**: In the server directory, start the backend server.

    ```shell
    npm start
    ```

2. **Frontend Development Server**: In the client directory, run the frontend development server.

    ```shell
    npm start
    ```

3. Access the application in your web browser at [http://localhost:3000](http://localhost:3000).

## Contributing

Contributions to the Todo Full Stack Application are welcome. If you'd like to contribute to its development or suggest improvements, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix.

3. Make your changes and thoroughly test them.

4. Commit your changes with descriptive commit messages.

5. Push your branch to your forked repository.

6. Create a pull request, explaining the purpose and changes made.

## License

The Todo Full Stack Application is a personal project and is not open to open source under it's license.

Thank you for using the Todo Full Stack Application! We hope it helps you stay organized and productive. If you have any questions or feedback, please don't hesitate to [contact us](mailto:contact@todofullstackapp.com).
