const findIndices = (num, arr) => {
// number datatype validation
if (typeof num !== "number") return "not a number";
// array type validation
if (!Array.isArray(arr)) return "not an array";

// // time complexity is O(n^2) because of nested for loop
// for (let i = 0; i < arr.length; i++) {
// if (typeof arr[i] !== "number")
// return `The data type of ${arr[i]} is not number`;
// for (let j = i + 1; j < arr.length; j++) {
// if (typeof arr[j] !== "number")
// return `The data type of ${arr[j]} is not number`;
// const sum = arr[i] + arr[j];
// if (sum === num) return `indices are ${i} and ${j}`;
// }
// }
// return `no values of indices sum up to be ${num}`;

// time complexity is O(n)
let obj = {};
for (let i = 0; i < arr.length; i++) {
if (typeof arr[i] !== "number")
return `the data type of ${arr[i]} is not number`;
let needed = num - arr[i];
if (obj.hasOwnProperty(arr[i].toString()))
return `indices are ${obj[arr[i]]} and ${i}`;
obj[needed] = i;
}
return `no values of indices sum up to be ${num}`;
};

// // test calls
// console.log(findIndices(5, [-55, -5, 10, 20]));
// console.log(findIndices(4, ['2', 2, 2, 3]));
// console.log(findIndices("4", [1, 2, 4, 5]));
// console.log(findIndices([4, 5, 6, 7], 4));
// console.log(findIndices(1, 4));
