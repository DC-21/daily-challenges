function countVowels(str:string):number{
    const vowels = /[aeiou]/gi;
    const matches = str.match(vowels);
    return matches ? matches.length:0;
}

console.log(countVowels("hello")); 