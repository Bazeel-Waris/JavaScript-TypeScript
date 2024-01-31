"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var things = 'Cap';
things = 34;
var ahmad = { name: "Ahmad", id: 23 };
ahmad = { username: "Bazeel Bin Waris", id: 334 };
// Function using Union
function getDbId(id) {
    // making some API Calls
    console.log("DB Id is : ".concat(id));
}
getDbId(3);
getDbId("3");
function gettingfId(id) {
    // It is treating as a new data type that could endup with numbers & strings
    // id.toUpperCase();
}
// Arrays Using Unions
var data = [1, 2, 3];
var data2 = ["1", 3, 5];
/* We can also use any type but we don't use it because we want more strict types to use*/
var data3 = ["1", 3, 5, true];
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "window";
