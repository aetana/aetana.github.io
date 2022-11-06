/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " :: Found " + found;
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(
  "Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))
);

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), max(b, c));
}

console.log(
  "Expected output of maxOfThree(5,4,44) is 44  " +
    myFunctionTest(44, maxOfThree(5, 4, 44))
);
console.log(
  "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);
console.log(
  "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);

function isVowel(l) {
  let letter = l.toLowerCase();
  switch (letter) {
    case "a":
      return true;
    case "e":
      return true;
    case "i":
      return true;
    case "o":
      return true;
    case "u":
      return true;
    default:
      return false;
  }
}

console.log(
  "Expected output of isVowel(C) is false  " +
    myFunctionTest(false, isVowel("C"))
);
console.log(
  "Expected output of isVowel(E) is true  " + myFunctionTest(true, isVowel("E"))
);
console.log(
  "Expected output of isVowel(e) is true  " + myFunctionTest(true, isVowel("e"))
);

function sum(arr) {
  return (res = arr.reduce((sum, i) => sum + i, 0));
}
function multiply(arr) {
  return (res = arr.reduce((mult, i) => mult * i, 1));
}

console.log(
  'Expected output of sum([1, 2, 3, 4]) is "ratset gaj"  ' +
    myFunctionTest(10, sum([1, 2, 3, 4]))
);
console.log(
  'Expected output of sum([1, 2, 3, 4]) is "ratset gaj"  ' +
    myFunctionTest(24, multiply([1, 2, 3, 4]))
);

function reverse(str) {
  return [...str].reduce((a, b) => b.concat(a));
}

console.log(
  'Expected output of reverse("jag testar") is true  ' +
    myFunctionTest("ratset gaj", reverse("jag testar"))
);

let arrw = ["words", "anotherword", "hi", "two"];

function findLongestWord(words) {
  return words.reduce(
    (max, word) => (max = max < word.length ? word.length : max),
    0
  );
}

console.log(
  'Expected output of findLongestWord(["words", "anotherword", "hi", "two"]) is 11  ' +
    myFunctionTest(11, findLongestWord(arrw))
);

function filterLongWords(words, len) {
  return words.filter((word) => word.length > len);
}

console.log(
  'Expected output of filterLongWords(["words", "anotherword", "hi", "two"]) is ' +
    ' ["words", "anotherword"] ' +
    myFunctionTest(["words", "anotherword"], filterLongWords(arrw, 3))
);

const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
  return elem * 10;
});
document.writeln(b.toString() + "<br/>");
const c = a.filter(function (elem, i, array) {
  return elem === 3;
});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function (prevValue, elem, i, array) {
  return prevValue * elem;
});
document.writeln(d + "<br/>");

