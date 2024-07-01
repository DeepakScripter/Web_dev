# Node.js File Organizer 📂

This project is a Node.js script that organizes files in a specified directory based on their extensions. It creates new directories for each file extension and moves the files into the appropriate directories. A log of the file movements is also generated in a JSON file.

## How It Works 🤔

The script performs the following steps:
1. Reads all files and directories in the specified base path.
2. Skips any directories and JavaScript files.
3. Determines the file extension for each file.
4. Creates a directory for the extension if it doesn't already exist.
5. Moves the file to the appropriate directory.
6. Logs the file movement in a JSON file.

## Prerequisites 📋

- Node.js installed on your machine.

## Usage 🛠️

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run the script using Node.js.

```bash
node organizer.js
