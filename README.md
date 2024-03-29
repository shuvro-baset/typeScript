# `TypeScript`

- superset of javascript created by Microsoft
- allows static strict typing

`Typescript installation process`

- to install typeScript in locally-

  1. install nodejs
  2. install nvm from the GitHub repo.
     - NVM = Node Version Manager
     - it’s used for version manager so that we can use multiple node versions in our system.
  3. npm install -g typescript
     - install typescript globally
     - tsc —v command for typescript version checking.
  4. tsc —init This command will make a config.js file for the typescript configuration
  5. npm i - D nodemon for install nodemon
     - after installing it we should add the following line of code in the package.json file
     - under the script objects please add “start”: nodemone index.js
     - npm start doing this command it will give us an output initially. if we changed anything in that file it will not give us updated output like the autorun server. To achieve this we need to do one more step
  6. install ts node dev

     - npm I ts-node-dev This command will make a node_modules
     - ts-node-dev --respawn --transpile-only file_name.ts Add this line into package.json “start” object key
     - now again start the server by following command npm start
     - this time we don't need to restart the server. It will auto restart after every change in the ts file

  7. in the tsconfig.js file we can add the root directory for the ts file and the out directory for the js file.
     - To achieve this go to tsconfig.js then uncomment ‘rootDir’ and set the folder name like src
     - same as do for outDir.
     - when we will create a ts file in the src directory after running the server every ts file will make a similar name to the js file in the outer directory as we have given the name.
     - if you change the directory then you should change the path you added in the package.json files “start” object. ts-node-dev --respawn --transpile-only ./src/file_name.ts

`What is Typescript`

- TypeScript is a syntactic superset of JavaScript that adds **static typing**.

For example, JavaScript provides language primitives like `string` and `number`, but it doesn’t check that you’ve consistently assigned these. TypeScript does.
This means that your existing working JavaScript code is also TypeScript code. The main benefit of TypeScript is that it can highlight unexpected behavior in your code, lowering the chance of bugs.

type + javascript = typeScript

it will give us an error when compiling but javascript will give it in a runtime.

> TypeScript uses compile time type checking. This means it checks if the specified types match before running the code, not while running the code.

`Why should I use TypeScript?`

- JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

In JavaScript, function parameters and variables don't have any information! So developers need to look at the documentation or guess based on the implementation.

TypeScript allows specifying the types of data being passed around within the code and has the ability to report errors when the types don't match.

For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.

`TypeScript Simple Types`

- `boolean` - true or false values
- `number` - whole numbers and floating point values
- `string` - text values like "TypeScript Rocks"

`Type Assignment`

- Explicit - writing out the type
  - let firstName: string = "Dylan";
- Implicit - TypeScript will "guess" the type, based on the assigned value:
  - let firstName = "Dylan";

`TypeScript Special Types`

- `Type-any` - is a type that disables type checking and effectively allows all types to be used.
  - `any` can be a useful way to get past errors since it disables type checking, but TypeScript will not be able to provide type safety, and tools that rely on type data, such as auto-completion, will not work. Remember, it should be avoided at "any" cost...
- `Type: unknown` `unknown` is a similar, but safer alternative to `any`.
  - `unknown` is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it. Casting is when we use the "as" keyword to say a property or variable is of the casted type.

`Union types`

- Unior types are used when a value can be more than a single type.
- Such as when a property would be `string` or `number`.

`Following link is the final documentation of typescript`

> > https://salt-akubra-1de.notion.site/MileStone-1-TypeScript-771ab440966c49b2a9037ccd3bc06ca9

# Adding typeScript in ReactJs

- npx create-react-app my-app --template typescript
  or
- npm install --save typescript @types/node @types/react @types/react-dom @types/jest (this one is for existing project)
