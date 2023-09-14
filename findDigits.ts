let n = 1012;
const m = (n + "").split("");
let res = 0;
for (let i = 0; i < m.length; i++) {
  // console.log(m[i])
  if (n % m[i] == 0) {
    // console.log(m[i])
    res++;
  }
}
