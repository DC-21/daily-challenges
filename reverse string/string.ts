function reverseString(str:String):string{
  return str.split('').reverse().join('');
}

console.log(reverseString("alohc"))