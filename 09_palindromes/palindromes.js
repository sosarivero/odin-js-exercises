const palindromes = function (string) {
    // Converts to lowercase to handle cases.
    // Then uses regex match. Matches all alphanumeric, skips punctuation
    arr = string.toLowerCase().match(/[a-z0-9]/g);
    // Array comparison is weird in JS. Better to compare stringified.
    return arr.toString() === arr.reverse().toString();
};

// Do not edit below this line
module.exports = palindromes;

