const square = function (number) {
  number * number;
};

//  arrow function:

const sqr = (num) => num * num;

console.log(sqr(2));

// arrrow function with higher order methods (filter)

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

const activeJobs = jobs.filter((job) => job.isActive);

console.log(activeJobs);
