const homepopup = document.getElementById("homePopup");
const botonx = document.getElementById("popup-x")
const body = document.getElementById("index-body")
const diasHtml = document.getElementById("dias")
const horasHtml = document.getElementById("horas")
const minutosHtml = document.getElementById("minutos")
const segundosHtml = document.getElementById("segundos")
// const sabadoHtml = document.getElementById("sabado")


botonx.addEventListener('click', () => {
    homepopup.classList.add("invisible")
    body.classList.remove("negro");
})
console.log(botonx);

setTimeout(() => {
    homepopup.classList.remove("invisible")
    body.classList.add("negro")
    console.log(homepopup);
}, 2000)


// tener fecha prox sabado
function obtenerSabado() {
  var fechaActual = new Date();
  var diasParaSabado = 6 - fechaActual.getDay() + 1; // Dias hasta el prox sabado
  var proximoSabado = new Date(fechaActual.getTime() + diasParaSabado * 24 * 60 * 60 * 1000);
  proximoSabado.setHours(9, 0, 0, 0); // poner la hora del partido
  return proximoSabado;
}

// Funcion para calcular y mostrar el contador en reversa
function actualizarContador() {
  var ahora = new Date();
  var proximoSabado = obtenerSabado();
  var diferencia = proximoSabado.getTime() - ahora.getTime();

  var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  diasHtml.textContent = dias;
  horasHtml.textContent = horas;
  minutosHtml.textContent = minutos;
  segundosHtml.textContent = segundos;
}


// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);

// Iniciar el contador al cargar la pagina
actualizarContador();

// function Sabado(){
//   var ahora = new Date();
//   var proximoSabado = obtenerSabado();
//   var sabadoPartido = proximoSabado.getTime() + ahora.getTime();
//   sabadoHtml.textContent = sabadoPartido;
// }