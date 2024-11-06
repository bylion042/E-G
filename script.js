function countVowels(str) {
    // Define a string of vowels for reference
    const vowels = "aeiouAEIOU";
    // Initialize a counter for vowels
    let count = 0;
  
    // Loop through each character in the string
    for (let character of str) {
      // If the character is a vowel, increment the count
      if (vowels.includes(character)) {
        count++;
      }
    }
  
    return count;
  }
  
  // Examples:
  console.log(countVowels("Chidalu Ezeaka"));// Output: 7
  console.log(countVowels("Oga Anox")); // Output: 4
  console.log(countVowels("Oga Uche")); // Output: 4
  