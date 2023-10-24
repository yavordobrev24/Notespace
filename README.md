# Notespace - Your Personal Online Diary

Welcome to Notespace, your go-to platform for keeping track of your thoughts, ideas, and daily experiences. Notespace is a web-based diary application built with Node.js and the Handlebars view engine. With Notespace, you can create, update, and delete notes, as well as choose to publish or unpublish them for other users to see. Share your emotions and memories in a secure and private online space.

## Features

- **User Authentication:** Securely register an account and log in to access your personal diary.

- **Create Notes:** Write and store your thoughts, ideas, and experiences.

- **Update Notes:** Edit and revise your notes whenever you want.

- **Delete Notes:** Remove notes you no longer need.

- **Publish/Unpublish Notes:** Share your thoughts with others or keep them private.

## Getting Started

Follow these instructions to get Notespace up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/yourusername/notespace.git
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

1. Start by registering for a new account on the registration page.

2. Fill in your details, including your username and password.

3. Emote your excitement 😄.

### Login

1. Once you have registered, you can log in using your credentials.

2. Emote your relief 🎉.

### Create a Note

1. After logging in, you can create a new note by clicking the "Create New Note" button.

2. Write your thoughts, choose a title, and optionally select whether to publish the note for others to see.

3. Save your note and emote your creativity 📝.

### Update a Note

1. To edit an existing note, navigate to the "My Diary" page.

2. Click on the note you want to update, make your changes, and save.

3. Emote your sense of improvement 💡.

### Delete a Note

1. To delete a note, navigate to the "My Diary" page.

2. Click on the note you want to delete and choose the "Delete" option.

3. Emote your sense of decluttering 🗑️.

### Publish/Unpublish a Note

1. When creating or updating a note, you can choose to publish it by checking the "Publish" checkbox.

2. To unpublish a note, simply uncheck the "Publish" checkbox.

3. Emote your choice to share or keep your thoughts private 🤐.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Copyright

&copy; 2023 Yavor Dobrev

## Acknowledgments

- Special thanks to the Node.js and Handlebars communities for their amazing tools and resources.
- Emotes used in this README are provided by [Emojipedia](https://emojipedia.org/).

Feel free to explore, use, and customize Notespace as your personal online diary. Enjoy recording your thoughts and emotions in your secure online space! 😊📔
