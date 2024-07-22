function makeArray(firstArray, secondArray, maxLength) {
  const oneArra = firstArray;
  const combiningArrays = oneArra.concat(secondArray);
  const cilcSimvolArray = combiningArrays.length;
  const b = combiningArrays.slice(0, maxLength);
  if (cilcSimvolArray > maxLength) {
    return b;
  } else {
    return combiningArrays;
  }
}

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4));
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0));
