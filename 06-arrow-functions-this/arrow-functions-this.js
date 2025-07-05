const person = {
  talk() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  },
};
person.talk();
