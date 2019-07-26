const order = false;

const breakfastPromise = new Promise( ( resolve, reject) => { 
    setTimeout(() => {
        if (order) {
            resolve("Your order is ready, come and pick it up!");
        } else {
            reject( Error("There was a problem with your order!") );
        }
    }, 3000);
});

console.log(breakfastPromise);
breakfastPromise
    .then( val => console.log(val) )
    .catch( err => console.log(err) );