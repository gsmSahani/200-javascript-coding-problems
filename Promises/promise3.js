let bike = ["Pulsar", "Dominor", "BMW", "Trihump"];
const driveOne = (bike, drive) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      drive(bike);
      resolve(true);
    }, 1000);
  });
};
const driveAll = (drive) => {
  driveOne(bike[0], drive)
    .then(() => driveOne(drive[1], drive))
    .then(() => driveOne(drive[2], drive))
    .catch((err) => console.log("error occured", err));
};
const drive = (bike) => {
  console.log("Driving", bike);
};
driveAll(drive);
