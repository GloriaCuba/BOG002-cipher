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

let btninicio= document.getElementById("btninicio");
let descripcion= document.getElementById("descripcion");
let divcifrar= document.getElementById("divcifrar");
let divdescif= document.getElementById("divdescif");

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
try {
  let msmCifrado = cipher.encode(msmUsuario, clave);
  //console.log(msmCifrado);
  document.getElementById("resultado1").innerHTML = msmCifrado;
  /*console.log(cipher);*/
  }
catch(TypeError){
  alert("Ingrese todos los campos");
}
}


function y() {
  event.preventDefault()
  let msmUsuario2 = document.getElementById("msm2").value;
  let clave2 = parseInt(document.getElementById("clave2").value);
try {
  
  let msmCifrado2 = cipher.decode(msmUsuario2, clave2);
  document.getElementById("resultado2").innerHTML = msmCifrado2;
  /*console.log(cipher);*/
}
catch(TypeError){
  alert("Ingrese todos los campos");
}
}
const mostrardescrip = document.getElementById("descrip"),
  overlay = document.getElementById("overlay"),
  entendido = document.getElementById("entendido");

mostrardescrip.addEventListener("click", function(){
 overlay.classList.add('active');
})

entendido.addEventListener("click", function(){
 overlay.classList.remove('active');
}
)