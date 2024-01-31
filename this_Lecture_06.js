"use strict";

// this in global space
let x = document.getElementById("head");
console.log(this);
// console.log(this.onclick);

// this inside a function
function dummy() {
    // the deponds upon the strict / non - strict mode
    console.log(this);
}

// this in strict mode - (this substitution)
/**
 * If the value of this keyword is undefined or null
 * then this keyword will be replaced with globalObject
 * and it happens only in non - strict mode.
 */

// this keyword value deponds on how this is called (window)
// dummy();
// window.dummy();

// this inside an object's method
const student = {
    name: "Ahmad Bin Waris",
    printName : function () {
        console.log(this); 
    }
}

// let printName = 

student.printName.call(student);

const student2 = {
    name: "Bazeel Bin Waris"
}

student.printName.call(student2);

// call apply bind methods (sharing methods)
/* student.printName.call(student2);*/

// this inside arrow function


// this inside nested arrow function

// this inside DOM

function changeContent() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("foo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "./content.html", true);
    xhttp.send();
}