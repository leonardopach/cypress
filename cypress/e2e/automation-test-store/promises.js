let promise = new Promise((res, reject) => {
    let a = 2 + 1;
    if (a == 2) {
        res("promise fulfilled")
    } else {
        reject("promise not fulfilled")
    }
})

promise.then((mess) => {
    console.log(mess + ', promisse has passed');
}).catch(mess => {
    console.log(mess + ' promise has failed')
})