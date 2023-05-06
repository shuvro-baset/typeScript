let arrayString: string[]; // arrayString: Array<string>
let arrayNumber: number[];
let arrayBoolean: boolean[];
let arrayObjects: object[] = [
  { name: "Fooled by randomness", author: "Nassim Taleb" },
  { name: "Sapiens", author: "Yuval Noah Harari" },
]; // can only contain objects

arrayString = ["a", "b", "c", "d", "e"];
console.log(arrayString);
console.log(arrayString.push("g"), arrayString);

let arrayMultipleType: (string | number | boolean)[] = [];
arrayMultipleType = ["string", 4, true];

// tuple
// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, "Coding God was here"];
// define our tuple
let ourTuple2: [number, boolean, string];

// initialized incorrectly which throws an error
ourTuple2 = [false, "Coding God was mistaken", 5];
