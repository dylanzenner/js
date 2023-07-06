const sayHello = (greeting, name) => {
  console.log(`${greeting} ${name}`);
};

const sayHello2 = () => console.log("Hi " + "Dylan");

const sayHello3 = (name) => {
  return `Hello ${name}`;
};
const sayHello4 = (name = "Dylan") => console.log(`deafault ${name}`);
const cool = (someString) => {
  alert(someString);
};
const checkInput = (coolFunc, ...unlimited) => {
  let containsEmptyString = false;
  for (const element of unlimited) {
    if (element === "") {
      containsEmptyString = true;
    }
  }
  if (containsEmptyString) {
    coolFunc("Some of your strings are empty dude");
  }
};

sayHello("Hola", "Dylan");
sayHello2();
alert(sayHello3("Dylan"));
sayHello4();
checkInput(cool, "", "d", "a", "d");
