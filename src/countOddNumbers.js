const countOddNumbers = (input) => {
    let count = 0;
    input.forEach(element => {
        if(element % 2 !== 0) {
            count ++;
        }
    });
    return count;
}

module.exports = countOddNumbers;

