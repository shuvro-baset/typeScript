# `typeScript`
* to install typeScript in locally-
    - npx tsc --init
    - npx tsc // it creates a new folder as we given in the tsconfig.json file for the outDir and make every ts file as a js file.
    - npm i -g typescript (globally install)
    - npm i --save-dev typescript (dev dependency locally install)


```
npm init
// npm install -g typescript
npm install --save-dev typescript
// tsc fileName.ts

npx tsc fileName.ts
npx tsc fileName.ts --watch

npx tsc --init

node fileName.js

```


* type script is very strict for type. We can't change the type of the variable later.
* interface just like as type.
* Typescript superset of Js. Adding some extension for more bug fixing syntax. (syntactical sugar)
* npx tsx filename.js (run typescript file)
* type checking features

# multiple type
- type numberAndString = number | string;

# `interface`
- object type define. if any field optional then use ternary (?)

# `enum`
- enum Colors {
    color1 = "#ededed",
    color2 = "#ededef",
    color3 = "#ededeg",
}


# Adding typeScript in ReactJs
- npx create-react-app my-app --template typescript
or 
- npm install --save typescript @types/node @types/react @types/react-dom @types/jest (this one is for existing project)

