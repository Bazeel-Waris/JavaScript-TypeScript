"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Bazeel",
    email: "bazeelbinwaris@gmail.com",
    isActive: true
};
// In TypeScript, the UseCase of an Object is through functions. Means when we 
// pass them to function
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Bazeel", isPaid: false });
// In Case of a function returning an Object? It means that all the objects
// returning by this function would be in the format DEFINED BY THIS
function createCourse() {
    return { name: "Angular", price: 300 };
}
// ODD Behavior in TypeScript Regarding Objects
function createUser2(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Bazeel", isPaid: false, email: "ahmadbinwaris@gmail.com" };
createUser2(newUser);
