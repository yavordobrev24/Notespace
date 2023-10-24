# Notespace - Your Personal Online Diary 📔

Welcome to Notespace, your secure and intuitive web-based diary application built using Node.js and Handlebars for the view engine. Notespace allows you to register an account, log in, create, update, and delete personal notes, as well as publish or unpublish them for others to see.

## Features

- 💻 **User Authentication:** Register and log in securely to access your personal diary.

- 📝 **Create Notes:** Write down your thoughts, ideas, and experiences.

- 📅 **Update Notes:** Edit and revise your notes at any time.

- 🗑️ **Delete Notes:** Remove notes that you no longer need.

- 👀 **Publish/Unpublish Notes:** Choose whether to share your thoughts with others or keep them private.

- 🎨 **Stylish Interface:** Utilizes Bootstrap for a clean and responsive design.

## Getting Started

Follow these steps to set up Notespace on your local machine:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yavordobrev24/Notespace
   ```

2. Navigate to the project directory:

   ```bash
   cd notespace
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root directory and configure the following environment variables:

   ```env
   PORT=3000
   SESSION_SECRET=your_session_secret
   DB_URI=your_database_uri
   ```

   - `PORT` is the port where the application will run.
   - `SESSION_SECRET` is a secret key for session management.
   - `DB_URI` is the connection URI for your database.

5. Start the application:

   ```bash
   npm start
   ```

6. Open your web browser and access `http://localhost:3000` to use Notespace.

## Usage

### Register

1. Begin by registering a new account on the registration page.

2. Fill in your details, including your username and password.

3. Share your excitement! 😄

### Login

1. After registering, log in using your credentials.

2. Bask in the relief! 🎉

### Create a Note

1. After logging in, create a new note by clicking the "Create New Note" button.

2. Write your thoughts, select a title, and decide whether to publish the note for others to see.

3. Express your creativity 📝.

### Update a Note

1. To edit an existing note, go to the "My Diary" page.

2. Click on the note you wish to update, make your changes, and save.

3. Feel the sense of improvement! 💡

### Delete a Note

1. Delete a note by navigating to the "My Diary" page.

2. Select the note you want to remove and choose the "Delete" option.

3. Embrace the decluttering! 🗑️

### Publish/Unpublish a Note

1. While creating or updating a note, choose whether to publish it by checking the "Publish" checkbox.

2. To unpublish a note, simply uncheck the "Publish" checkbox.

3. Decide to share or keep your thoughts private 🤐.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Copyright

&copy; 2023 Yavor Dobrev yavordobrev24 at github

## Acknowledgments

- Special thanks to the Node.js, Handlebars, and Bootstrap communities for their amazing tools and resources.
- Emotes used in this README are provided by [Emojipedia](https://emojipedia.org/).

Enjoy using Notespace to document your thoughts and emotions in your secure online space! 😊📔
