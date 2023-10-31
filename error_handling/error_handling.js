// seeing error on console
try {
    someRiskyOperation();
}
  catch (error) {
    console.error("Something’s gone terribly wrong", error);
  }


 // ===========================================================


// throwing error
 try {
    someRiskyOperation();
 }
  catch (error) {
     throw new Error("Someone else deal with this.", error);
  }


  someAsyncOperation()
  .then(result => {
    // All is well
  })
  .catch(error => {
    // Something’s wrong
    console.error("Problems:", error);
  });