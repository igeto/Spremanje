// 1. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double the absolute difference.

function difference(n) {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
}
console.log(difference(32))
console.log(difference(11))

// 2. Write a JavaScript program to compute the absolute difference 
// between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

function diff_num(n) {
    if (n <= 19) {
        return (19 - n);
    }
    else {
        return (n - 19) * 3;
    }
}

console.log(diff_num(12));
console.log(diff_num(19));
console.log(diff_num(22));

// 3. Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.

function test50(x, y) {
    return ((x === 50 || y === 50) || (x + y === 50));
}
console.log(test50(50, 50))
console.log(test50(20, 50))
console.log(test50(20, 20))
console.log(test50(20, 30))