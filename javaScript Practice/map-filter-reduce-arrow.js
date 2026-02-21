const num = [1, 2, 3, 4, 5, 6];

const square = num.map((element) => Math.pow(element, 2));

const even = num.filter((element) => element % 2 === 0);

const sum = num.reduce((ret, element) => ret + element);

console.log(square);
console.log(even);
console.log(sum);