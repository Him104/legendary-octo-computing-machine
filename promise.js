const promise = new Promise((resolve, reject) => {
  // Performs an asynchronous operation

  const success = false;

  if (success) {
    resolve("Operation was successFul !!");
  } else {
    reject("Something went wrong.");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  })

  .finally(() => {
    console.log("Promise settled.");
  });
