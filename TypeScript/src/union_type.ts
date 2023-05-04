// union type
let userId: string | number;
userId = "101";
userId = 101;

function displayUserInfo(userId: string | number) {
  console.log(userId);
}

displayUserInfo(101);
displayUserInfo("101");
