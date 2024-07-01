// Import the 'fs/promises' module for using filesystem operations with promises
import fs from "fs/promises";

// Import the 'fs' module for synchronous filesystem operations
import fsn from "fs";

// Import the 'path' module for handling and transforming file paths
import path from "path";

// Define the base path where the files to be organized are located
const basepath = "D:\\CodeSphere\\GitHub\\Web_dev\\Node.js_File_Organizer_Challenge_93";

// Asynchronous function to organize files based on their extensions
async function organizeFiles() {
    try {
        // Read all files and directories in the base path
        let files = await fs.readdir(basepath);
        // Initialize an empty array to keep a log of the moved files
        let log = [];

        // Iterate over each item in the files array
        for (const item of files) {
            // Get the full path of the current item
            let itemPath = path.join(basepath, item);
            // Check if the item is a directory or a JavaScript file, and skip it if so
            if (fsn.lstatSync(itemPath).isDirectory() || item.endsWith('.js')) {
                continue;
            }

            // Get the file extension of the current item
            let ext = item.split(".").pop();
            // Define the path where the file should be moved based on its extension
            let extPath = path.join(basepath, ext);

            // Check if the directory for the extension exists, and create it if not
            if (!fsn.existsSync(extPath)) {
                await fs.mkdir(extPath);
            }
            // Move the file to the appropriate directory based on its extension
            await fs.rename(itemPath, path.join(extPath, item));

            // Log the move by adding an entry to the log array
            log.push({ file: item, newPath: path.join(extPath, item) });
        }

        // Write the log array to a JSON file in the base path
        await fs.writeFile(path.join(basepath, 'log.json'), JSON.stringify(log, null, 2));

        // Output a success message to the console
        console.log("Files organized and log created successfully.");
    } catch (error) {
        // Output an error message to the console if an error occurs
        console.error("Error organizing files:", error);
    }
}

// Call the organizeFiles function to start the file organization process
organizeFiles();
