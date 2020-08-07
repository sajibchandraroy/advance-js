const numbers = [3, 4, 5, 6, 7, 8];
// 1st way
// const output =[];
// for(let i =0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element*element;
//     output.push(result);
// }
// 2nd way
// function square (){
//     return element * element;
// }
// 3rd way
// const result = numbers.map(function(element){
//     return element * element;
// })
// 4th way
// const result = numbers.map(x => x * x);
// console.log(result);
// filter
// const bigger = numbers.filter(x => x > 5);
// const smaller = numbers.filter(x => x < 5);
// console.log(smaller);
// console.log(bigger);
const isThere = numbers.find(x => x > 5);
console.log(isThere);