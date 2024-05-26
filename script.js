function sortByValueAndIndex(array) {
    // Compute the product of each element and its 1-based index and store it in an array of objects
    let indexedArray = array.map((value, index) => {
      return { value: value, product: value * (index + 1) };
    });
  
    // Sort the array of objects by the product
    indexedArray.sort((a, b) => a.product - b.product);
  
    // Extract and return the sorted values
    return indexedArray.map(item => item.value);
  }