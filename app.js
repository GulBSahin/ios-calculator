//variables
const secondaryDisplay=document.querySelector(".secondary-display")//operation will be display in this area
const primaryDisplay=document.querySelector(".primary-display"); //current value will be display there
const buttons=document.querySelector(".buttons-container"); //div contains all buttons

const acEl=document.querySelector(".ac"); //ac button to delete all value
const pmEl=document.querySelector(".pm"); //to change current value's negative-positive valence
const percentEl=document.querySelector(".percent"); //to get percentage

const additionEl=document.querySelector(".addition");
const subtractionEl=document.querySelector(".subtraction");
const multiplicationEl=document.querySelector(".multiplication");
const divisionEl=document.querySelector(".division");
const equalEl = document.querySelector('.equal');
let operatorMemory = null;



//functions
//function for getting primary-display 
const getValueAsStr = () => primaryDisplay.textContent;
//function for getting string with getValueAsStr() and return as number
const getSecondaryValueAsStr = () => {
secondaryDisplay.textContent;
}

const getValueAsNum = () => {
    return parseFloat(getValueAsStr());
  };
const getSecondaryValueAsNum = () => {
    if(secondaryDisplay.textContent.includes("−")||secondaryDisplay.textContent.includes("+")||secondaryDisplay.textContent.includes("×")||secondaryDisplay.textContent.includes("÷")){
      return parseFloat(secondaryDisplay.textContent.replace(/[×−+÷]/g,''))
    }else{
      return parseFloat(getSecondaryValueAsStr());
    }
  };
numberClick= (numStr) => {
    const currentValueStr=getValueAsStr(); //creates an element equals value's text content
    if(currentValueStr=="0"){   
      primaryDisplay.textContent=numStr;   //if current value equals zero  
    }else{
      primaryDisplay.textContent=currentValueStr+numStr; //else adds as String numStr to current value 
}
  }
// const SecondaryValue=getSecondaryValueAsStr();
operatorClick= (oprStr) => {
    const currentValueStr=getValueAsStr(); //creates an element equals value's text content'
    if(currentValueStr!=="0"){   
    secondaryDisplay.textContent=currentValueStr+oprStr;   //if current value equals zero  
    primaryDisplay.textContent="0"
    }else if(currentValueStr=="0") {
    primaryDisplay.textContent=currentValueStr;
  }
}
equalClick = () => {
  Value1=getValueAsNum();
  Value2=getSecondaryValueAsNum();
  console.log(getValueAsNum());
  console.log(getSecondaryValueAsNum());
  let x=operatorMemory
    
  switch(x) {
    case "+":
      result=Value1+Value2;
      secondaryDisplay.textContent=result;
      break;
    case "−":
      result=Value2-Value1;
      secondaryDisplay.textContent=result;
      break;
    case "×":
      result=Value1*Value2;
      secondaryDisplay.textContent=result;
      break;
   case "÷":
      result=Value2/Value1;
      secondaryDisplay.textContent=result;
    break;
    
    default:
      // code block
  }
  
  primaryDisplay.textContent="0";
}
//add event listener
//buttons event
buttons.addEventListener("click", e=>{  //add event listening to all buttons
  e.preventDefault();  //to prevent reload page after each click
  if(e.target.classList.contains("number")) { //if we target the element that have this class  
  numberClick(e.target.innerHTML.toString()); //
  console.log(e.target.innerHTML.toString());
  // console.log(e.target.classList.contains("number"));
}   
})

buttons.addEventListener("click", e=>{  //add event listening to all buttons
  e.preventDefault();  //to prevent reload page after each click
  if(e.target.classList.contains("operator")) { //if we target the element that have this class  
  operatorClick(e.target.innerHTML.toString()); //
  operatorMemory=e.target.innerHTML.toString()
  console.log(operatorMemory);

}   
})

buttons.addEventListener("click", e=>{  //add event listening to all buttons
  e.preventDefault();  //to prevent reload page after each click
  if(e.target.classList.contains("equal")) { //if we target the element that have this class  
    equalClick();
  }   
})

buttons.addEventListener("click", e=>{  //add event listening to all buttons
  e.preventDefault();  //to prevent reload page after each click
  if(e.target.classList.contains("decimal")&& !primaryDisplay.innerText.includes('.')) { //if we target the element that have this class  
    primaryDisplay.textContent=getValueAsStr()+".";
   }   
})

buttons.addEventListener("click", e=>{  //add event listening to all buttons
if (e.target.classList.contains('function')) {
  const functionType = e.target.textContent;
  switch (functionType) {
    case 'AC':
      primaryDisplay.textContent='';
      secondaryDisplay.textContent='';
      break;
    case '±':
      if (!primaryDisplay.textContent.includes('-')) {
        primaryDisplay.textContent='-'+primaryDisplay.textContent;
      } else {
        primaryDisplay.textContent = primaryDisplay.textContent.split('-')[1];
      }
      break;
    case '%':
      secondaryDisplay.textContent = primaryDisplay.textContent/100;
      primaryDisplay.textContent="0";
    default:
      break;
  }
}
});





// time function
function showTime(){
    let date = new Date(); //current time
    let h = date.getHours(); //hour
    let m = date.getMinutes(); //minute
            
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
   
    let time = h + ":" + m ;
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;
    
    setInterval(showTime, 1000);
}
showTime();