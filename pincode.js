let pinPattern = /^[0-9]{6}$/;
console.log(pinPattern.test("400088")); // true
console.log(pinPattern.test("A400088")); // false
console.log(pinPattern.test("400088B")); // false