
// Voting age should be greater than equal 18
function vote(person,age) {
    if (age>=18) {
        console.log(`Yes. please vote. Age: ${age}, Name: ${person}`);
    } else {
        console.log(`Sorry. please try next year. Age: ${age}, Name: ${person}`);  
    }
    
}

vote("Pavan",24);
vote("Bill",14)