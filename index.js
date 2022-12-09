// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Pig Latin</h1>`;

/**
 * Pig Latin is a way of altering English Words.  The rules are as follows:
 *
 * If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
 *
 * If a word begins with a vowel, just add way at the end.
 *
 * Translate the provided string to Pig Latin.  Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
  // const vowels = 'aeiou'.split('');
  const vowels = /[aeiou]/;
  let strArr = str.split('');
  let newStr = '';

  // console.log(str.match(vowels));
  let regExpVal = str.match(vowels);
  // console.log(str.indexOf(regExpVal));
  if (str.indexOf(regExpVal) == 0) {
    newStr = strArr.join('').concat('way');
  } else {
    // console.log(str.substring(0, str.indexOf(regExpVal)));
    let firstChars = str.substring(0, str.indexOf(regExpVal));
    for (let i = 0; i < firstChars.length; i++) {
      let tempStr = strArr.shift();
      strArr.push(tempStr);
    }
    newStr = strArr.join('').concat('ay');
  }
  return newStr;
}

console.log(translatePigLatin('california'));
console.log(translatePigLatin('paragraphs'));
console.log(translatePigLatin('glove'));
console.log(translatePigLatin('algorithm'));
console.log(translatePigLatin('eight'));
console.log(translatePigLatin('schwartz'));
console.log(translatePigLatin('rhythm'));
