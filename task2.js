console.log("hola")
function getFormvalue(event){
event.preventDefault() 
//toma los valores de entrada
const form = event.target;
const name = form.elements["fname"].value;
const lastName = form.elements["lname"].value;
//Se muestran en la consola las entradas
console.log(name);
console.log(lastName);
};