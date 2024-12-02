let tresmulher = document.querySelector(".tresmulher")
let treshomem = document.querySelector(".treshomem")

let triceps = document.querySelector("#triceps")
let suprailiaca = document.querySelector("#suprailíaca")
let peitoral = document.querySelector("#peitoral")
let abdominal = document.querySelector("#abdominal")
let coxaMulher = document.querySelector("#coxamulher")
let coxaHomem = document.querySelector("#coxahomem")

let idade = document.querySelector("#idade")
let peso = document.querySelector("#peso")

let botao = document.querySelector("#buttoncalcular")

let resultado = document.querySelector("#resultado")
let titulopg = document.querySelector("#titulopg")

let spanObrigatorioidade = document.querySelector("#obrigatorioidade")
let spanObrigatorioSuprailiaca = document.querySelector("#obrigatoriosuprailiaca")
let spanObrigatorioPeitoral = document.querySelector("#obrigatoriopeitoral")
let spanObrigatorioTriceps = document.querySelector("#obrigatoriotriceps")
let spanObrigatorioAbdominal = document.querySelector("#obrigatorioabdominal")
let spanObrigatorioCoxaHomem = document.querySelector("#obrigatoriocoxahomem")
let spanObrigatorioCoxaMulher = document.querySelector("#obrigatoriocoxamulher")

let valorinvalidoidade = document.querySelector("#valorinvalidoidade")
let valorinvalidoSuprailiaca = document.querySelector("#valorinvalidosuprailiaca")
let valorinvalidoPeitoral = document.querySelector("#valorinvalidopeitoral")
let valorinvalidoTriceps = document.querySelector("#valorinvalidotriceps")
let valorinvalidoAbdominal = document.querySelector("#valorinvalidoabdominal")
let valorinvalidoCoxaHomem = document.querySelector("#valorinvalidocoxahomem")
let valorinvalidoCoxaMulher = document.querySelector("#valorinvalidocoxamulher")
let valorinvalidopeso = document.querySelector("#valorinvalidopeso")

botao.addEventListener("click", showerror)

const button = document.querySelector("#buttonmenu")
const menumobile = document.querySelector("#menumobile")

function HandleClick(){
    button.classList.toggle("active")
    menumobile.classList.toggle("active")
}

function getelementsexo(){
    let radio = document.getElementsByName("sexo")
    for(i = 0; i < radio.length; i++){
        if(radio[i].checked){
            if(radio[i].value == "Homem"){
                tresmulher.style.display = "none"
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
                    if(isNaN(abdominal.value)){
                        return
                    }
                    if(abdominal.value == ""){
                        return
                    }
                    if(isNaN(coxaHomem.value)){
                        return
                    }
                    if(coxaHomem.value == ""){
                        return
                    }

                    let somaHomem = Number(peitoral.value) + Number(abdominal.value) + Number(coxaHomem.value) 
                    
                    let dc = 1.1093800 - 0.0008267*(somaHomem) + 0.0000016*(somaHomem**2)-0.0002574 * Number(idade.value)
                    let pg = (495/dc) - 450

                    resultado.innerHTML = `${pg.toFixed(2)} ${"%"}`

                }
                triceps.value = ""
                suprailiaca.value = ""
                coxaMulher.value = ""
                resultado.textContent = ""
            }
            else{
                tresmulher.style.display = "block"
            }
            if(radio[i].value == "Mulher"){
                treshomem.style.display = "none"
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
                    if(isNaN(suprailiaca.value)){
                        return
                    }
                    if(suprailiaca.value == ""){
                        return
                    }
                    if(isNaN(coxaMulher.value)){
                        return
                    }
                    if(coxaMulher.value == ""){
                        return
                    }

                    let somaMulher = Number(triceps.value) + Number(suprailiaca.value) + Number(coxaMulher.value) 
                
                    let dc = 1.0994921 - 0.0009929*(somaMulher) + 0.0000023*(somaMulher**2)-0.0001392 * Number(idade.value)
                    let pg = (495/dc) - 450

                    resultado.innerHTML = `${pg.toFixed(2)} ${"%"}`
                }
                peitoral.value = ""
                abdominal.value = ""
                coxaHomem.value = ""
                resultado.textContent = ""
            }
            else{
                treshomem.style.display = "block"
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

    if(abdominal.value == ""){
        abdominal.style.border ="2px solid red"
        spanObrigatorioAbdominal.style.display = "block"
        resultado.textContent = ""
    }
    else{
        abdominal.style.border ="2px solid green"
    }
    if(isNaN(abdominal.value)){
        abdominal.style.border ="2px solid red"
        resultado.textContent = ""
    }

    if(suprailiaca.value == ""){
        suprailiaca.style.border ="2px solid red"
        spanObrigatorioSuprailiaca.style.display = "block"
        resultado.textContent = ""
    }
    else{
        suprailiaca.style.border ="2px solid green"
    }
    if(isNaN(suprailiaca.value)){
        suprailiaca.style.border = "2px solid red"
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
function validateabdominal(){
    if(abdominal.value > 80 || isNaN(abdominal.value) || abdominal.value == ""){
        abdominal.style.border ="2px solid red"
        spanObrigatorioAbdominal.style.display ="none"
        resultado.textContent = ""
    }
    else{
        abdominal.style.border ="2px solid green"
        spanObrigatorioAbdominal.style.display = "none"
    }
    if(isNaN(abdominal.value)){
        valorinvalidoAbdominal.style.display ="block"
        abdominal.style.border ="2px solid red"
        resultado.textContent = ""
    }
    else{
        valorinvalidoAbdominal.style.display ="none"
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
function validatesuprailiaca(){
    if(suprailiaca.value > 80 || isNaN(suprailiaca.value) || suprailiaca.value == ""){
        coxaHomem.style.border ="2px solid red"
        spanObrigatorioSuprailiaca.style.display ="none"
        resultado.textContent = ""
    }
    else{
        suprailiaca.style.border ="2px solid green"
        spanObrigatorioSuprailiaca.style.display = "none"
    }
    if(isNaN(suprailiaca.value)){
        suprailiaca.style.border = "2px solid red"
        valorinvalidoSuprailiaca.style.display ="block"
        resultado.textContent = ""
    }
    else{
        valorinvalidoSuprailiaca.style.display ="none"
    }
}