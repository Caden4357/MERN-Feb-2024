// ! Asyncronous code examples

let trashGotTakenOut = false

const takeOutTheTrash = new Promise((resolve, reject) => {
    if (trashGotTakenOut) {
        resolve('Thanks for taking out the trash')
    }
    else {
        reject('You didnt take out the trash 😢')
    }
})



console.log('This will run before the promise is resolved or rejected because it is asyncronous');

takeOutTheTrash
    .then((message) => console.log(message))
    .catch((err) => console.log(err))
// consuming promises with async/await
const consumeTrash = async () => {
    try{
        const message = await takeOutTheTrash
        console.log(message);
    }
    catch(err){
        console.log('ERROR: ',err);
    }
}
consumeTrash()

const promise = new Promise((resolve, reject) => {
    let password = 'I love anime'
    if (password === 'I love anime') {
        resolve('That is the secret word welcome to animeClub')
    } else {
        reject('Sorry that is incorrect you cannot enter the secret club')
    }
})
// promise
//     .then((message) => console.log(message))
//     .catch((err) => console.log(err))

const consumePassword = async () => {
    try{
        const message = await promise
        console.log(message);
    }
    catch(err){
        console.log('ERROR: ',err);
    }
}
consumePassword()






const takeOrder = (order, menu) => {
    return new Promise((resolve, reject) => {
        if (menu.includes(order)) {
            resolve(`Order Up! Here is your ${order}`)
        }
        else {
            reject(`Sorry we dont have ${order}`)
        }
    })
}
const menu = ['pizza', 'pasta', 'salad', 'soup', 'sandwich', 'steak']

// takeOrder('enchilada', menu)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

const consumeOrder = async () => {
    try{
        const orderResult = await takeOrder('steak', menu)
        console.log(orderResult);
    }
    catch(err){
        console.log('ERROR: ',err);
    }
}
consumeOrder()
console.log('This will run before the promise is resolved');









const fetchData = (url) => {
    return new Promise((resolve, reject) => {
        // Simulate an API call with setTimeout
        setTimeout(() => {
            if (url === 'https://api.example.com/data') {
                resolve({
                    status: 200,
                    data: 'Successful data'
                });
            } else {
                reject({
                    status: 404,
                    data: 'Error, data not found'
                });
            }
        }, 2000); // Simulates a 2 seconds delay
    });
}

fetchData('https://api.example.com/data')
    .then((res) => {
        console.log(res);
        // setData(res.data)
    })
    .catch((err) => console.log(err))
console.log('This will run before the promise is resolved');


