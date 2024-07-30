let bike = ["Pulsar", "Dominor", "BMW", "Trihump"];
const driveAll = (drive) => {
  setTimeout(() => {
    drive(bike[0]);
    setTimeout(() => {
      drive(bike[1]);
      setTimeout(() => {
        drive(bike[2]);
      }, 1000);
    }, 1000);
  }, 1000);
};
const drive = (bike) => {
  console.log("Driving", bike);
};
driveAll(drive);
// OP:-
// Driving Pulsar
// Driving Dominor
// Driving BMW
// a javascript callback is a function which is to be executed after another function has finished execution

// in simple word:
// any function that is passed as an argument to another function so that it can be executed in that other function
// is called callback function
// This also result as callback hell
