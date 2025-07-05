const person = {
  name: 'Dave',
  walk() {
    console.log(this);
  },
};

person.walk();

const walk = person.walk;
walk();
