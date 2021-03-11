import cipher from './cipher.js';

const btninicio1 = document.getElementById("btniniciocifrar");
btninicio1.addEventListener("click", function () {
  mostrarcifrar()
})
const btninicio2 = document.getElementById("btniniciodescif");
btninicio2.addEventListener("click", function () {
  mostrardescifrar()
})

const btncopiar= document.querySelector(".btncopiar");
const resultado= document.querySelector(".resultado");
btncopiar.addEventListener("click", function () {
  resultado.focus();
  document.execCommand("selectAll");
  document.execCommand("copy"); 
})

const btncopiar2= document.querySelector(".btncopiar2");
const resultado2= document.querySelector(".resultado2");
btncopiar2.addEventListener("click", function () {
  resultado2.focus();
  document.execCommand("selectAll");
  document.execCommand("copy"); 
})


function mostrarcifrar() { 
  btninicio.style.display = "none";
 descripcion.style.display="none";
 divcifrar.style.display = "block";
  
}

function mostrardescifrar() {
  btninicio.style.display = "none";
  descripcion.style.display="none";
  divdescif.style.display = "block";
  
}

const btncif = document.getElementById("btncif");
btncif.addEventListener("click", x);

const btndescif = document.getElementById("btndescif");
btndescif.addEventListener("click", y);

function x() {
  event.preventDefault()
  let msmUsuario = document.getElementById("msm").value;
  let clave = parseInt(document.getElementById("clave").value);

  let msmCifrado = cipher.cifrar(msmUsuario, clave);
  //console.log(msmCifrado);
  document.getElementById("resultado1").innerHTML = msmCifrado;
  console.log(cipher);

}

function y() {
  event.preventDefault()
  let msmUsuario2 = document.getElementById("msm2").value;
  let clave2 = parseInt(document.getElementById("clave2").value);

  let msmCifrado2 = cipher.descifrar(msmUsuario2, clave2);
  document.getElementById("resultado2").innerHTML = msmCifrado2;
  console.log(cipher);
}