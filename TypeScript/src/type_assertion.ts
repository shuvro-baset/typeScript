let anyVar: any;
anyVar = "I am making this variable as type assertion as string type";
(anyVar as string).length;

function kgToGram(param: string | number): string | number | undefined {
  if (typeof param === "string") {
    const value = parseFloat(param) * 1000;
    return `The Converted result is: ${value} gram`;
  }
  if (typeof param === "number") {
    const value = param * 1000;
    return value;
  }
}

// const resultToBeNumber = kgToGram(1000) as number;
// const resultToBeString = kgToGram("1000") as string;

const resultToBeNumber = <number>kgToGram(1000);
const resultToBeString = <string>kgToGram("1000");
console.log(resultToBeNumber, resultToBeString);

type CustomErrorType = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomErrorType).message);
}
