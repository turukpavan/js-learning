//1. string.length :gives length of string
var str=" pavan "
console.log(str.length);//7
 
//2. string.CharAt(index) : gives character 
var str=" Pavan ";
console.log(str.charAt(2));//a

//3.string.concat(str1.concat(str2)) :gives combined string
var str1="Pavan ";
var str2="Turuk";
console.log(str1.concat(str2));//Pavan Turuk
console.log(str1+str2);//Pavan Turuk

//4.string.indexOf(searchValue, startIndex) : take two parameter
// searchValue => word or character to be search
//startIndex=> take index from where we want to search value
var str="Pavan Turuk";
console.log(str.indexOf("a",2));//3

//13.  str.search("word or character") : search the word or character in string
var str="Pavan";
console.log(str.search("Pa")); //0

//5. string.lastIndexOf(part_of_string or character) :gives last index
var str="Pavan Turuk";
console.log(str.lastIndexOf("a"));//3

//6. string.replace(val to be change, value after change): update the targeted string
var str="hii pavan";
console.log(str.replace("pavan","rohan"));//hii rohan

//7. string.toUpperCase(): change to uppercase
var str="hii pavan";
console.log(str.toUpperCase());//HII PAVAN

//8. string.toLowerCase():change to lowercase
var str="HII AKASh";
console.log(str.toLowerCase());//hii akash

//9. str.valueOf()  : show value of string
var str= "Pavan"
console.log(str.valueOf());//Pavan
console.log(typeof(str));//string

//10. str.trim() : removes extra spaces from left and right
var str="    Pavan    ";
console.log(str.trim());//"Pavan"

//11. num.toString(); convert number to string
var num=15;
console.log(num.toString());//15

//12. str.includes("word or character"): check word or character include in string or not
var str= "Pavan";
console.log(str.includes("a"));//true

//14. str.slice(startIndex,endIndex): gives part of string
//slice take (-) negative index
//if first index is greater than second index ex (8,3) then it gives noting=> ""  
var str="Hii I am Pavan"
console.log(str.slice(4,8));//I am

//15 str.substring(startIndex,endIndex):gives part of string
//substring not take negative index and convert it to (0)
//if first index is greater than second index ex (8,3) then it convert to (3,8)
var str="Hii I am Pavan"
console.log(str.substring(4,8));//I am

//16. string.substr(startIndex,length);=> take start index and length of string which we want
// it takes negative index
var str="Hii I am Pavan";
console.log(str.substr(4,6));//I am P 

//17. string.charCodeAt(index)=> take index and gives unicode of character present at that index
var str="hii I am Pavan"
console.log(str.charCodeAt(2));//105

//18. string.match(/word or str/g or i)=> g for group ; gives the word as times as present in string
// i => "i" for case sensitivity 
var str="hii I am Pavan";
console.log(str.match("i")); //['i', index: 1, input: 'hii I am Pavan', groups: undefined]
console.log(str.match(/i/g));//['i', 'i']=> group all the words
console.log(str.match(/i/gi));//['i', 'i', 'I']=> case sensitivity not matter here 

//19. str.split()  => separate string and form an array
var str="Pavan";
console.log(str.split(""));//['P', 'a', 'v', 'a', 'n'] split on the basis of nothing ""
var str="I am Pavan"
console.log(str.split(" "));//['I', 'am', 'Pavan'] split on the basis of space
var str="p,a,v,a,n";
console.log(str.split(","));//['p', 'a', 'v', 'a', 'n'] split on the basis of comma

//20. parseInt(str)=>convert string to number
var str="123";
console.log(parseInt(str));//"123"//convert string to number

var str="123"
var n=new Number(str)
console.log(n);//Number (123)









