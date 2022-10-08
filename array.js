const list1 = [20, 30, 20, 21, 93, 13, 65, 60, 19, 73, 30, 46, 46, 57, 13, 19, 13, 65];
const list2 = [1, 1, 1, 1, 1, 1, 2, 3, 2, 3, 3, 2, 1, 0];
const list3 = [1, 1, 1, 1, 1, 1, 1, 1, 1];

function removeDuplicates(array) {
let tempArray = [];

array.map(el => !tempArray.includes(el) && tempArray.push(el));

tempArray.reverse();

return tempArray;

}

console.log(`list 1 output = ${removeDuplicates(list1)}`);
console.log(`list 2 output = ${removeDuplicates(list2)}`);
console.log(`list 3 output = ${removeDuplicates(list3)}`);

