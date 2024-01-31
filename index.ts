let sport = "football";
let age = 23;

console.log(age);
console.log(sport);

// Functions in TypeScript

// Any
let hero: boolean;

function getHero() {
    return true;
    // return "Revolutionist";
}

function addTwo(num: number): number {
    return num + 2;
    // return "Simple Message!";
}

function getUpper(val: string) {
    return val.toUpperCase();
} 

function signUpUser(name:string, email:string, isPaid:boolean) {}

let loginUser = (name:string, email:string, isPaid:boolean = false) => {}

hero = getHero();

addTwo(5);
getUpper("ahmad bin waris");

signUpUser("Bazeel Bin Waris", 'ahmadbinwaris@gmail.com', true);
loginUser('Yasir Khan', 'yasirnoon@gmail.com');

// More About Functions in Detail

// This function can return boolean | string value, We would see it in later part
function getValue(myVal: number) {
    if(myVal < 5) {
        return true;
    }
    return "200 OK!";
}
getValue(4);

// If we don't return a value, it would give the following Error Message!
// A function whose declared type is neither 'undefined', 'void', nor 'any' must return a value.
const getHello = (s: string): string => {
    return "";
}

// In the following case, TypeScript is smart Enough that it can automatically 
// detect the passed & returned Type of Function
// const heros = ['thor', 'spiderman', 'ironman'];
const heros = [1, 2, 3];

heros.map((hero) => {
    return `Hero is ${hero}`;
});

// If the function return type is void is defined, then we can't return
// anything from it.
function consoleError(errmsg: string): void {
    console.log(errmsg);
}

// If we want to handle errors, then we should have the return type of never
// It is similar to :void type but it's not.
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}
export {}