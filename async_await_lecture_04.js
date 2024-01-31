/**
 * What is async?
 * What is wait?
 * How async await worksbehind the scenes?
 * Examples of using async/await
 * Error Handling
 * Interviews
 * Async await vs Promises.then/.catch * 
 */

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 Resolved Value!");
    }, 10000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 Resolved Value!");
    }, 20000);
});

// await can only be used inside async function
async function handlePromise() {

    console.log("Hello World!");
    // JS Engine was waiting for promises to be resolved
    const val1 = await p1;
    console.log('Namaste javaScript World! 1');
    console.log(val1);
    
    // JS Engine was waiting for promises to be resolved
    const val2 = await p2;
    console.log('Namaste javaScript World! 2');
    console.log(val2);
}

handlePromise();

// Async Function Always returns a Promise
// async function getData() {
//     // return "Namaste"; // Here returning Simple String to check that it converts to Promise OR Not
//     // return p;
//     p.then(res => console.log(res));
    
//     JS Engine won't wait for promises to be resolved
//     console.log("Namaste JavaScript");
// }

//  const dataPromise = getData();
// dataPromise.then(res => console.log(res));