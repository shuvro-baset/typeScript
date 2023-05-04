// Type Aliases

type CarYear = number;
type CarType = string;
type CarModel = string;
type Car = {
  year: CarYear;
  type: CarType;
  model: CarModel;
};

const carYear: CarYear = 2001;
const carType: CarType = "Toyota";
const carModel: CarModel = "Corolla";
const car4: Car = {
  year: carYear,
  type: carType,
  model: carModel,
};

type User = {
  name: string;
  age: number;
};

const userWithTypeAlias: User = {
  name: "Type Alias",
  age: 100,
};

const userWithInterface: IUser = {
  name: "Interface",
  age: 200,
};

// interface
interface Rectangle {
  height: number;
  width: number;
}

const rectangle: Rectangle = {
  height: 20,
  width: 10,
};

// interface extend
type extendedUser = User & {
  role: string;
};

// extending extendedUser interface and use this in user2 object
const user2: extendedUser = {
  name: "Omanush",
  age: 2000,
  role: "Unknown",
};

interface IUser {
  name: string;
  age: number;
}

// interface extend
interface IExtendedUser extends IUser {
  role: string;
}

type rollNumber = number;

// interface in Object , Function , Array
type addNumbersType = (num1: number, num2: number) => number;

interface IAddNumbers {
  (num1: number, num2: number): number;
}

type rollNumbersType = number[];
interface IRollNumbers {
  [index: number]: string;
}
const rollNumbers: IRollNumbers = ["1", "4", "5"]; //[index]

const addNumbers: addNumbersType = (num1, num2) => num1 + num2;
