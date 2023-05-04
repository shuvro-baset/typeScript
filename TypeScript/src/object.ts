let user: object;
user = { name: "baset" };
console.log("first object: ", user);

let users: object[];
users = [{ names: "baset", email: "baset@gmail.com" }];
console.log("users: ", users);

let typeDefineObject: { name: string; id: number; marital_status: boolean };
typeDefineObject = { name: "baset", id: 75, marital_status: false };
console.log("typeDefineObject: ", typeDefineObject);

// type inference
const car = {
  type: "Toyota",
};
car.type = "Ford"; // no error
car.type = 2; // Error: Type 'number' is not assignable to type 'string'.

// Optional Properties

const car2: { type: string; mileage: number } = {
  // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
  type: "Toyota",
};
car2.mileage = 2000;

let car3: { type: string; mileage?: number } = {
  // no error
  type: "Toyota",
};
car3.mileage = 2000;
