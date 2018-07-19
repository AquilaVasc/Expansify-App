//Obeject destructuring

// const person = {
//     name: 'aquila',
//     age: 21,
//     location: {
//         city: 'Quixadá',
//         temp: 77
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// const {city, temp: temperature} = person.location;

// console.log(`${firstName} is ${age}.`);
// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`);
// }

const book = {
    title: 'JavaScript the definitive guide',
    author: 'David Flanagan',
    publisher: {
        name: `O'Reilly`
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

//array destructuring

const adress = ['163 Francisco Soares', 'Banabuiú', 'Ceará', '63960000'];
const [, city, state] = adress;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '2.00', '2.60', '2.75'];
const [product, , medium] = item;
console.log(`A medium ${product} costs ${medium}`)