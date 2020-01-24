# Array Methods in Javascript

## by James Hubert

### A list of important methods for the array data type in Javascript. Many of these methods have been added since ES6 and are therefore relatively new. They are nonetheless very handy for manipulating data in arrays.

## 1. Filter

A. Purpose
This method will filter out all elements of an array that do not return true when passed through the block. This method is non-destructive so you will need to save the output to a variable to reuse it.

B. Example
```
	const scores = [1,10,15,30,50];
	const newArray = scores.filter((score) => {
		return score > 20;
	});
	
	> [30,50]
```
C. Working with Objects
```
	const users = [
		{name: "james", premium: true},
		{name: "nick", premium: false}
	];
	const premiumUsers = scores.filter(user => user.premium);
	
	> [{name: "nick", premium: true}]
```

## 2. Map
A. Purpose
This method passes each array element through the block of its callback function and returns the result. The result array must be stored in a variable to be saved. It always will have the same length as the input array.

B. Destructive and non-destructive
Be careful to create and return a new object for each element in the argument array or you can directly edit elements of the original array, making this method destructive.

C. Example
```
const prices = [10,20,30,40,50];
const salePrices = prices.map(price => price * 0.5);

> [5,10,15,20,25]
```

## 3. Reduce
A. Purpose
This method takes in two values - an accumulator and a current value, which represents the array element being evaluated in a given iteration. The initial value of the accumulator can and should be set after the callback function.

B. Example
```
const classGrades = [40,45,55,60];
const totalOfScoresOverFifty = classGrades.reduce((acc,curr) => {
	if (curr > 50) {
		acc++;
	}
	return acc;
},0);

> 115
```

## 4. Find
A. Purpose
The find() method returns the first value of the input array that returns true in the callback function.

B. Example
```
const homePricesInMillions = [1,2,3,4,5,0.8,3,0.7];
const firstCheapHome = homePricesInMillions.find(price => price < 1);

> 0.8
```

## 5. Reverse
A. Purpose
This simple method reverses the order of elements in an array.

B. Example
```
const someNums = [1,3,5,7,9];
const reversedNums = someNums.reverse();

> [9,7,5,3,1]
```

## 6. Sort
A. Purpose
The sort method sorts the values of an array and returns the sorted array. It is destructive and sorts based on the first character first.

B. Default
By default, the sort method sorts numbers smallest to largest and strings alphabetically. Again, by default it sorts based on the first number or character in an element. This behavior can be unexpected if you are unfamiliar with the method. See the example below.

C. Example of Default Behavior
```
const someMoreNums = [3,10,20,40,50];
const sortedMoreNums = someMoreNums.sort();

> [10,20,3,40,50]
```

D. Compare Functions
The sort method can be used to create a so-called compare function, which explicitly states the way in which values will be ordered. To use sort() to create a compare function, you will need to give it input parameters to represent array elements being compared, and a callback function.

E. Compare Function Example
```
const players = [
	{name: "Luigi", score: 20},
	{name: "Bowser", score: 30},
	{name: "Peach", score: 25},
	{name: "Mario", score: 10},
];
const sortedByScore = players.sort((a,b) => {
	if (a.score > b.score) {
		return -1;
	} else if (a.score < b.score) {
		return 1;
	} else {
		return 0;
	}
});

> [{name: "Bowser", score: 30},
	{name: "Peach", score: 25},
	{name: "Luigi", score: 20},
	{name: "Mario", score: 10}]
```

F. Compare Function Shorthand
The above sort method and callback function can be written on a single line with an arrow function by acknowledging that subtracting values will return either positive or negative numbers, which can be used by the sort() method to compare. The example below returns the same array as the compare function written traditionally above.

G. Shorthand Example
```
const players = [
	{name: "Luigi", score: 20},
	{name: "Bowser", score: 30},
	{name: "Peach", score: 25},
	{name: "Mario", score: 10},
];

const sortedByScore = players.sort((a,b) => b.score - a.score);

> [{name: "Bowser", score: 30},
	{name: "Peach", score: 25},
	{name: "Luigi", score: 20},
	{name: "Mario", score: 10}]
```

## 7. Some
A. Overview
The some method, when applied to an array, returns true if there is any element in the array that returns true when passed through the code block.

B. Example
```
const homePricesInMillions = [1,2,3,4,5,0.8,3,0.7];
const cheapHomeExists = homePricesInMillions.some(price => price < 1);

> true
```

C. Explanation
The above example tests if there are any elements (prices) in the homePricesInMillions array that are less than 1 million. The .some() method is applied to check if any of the elements are less than 1. We store the boolean result in a variable to reference later.

## 8. Every
A. Overview
The every method, when applied to an array, returns true if all elements in the array return true when passed through the code block.

B. Example
```
const homePricesInMillions = [1,2,3,4,5,0.8,3,0.7];
const cheapHomeExists = homePricesInMillions.some(price => price < 1);

> false
```

C. Explanation
The above example tests if all elements (prices) in the homePricesInMillions array are less than 1 million. The .every method is applied to check if all of the elements are less than 1. In this case the answer is false. We store the boolean result in a variable to reference later.

## 9. Find Index
A. Overview
The .findIndex() method returns the index of the first element in the array which returns true when passed to the codeblock.

B. Example
```
const homePricesInMillions = [1,2,3,4,5,0.8,3,0.7];
const firstCheapHomeIndex = homePricesInMillions.findIndex(price => price < 1);

> 5
```

## 10. Slice
A. Overview
The .slice() method, when applied to an array, takes in an array of elements. It can take either one or two arguments. With a single argument, the default functionality is to return an array of all elements at the index of the argument given and after. With two arguments, it starts slicing using the index of the first element in the array and takes as many elements as are specified by the second argument. This method is non-destructive.

B. Two examples
i. With a single argument
```
const animals = ["dog","cat","mouse","rat","parrot"];
animals.slice(2);

> ["mouse","rat","parrot"]

ii. With two arguments
animals.slice(2,2);

> ["mouse","rat"];
```

## 11. Splice
A. Overview
The .splice() method is a destructive array method that takes in an argument representing an actual element in an array. If that element is found, then the second argument deletes however elements are specified (an integer). If there is a third argument, that specifies what the first element will be replaced with.

B. Example
```
const birds = ["crow","pigeon","seagull","falcon","albatross"];
birds.splice("seagull",1,"bluejay");
console.log(birds);

> ["crow","pigeon","bluejay","falcon","albatross"]
```

## 12. Spread
A. Overview
The spread operator deconstructs an array into a list of numbers, so that arrays can be easily combined into a single array with only one level of nestedness.

B. Example
```
const smallNumbers = [1,2,3];
const bigNumbers = [7,8,9];

const newArray = [...smallNumbers, ...bigNumbers];
console.log(newArray);

> [1, 2, 3, 7, 8, 9]
```

## 13. Array Method Stringing
A. Overview
Array methods, if properly used, can be strung together to create a desired result if the input and return values are of the correct data type to be used by the next method.

B. Example
For example, the following example strings together the filter, sort, and find methods to return the first odd element of an array sorted smallest to largest of values over 50:
```
const scores = [30,35,40,60,65,80];
const result = scores.filter(score => (score > 50)).sort((a,b) => b - a).find(score => (score % 2 !== 0));

> 65
```