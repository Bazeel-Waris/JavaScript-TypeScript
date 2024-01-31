let things: number | string = 'Cap';
things = 34; 

// object type
type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let ahmad: User | Admin = { name: "Ahmad", id: 23 };
ahmad = { username: "Bazeel Bin Waris", id: 334 };

// Function using Union
function getDbId(id: number | string) {
    // making some API Calls
    console.log(`DB Id is : ${id}`);
}
getDbId(3);
getDbId("3");

function gettingfId(id: number | string) {
    // It is treating as a new data type that could endup with numbers & strings
    // id.toUpperCase();
}

// Arrays Using Unions
const data: number[] = [1, 2, 3];
const data2: (string | number)[] = ["1", 3, 5];
/* We can also use any type but we don't use it because we want more strict types to use*/
const data3: any[] = ["1", 3, 5, true];

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle";
seatAllotment = "window";
seatAllotment = "crew";
export {};