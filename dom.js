let arrs =[
    {
     name:'rahul',
     college:'ECE',
     phone:63537,
     mark:90
    },
    {
     name:'mani',
     college:'jp',
     phone:63537,
     mark:90 
    },
    {
     name:'vel',
     college:'ECE',
     phone:63537,
     mark:90
    }]

   let z = document.getElementById('demo');
  let x = z.innerHTML = "hello";

  console.log(x);
 
// let element1 = document.createElement('div');

// let element2 = document.createElement('span');
// let element3 = document.createElement('p');


// console.log(element1)
// console.log(element2);
// console.log(element3);

// element1.appendChild(element2);

// console.log(element1);


let inputBox = document.getElementById('input-box');

inputBox.value = 50;

let btnStart = document.getElementById('butn-start');
function hand()
{ 
 //let val = inputBox.
 console.log('start is called');
} 
btnStart.addEventListener('click',hand);

//function calling
//btnStart.addEventListener('click',hand());


let btnStop = document.getElementById('butn-start');

//let btnReset = document.getElementById('butn-start');

console.log(inputBox,btnStart,btnReset,btnStop);


// let a=document.getElementById('input-box');
// let b=a.getAttribute('value');
// console.log(typeof b);

