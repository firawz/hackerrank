let ranked = [100, 100, 50, 40, 40, 20, 10];
const player = [5, 25, 50, 120];

const res = ranked.concat(player);
console.log(res);
const arr = [];
const test = [...new Set(res)].sort((a, b) => a - b).reverse();
console.log(test);
// console.log(test);
for (let i = 0; i < player.length; i++) {
  //   console.log(player[i]);
  for (let j = 0; j < test.length; j++) {
    if (player[i] == test[j]) {
      //       console.log(k);
    }
  }
}
// console.log(ranked);
// console.log(arr);
// const arr = [...new Set(ranked)];
// for (let i = 0; i < ranked.length; i++) {
//   for (let j = 0; j < player.length; j++) {
//     arr.push(player[j]);
//   }
// }
// console.log(arr);
