// Tuples are only in TypeScript not in JavaScript. These are special kinds of arrays with some restrictions on it.

let student: [number, string, boolean];
student = [23, "Bazeel Bin Waris", false];

type tuple = [string, number];

const std: tuple = ['Hassan', 5];
std.push("sporting");

// ENUM
// It is causing a lot of hactic & It would be lenghty
const AISLE = 0;
const MIDDLE = 1;
const WINDOW = 2;

let seat: number = 0;

if(seat === 0) {
    console.log("It is AISLE Seat!");
}

// To Resolve the Above Problem, we use the ENUM 
enum seatChoice {
    // Here We can also specify the numbers
    AISLE,
    MIDDLE,
    WINDOW
}

const hcSeat = seatChoice.MIDDLE;

export {}