function areAnagrams(str1: string, str2: string): boolean {
    const normalize = (str: string) => str.replace(/[^A-Za-z]/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
  }
  
  // Example usage:
  console.log(areAnagrams("listen", "silent")); // Output: true
  console.log(areAnagrams("hello", "world")); // Output: false
  