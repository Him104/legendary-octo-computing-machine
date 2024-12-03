const getData = async () => { // allow the use of await inside it
  try {
    const data = await fetchData(); // pauses the execution of getData

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getData();

console.log("This is asynchronous operation");
