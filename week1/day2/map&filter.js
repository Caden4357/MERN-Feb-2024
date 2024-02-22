const nums = [23,56,19,20,9,20,78,55,32,42,8,12,80]



const squaredNums = nums.map( (item) => {
    return item*item
})
// console.log(squaredNums);


const evenNums = nums.filter( (item) => item % 2 === 0 )
// console.log(evenNums);

// const evenNums = nums.filter( (item, idx) => {
//     return item % 2 === 0
// })
// console.log(evenNums);


const nbaAthletes = [
    {id:1, name:'Kevin Durant', league:'NBA', position: 'Small Forward', active:true},
    {id:2, name:'Charles Barkley', league:'NBA',position: 'Power Forward', active:false},
    {id:3, name:'Stephen Curry', league:'NBA',  position: 'Point Guard', active:true },
    {id:4, name:'Shaq', league:'NBA',  position: 'Center', active:false },
    {id:5, name:'Damian Lillard', league:'NBA',  position: 'Point Guard', active:true },
    {id:6, name:'Mike James', league:'Euro',  position: 'Point Guard', active:true },
]

const exactCopy = nbaAthletes.map( (athlete) => athlete.name )
// console.log(exactCopy);

// * an array of nba athlete objects where the id is evenly divisible by 3

// const evenlyDivisibleBy3 = (athlete) => {
//     return athlete.id % 3 === 0
// }

const evenlyDivBy3 = nbaAthletes.filter( (athlete) =>  athlete.id % 3 === 0 )
// console.log(evenlyDivBy3);

// * an array of nba athlete that are "point guard" position
const pointGuards = nbaAthletes.filter((athlete) => athlete.position === 'Point Guard')
console.log(pointGuards);


const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// an array containing just the first type of all the pokémon whose second type is "flying"
// const flyers = pokemon.filter((item) => item.types.includes('flying'))
// const secondTypeFlying = flyers.map((item) => item.types[0])
// console.log(secondTypeFlying);

const flyers = pokemon.filter((item) => item.types[1] === 'flying').map((item) => item.types[0])
console.log(flyers);