const fs = require("fs");

/**
 * Convert a JSON localization file to a .po file.
 * 
 * @param {string} jsonFilePath - Path to the input JSON file.
 * @param {string} poFilePath - Path to the output .po file.
 */
function jsonToPo(jsonFilePath, poFilePath) {
    try {
        // Read and parse the JSON file
        const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, "utf-8"));

        // Start writing the .po file content
        let poContent = '';
        poContent += 'msgid ""\n';
        poContent += 'msgstr ""\n';
        poContent += '"Content-Type: text/plain; charset=UTF-8\\n"\n';
        poContent += '"Language: en\\n"\n\n';

        // Process each section of the JSON
        for (const [section, translations] of Object.entries(jsonData)) {
            poContent += `# ${capitalize(section)} Section\n`;
            for (const [key, value] of Object.entries(translations)) {
                poContent += `msgid "${key}"\n`;
                poContent += `msgstr "${value}"\n\n`;
            }
        }

        // Write the .po content to the file
        fs.writeFileSync(poFilePath, poContent, "utf-8");
        console.log(`Successfully converted ${jsonFilePath} to ${poFilePath}.`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
}

/**
 * Capitalize the first letter of a string.
 * 
 * @param {string} str - The string to capitalize.
 * @returns {string} - The capitalized string.
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Example usage
const jsonFilePath = "./src/core/libs/intl/locales/fa-IR/locale.json"; // Replace with your JSON file path
const poFilePath = "./src/core/libs/intl/locales/fa-IR/locale.po";     // Replace with your desired .po file path

jsonToPo(jsonFilePath, poFilePath);
