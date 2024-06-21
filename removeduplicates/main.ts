function removeDuplicates(str: string): string {
    const seen = new Set();
    let result = '';
  
    for (const char of str) {
      if (!seen.has(char)) {
        seen.add(char);
        result += char;
      }
    }
  
    return result;
  }
  
  // Example usage:
  console.log(removeDuplicates("hello")); // Output: "helo"
  console.log(removeDuplicates("programming")); // Output: "progamin"
  