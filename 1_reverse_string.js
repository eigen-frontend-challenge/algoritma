let x = "NEGIE1";

function reverseStr(str) {
  let firstLetter = str.slice(0, -1).split("");
  let lastLetter = str.slice(-1).toString();
  if (str) {
    firstLetter.reverse().join("");
  }
  console.log(firstLetter.concat(lastLetter));
  return firstLetter.concat(lastLetter);
}

reverseStr(x);