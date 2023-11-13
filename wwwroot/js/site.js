import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabase = createClient('https://thgcusmwbavdcuyotqxc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZ2N1c213YmF2ZGN1eW90cXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2NjYzOTAsImV4cCI6MjAxNDI0MjM5MH0.Ekd9wURADgAVccw6uyqwwH7cdySXLjxFvBlbWwmupwM')

// import Splide from '@splidejs/splide';

// var splide = new Splide( '.splide', {
//   type   : 'loop',
//   perPage: 4,
//   perMove: 1,
// } );

// splide.mount();



async function Listar(tabla){
  const { data, error } = await supabase
  .from(tabla)
  .select()
  //se guardan en data
  return data;
}


const formInsertar = document.getElementById("form-insertar");
async function InsertarJugador(){
  const nombre = document.getElementById("nombreJugador").value;
  const apellido = document.getElementById("apellidoJugador").value;
  const numero = document.getElementById("numeroJugador").value;
  const posicion = document.getElementById("posicionJugador").value;
  const link_foto = document.getElementById("foto_Jugador").value;

const { error } = await supabase
.from('Jugador')
.insert({Nombre: nombre,Numero:numero, Posicion:posicion,Foto:link_foto,Apellido:apellido})
}
async function equipo(){
const Jugadores=await Listar("Jugador");
const Delanteros=[];
const Defensores=[];
let Arquero=null;
const Mediocampistas=[];
console.log(Jugadores);

Jugadores.forEach(jugador => {
  switch(jugador.Posicion){
    case 0:
      Arquero=jugador;
      break;
    case 1:
      Defensores.push(jugador);
      break;
    case 2:
      Mediocampistas.push(jugador);
      break;
    case 3:
      Delanteros.push(jugador);
      break;
  }
  console.log(jugador.Posicion, "AAAAAAAAA");
});
const carta_arquero=document.getElementById("Arquero");
carta_arquero.innerHTML=`<div class="equipo__carta equipo__carta--2"><img src=${Arquero.Foto} class="equipo__carta--img"><div class="carta__cuerpo"><div class="carta__nombres"><h5 class="carta__nombre">${Arquero.Nombre}</h5><h4 class="carta__apellido">${Arquero.Apellido}</h4></div><h3 class="carta__numero">${Arquero.Numero}</h3></div></div>`;
const nombre_defensa_1=document.getElementById("nombre_defensa_1");
nombre_defensa_1.innerText=Defensores[0].Nombre;
}

window.addEventListener('load', equipo());