// Demonstration of CallbackHell and Benefit of Promise

// const cart = ['shoes', 'pant', 'kurta'];

// createOrder(cart, function (orderId) {

//     proceedToPayment(orderId);
// });

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     proceedToPayment(orderId)
// });

// Example of Above Demonstration

// const GITHUB_API = "https://api.github.com/users/akshaymarch7";
// const user = fetch(GITHUB_API);
// console.log(user);

// user.then( data => console.log(data) );

// Demonstration of Promise Chaining

const cart = ['shoes', 'pant', 'kurta'];

createOrder(cart, function (orderId) {

    proceedToPayment(orderId, function (paymentInfo) {

        showOrderSummary(paymentInfo, function () {
            updateWalletBalance();
        });

    });

});

const promise = createOrder(cart);

promise
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function () {
        return updateWalletBalance();
    });


