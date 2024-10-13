// function saymyname(){
// console.log("Abhishek")}
// saymyname()

// function addTwonumbers(n1,n2){
// console.log(n1+n2)
// }
// addTwonumbers(55,85.5)//if no val is passed then NaN is output
// addTwonumbers(55,"a") //here both argumnets are treated as strings



//  function addTwonumbers(n1,n2){
//     let result =n1+n2
//     return result 
//  }
//  const result = addTwonumbers(3,5)
//  console.log("result-", result);

// function newfun(n1,n2){
//     console.log(n1+n2)
// }
// const result =  newfun(3,5)  //console will print 8 and result is undefined
// console.log("Result:",result);

// 
// function loginUserMessage(username){
//     if(username=== undefined){
//         console.log("please enter username");
//         return
//     }
//     return`${username} just logged in`
// }

// console.log(loginUserMessage("abhi"))

 //rest operator in javascript 
// function CalculateCartPrice(val1,val2,...num1){ // 
//     return num1
//  }
//  console.log(CalculateCartPrice(200,400,500,2000))

//object in function
const user={
    username:"abhishek ",
    price : 199
} 
function handleObject(aa){
    console.log(`Username is ${aa.username} and price is ${aa.price}`);
}
handleObject(user)

//Array in javascript 
const myNewArray=[200,300,400,500]
function returnSecondValue(getArray){
    return getArray[2]

}
console.log(returnSecondValue(myNewArray));