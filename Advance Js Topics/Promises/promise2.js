const promise = new Promise((resolve, reject) => {
    const num = Math.random();
    console.log(num)
    if (num >= 0.5) {
      resolve(num); // Resolve with the generated number
    } else {
      reject("Promise failed");
    }
  });
  
  function handleResolve(value) {
    if (value >= 0.5) {
      console.log("The promise is fulfilled");
    } else {
      console.log("The value is less than 0.5");
    }
  }
  
  function handleReject(reason) {
    console.log(reason);
  }
  
  promise.then(handleResolve, handleReject);
  