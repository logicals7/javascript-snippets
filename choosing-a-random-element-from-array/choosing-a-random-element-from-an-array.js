var sample = ['a', 1, 'b', 3, 'f', 0, 'g', 'h', 9];

//Gives the length of sample array
arrayLength = sample.length;

//random number calculating
randomNumber = Math.floor(Math.random() * arrayLength);

//choosing a random element from sample arrayLength
randomElement = sample[randomNumber];

//getting the output
console.log(randomElement);
