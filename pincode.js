let pinPattern = /^[0-9][0-9]{5}$/;
console.log(pinPattern.test("400088")); // true
console.log(pinPattern.test("A400088")); // false