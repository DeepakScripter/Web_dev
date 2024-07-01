
## 📚 Challenge Overview

In this exercise, you need to write a Node.js program to organize the contents of a directory. Your task is to create folders based on file extensions and move the files into their respective folders. 

### 🚨 Instructions

1. Open the folder in VS Code.
2. Create a new file named `index.js`.
3. Implement the logic to organize the files.

### 🔍 Problem Statement

You need to write a Node.js program that will:
1. Identify the extensions of all files in a given directory.
2. Create a folder for each unique file extension.
3. Move each file into its corresponding folder based on its extension.

### 💡 Example

Suppose you have the following files in your directory:
- `image1.jpg`
- `image2.png`
- `document1.pdf`
- `document2.pdf`
- `music.mp3`
- `video.mp4`

After running your program, the directory structure should look like this:
```
/jpg
  - image1.jpg
/png
  - image2.png
/pdf
  - document1.pdf
  - document2.pdf
/mp3
  - music.mp3
/mp4
  - video.mp4
```

## 📝 Implementation

### 1. Create a New File
First, create a new file named `index.js`.

### 2. Write the Logic
Here's a basic implementation to get you started:

```javascript
const fs = require('fs');
const path = require('path');

const directoryPath = './'; // Specify the path to the directory

// Read the contents of the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach((file) => {
    // Get the file extension
    const ext = path.extname(file).substring(1);
    if (!ext) return; // Skip directories or files without an extension

    // Create a folder for the extension if it doesn't exist
    const extFolder = path.join(directoryPath, ext);
    if (!fs.existsSync(extFolder)) {
      fs.mkdirSync(extFolder);
    }

    // Move the file to the new folder
    const oldPath = path.join(directoryPath, file);
    const newPath = path.join(extFolder, file);
    fs.rename(oldPath, newPath, (err) => {
      if (err) throw err;
      console.log(`${file} moved to ${ext}/`);
    });
  });
});
```

### 3. Run the Program
Open your terminal, navigate to the directory containing `index.js`, and run:
```
node index.js
```


