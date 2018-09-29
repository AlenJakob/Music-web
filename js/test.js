


const bodyBox = document.querySelector("body");
const radioChangeTheme = document.querySelectorAll(".js-theme-change");
radioChangeTheme.forEach((radio) => {
    radio.addEventListener("change", ()=>{
    bodyBox.classList = radio.value;
  });
});



// for(let i = 0 ; i < radioChangeTheme.length; i++){
//     radioChangeTheme[i].addEventListener("change", ()=>{
//     bodyBox.classList = "";
//     bodyBox.classList = radioChangeTheme[i].value;
//
//     })
//
// }
