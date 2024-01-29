"use strict"

const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
var isPalindrome = null;
textInput.addEventListener("focus", ()=>{
  result.setAttribute("hidden", "");
});
checkBtn.addEventListener("click", ()=>{
    
    if (textInput.value.length) {
      if(getCleanStringFromInput(textInput.value) === strReverse(getCleanStringFromInput(textInput.value))) {
      isPalindrome = true;
      renderResult(isPalindrome);
      return isPalindrome;
     
    } else {
      isPalindrome = false;
      renderResult(isPalindrome);
      return isPalindrome;
    }
  
  } else {
    alert("Please input a value");
  }
});




const ignoreSymbRegEx = /[_ .,()\/|-]/g;


const getCleanStringFromInput = (str) => {
let clStr = str.toLowerCase().replace(ignoreSymbRegEx, "");
return clStr;
}

const strReverse = (str) => {
  return str.split('').reverse().join('');
}

const renderResult = (bool) => {
  result.removeAttribute("hidden");
  if (bool) {
    result.style.cssText = "background-color: #f7ff07;";
    result.innerHTML = `<p>${textInput.value} is a palindrome<p>`
  } else {
    result.style.cssText = "background-color: #7f0007; color: #f5f5f5;";
    result.innerHTML = `<p>${textInput.value} is not a palindrome<p>`
  }
 
}
