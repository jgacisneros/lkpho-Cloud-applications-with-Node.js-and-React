 // Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "America/Vancouver"
    let vicTime = new Date();
    return vicTime; // Return the formatted date and time
};
