const button = document.querySelector("#buttonmenu")
const menumobile = document.querySelector("#menumobile")

let quatromulher = document.querySelector(".quatromulher")
let quatrohomem = document.querySelector(".quatrohomem")

let triceps = document.querySelector("#triceps")
let suprailiacamulher = document.querySelector("#suprailíacamulher")
let suprailiacahomem = document.querySelector("#suprailíacahomem")
let peitoral = document.querySelector("#peitoral")
let abdominalhomem = document.querySelector("#abdominalhomem")
let abdominalmulher = document.querySelector("#abdominalmulher")
let coxaMulher = document.querySelector("#coxamulher")
let coxaHomem = document.querySelector("#coxahomem")

let idade = document.querySelector("#idade")
let peso = document.querySelector("#peso")

let botao = document.querySelector("#buttoncalcular")

let resultado = document.querySelector("#resultado")
let titulopg = document.querySelector("#titulopg")

let spanObrigatorioidade = document.querySelector("#obrigatorioidade")
let spanObrigatorioSuprailiacahomem = document.querySelector("#obrigatoriosuprailiacahomem")
let spanObrigatorioSuprailiacamulher = document.querySelector("#obrigatoriosuprailiacamulher")
let spanObrigatorioPeitoral = document.querySelector("#obrigatoriopeitoral")
let spanObrigatorioTriceps = document.querySelector("#obrigatoriotriceps")
let spanObrigatorioAbdominalhomem = document.querySelector("#obrigatorioabdominalhomem")
let spanObrigatorioAbdominalmulher = document.querySelector("#obrigatorioabdominalmulher")
let spanObrigatorioCoxaHomem = document.querySelector("#obrigatoriocoxahomem")
let spanObrigatorioCoxaMulher = document.querySelector("#obrigatoriocoxamulher")

let valorinvalidoidade = document.querySelector("#valorinvalidoidade")
let valorinvalidoSuprailiacahomem = document.querySelector("#valorinvalidosuprailiacahomem")
let valorinvalidoSuprailiacamulher = document.querySelector("#valorinvalidosuprailiacamulher")
let valorinvalidoPeitoral = document.querySelector("#valorinvalidopeitoral")
let valorinvalidoTriceps = document.querySelector("#valorinvalidotriceps")
let valorinvalidoAbdominalhomem = document.querySelector("#valorinvalidoabdominalhomem")
let valorinvalidoAbdominalmulher = document.querySelector("#valorinvalidoabdominalmulher")
let valorinvalidoCoxaHomem = document.querySelector("#valorinvalidocoxahomem")
let valorinvalidoCoxaMulher = document.querySelector("#valorinvalidocoxamulher")
let valorinvalidopeso = document.querySelector("#valorinvalidopeso")

botao.addEventListener("click", showerror)


function HandleClick(){
    button.classList.toggle("active")
    menumobile.classList.toggle("active")
}

function getelementsexo(){
    let radio = document.getElementsByName("sexo")
    for(i = 0; i < radio.length; i++){
        if(radio[i].checked){
            if(radio[i].value == "Homem"){
                quatromulher.style.display = "none"
                function somar(){
                    if(isNaN(idade.value)){
                        return
                    }
                    if(idade.value == ""){
                        return
                    }
                    if(isNaN(peitoral.value)){
                        return
                    }
                    if(peitoral.value == ""){
                        return
                    }
                    if(isNaN(abdominalhomem.value)){
                        return
                    }
                    if(abdominalhomem.value == ""){
                        return
                    }
                    if(isNaN(coxaHomem.value)){
                        return
                    }
                    if(coxaHomem.value == ""){
                        return
                    }
                    if(isNaN(suprailiacahomem.value)){
                        return
                    }
                    if(suprailiacahomem.value == ""){
                        return
                    }

                    let somaHomem = Number(peitoral.value) + Number(abdominalhomem.value) + Number(coxaHomem.value) + Number(suprailiacahomem.value)
                    
                    let dc = (0.29288 * somaHomem) - (0.0005 * (somaHomem**2)) + (0.15845 * Number(idade.value)) - 5.763
                    
                    resultado.innerHTML = `${dc.toFixed(2)} ${"%"}`
                    
                }
                triceps.value = ""
                suprailiacamulher.value = ""
                coxaMulher.value = ""
                abdominalmulher.value = ""
                resultado.textContent = ""
            }
            else{
                quatromulher.style.display = "block"
            }
            if(radio[i].value == "Mulher"){
                quatrohomem.style.display = "none"
                function somar(){

                    if(isNaN(idade.value)){
                        return
                    }
                    if(idade.value == ""){
                        return
                    }
                    if(isNaN(triceps.value)){
                        return
                    }
                    if(triceps.value == ""){
                        return
                    }
                    if(isNaN(abdominalmulher.value)){
                        return
                    }
                    if(abdominalmulher.value == ""){
                        return
                    }
                    if(isNaN(coxaMulher.value)){
                        return
                    }
                    if(coxaMulher.value == ""){
                        return
                    }
                    if(isNaN(suprailiacamulher.value)){
                        return
                    }
                    if(suprailiacamulher.value == ""){
                        return
                    }

                    let somaMulher = Number(triceps.value) + Number(suprailiacamulher.value) + Number(coxaMulher.value) + Number(abdominalmulher.value)
                
                    let dc = (0.29669 * somaMulher) - (0.00043 * (somaMulher**2)) + (0.02963 * Number(idade.value)) + 1.407
                    
                    resultado.innerHTML = `${dc.toFixed(2)} ${"%"}`

                }
                peitoral.value = ""
                abdominalhomem.value = ""
                suprailiacahomem.value = ""
                coxaHomem.value = ""
                resultado.textContent = ""
            }
            else{
                quatrohomem.style.display = "block"
            }
            
        }
    }
    botao.addEventListener("click", somar)
    
}
function showerror(){
    if(idade.value == ""){
        idade.style.border ="2px solid red"
        spanObrigatorioidade.style.display = "block"
        resultado.textContent = ""
    }
    else{
        idade.style.border ="2px solid green"
    }
    if(isNaN(idade.value)){
        idade.style.border ="2px solid red"
        resultado.textContent = ""
    }

    if(peitoral.value == ""){
        peitoral.style.border ="2px solid red"
        spanObrigatorioPeitoral.style.display = "block"
        resultado.textContent = ""
    }
    else{
        peitoral.style.border ="2px solid green"
    }
    if(isNaN(peitoral.value)){
        peitoral.style.border ="2px solid red"
        resultado.textContent = ""
    }

    if(triceps.value == ""){
        triceps.style.border ="2px solid red"
        spanObrigatorioTriceps.style.display = "block"
        resultado.textContent = ""
    }
    else{
        triceps.style.border ="2px solid green"
    }
    if(isNaN(triceps.value)){
        triceps.style.border = "2px solid red"
        resultado.textContent = ""
    }

    if(abdominalhomem.value == ""){
        abdominalhomem.style.border ="2px solid red"
        spanObrigatorioAbdominalhomem.style.display = "block"
        resultado.textContent = ""
    }
    else{
        abdominalhomem.style.border ="2px solid green"
    }
    if(isNaN(abdominalhomem.value)){
        abdominalhomem.style.border ="2px solid red"
        resultado.textContent = ""
    }
    if(abdominalmulher.value == ""){
        abdominalmulher.style.border ="2px solid red"
        spanObrigatorioAbdominalmulher.style.display = "block"
        resultado.textContent = ""
    }
    else{
        abdominalmulher.style.border ="2px solid green"
    }
    if(isNaN(abdominalmulher.value)){
        abdominalmulher.style.border ="2px solid red"
        resultado.textContent = ""
    }

    if(suprailiacahomem.value == ""){
        suprailiacahomem.style.border ="2px solid red"
        spanObrigatorioSuprailiacahomem.style.display = "block"
        resultado.textContent = ""
    }
    else{
        suprailiacahomem.style.border ="2px solid green"
    }
    if(isNaN(suprailiacahomem.value)){
        suprailiacahomem.style.border = "2px solid red"
        resultado.textContent = ""
    }
    if(suprailiacamulher.value == ""){
        suprailiacamulher.style.border ="2px solid red"
        spanObrigatorioSuprailiacamulher.style.display = "block"
        resultado.textContent = ""
    }
    else{
        suprailiacamulher.style.border ="2px solid green"
    }
    if(isNaN(suprailiacamulher.value)){
        suprailiacamulher.style.border = "2px solid red"
        resultado.textContent = ""
    }

    if(coxaHomem.value == ""){
        coxaHomem.style.border ="2px solid red"
        spanObrigatorioCoxaHomem.style.display = "block"
        resultado.textContent = ""
    }
    else{
        coxaHomem.style.border ="2px solid green"
        
    }
    if(isNaN(coxaHomem.value)){
        coxaHomem.style.border = "2px solid red"
        resultado.textContent = ""
    }

    if(coxaMulher.value == ""){
        coxaMulher.style.border ="2px solid red"
        spanObrigatorioCoxaMulher.style.display = "block"
        resultado.textContent = ""
    }
    else{
        coxaMulher.style.border ="2px solid green"
    }
    if(isNaN(coxaMulher.value)){
        valorinvalidoCoxaMulher.style.display ="block"
        coxaMulher.style.border ="2px solid red"
        resultado.textContent = ""
    }

}

function validateidade(){
    if(idade.value > 120 || isNaN(idade.value) || idade.value ==""){
        idade.style.border ="2px solid red"
        spanObrigatorioidade.style.display = "none"
        resultado.textContent = ""
    }
    else{
        idade.style.border ="2px solid green"
        spanObrigatorioidade.style.display = "none"
    }
    if(isNaN(idade.value)){
        valorinvalidoidade.style.display ="block"
        resultado.textContent = ""
    }
    else{
        valorinvalidoidade.style.display ="none"
    }
}
function validatepeso(){
    if(isNaN(peso.value)){
        peso.style.border ="2px solid red"
        valorinvalidopeso.style.display ="block"
        resultado.textContent = ""
    }
    else{
        valorinvalidopeso.style.display ="none"
        peso.style.border ="2px solid green"
    }
    if(peso.value ==""){
        peso.style.border ="2px solid black"
    }
    
}
function validatepeitoral(){
    if(peitoral.value > 80 || isNaN(peitoral.value) || peitoral.value == ""){
        peitoral.style.border ="2px solid red"
        spanObrigatorioPeitoral.style.display ="none"
        resultado.textContent = ""
        
    }
    else{
        peitoral.style.border ="2px solid green"
        spanObrigatorioPeitoral.style.display = "none"
    }
    if(isNaN(peitoral.value)){
        valorinvalidoPeitoral.style.display ="block"
        peitoral.style.border ="2px solid red"
        resultado.textContent = ""
    }
    else{
        valorinvalidoPeitoral.style.display ="none"
    }
}
function validatetriceps(){
    if(triceps.value > 80 || isNaN(triceps.value) || triceps.value == ""){
        triceps.style.border ="2px solid red"
        spanObrigatorioTriceps.style.display ="none"
        resultado.textContent = ""
    }
    else{
        triceps.style.border ="2px solid green"
        spanObrigatorioTriceps.style.display = "none"
    }
    if(isNaN(triceps.value)){
        valorinvalidoTriceps.style.display = "block"
        triceps.style.border ="2px solid red"
        resultado.textContent = ""
    }
    else{
        valorinvalidoTriceps.style.display = "none"
    }

}
function validateabdominalhomem(){
    if(abdominalhomem.value > 80 || isNaN(abdominalhomem.value) || abdominalhomem.value == ""){
        abdominalhomem.style.border ="2px solid red"
        spanObrigatorioAbdominalhomem.style.display ="none"
        resultado.textContent = ""
    }
    else{
        abdominalhomem.style.border ="2px solid green"
        spanObrigatorioAbdominalhomem.style.display = "none"
    }
    if(isNaN(abdominalhomem.value)){
        valorinvalidoAbdominalhomem.style.display ="block"
        abdominalhomem.style.border ="2px solid red"
        resultado.textContent = ""
    }
    else{
        valorinvalidoAbdominalhomem.style.display ="none"
    }


}
function validateabdominalmulher(){
    if(abdominalmulher.value > 80 || isNaN(abdominalmulher.value) || abdominalmulher.value == ""){
        abdominalmulher.style.border ="2px solid red"
        spanObrigatorioAbdominalmulher.style.display ="none"
        resultado.textContent = ""
    }
    else{
        abdominalmulher.style.border ="2px solid green"
        spanObrigatorioAbdominalmulher.style.display = "none"
    }
    if(isNaN(abdominalmulher.value)){
        valorinvalidoAbdominalmulher.style.display ="block"
        abdominalmulher.style.border ="2px solid red"
        resultado.textContent = ""
    }
    else{
        valorinvalidoAbdominalmulher.style.display ="none"
    }


}
function validatecoxahomem(){
    if(coxaHomem.value > 80 || isNaN(coxaHomem.value) || coxaHomem.value == ""){
        coxaHomem.style.border ="2px solid red"
        spanObrigatorioCoxaHomem.style.display ="none"
        resultado.textContent = ""
    }
    else{
        coxaHomem.style.border ="2px solid green"
        spanObrigatorioCoxaHomem.style.display = "none"
    }
    if(isNaN(coxaHomem.value)){
        valorinvalidoCoxaHomem.style.display ="block"
        coxaHomem.style.border ="2px solid red"
        resultado.textContent = ""
    }
    else{
        valorinvalidoCoxaHomem.style.display ="none"
    }
}
function validatecoxamulher(){
    if(coxaMulher.value > 80 || isNaN(coxaMulher.value) || coxaMulher.value == ""){
        coxaMulher.style.border ="2px solid red"
        spanObrigatorioCoxaMulher.style.display ="none"
        resultado.textContent = ""
    }
    else{
        coxaMulher.style.border ="2px solid green"
        spanObrigatorioCoxaMulher.style.display = "none"
    }
    if(isNaN(coxaMulher.value)){
        valorinvalidoCoxaMulher.style.display ="block"
        coxaMulher.style.border ="2px solid red"
        resultado.textContent = ""
    }
    else{
        valorinvalidoCoxaMulher.style.display ="none"
    }
}
function validatesuprailiacahomem(){
    if(suprailiacahomem.value > 80 || isNaN(suprailiacahomem.value) || suprailiacahomem.value == ""){
        suprailiacahomem.style.border ="2px solid red"
        spanObrigatorioSuprailiacahomem.style.display ="none"
        resultado.textContent = ""
    }
    else{
        suprailiacahomem.style.border ="2px solid green"
        spanObrigatorioSuprailiacahomem.style.display = "none"
    }
    if(isNaN(suprailiacahomem.value)){
        suprailiacahomem.style.border = "2px solid red"
        valorinvalidoSuprailiacahomem.style.display ="block"
        resultado.textContent = ""
    }
    else{
        valorinvalidoSuprailiacahomem.style.display ="none"
    }
}
function validatesuprailiacamulher(){
    if(suprailiacamulher.value > 80 || isNaN(suprailiacamulher.value) || suprailiacamulher.value == ""){
        suprailiacamulher.style.border ="2px solid red"
        spanObrigatorioSuprailiacamulher.style.display ="none"
        resultado.textContent = ""
    }
    else{
        suprailiacamulher.style.border ="2px solid green"
        spanObrigatorioSuprailiacamulher.style.display = "none"
    }
    if(isNaN(suprailiacamulher.value)){
        suprailiacamulher.style.border = "2px solid red"
        valorinvalidoSuprailiacamulher.style.display ="block"
        resultado.textContent = ""
    }
    else{
        valorinvalidoSuprailiacamulher.style.display ="none"
    }
}