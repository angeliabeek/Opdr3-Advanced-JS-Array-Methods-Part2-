// A
const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }];

// mogelijkheid 1
const findSpiderMan1 = function (heroes) {
    return heroes.name === "Spiderman";
}
console.log(superheroes.find(findSpiderMan1));

// mogelijkheid 2
const findSpiderMan2 = superheroes.find(({ name }) => name === 'Spiderman')
console.log(findSpiderMan2);


// B
// forEach method
const doubleArrayValues1 = function (array) {
    array.forEach((element, index, array) => { array[index] = element * 2 });
    return array;
};
console.log(doubleArrayValues1([1, 2, 3]));

// map method
const doubleArrayValues2 = function (array) {
    return array.map(x => x * 2);
};
console.log(doubleArrayValues2([1, 2, 3]));
// result should be [2, 4, 6]


// C
const containsNumberBiggerThan10 = function (element) {
    return element > 10;
};

console.log([1, 4, 3, 6, 9, 7, 11].some(containsNumberBiggerThan10));
// result should be true
console.log([1, 2, 1, 2, 1, 2].some(containsNumberBiggerThan10));
// result should be false


// D
const isItalyInTheGreat7 = function (array) {
    return array.includes('Italy');
};

console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));
// result should be true


// E
const tenfold = function (array) {
    array.forEach((element, index, array) => { array[index] = element * 10 });
    return array;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

// F
const isBelow100 = function (array) {
    return array.every((element) => { element < 100 });
};
console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))
// result should be: false

// G
const bigSum = function (array) {
    const initialValue = 0;
    return array.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
};
console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]))
// result should be 1118