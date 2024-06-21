function reverseString(str:string):string{
    return str.split('').reverse().join('');
}

function reverseArray(arr:string[]):string[]{
    return arr.map(reverseString).reverse();
}

const input = ["olleh", "alohc"];
const output = reverseArray(input)
console.log(output.join(' '));