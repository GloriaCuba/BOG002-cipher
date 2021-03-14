//cipher es un objeto
const cipher = {
  encode,decode,
}
function encode(msmUsuario, clave) {
  let string = msmUsuario;
  let offset = clave;
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
  return nuevaCadena;
}

function decode(msmUsuario2, clave2) {
  let string = msmUsuario2;
  let offset = clave2;
  let theChain = string.length - 1;

  var nuevaCadena = ""

  for (let recor = 0; recor <= theChain; recor++) {
    let ascii = string.charCodeAt(recor);
    let suma = ascii - offset;
    //if(suma<65){
   //   suma =32;
   // }
      
    let msmCodif = String.fromCharCode(suma)
    nuevaCadena = nuevaCadena + msmCodif;
    
  }
  /*console.log(nuevaCadena);*/
  return nuevaCadena;
}

export default cipher;