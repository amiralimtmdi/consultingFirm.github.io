let menu = document.querySelector (".nav__ul")
let menubtn = document.querySelector (".nav__ul--icon")
let menubtnicon = document.querySelector (".nav__ul--icon i")

menubtn.addEventListener("click" , function (){
        if(menubtnicon.classList.contains("fa-bars")){
                menu.style.left = "0"
                menubtnicon.classList = "fa fa-times"
        }else {
                menu.style.left = "-51%"
                menubtnicon.classList = "fa fa-bars"
        }
})
