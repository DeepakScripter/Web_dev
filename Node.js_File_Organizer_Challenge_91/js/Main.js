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
