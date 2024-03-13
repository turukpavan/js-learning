var str="   hey you are doing good ,keep it up   ";
function stringHandsOn() {
    console.log(`=============STEP 1=================`);
    console.log(`String as it is :${str}`);
    console.log(`=============STEP 2=================`);
    var lengthWithSpaces=str.length;
    console.log(`length of String :${lengthWithSpaces}`);
    console.log(`=============STEP 3=================`);
    var strAfterSpaces=str.trim();
    var lengthAfterSpaces=strAfterSpaces.length;
    console.log(`String After removing leading and trailing spaces : ${strAfterSpaces}`);
    console.log(`Length of string After Trim : ${lengthAfterSpaces}`);
    console.log(`=============STEP 4=================`)
    var extraSpaces=lengthWithSpaces-lengthAfterSpaces;
    console.log(`Total number of Extra Spaces : ${extraSpaces}`);
    console.log(`=============STEP 5=================`);
    var firstChar=strAfterSpaces.charAt(0);
    var lastChar=strAfterSpaces.charAt(lengthAfterSpaces-1)
    console.log(`First Character of String :${firstChar}  Last Character of string :${lastChar}`);
    console.log(`=============STEP 6=================`);
    var stringAfterSplit=strAfterSpaces.split(" ");
    var lengthAfterSplit=stringAfterSplit.length;
    console.log(`Total number of word in string : ${lengthAfterSplit}`);
    console.log(`=============STEP 7=================`);
    console.log(`Index of word "good" :${strAfterSpaces.indexOf("good")}`);
    console.log(`=============STEP 8=================`);
    console.log(`substring starting from index 22 :${strAfterSpaces.substring(22)}`);
    console.log(`=============STEP 9=================`);
    console.log(`is string ends with word "up" :${strAfterSpaces.endsWith("up")}`);
    console.log(`=============STEP 10=================`);
    console.log(`is string ends with word "up" :${strAfterSpaces.startsWith("Hey")}`);


}
stringHandsOn();