function Factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        var result = 1;
        for (var i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}
console.log(Factorial(9));
