
const direct = window.scrollY;
const nr = 50;
const leftIcon = document.querySelector(".left-icon");
const rightIcon = document.querySelector(".right-icon");
const logo = document.querySelector(".logo");
const bigbtn = document.querySelector(".bigbtn");
const palleteColor = document.querySelector(".pallete-colors");
console.log(direct)

window.addEventListener('scroll', function() {

  if (window.scrollY > nr) {
    menu.classList.add("fixed");
    leftIcon.classList.add("fixed-left__icon");
    rightIcon.classList.add("fixed-right__icon");
    bigbtn.style.display = "none";
    logo.style.fontSize = '70%';

  }else if(window.scrollY == 0){
    menu.classList.remove("fixed");
    leftIcon.classList.remove("fixed-left__icon");
    bigbtn.style.display = "block";
    logo.style.fontSize = '250%';
    console.log(direct)
  }
  // else if(window.scrollY == 0){
  //   menu.classList.remove("fixed")
  // }
});


leftIcon.addEventListener("click" , ()=>{
leftIcon.classList.toggle("left-icon-move");
palleteColor.classList.toggle("left-bar-move")
})
// if () {
//   window.scroll(0, 0);  // reset the scroll position to the top left of the document.
// }
