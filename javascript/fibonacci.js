function fibonacci(num) {
  let first_two = [0, 1]

  for (let i = (num - 1); i > 0; i--) {
    const sum = first_two[0] + first_two[1]

    first_two = [first_two[1], sum]
  }

  return first_two[1]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
