import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabase = createClient('https://thgcusmwbavdcuyotqxc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZ2N1c213YmF2ZGN1eW90cXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2NjYzOTAsImV4cCI6MjAxNDI0MjM5MH0.Ekd9wURADgAVccw6uyqwwH7cdySXLjxFvBlbWwmupwM')


// document.addEventListener( 'DOMContentLoaded', function() {
//   console.log("hola");
//   var splide = new Splide( '.splide' );
//   splide.mount();
// } );


async function Listar(tabla){
  const { data, error } = await supabase
  .from(tabla)
  .select()
  //se guardan en data
  return data;
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
});
const nombre=document.getElementById("nombre_arquero");
const apellido=document.getElementById("apellido_arquero");
const Numero=document.getElementById("numero_arquero");
const imagen=document.getElementById("imagen_arquero");
nombre.innerText=Arquero.Nombre;
apellido.innerText=Arquero.Apellido;
Numero.innerText=Arquero.Numero;
imagen.setAttribute("src",Arquero.Foto);

let i=0;
while(i<Defensores.length){
console.log(Defensores[i].Nombre);
const nombre_defensa=document.getElementById("nombre_defensa_"+(i+1));
const apellido_defensa=document.getElementById("apellido_defensa_"+(i+1));
const Numero_defensa=document.getElementById("numero_defensa_"+(i+1));
const imagen_defensa=document.getElementById("imagen_defensa_"+(i+1));
nombre_defensa.innerText= Defensores[i].Nombre;
apellido_defensa.innerText=Defensores[i].Apellido;
Numero_defensa.innerText=Defensores[i].Numero;
imagen_defensa.setAttribute("src",Defensores[i].Foto);
i++;
}

i=0;
while(i<Mediocampistas.length){
console.log("a");
const nombre_medio=document.getElementById("nombre_medio_"+(i+1));
const apellido_medio=document.getElementById("apellido_medio_"+(i+1));
const Numero_medio=document.getElementById("numero_medio_"+(i+1));
const imagen_medio=document.getElementById("imagen_medio_"+(i+1));
nombre_medio.innerText=Mediocampistas[i].Nombre;
apellido_medio.innerText=Mediocampistas[i].Apellido;
Numero_medio.innerText=Mediocampistas[i].Numero;
imagen_medio.setAttribute("src",Mediocampistas[i].Foto);
i++;
}
}

window.addEventListener('load', equipo());