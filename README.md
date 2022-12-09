# fcc-intermediate-algorithm-scripting-lesson-06

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-nnl3y3)

## Pig Latin
Pig Latin is a way of altering English Words.  The rules are a follows:
- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add `ay` to it.
- If a word begins with a vowel, just add `way` at the end.

### Problem Explanation
You need to create a program that will translate from English to Pig Latin.  Pig Latin take the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an `ay`.  If a word begins with a vowel you just add `way` to the end.  It might be obvious but you need to remove all the consonants up to the first vowel in case the word does not start with a vowel.

### REFERENCE LINKS
- [Pig Latin](http://en.wikipedia.org/wiki/Pig_Latin)
- [JS String Prototype Match](http://forum.freecodecamp.com/t/javascript-string-prototype-match/15941)

## HINTS:
### Hint 1
You will probably want to use regular expressions.  This will allow you to convert the words easily.

### Hint 2
If the first character is a vowel, then take that whole word and add `way` at the end.  Otherwise, comes the tricky part, take the consonant(s) before the first vowel and move it to the end and add `ay`.  This might be confusing but, it is not just the first consonant but all of them before the first vowel.

### Hint 3
You will need to use everything you know about string manipulation to get the last part right.  However, it can be done with `substr` alone.

