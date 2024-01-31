"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sport = "football";
var age = 23;
console.log(age);
console.log(sport);
// Functions in TypeScript
// Any
var hero;
function getHero() {
    return true;
    // return "Revolutionist";
}
function addTwo(num) {
    return num + 2;
    // return "Simple Message!";
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
hero = getHero();
addTwo(5);
getUpper("ahmad bin waris");
signUpUser("Bazeel Bin Waris", 'ahmadbinwaris@gmail.com', true);
loginUser('Yasir Khan', 'yasirnoon@gmail.com');
