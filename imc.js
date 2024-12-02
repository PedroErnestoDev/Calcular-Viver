const button = document.querySelector("#buttonmenu")
const menumobile = document.querySelector("#menumobile")

function HandleClick(){
    button.classList.toggle("active")
    menumobile.classList.toggle("active")
}

let botao = document.querySelector("#calcularimc")
let resultadonum = document.querySelector("#resultadonumero")
let resultadotexto = document.querySelector("#resultadotexto")

let spanobrigatoriopeso = document.querySelector("#spanobrigatoriopeso")
let spanvalorinvalidopeso = document.querySelector("#spanvalorinvalidopeso")
let spanobrigatorioaltura = document.querySelector("#spanobrigatorioaltura")
let spanvalorinvalidoaltura = document.querySelector("#spanvalorinvalidoaltura")

botao.addEventListener("click", imc)

let peso = document.querySelector("#pesoimc")
let altura = document.querySelector("#alturaimc")

function imc(){

let imc = Number(peso.value) / (Number(altura.value) * Number(altura.value))

if (imc < 16.9)
    {
        resultadotexto.innerHTML = `${"Muito abaixo do peso"}`
        resultadonum.style.color = "red"
    }
    else if (imc >=17 && imc < 18.4 )
    {
        resultadotexto.innerHTML = `${"abaixo do peso"}`
        resultadonum.style.color = "#faff00"
    }
    else if (imc >= 18.5 && imc <=24.99)
    {
        resultadotexto.innerHTML = `${"Peso Normal"}`
        resultadonum.style.color = "green"
    }
    else if (imc >=25 && imc <=29.99)
    {
        resultadotexto.innerHTML = `${"Sobrepeso"}`
        resultadonum.style.color = "#faff00"
    }
    else if (imc >= 30 && imc <=34.99)
    {
        resultadotexto.innerHTML = `${"Obesidade Grau 1"}`
        resultadonum.style.color = "red"
    }
    else if (imc >=35 && imc <=40)
    {
        resultadotexto.innerHTML = `${"Obesidade Grau 2"}`
        resultadonum.style.color = "red"
    }
    else
    {
        resultadotexto.innerHTML = `${"Obesidade Grau 3"}`
        resultadonum.style.color = "red"
    }
    resultadonum.innerHTML = `${imc.toFixed(1)} ${"Kg/m²"}`
}

botao.addEventListener("click", showerror)

function showerror(){
    if(peso.value == ""){
        spanobrigatoriopeso.style.display = "block"
        peso.style.border ="2px solid red"
        resultadonum.textContent = ""
        resultadotexto.textContent = ""
        
    }
    else{
        spanobrigatoriopeso.style.display = "none"
    }
    if(altura.value == ""){
        spanobrigatorioaltura.style.display = "block"
        altura.style.border ="2px solid red"
        resultadonum.textContent = ""
        resultadotexto.textContent = ""
        return
    }
    else{
        spanobrigatorioaltura.style.display = "none"
    }
    if(spanvalorinvalidopeso.style.display == "block"){
        resultadonum.textContent =""
        resultadotexto.textContent =""
        return
    }
    else{

    }
    if(spanvalorinvalidoaltura.style.display == "block"){
        resultadonum.textContent =""
        resultadotexto.textContent =""
        return
    }
    else{

    }
}

function validatepeso(){
    if(isNaN(peso.value)){
        peso.style.border ="2px solid red"
        spanvalorinvalidopeso.style.display ="block"
        spanobrigatoriopeso.style.display ="none"
        return
    }
    else{
        spanvalorinvalidopeso.style.display ="none"
        peso.style.border ="2px solid green"
    }
}
function validatealtura(){ 
    if(isNaN(altura.value)){
    altura.style.border ="2px solid red"
    spanvalorinvalidoaltura.style.display ="block"
    spanobrigatorioaltura.style.display ="none"
    return
    }
    else{
    spanvalorinvalidoaltura.style.display ="none"
    altura.style.border ="2px solid green"
    }
}