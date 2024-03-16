function sumAll(a, b) {
    const args = [a, b].sort();
    for (argument of args) {
        if (typeof argument != 'number' || argument < 0) {
            return "ERROR";
        }
    }
    const start = args[0];
    const end = args[1];
    const numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }

    return numbers.reduce((a, b) => a + b);
}

// Do not edit below this line
module.exports = sumAll;
