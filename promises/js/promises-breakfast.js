const breakfastPromise = new Promise( ( resolve, reject) => { 
    setTimeout(() => {
        resolve("Your order is ready, come and pick it up!");
    }, 3000);
});

console.log(breakfastPromise);
breakfastPromise.then( val => console.log(val) );