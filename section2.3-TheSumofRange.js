function range(start, end, sub) {
    let arr = [];
    var sub = sub || 1;
    if (start < end) {
        for (let i = start; i <= end; i += sub) {
            arr.push(i);
        }
    }
    else {
        for (let i = start; i >= end; i += sub) {
            arr.push(i);
        }
    }
    return arr;
}

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));