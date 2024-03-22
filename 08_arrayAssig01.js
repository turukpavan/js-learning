const fruit_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];


console.log(`===================STEP 1====================`);
let firstEl= fruit_seasonal.at(0)
let lastEl=fruit_seasonal.at(fruit_seasonal.length-1)
console.log(`First element of  Array: ${firstEl}`);
console.log(`Last element of  Array: ${lastEl}`);

console.log(`===================STEP 2====================`);
fruit_seasonal.unshift("Papaya");
console.log(`Array after adding "Papaya at start : ${fruit_seasonal}"`);

console.log(`===================STEP 3====================`);
fruit_seasonal.splice(4,1);
console.log(`Array after removing "Mango" : ${fruit_seasonal}`);

console.log(`===================STEP 4====================`);
fruit_seasonal.push("Pineapple");
console.log(`Array after adding "Pineapple" at last : ${fruit_seasonal}`);

console.log(`===================STEP 5====================`);
fruit_seasonal.splice(4,0,"Dragon Fruit")
console.log(`Array after adding "Dragon Fruit" before "Water Melon" : ${fruit_seasonal}`);

console.log(`===================STEP 6====================`);
fruit_seasonal.splice(2,1,"Kvi")
console.log(`Array after replacing "Orange" with "Kivi" : ${fruit_seasonal}`);

console.log(`===================STEP 7====================`);
let subFruit_seasonal=fruit_seasonal.slice(1,4);
console.log(`Element starting from index 1 to 4 : ${subFruit_seasonal}`);

console.log(`===================STEP 8====================`);
let lastThree=fruit_seasonal.slice(fruit_seasonal.length-3);
console.log(`Last three element using length property : ${lastThree}`);