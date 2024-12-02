let triceps = document.querySelector("#triceps")
let suprailiaca = document.querySelector("#suprailíaca")
let peitoral = document.querySelector("#peitoral")
let abdominal = document.querySelector("#abdominal")
let coxa = document.querySelector("#coxa")
let axilar = document.querySelector("#axilarmedia")
let escapular = document.querySelector("#subescapular")

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
let spanObrigatorioCoxa = document.querySelector("#obrigatoriocoxa")
let spanObrigatorioAxilarMedia = document.querySelector("#obrigatorioaxilarmedia")
let spanObrigatorioSubescapular = document.querySelector("#obrigatoriosubescapular")

let valorinvalidoidade = document.querySelector("#valorinvalidoidade")
let valorinvalidoSuprailiaca = document.querySelector("#valorinvalidosuprailiaca")
let valorinvalidoPeitoral = document.querySelector("#valorinvalidopeitoral")
let valorinvalidoTriceps = document.querySelector("#valorinvalidotriceps")
let valorinvalidoAbdominal = document.querySelector("#valorinvalidoabdominal")
let valorinvalidoCoxa = document.querySelector("#valorinvalidocoxa")
let valorinvalidosubescapular = document.querySelector("#valorinvalidosubescapular")
let valorinvalidoaxilarmedia = document.querySelector("#valorinvalidoaxilarmedia ")
let valorinvalidopeso = document.querySelector("#valorinvalidopeso")

botao.addEventListener("click", showerror)
botao.addEventListener("click", somar)

const button = document.querySelector("#buttonmenu")
const menumobile = document.querySelector("#menumobile")

function HandleClick(){
    button.classList.toggle("active")
    menumobile.classList.toggle("active")
}

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
    if(isNaN(coxa.value)){
        return
    }
    if(coxa.value == ""){
        return
    }
    if(isNaN(escapular.value)){
        return
    }
    if(escapular.value == ""){
        return
    }
    if(isNaN(axilar.value)){
        return
    }
    if(axilar.value == ""){
        return
    }

    let soma = Number(triceps.value) + Number(suprailiaca.value) + Number(escapular.value) + Number(abdominal.value) + Number(coxa.value) + Number(axilar.value) + Number(peitoral.value)
    let dc = 1.112 - 0.00043499 * (soma) + 0.00000055 * (soma) * 2 - 0.00028826 * Number(idade.value)

    let pg = (495/dc) - 450

    resultado.innerHTML = `${pg.toFixed(2)} ${"%"}`
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

    if(coxa.value == ""){
        coxa.style.border ="2px solid red"
        spanObrigatorioCoxa.style.display = "block"
        resultado.textContent = ""
    }
    else{
        coxa.style.border ="2px solid green"
        
    }
    if(isNaN(coxa.value)){
        coxa.style.border = "2px solid red"
        resultado.textContent = ""
    }
    if(escapular.value == ""){
        escapular.style.border ="2px solid red"
        spanObrigatorioSubescapular.style.display = "block"
        resultado.textContent = ""
    }
    else{
        escapular.style.border ="2px solid green"
        
    }
    if(isNaN(escapular.value)){
        escapular.style.border = "2px solid red"
        resultado.textContent = ""
    }
    if(axilar.value == ""){
        axilar.style.border ="2px solid red"
        spanObrigatorioAxilarMedia.style.display = "block"
        resultado.textContent = ""
    }
    else{
        axilar.style.border ="2px solid green"
        
    }
    if(isNaN(axilar.value)){
        axilar.style.border = "2px solid red"
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
function validatecoxa(){
    if(coxa.value > 80 || isNaN(coxa.value) || coxa.value == ""){
        coxa.style.border ="2px solid red"
        spanObrigatorioCoxa.style.display ="none"
        resultado.textContent = ""
    }
    else{
        coxa.style.border ="2px solid green"
        spanObrigatorioCoxa.style.display = "none"
    }
    if(isNaN(coxa.value)){
        valorinvalidoCoxa.style.display ="block"
        coxa.style.border ="2px solid red"
        resultado.textContent = ""
    }
    else{
        valorinvalidoCoxa.style.display ="none"
    }
}
function validatesuprailiaca(){
    if(suprailiaca.value > 80 || isNaN(suprailiaca.value) || suprailiaca.value == ""){
        suprailiaca.style.border ="2px solid red"
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
function validatesubescapular(){
    if(escapular.value > 80 || isNaN(escapular.value) || escapular.value == ""){
        escapular.style.border ="2px solid red"
        spanObrigatorioSubescapular.style.display ="none"
        resultado.textContent = ""
    }
    else{
        escapular.style.border ="2px solid green"
        spanObrigatorioSubescapular.style.display = "none"
    }
    if(isNaN(escapular.value)){
        escapular.style.border = "2px solid red"
        valorinvalidosubescapular.style.display ="block"
        resultado.textContent = ""
    }
    else{
        valorinvalidosubescapular.style.display ="none"
    }
}
function validateaxilarmedia(){
    if(axilar.value > 80 || isNaN(axilar.value) || axilar.value == ""){
        axilar.style.border ="2px solid red"
        spanObrigatorioAxilarMedia.style.display ="none"
        resultado.textContent = ""
    }
    else{
        axilar.style.border ="2px solid green"
        spanObrigatorioAxilarMedia.style.display = "none"
    }
    if(isNaN(axilar.value)){
        axilar.style.border = "2px solid red"
        valorinvalidoaxilarmedia.style.display ="block"
        resultado.textContent = ""
    }
    else{
        valorinvalidoaxilarmedia.style.display ="none"
    }
}
