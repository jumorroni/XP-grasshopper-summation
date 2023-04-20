function sumNumber(number) {
    var count = 0;

    // if (number === 1) {
    //     return true;
    // }
    // return false;

    for (var i = 0; i <= number; i++) {
        count = i++;
    }

    return count;

};

module.exports = {
    sumNumber,
};