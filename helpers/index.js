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

// const randomizedImageList = artImageList.shuffle();

const breakListInTwo = (array, div) => {
    return {
        listOne: array.slice(0, div),
        listTwo: array.slice(div)
    }
}
const helpers = {
    breakListInTwo
}
module.exports = helpers;