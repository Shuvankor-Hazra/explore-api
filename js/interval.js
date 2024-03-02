console.log(1);
console.log(2);
console.log(3);
// setTimeout(() => {
//     console.log(4);
// }),
// setTimeout(() => {
//     console.log(4);
// }, 4000);
console.log(5);
console.log(6);
console.log(7);
let sum = 0;
const clockId = setInterval(() => {
  sum++;
  // sum+=1;
  // sum=sum+1;
  if (sum > 6) {
    clearInterval(clockId);
  }
  console.log(clockId, sum);
}, 2000);
