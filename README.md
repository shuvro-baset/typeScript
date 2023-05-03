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

# Adding typeScript in ReactJs

- npx create-react-app my-app --template typescript
  or
- npm install --save typescript @types/node @types/react @types/react-dom @types/jest (this one is for existing project)
