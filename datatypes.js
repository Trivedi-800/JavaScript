//------------->>>>>>Primitive Datatypes<<<<<<<<<---------------
let a =250;//number 
let b ="Abhi";//string
let c;//undefined----->vallue not assigned yet
let d =true;//boolean
let e =null;//null---->Stand alone value
let sym=Symbol("Hello");//symbol  
console.log("value is ",a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(sym)
console.log(typeof(sym))//used to check the datatype
//important
console.log(typeof(null))//o/p = object 
console.log(typeof(undefined))//o/p = undefined

//----------Refernce Datatype---------------
//object 
let obj={f_name:"Abhishek", l_name:"Trivedi",id:20};
console.log("name is",obj.f_name,obj.l_name," and id=", obj.id);
obj.f_name="Abhi"; //upadting in the object
console.log("name is",obj.f_name,obj.l_name);
delete obj.l_name;// deleting in the object
console.log("name is",obj.f_name,obj.l_name);
//Array
