const list = [20, 30, 20, 21, 93, 13, 65, 60, 19, 73, 30, 46, 46, 57, 13, 19, 13, 65];
  
function removeDuplicates(array) {
let tempArray = [];

array.map(el => !tempArray.includes(el) && tempArray.push(el));

tempArray.reverse();

return tempArray;

}

console.log(removeDuplicates(list));

