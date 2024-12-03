function sum(a, b) {
  console.log(a + b);

  console.log("printing within the sum funtion")
}

function calculate(a, b, sumCallbackFunction) {
  sumCallbackFunction(a, b);

  console.log("printing within the calculate funtion")

}

calculate(1, 2, sum);



// callback >> promises >> async await