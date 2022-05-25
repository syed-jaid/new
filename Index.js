// Task no. 1 * factorial function that will count the factorial number 

function factorialNum(Number) {

    if (Number === 0) {
        return 1;
    }
    return Number * factorialNum(Number - 1);

}

const num = factorialNum(9);

console.log('The factorial number of 9 is :', num)




// Task no. 3 * 
// const Duplicate = (Numbers) => {
//     Numbers.sort();
//     let ans = [];

//     for (let i = 0; i < Numbers.length; i++) {
//         if (Numbers[i] === Numbers[i + 1]) {
//             if (ans[ans.length - 1] !== Numbers[i]) {
//     ans.push({Numbers[i]:''})
//             }
//         }
//     }
//     return ans;
// }

// const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]

// console.log(Duplicate(arr))


function duplicateItem(arr) {
    let itemCountObj = {};
    let maxItem = []
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        itemCountObj[item] = itemCountObj[item] + 1 || 1;
        if (itemCountObj[item] >= 2) {
            maxItem.push(item);
        }
    }
    return itemCountObj;
}

const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]

console.log(duplicateItem(arr))



function sort_unique(arr) {

    if (arr.length === 0) return arr;

    arr = arr.sort(function (a, b) { return a * 1 - b * 1; });

    var ret = [arr[0]];

    for (var i = 1; i < arr.length; i++) {

        if (arr[i - 1] !== arr[i]) {
            ret.push(arr[i]);
        }
    }
    return ret;
}
console.log(sort_unique([1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8]));