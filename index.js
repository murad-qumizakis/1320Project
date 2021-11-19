// function addTwo(a, b) {
//     console.log(a + b);
// }

// addTwo(5, 4);
// addTwo(6, 2);
// addTwo(2, 5);

// CUSTOMIZE OPERATOR (below) (HOF: higherorder function)

function calculateTwo(a, b, calculator) {
    console.log(a + b);
};


calculateTwo(5, 4, (a, b) => console.log(a + b));
calculateTwo(2, 5, (a, b) => console.log(a * b));

//HOF higherorder function, recieves as a param another function



// const nums = [ 5, 4, 3, 2, 1 ];

// const multipliedByTwo = [];

// for (const num of nums) {
//     multipliedByTwo.push(num * 2);
// }
// console.log(multipliedByTwo);

// (simplified below)


const nums = [5, 4, 3, 2, 1];

// function calculator(numFromList){
//     return numFromList * 2;
// }
//usually looks like:
nums.map((calculator) => (numFromList) * 2);

//will auto loop thru the list. this will execute 5 times because map is looping thru the list

nums.filter((num) => num % 2 === 0);


const names = ["julia", "mac", "tom", "sam"];

names.filter((n) => n.length <= 3); //bo , tom



// QUIZ :
//HOF higherorder function, recieves as a param another function
//[].map | very common HOF
// you dont use map when you need to filter, u only use it when you want to modify the list
//[].filter() gives access to each number in the list. in the filter call back, u put a boolean value
// you give map a function about what you need changed in the list (the list it is looping through)
//Imperatvie programming, means you have to specify or explain every single detail.
//Declarative programming


