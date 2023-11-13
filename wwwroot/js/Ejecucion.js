const Jugadores=Listar("Jugador");
const Delanteros=[];
const Defensores=[];
let Arquero=null;
const Mediocampistas=[];

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

const carta_arquero=document.getElementById("Arquero");
carta_arquero.innerText='<div class="equipo__carta equipo__carta--2"><img src='+Arquero.Foto+'class="equipo__carta--img"><div class="carta__cuerpo"><div class="carta__nombres"><h5 class="carta__nombre">'+jugador.Nombre+'</h5><h4 class="carta__apellido">'+jugador.Apellido+'</h4></div><h3 class="carta__numero">'+jugador.Numero+'</h3></div></div>';



 
