function palindromeValue(str) {
    var value = str.split('').reverse().join('');
    if (value === str) {
        console.log("".concat(str, " is palindrome"));
        return true;
    }
    else {
        console.log("".concat(str, " is not palindrome"));
        return false;
    }
}
console.log(palindromeValue("424"));
