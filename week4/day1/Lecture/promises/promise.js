
// ! Syncronous code example

const fetchDataSync = (url) => {
    if (url === 'https://api.example.com/data') {
        return {
            status: 200,
            data: 'Successful data'
        }
    } else {
        return {
            status: 404,
            data: 'Error, data not found'
        }
    }
}

console.log(fetchDataSync('https://api.example.com/data'));
console.log('This will run after the function is completed');



// ! Asyncronous code example

let trashGotTakenOut = false

const takeOutTheTrash = new Promise((resolve, reject) => {
    if (trashGotTakenOut) {
        resolve('Thanks for taking out the trash')
    }
    else {
        reject('You didnt take out the trash 😢')
    }
})

takeOutTheTrash
    .then(message => console.log(message))
    .catch(err => console.log(err))
    
console.log('This will run before the promise is resolved or rejected because it is asyncronous');

const promise = new Promise((resolve, reject) => {
    let password = 'I love sports'
    if (password === 'I love anime') {
        resolve('That is the secret word welcome to animeClub')
    } else {
        reject('Sorry that is incorrect you cannot enter the secret club')
    }
})
promise
    .then((message) => console.log(message))
    .catch((err) => console.log(err))








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
takeOrder('enchilada', menu)
    .then(res => console.log(res))
    .catch(err => console.log(err))
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

