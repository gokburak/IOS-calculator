// let acButton = document.querySelector(".ac");
// let pmButton = document.getElementsByClassName("pm");
// let percentButton = document.querySelector(".percent");
// let divisionButton = document.querySelector(".division");
// let sevenButton = document.querySelector(".number-7");
// let eightButton = document.querySelector(".number-8");
// let nineButton = document.querySelector(".number-9");
// let multiplicationButton = document.querySelector(".multiplication");
// let fourButton = document.querySelector(".number-4");
// let fiveButton = document.querySelector(".number-5");
// let sixButton = document.querySelector(".number-6");
// let subtractionButton = document.querySelector(".subtraction");
// let oneButton = document.querySelector(".number-1");
// let twoButton = document.querySelector(".number-2");
// let threeButton = document.querySelector(".number-3");
// let additionButton = document.querySelector(".addition");
// let zeroButton = document.querySelector(".number-0");
// let decimalButton = document.querySelector(".decimal");
// let equalButton = document.querySelector(".equal");
// let display = document.querySelector(".display");
// let numberArray = [zeroButton, oneButton, twoButton, threeButton, fourButton, fiveButton, sixButton,
//     sevenButton, eightButton, nineButton];

// let result = document.querySelector(".result")
let equal = document.querySelector(".equal");
let ac = document.querySelector(".ac");
let operators = document.querySelectorAll(".operation");
let numbers = document.querySelectorAll(".number");
let result = document.querySelector(".result");
let selectedOperator ="";
let leftPart =""
let rightPart =""


numbers.forEach((e)=>{
e.addEventListener("click",()=>{
  result.innerHTML +=e.innerText

  if(selectedOperator ==""){
     leftPart += e.innerText
    //  alert("leftpart",leftPart)
  }
  else if(selectedOperator!= ""){
    rightPart +=e.innerText
    // alert("right part", rightPart)

  }
})
})

operators.forEach((e)=>{
  e.addEventListener("click",()=>{
    result.innerHTML += e.innerText 
    selectedOperator =e.innerText
  })
})



equal.addEventListener("click",() => {
if(selectedOperator =="+"){
  result.innerText = parseInt(leftPart) + parseInt(rightPart);
}
else if(selectedOperator =="-"){
  result.innerText = parseInt(leftPart) - parseInt(rightPart);
}
else if(selectedOperator =="*"){
  result.innerText = parseInt(leftPart) * parseInt(rightPart);
}
else if(selectedOperator =="/"){
  result.innerText = parseInt(leftPart) / parseInt(rightPart);
}

});

ac.addEventListener("click", () => {
result.innerText =""
rightPart ="";
leftPart ="";
selectedOperator =""
});
























// let getDisplayAsStr = () => display.textContent.split(',').join('');
// let getDisplayAsNum = () =>{
//     return parseFloat(getDisplayAsStr());
// }
// const handleNumberClick = (strNum) => {
//     const displayStr = getDisplayAsStr();
//     if (displayStr === "0"){
//         display.textContent = strNum;
//     }
//     else {
//         display.textContent = parseFloat(displayStr + strNum).toLocaleString();
//     }
// }
// for (let i=0; i<numberArray.length; i++) {
//     let numberEl = numberArray[i];
//     numberEl.addEventListener('click', () =>{
//         handleNumberClick(i.toString());
//     });

//     decimalButton.addEventListener('click', ()=>{
//         const currentValueStr = getDisplayAsStr();
//         display.textContent = currentValueStr + '.';
//     });

// }
