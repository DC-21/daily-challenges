function countVowels(str) {
    var vowels = /[aeiou]/gi;
    var matches = str.match(vowels);
    return matches ? matches.length : 0;
}
console.log(countVowels("hello"));
