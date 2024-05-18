const jsonData=`{
    "name":"Aleix Melon",
    "id":"E00245",
    "role":["Dev","DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married":false,
    "address":{
        "street":"32,Laham st.",
        "city":"Innsbruck",
        "country":"austria"
    },
    "referred-by":"E0012"
    
}`
console.log(`JSON data after convert in object`);
let jsonObject=JSON.parse(jsonData);
console.table(jsonObject);
console.log(` First element of role => ${jsonObject.role[0]}`);
console.log(`lastName of name =>${jsonObject.name.split(" ")[1]}`);
console.log(` Joining Year =>${jsonObject.doj.split("-")[2]}`);