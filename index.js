const urlRegex = require("url-regex");

/**
 * @param {string} text of type string 
 * @returns {array<string>} array of urls present in text
 */
function extractUrlsFromString(text) {
  let urls = [];
  if (typeof text !== "string") {
    throw new Error("Input must be a string.");
  }

  // if input text is empty string, return empty array
  if (!text.length) return urls;
  const regex = urlRegex();
  urls = text.match(regex) || [];
  return urls;
}

module.exports = extractUrlsFromString;
