const toggle = document.getElementById("toggle");
const menu = document.getElementById("menu");
const rightBtn = document.querySelector(".right-icon");
const loginForm = document.querySelector(".login-form");
const checkBtn = document.querySelector(".check");
const checkbox = document.querySelector(".checkbox-input");

//
toggle.addEventListener("click" , ()=>{
menu.classList.toggle("hide-menu")
toggle.classList.toggle("hide-toggle-btn")
toggle.classList.toggle("arrow")
});
//
rightBtn.addEventListener("click", ()=>{
  rightBtn.classList.toggle("move-btn-login")
  loginForm.classList.toggle("form-move")
});
//
// cannot ready addEventListener of null ? //

// checkBtn.addEventListener("click", ()=>{
//   if(checkbox.checked === false){
//     checkbox.checked = true;
//   }else{
//     checkbox.checked = false
//   }
//
// });


// var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//
// function checkY(){
//   if(scrollPosY > 50) {
//           menu.style.position = "fixed";
//
//       } else  {
//
//            navBar.className =  ('basic-classname');
//       }
//
// }
// checkY()
