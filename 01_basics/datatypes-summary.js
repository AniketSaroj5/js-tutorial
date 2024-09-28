// primitive

//7 types: String , Number, null , undefined, Symbol, BigInt

const score = 100
const scoreVlue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 
console.log(id== anotherId);

//const bigNumber = 2436566665325565

// Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj ={
    name: "Aniket",
    age: 22,
}

const myFunction = function(){
    console.log("hello world")
}
   
//console.log(typeof bigNumber);
console.log(typeof anotherId);


//++++++++++++++++++++++++++++++

// stack(primitive),  Heap(Non- Primitive)
let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername =" chai aur code"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi:"user@ybl",
}
 let userTwo = userOne

 userTwo.email = "hitesh@google.com"
 console.log(userOne.email);
 console.big(userTwo.email);