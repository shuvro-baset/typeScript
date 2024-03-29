// const newData = {...myInfo ,crush};

type MandatoryTypes = { name: string; age: number; salary: number };
interface MandatoryInterface {
  name: string;
  age: number;
  salary: number;
}

const addMeInMyCrushMind2 = <T extends MandatoryInterface>(myInfo: T) => {
  const crush = "kate Winslet";
  const newData = { ...myInfo, crush };
  return newData;
};

type MyInFoType = {
  name: string;
  age: number;
  salary: number;
  other1: boolean;
  other2: null;
};
const myInfo2 = {
  name: "Persian",
  age: 100,
  salary: 100000000,
  other1: false,
  other2: null,
};
const result6 = addMeInMyCrushMind(myInfo);
