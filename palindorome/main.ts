function palindromeValue(str:string):boolean{
    const value = str.split('').reverse().join('');
    if(value === str){
        console.log(`${str} is palindrome`);
        return true
    }
    else{
        console.log(`${str} is not palindrome`);
        return false
    }
}

console.log(palindromeValue("424"))