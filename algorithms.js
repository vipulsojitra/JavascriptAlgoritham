// Simple Array Sum
let total = 0
const test = (arr) => {
    arr.map((item, index) => {
        total += item
    })
}
test([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])
console.log("total", total);

// ****************************************************************
// Compare the Triplets
    let pointFunction = (a, b) => {
        let c = [0, 0]
        a.forEach((element, index) => {
            if (a[index] < b[index]) {
                c[1] = c[1] += 1
            } else if (a[index] > b[index]) {
                c[0] = c[0] += 1
            }
        });
        return c
    }
    pointFunction([5, 6, 7,], [3, 6, 10])

// ****************************************************************
// Diagonal Difference
let array = [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12]
       ];
let leftToRight = 0
let rightToLeft = 0
array.map((item, index) => {
    leftToRight += item[index]
    rightToLeft += item[item.length - 1 - index]
})
console.log("rightToLeft && leftToRight", Math.abs(rightToLeft - leftToRight));

// ****************************************************************
// Plus Minus
let arr = [-4, 3, -9, 0, 4, 1]
let positive = 0
let nagative = 0
let zero = 0
let ans = []
arr.map((item, index) => {
    if (item > 0) {
        positive += 1
    } else if (item < 0) {
        nagative += 1
    } else {
        zero += 1
    }
})
ans.push((positive / arr.length).toFixed(6), (nagative / arr.length).toFixed(6), (zero / arr.length).toFixed(6))
console.log((positive / arr.length).toFixed(6));
console.log((nagative / arr.length).toFixed(6));
console.log((zero / arr.length).toFixed(6));
console.log(ans);

// ****************************************************************
// Staircase
    let n = 4
for (let i = 0; i < n; i++) {
    let print = ''
    for (let j = 1; j <= n; j++) {
        if (j < n - i) {
            print += ' '
        } else {
            print += '#'
        }
    }
    console.log(print)
}

// ****************************************************************

    let n = 4;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < i + 1; j++) {
        document.write("#");
    }
    document.write("</br>");
}

// ****************************************************************
// Mini-Max Sum

let arr = [5, 5, 5, 5, 5]
let max = Math.max(...arr)
let min = Math.min(...arr)
let maxSum = 0
let minSum = 0

arr.map((item, index) => {
    if (min == max) {
        if (arr.length - 1 > index) {
            maxSum += item
            minSum += item
        }
    }
    if (item > min) {
        maxSum += item
    }
    if (item < max) {
        minSum += item
    }
})
console.log(maxSum);
console.log(minSum);

// ****************************************************************
// Mini-Max Sum
function miniMaxSum(arr) {
    let min = 0;
    let max = 0;
    const output = [];
    arr.forEach((item, index) => {
        if (item < arr[min]) {
            min = index;
        } else if (item > arr[max]) {
            max = index;
        }
    });
    console.log(min);
    console.log(max);

    output[0] = arr
        .filter((item, index) => index !== max)
        .reduce((a, b) => a + b);
    output[1] = arr
        .filter((item, index) => index !== min)
        .reduce((a, b) => a + b);
    console.log(output.join(" "))
}
miniMaxSum(arr)

// ****************************************************************
// Birthday Cake Candles
let arr = [3, 2, 1, 3]

let max = Math.max(...arr)
let count = 0
arr.map(item => {
    if (max == item) {
        count += 1
    }
})
console.log(count);

// ****************************************************************
// Time Conversion

let abc = "12:40:22AM";
let ans = abc.search("PM");
let finalAns;
let splitrString = abc.split(":")[0];
if (0 <= ans) {
    if (splitrString == 12) {
        finalAns = abc.replace("PM", " ");
    } else {
        finalAns = abc.replace(splitrString, parseInt(splitrString) + 12);
        finalAns = finalAns.replace("PM", " ");
    }
} else {
    if (splitrString == 12) {
        finalAns = abc.replace(splitrString, "00");
        finalAns = finalAns.replace("AM", " ");
    } else {
        finalAns = abc.replace("AM", " ");
    }
}
console.log(finalAns);

// ****************************************************************
// Mars Exploration

let sosMessage = 'SOSOOSOSOSOSOSSOSOSOSOSOSOS'
let array = sosMessage.match(/.{1,3}/g)
let count = 0
array.map((item, index) => {
    if (item == 'SOS') return
    if (item[0] !== 'S') count += 1
    if (item[1] !== 'O') count += 1
    if (item[2] !== 'S') count += 1
})
console.log(count);

// ****************************************************************

const str = 'All of us except @Emran, @Raju and @Noman were ehere';
console.log(
    str.match(/@\w*/g)
);

// ****************************************************************

let array = [1, 1, 2, 5, 6, 8, 1, 9, 2, 5]
let result = []
array.forEach((el, index) => {
    if (!result.includes(el)) {
        result.push(el)
    }

});
console.log("result", result);

// ****************************************************************
//  Salary Count
    let array = [
        { name: "vipul", salary: 100 },
        { name: "satish", salary: 200 },
        { name: "vipul", salary: 300 },
        { name: "keval", salary: 400 },
        { name: "vipul", salary: 500 },
        { name: "keval", salary: 600 },
        { name: "vipul", salary: 700 },
        { name: "prince", salary: 700 },
        { name: "prince", salary: 100 }
    ];

const result = [];

array.map((item) => {
    console.log(item);
});

array.map((item, index) => {
    if (result.length === 0) {
        result.push(item);
    } else {
        const i = result.findIndex((item2) => item.name === item2.name);
        console.log(i);

        if (i >= 0) {
            result[i].salary += item.salary;
        } else {
            result.push(item);
        }
    }
});

console.log(result);

let result = {}
array.forEach((element, index) => {
    if (result[array[index].name]) {
        result[element.name] += element.salary
    } else {
        result[element.name] = element.salary
    }
});

let result = array.reduce((pre, cur) => {
    console.log(pre);

    if (pre[cur.name]) {
        pre[cur.name] += cur.salary
    } else {
        pre[cur.name] = cur.salary
    }
    return pre
}, {})
console.log("result", result);

// ****************************************************************

let array = [1, 2, 3, 4, 2, 1, 5, 3, 1, 2, 5, 2]
let result = {}
array.forEach((element, index) => {
    if (result[array[index]]) {
        result[element] += 1
    } else {
        result[element] = 1
    }
});

let result = array.reduce((pre, cur) => {
    if (pre[cur]) {
        pre[cur] += 1
    } else {
        pre[cur] = 1
    }
    return pre
}, {})
console.log(result);

// ****************************************************************
// HackerRank in a String!

function hackerrankInString(s) {
    let result = s.split("");
    let right = "hackerrank";
    let count = 0;
    result.map((item) => {
        if (item == right[count]) {
            count += 1;
        }
    });
    if (count == right.length) {
        return 'YES'
    } else {
        return 'NO'
    }

}
hackerrankInString('hereiamstackerrank')
// ****************************************************************

let value = 'hacckerraannnk'
let result = value.match(/[a]/)
console.log(result);

let name
console.log(name);

let obj = {
    name: "vipul",
    objX: {
        names: "shatish"
    }
};
let obj1 = obj
obj1.objX.names = "keval";
console.log(obj1);
console.log(obj);

// ****************************************************************

var a = [1, 8, 9, 2];

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
        if (a[j + 1] < a[j]) {

            [a[j + 1], a[j]] = [a[j], a[j + 1]];
        }
    }
}
console.log(a);

// ****************************************************************
// Intro to Tutorial Challenges
    function introTutorial(v, arr) {
        let ans = arr.findIndex(item => item == v)
        return ans
    }
  introTutorial(3, [1, 5, 6, 3, 4, 8, 12, 5])

// ****************************************************************
// Insertion Sort - Part 1

let a = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
let b = [...a];
let isComplet = true;
for (let i = 1; i <= a.length; i++) {
    if (isComplet) {
        if (a[a.length - i - 1] > a[a.length - 1]) {
            let findIndexValue = a.findIndex((item) => item == a[a.length - i - 1]);
            setTimeout(() => {
                b.splice(findIndexValue + 1, 1, a[a.length - i - 1]);
                let jData = JSON.stringify(b);
                console.log(jData.replace(/,/g, " ").replace("[", "").replace("]", ""));
            }, 1000);
        } else {
            let findIndexValue = a.findIndex((item) => item == a[a.length - i - 1]);
            setTimeout(() => {
                b.splice(findIndexValue + 1, 1, a[a.length - 1]);
                let jData = JSON.stringify(b);
                console.log(jData.replace(/,/g, " ").replace("[", "").replace("]", ""));
            }, 1000);
            isComplet = false;
        }
    }
}

// ****************************************************************
// Apple and Orange
    function countApplesAndOranges(s, t, a, b, apples, oranges) {
        let countOfApple = 0
        let countOfOrange = 0
        apples.map(item => {
            if (s <= a + item && a + item <= t) {
                countOfApple += 1
            }
        })
        oranges.map(item => {
            if (s <= b + item && b + item <= t) {
                countOfOrange += 1
            }
        })
        console.log(countOfApple);
        console.log(countOfOrange);
    }
 countApplesAndOranges(5, 15, 3, 2, [-2, 2, 1], [5, -6])

// ****************************************************************
// Number Line Jumps
    function kangaroo(x1, v1, x2, v2) {
        let count = 1;
        let c1 = x1 + v1;
        let c2 = x2 + v2;
        for (let i = 0; i < count; i++) {
            if ((x2 > x1 && v2 >= v1)) {
                console.log("No");
                return
            }
            if (c1 < c2) {
                if (v1 <= v2) {
                    console.log("No");
                    return
                }
            }
            if (c1 > c2) {
                if (v1 >= v2) {
                    console.log("No");
                    return
                }
            }
            if (c1 == c2) {
                console.log("Yes");
            } else {
                count += 1;
                c1 += v1;
                c2 += v2;
            }

        }
    }
kangaroo(21, 6, 47, 3);

// ****************************************************************

