const cart = ['shoes', 'kurta', 'Pants'];

// This id the Consumer Part of Promise Code
createOrder(cart)
    .then(function (orderId) {
        console.log(Number(orderId)+6);
        return orderId;
    })
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        console.log(paymentInfo)
    })
    .catch(function (err) {
        console.log(err.message);
    });

// This is the producing part of the Promise Code
function createOrder() {

    const pr = new Promise(function (resolve, reject) {
        // create Order
        // Validate Order
        // OrderId
        if(!ValidateCart(cart)) {
            const err = new Error("Your Cart is not Valid! Check Your Cart");
            reject(err);
        }

        const orderId = "123456";

        if(orderId) {
            // setTimeout(function () {
                resolve(orderId);
            // }, 5000);
        }
    });

    return pr;
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        resolve("Payment Successful");
    });
}

function ValidateCart(cart) {
    return false;
}
