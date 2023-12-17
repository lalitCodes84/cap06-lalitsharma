function generateNumber() {
  // generate a random integer(hint : Math.random)
  let number = document.getElementById('number');
      number.innerText = Math.floor(Math.random() * 101);
      return number.innerText;

}

function checkOddEven(num) {
  // logic for even / odd
      num = document.getElementById('odd-even');
      num.innerText = generateNumber();
      if(num.innerText%2==0){
        num.innerText = "Even - The Number is Even";
      }else{
        num.innerText = "Odd - The Number is Odd";
      }
}

window.onload = function () {
  // add event listeners to the button here
  let btn = document.getElementById('generate-number');
      btn.addEventListener('click',function(){
        generateNumber();
        checkOddEven();
      })
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
