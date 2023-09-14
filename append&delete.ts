function appendAndDelete(s, t, k) {
  // Write your code here
  if (t.split("").length < k) return "No";
  s = s.split("");
  t = t.split("");

  for (let i = 0; i < s.length; i++) {
    s = s.pop();
  }
  console.log(s);
}
const s = "hackerhappy";
const t = "hackerrank";
const k = 9;
appendAndDelete(s, t, k);
