console.log("Hola, Fernando")
const btn = document.getElementById("changeBtn")

function extraer (){
const aLinks = document.getElementsByTagName("a");
const linksComplete = aLinks.length;
const primerEnlace = aLinks[0].href;           
const ultimoEnlace = aLinks[linksComplete - 1].href;
alert(`Enlaces: ${linksComplete}\nPrimer enlace: ${primerEnlace}\nÚltimo enlace: ${ultimoEnlace}`);

}


//Asignar evento al hacer click
btn.addEventListener("click", extraer )



