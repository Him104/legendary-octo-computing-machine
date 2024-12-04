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


const promise = new Promise((resolve, reject) => {

    // simulate async operation

    setTimeout(()=>{
const success = true;

        if (success) {

            resolve("Operation was successFul !!");
            
        }
        else {
            reject("Something went wrong.");
        }
    }, 2000)



})
console.log(promise)
promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})