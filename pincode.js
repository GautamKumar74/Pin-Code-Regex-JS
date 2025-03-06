let pinPattern = /^[0-9]{3}\s?[0-9]{3}$/;
console.log(pinPattern.test("400088"));  // true
console.log(pinPattern.test("400 088")); // true
console.log(pinPattern.test("A400088")); // false
console.log(pinPattern.test("400088B")); // false
