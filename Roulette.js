/*
Roulette

Define a function roulette that accepts a number (let us call it n), and returns a function.
The returned function will take no arguments, and will return the string ‘spin’ the first n - 1 number of times it is invoked.
On the very next invocation (the nth invocation), the returned function will return the string ‘win’.
On every invocation after that, the returned function returns the string ‘pick a number to play again’.
*/

function roulette(n) {
  //function to return string 'spin'
  //could use if statements for the different outcomes?
  //iterate through each time to reach n value
  let feedback = function result() {
    for (let i = n; i > 0; --i) {
      //if statement to compare i against n
      if (i > 0) {
        //return the string 'spin'
        return "spin";
      } elseif (i == 0) ;{
        return "win";
      } else {
        return "pick a number to play again";
      }
    }
  }
  return feedback;
}
// UNCOMMENT THESE LINES TO CHECK YOUR WORK
// const play = roulette(3);
// console.log(play()); // should log: ‘spin’
// console.log(play()); // should log: ‘spin’
// console.log(play()); // should log: ‘win’
// console.log(play()); // should log: ‘pick a number to play again’
// console.log(play()); // should log: ‘pick a number to play again’
