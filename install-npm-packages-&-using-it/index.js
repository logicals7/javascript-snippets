//initialised the npm using 'npm init' to create a package.json file
//installed superheroes module in terminal by checking available package at npmjs website using 'npm install superheroes' & using it
var superheroes = require("superheroes");
//Generates a random name of superheroes
var mySuperHeroName = superheroes.random();

console.log(mySuperHeroName);
