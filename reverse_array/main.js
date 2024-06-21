function reverseString(str) {
    return str.split('').reverse().join('');
}
function reverseArray(arr) {
    return arr.map(reverseString).reverse();
}
var input = ["olleh", "alohc"];
var output = reverseArray(input);
console.log(output.join(' '));
