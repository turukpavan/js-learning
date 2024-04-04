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

const jsonObject=JSON.parse(jsonData);
console.log(jsonObject.role[0]);
console.log(jsonObject.name.split(" ")[1]);
console.log(jsonObject.doj.split("-")[2]);