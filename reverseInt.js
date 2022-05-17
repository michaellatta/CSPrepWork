function reverseInt(int) {
  // accumulator variable
  var accumulator = 0;
  //if statement to compare int
  if (int > 1) {
      var accumulator = 0;
      accumulator *= 10;
      accumulator += int % 10;
      int = Math.floor(int / 10);
    return accumulator;
  } else {
    return int;
  } 
}

function reverseIntTests() {
  console.log(reverseInt(1234), ' -> ', 4321);
  console.log(reverseInt(1), ' -> ', 1);
  console.log(reverseInt(87654), ' -> ', 45678);
  console.log(reverseInt(13542), ' -> ', 24531);
}

reverseIntTests() // uncomment to test
