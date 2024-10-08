// primitive datatypes => Stack
// Non -primitive datatypes => Heap 

// let name="Abhishek Trivedi";
// let name2= name;
// name2 = "Ayush Trivedi";
// console.log(name)
// console.log(name2)

let user1={
    email:"abc#@gmail.com",
    upiid:"abc@ybl"
}
let user2= user1
user2.email="xyz@gmail.com"

console.log(user1.email);
console.log(user2.email);