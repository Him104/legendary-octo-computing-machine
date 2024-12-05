// const promise = new Promise((resolve, reject) => {
//   // Performs an asynchronous operation

//   const success = false;

//   if (success) {
//     resolve("Operation was successFul !!");
//   } else {
//     reject("Something went wrong.");
//   }
// });

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })

//   .finally(() => {
//     console.log("Promise settled.");
//   });

function promiseFunction(taskName, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (taskName) {
        resolve(`${taskName} was successFul after ${delay} ms !!`);
      } else {
        reject("Something went wrong.");
      }
    }, delay);
  });
}
// console.log(promise)
// promise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

const runTask = async () => {
  try {
    const result = await promiseFunction("Example Task", 2000);

    console.log("Async/await result", result);
  } catch (error) {
    console.error("async/await error", error);
  }
};

runTask();
