const button = document.querySelector("#buttonmenu")
const menumobile = document.querySelector("#menumobile")

function HandleClick(){
    button.classList.toggle("active")
    menumobile.classList.toggle("active")
}