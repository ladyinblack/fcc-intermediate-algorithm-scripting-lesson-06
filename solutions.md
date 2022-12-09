## ALTERNATE SOLUTIONS

### Solution 1
```js
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str
        .replace(consonantRegex, "")
        .concat(myConsonants)
        .concat("ay")
    : str.concat("way");
}

translatePigLatin("consonant");
```

### Code Explanation
- Start at beginning and get longest match of everything not a vowel (consonants).
- If regex pattern found, it saves the match; else, it returns null.
- If regex pattern found (starts with consonants), it deletes match, adds the match to the end, and adds `ay` to the end.
- If regex pattern not found (starts with vowels), it just adds `way` to the ending.

### REFERENCE LINKS
- [Regex Match](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/regular-expressions/match-numbers-and-letters-of-the-alphabet/)
- [Ternary Operator](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/use-the-conditional-ternary-operator/)
- [`concat()`](https://guide.freecodecamp.org/javascript/standard-objects/string/string-prototype-concat/)

### Solution 2
```js
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = "";
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + "way";
  } else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + "ay";
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
  }

  return pigLatin;
}

// test here
translatePigLatin("consonant");
```

### Code Explanation
- Make an empty string to hold your Pig Latin word.
- Assign your appropriate regular expression to a variable.
- If the first character is a vowel, just add **way** to end of string and return it.
- If the first character is not a vowel:
    - Find number of consonants before first vowel with help of `indexOf()`, `match()` and regex.
    - Start Pig Latin string with first vowel till the end.
    - Add letters before first vowel to end of string.
    - `substr()` is used for string manipulation here.
    - Add **ay** to end of string and return it.

### REFERENCE LINKS 
- [JS Regex Resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [JS String Prototype IndexOf](http://forum.freecodecamp.com/t/javascript-string-prototype-indexof/15936)
- [JS String Prototype Substr](http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945)

### Solution 3
```js
function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

// test here
translatePigLatin("consonant");
```

### Code Explanation
- First, check to see if the string begins with a vowel.
    - The regex looks at the beginning of the string `^` for one of the specified characters `[aeiou]`.
    - If it does, you only need to return the original string with `way` appended to the end.
- If the string does not start with a vowel, we want to build a string which contains every consonant before the first vowel in the provided string.
    - To do this, look at the beginning of a string `^` for one or more characters `+` NOT specified `[^aeiou]`.
    - If there is a match (and in this case, there always will be), `match()` returns an Array with the matched string as the first element, which is all we want.  Grab it with `[0]`.
- Now, we can start building our Pig Latin string to return.  This can be built in three parts:
    - The first part contains all of the characters in the original string, starting from the first vowel.  We can easily get these characters by creating a substring of the original string, with its starting index being the first vowel.
    - The second part contains the consonant string we just built.  (If you add the second and first parts of this string together, you will get the original string.)
    - The final part contains `ay`.

### REFERENCE LINKS
- [JS Regex Resources](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [`String.prototype.match()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [JS String Prototype Substr](http://forum.freecodecamp.com/t/javascript-string-prototype-substr/15945)

### Solution 4
```js
function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
translatePigLatin("consonant");
```

### Code Explanation
- Use `replace()` on the string, using a regular expression to check if the first letter is a consonant and adding **way** at the end in this case.  If the first letter is a consonant nothing will happen at this point.
- Use `replace()` again to check for consonants at the beginning of the word and to move it or them to the end of the word and add **ay** at the end.

### REFERENCE LINKS
- [Regular Expressions Reference](https://guide.freecodecamp.org/javascript/regular-expressions-reference)
- [Regular Expressions Resources](https://guide.freecodecamp.org/miscellaneous/regular-expressions-resources/)

### Solution 5
```js
function translatePigLatin(str, charPos = 0) {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
    ? str + (charPos === 0 ? 'way' : 'ay')
    : charPos === str.length
      ? str + 'ay'
      : translatePigLatin(str.slice(1) + str[0], charPos + 1);
}
```

