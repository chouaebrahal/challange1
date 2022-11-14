function ValidateEmail(input) {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {

    return true;

  } else {

    return false;

  }

}
let btn = document.querySelector(".btn");
console.log(btn);
let result1 = document.getElementById("result1");
let input = document.querySelector(".landing .container input");
console.log(input);

  btn.addEventListener("click",function(){
     if(!ValidateEmail(input)){
       input.style.borderColor = "red";
       result1.innerHTML = "Please check your email";
     }else{
      input.style.borderColor = "hsl(243, 87%, 12%)";
      result1.innerHTML = "";
     }
  })
  let btn2 = document.querySelector(".btn2");
  console.log(btn);
  let result2 = document.getElementById("result2");
  let input2 = document.querySelector(".sectionthree .container input");

 btn2.addEventListener("click",function(){
     if(!ValidateEmail(input2)){
       input2.style.borderColor = "red";
       result2.innerHTML = "Please check your email";
     }else{
      input2.style.borderColor = "hsl(243, 87%, 12%)";
      result2.innerHTML = "";
     }
  })
