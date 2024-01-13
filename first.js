//console.log("nancy meri jaan ily");
//alert("aryan");

{/* const amazon = {
    title : "ball pen",
    price: "48 rs",
    rating: 6.8,
    offer : 7
}
console.log(amazon);        */}

//conditional statement
/* let age= 12
 if(age>18){
    console.log("the person can vote");
}
else{
    console.log("person cant vote")
} 

result = age>18? true: false;
console.log(result)  */

/* let a = prompt ("enter a number ");
if (a%5== 0){
    console.log("hi")
}else {console.log("bye")}
*/

 /* Q)marks
let marks = prompt ("enter your marks");
if(marks >= 90 && marks <= 100){
    console.log("the grade recieved is a");
}
else if (marks >= 70 && marks <= 89 ){
    console.log ("the grade recived is b")
}
else if (marks >= 60 && marks <= 69){
    console.log ("the grade recived is c")
}
else if (marks >= 50 && marks <= 59){
    console.log ("the grade recived is d")
}
else{
    console.log("the student failed his exam")
}
*/

//loops
/* let sum=0
for (let i=0; i<=5; i++){
    sum = sum+i
}
console.log(" sum = ", sum);
console.log("Loop has ended");
*/

/*
for(i=1; i<=100; i+2){
    if (i%2==0){
        console.log(i)
    }
}
*/

/*
let randomNumber=13 
let numberWritten = console.log("enter a number");
if ( randomNumber == numberWritten){
    prompt("You guessed the right number");
    }
else if( randomNumber > numberWritten){
    prompt("guess a higher number")
}
else {
    prompt("guess a lower number");
}    
*/
/*
let obj = {
    price: 78,
    name: "hello",
};

*/

//str
/*
let str = "hello"
console.log(str.slice(3))

let str2= "nancy"
console.log(str.concat(str2))


console.log(str.replace("l" , "kl"))
console.log(str.charAt(0))
*/
/*
let x = prompt("enter your name");
let str= x;
let str1= "@"
let str3 = (str1.concat(str))
let str4= x.length;
console.log(str3.concat(str4))
*/
/*
let marks = [97,89,56,85]
console.log(marks);
*/
/*
let heros = ["ironman", "aryan", "batman", "spiderman", "thor", "hulk"];
//console.log(heros[2])
for (let i=0; i<heros.length; i++){
console.log(heros[i]);
}
*/

/*
let marks = [1, 1, 1, 1, 1, 1]

let sum = 0;
for (let value of marks){
    sum+= value
}
let avg = sum/marks.length;
console.log(avg);
*/
/*
let marvelheros = ["spiderman", "ironman", "hulk", "pokemon"];
let dcheros= ["batman", "superman", "wonderwoman"];
console.log(marvelheros.slice(1))
console.log(marvelheros.concat(dcheros))
*/

/*
//add element
let arr = [1,2,3,4,6]
arr.splice(1,0,77); // 1 is index number , 0 means 0 elements deleted , 77 is nunmber to be added in index 1
console.log(arr);
*/


/*
delete element
let arr = [1,2,3,4,6]
arr.splice(4, 1); // 4 is index number , 1 means 1 elements deleted 
console.log(arr);
*/

/*
//replace element
let arr=[1,2,3,4,5,6]
arr.splice(3,1,56)
console.log(arr);


//sum function
function sum(x,y){
   return x+y;
}

//multiplication function
function multiplication(x,y){
    return x*y
}

//subtraction
 const subtraction = (a,b)=>{
    console.log(a-b);
 }
 */
//function hello (x)

/**
let nums = [1,2,3,4];

nums.forEach((val)=>{
console.log(val*val)
})

or

let num = [4,7,8,9];
let square =(num)=>{
    console.log(num*num);
}
num.forEach(square)
 */


/*
let arr=[3,4,5,6,6,9];
let evenarr = arr.filter((val)=>{
    return(val % 2 )
})
console.log (evenarr);
*/

/*
let arr = [4,5,6,70,8,];
const output = arr.reduce((prev, next)=>{
    return prev> next ? prev : next;
})
console.log(output)
*/

4/*
let marks = [45,67,12,90,45,98];
let toppers = marks.filter((val)=>{
    return val>=90;
})
console.log(toppers)
*/

/*
let n = prompt("Enter a number");
let arr=[]

for (let i =1; i<=n; i++){
    arr[i-1]= i;
}

let product = arr.reduce((prev, next)=>{
    return prev*next;
})

console.log(product)
*/

/*
let newBtn = document.createElement("button");
newBtn.innerText= "Aryan loves you";
newBtn.style.color="Red";
newBtn.style.backgroundColor="Blue";

document.querySelector("body").prepend(newBtn)

let para = document.querySelector("p");
para.classList.add("nandini");
para.classList.remove("nancy")
*/

/*
btn.addEventListener("click" , (e)=>{
    console.log("btn was clicked")
});

btn.addEventListener("click" , (e)=>{
    console.log("btn1 was clicked")
})

const handler3 = ()=>{
    console.log("Aryan is getting anxious");
}

btn.addEventListener("click", handler3)
*/

/*
let modeBtn= document.querySelector("#mode");
let currMode= "light";  //dark

 modeBtn.addEventListener("click", ()=>{
   if(currMode === "light"){
      currMode = "dark";
      document.querySelector("body").style.backgroundColor = "black";
   } else{
    currMode = "light";
      document.querySelector("body").style.backgroundColor = "white";   
}
console.log(currMode);
 })
 */

 /*
 class toyotaCar {
     constructor() {
         console.log("constructor is getting called");
     }
 
     start() {
         console.log("Let the car start");
     }
 
     stop() {
         console.log("the car stopped moving");
     }
 
     setBrand() {
         console.log("Hello this is my brand");
     }
 }
 
 let fortuner = new toyotaCar();
 let lexus = new toyotaCar();
*/


/*
// eg 1)
class parent {
    hello(){
        console.log("Hello this is my world")
    }
}
class child extends parent{
    bye(){
        console.log("hi")
    }
}
let obj = new child();

// eg 2)
 class person{
    eat(){
        console.log("A person eats food")
    }
    sleep(){
        console.log("The person sleeps for 10 hours")
    }
    work(){
        console.log("The person is also hardworking")
    }
 }  
 class engineer extends person{
    studies(){
        console.log("person graduated from a big college")
    }
    work(){
        console.log("Person is a software developer")
    }
 }
 class doctor extends engineer{
    workplace(){
        super.sleep()
        console.log("The doctor works in Aims Delhi")
    }
    work(){
        console.log("doctor's work is to save people")
    }
 }

 let nancy = new doctor();

*/

/*
let DATA = "This is my data"

class user {
    constructor(name ,email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("data = ", DATA)
    }
}

let student1= new user("aryan", "aryanmamania17@gmail.com");
let student2= new user("nancy", "nancy27@gmail.com")
*/

/*
console.log("hello world");
console.log("i love my nancy");
 
setTimeout(()=>{
    console.log("But does nancy loves me ?")

}, 4000);

console.log("Aryan loves nancy")

*/

/*
function getData(dataId, getNextData){
    setTimeout(()=>{
        console.log("data", dataId);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}
getData(1, ()=>{
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4)
        })
    })
})
*/

/*
const getPromise= ()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am promise");
        resolve(" network error")
    });
};
let promise = getPromise();
promise.then((res)=>{
    console.log("promise fulfilled", res)
})

promise.catch((err)=>{
    console.log("rejected", err)
})
*/



















































