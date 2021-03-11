//cipher es un objeto
const cipher = {
  cifrar,descifrar,
}
function cifrar(msmUsuario, desplaz) {
  let string = msmUsuario;
  let offset = desplaz;
  let theChain = string.length - 1;

  var nuevaCadena = ""

  for (let recor = 0; recor <= theChain; recor++) {
    let ascii = string.charCodeAt(recor);
    let suma = ascii + offset;
    //if(suma<65){
     // suma =32;
    //  }
    let msmCodif = String.fromCharCode(suma)
    //console.log(msmCodif)
    nuevaCadena = nuevaCadena + msmCodif;
    
  }
  console.log(nuevaCadena);
  return nuevaCadena;
}

function descifrar(msmUsuario2, desplaz2) {
  let string = msmUsuario2;
  let offset = desplaz2;
  let theChain = string.length - 1;

  var nuevaCadena = ""

  for (let recor = 0; recor <= theChain; recor++) {
    let ascii = string.charCodeAt(recor);
    let suma = ascii - offset;
    //if(suma<65){
   //   suma =32;
   // }
      
    let msmCodif = String.fromCharCode(suma)
    console.log(msmCodif)
    nuevaCadena = nuevaCadena + msmCodif;
    
  }
  console.log(nuevaCadena);
  return nuevaCadena;
}

export default cipher;