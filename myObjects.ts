const user = {
    name: "Bazeel",
    email: "bazeelbinwaris@gmail.com",
    isActive: true
}

// In TypeScript, the UseCase of an Object is through functions. Means when we 
// pass them to function
function createUser({name: string, isPaid: boolean}) {} 

createUser({name: "Bazeel", isPaid: false});

// In Case of a function returning an Object? It means that all the objects
// returning by this function would be in the format DEFINED BY THIS
function createCourse():{name: string, price: number} {
    return {name: "Angular", price: 300};
}

// ODD Behavior in TypeScript Regarding Objects
// When we assign the Overloaded object to a varible & pass that object to
// the function then it would accept that object.
function createUser2({name: string, isPaid: boolean}) {} 

let newUser = {name: "Bazeel", isPaid: false, email: "ahmadbinwaris@gmail.com"};
createUser2(newUser);

/* Type Aliases */
type User = {
    name: string,
    email: string,
    isPaid: boolean
}

function createUser3(member: User): User {
    return member;
}
createUser3({ name: "", email: "", isPaid:false });

export {};