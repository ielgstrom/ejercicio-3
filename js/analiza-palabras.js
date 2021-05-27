/* Crea tu función aquí */
function analizaPalabras(palabras) {
  let contenido = "#######";
  for (const i in palabras) {
    contenido += `\nPalabra ${i}: ${palabras[i]}`;
    contenido += `\nNº de caacteres: ${longitud(palabras[i])}`;
    contenido += `\nDeletreo ${deletreo(palabras[i])}`;
    contenido += `\n${parMayus(palabras[i])}`;
    contenido += `\n${tieneBle(palabras[i])}`;
    contenido += "\n#######";
  }
  return contenido;

function numeroCaracteres(palabra){
  return palabra.length;
}

function deletreado(palabra){
 return palabra.split("").join("-").toLowerCase();
}

function parYMayuscula(palabra){
  let par = "";
  let mayuscula = "";
  if (palabra.length % 2 === 0) {
    par = "par";
  } else {
    par = "impar";
  }
  if (palabra[0] === palabra[0].toUpperCase()) {
    mayuscula = "empieza";
  } else {
    mayuscula = "no empieza";
  }
  return `La palabra es ${par} y ${mayuscula} por mayúscula`;
}
function teineBle(palabra) {
  if (palabra.includes("ble")) {
    return `La palaba sí contiene "ble"`;
  } else {
    return `La palaba no contiene "ble"`;
  }
}

