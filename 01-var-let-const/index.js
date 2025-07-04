// varibales declarded by var are function scoped

// varibales declarded by let are block scoped
// varibales declarded by const are block scoped

function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

sayHello();

// it will generate an error coz you can't reassign a value of a constant
// const x = 1;
// x = 2;
