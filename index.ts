// ***************************[2]**************************

let array = [1, 2, 3];
let array1 = [1, 2, 3];
let res = 0;
let res1 = 0;
let ans = [];
function Compare(a, b) {
  for (let i = 0; i < a.length; i++) {
    for (let j = i; j <= i; j++) {
      if (a[i] > b[j]) {
        res += 1;
      } else if (a[i] < b[j]) {
        res1 += 1;
      }
    }
  }
  ans.push(res,res1)
}

Compare(array, array1);
console.log(ans);

// ***************************[3]**************************

let arry = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
function sum(a) {
  return a.reduce((a, b) => a + b);
}
sum(arry);

// ***************************[4]**************************

let data = [-4, 3, -9, 0, 4, 1];
var c;
var d;
var e;
let g = 0;
let i = 0;
let b = 0;

data.map((arry) => {
  if (arry > 0) {
    b += 1;
  } else if (arry < 0) {
    g = g + 1;
  } else {
    i += 1;
  }
});
let len = data.length;
c = b / len;
d = g / len;
e = i / len;

console.log(c.toFixed(6));
console.log(d.toFixed(6));
console.log(e.toFixed(6));

