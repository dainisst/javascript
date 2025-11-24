// setTimeout(() => {
//   console.log('hello after 5 seconds');
// }, 5000);


// let interval = setInterval(() => {
//   console.log('one second passed');
// }, 1000);

// setTimeout(() => {
//   clearInterval(interval);
//   console.log('stopped');
// }, 5000);

// const array = ['viens', 'divi', 'trīs', 'četri', 'pieci'];

// array.forEach((item, i) => {
//   setTimeout(() => {
//     console.log(item);
//   }, 2000 * i);
// });

const arr = [1, -3, 5];

console.log(arr.filter((value, index) => {
  return value > 0;
}));

console.log(arr.map(value =>
  value * 2));