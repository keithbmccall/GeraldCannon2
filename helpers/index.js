Array.prototype.shuffle = function () {
    let currentIndex = this.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = this[currentIndex];
        this[currentIndex] = this[randomIndex];
        this[randomIndex] = temporaryValue;
    }
    return this;
}


const firstFromList = array => array[0];
const listWithoutFirst = array => array.slice(1);
const breakListInTwo = (array, div) => {
    return {
        listOne: array.slice(0, div),
        listTwo: array.slice(div)
    }
}
const helpers = {
    breakListInTwo,
    firstFromList,
    listWithoutFirst
}
module.exports = helpers;