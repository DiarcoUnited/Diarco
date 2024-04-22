import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabase = createClient('https://thgcusmwbavdcuyotqxc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZ2N1c213YmF2ZGN1eW90cXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2NjYzOTAsImV4cCI6MjAxNDI0MjM5MH0.Ekd9wURADgAVccw6uyqwwH7cdySXLjxFvBlbWwmupwM')


// document.addEventListener( 'DOMContentLoaded', function() {
//   console.log("hola");
//   var splide = new Splide( '.splide' );
//   splide.mount();
// } );


export async function Listar(tabla){
  const { data, error } = await supabase
  .from(tabla)
  .select()
  //se guardan en data
  return data;
}

async function ListarPartidos(){
  const { data, error } = await supabase
  .from('Partido')
  .select()
  .order('Fecha',{ascending:false})
  return data;
}

export async function ListarJugadores(columna){
  const { data, error } = await supabase
  .from('Jugador')
  .select()
  .order(columna,{ascending:false})
  return data;
}

async function ListarRivalesTorneo(tabla,idTorneo){
  const { data, error } = await supabase
  .from(tabla)
  .select()
  .eq('id_torneo', idTorneo)
  .order('puntos',{ascending:false})
  return data;
}



async function equipo(){
const Jugadores=await Listar("Jugador");
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

  i=0;
  while(i<Delanteros.length){
  const nombre_delan=document.getElementById("nombre_delan_"+(i+1));
  const apellido_delan=document.getElementById("apellido_delan_"+(i+1));
  const Numero_delan=document.getElementById("numero_delan_"+(i+1));
  const imagen_delan=document.getElementById("imagen_delan_"+(i+1));
  nombre_delan.innerText=Delanteros[i].Nombre;
  apellido_delan.innerText=Delanteros[i].Apellido;
  Numero_delan.innerText=Delanteros[i].Numero;
  imagen_delan.setAttribute("src",Delanteros[i].Foto);
  i++;
}}


if(window.location.pathname=="/Home/Equipo"){
equipo();
}

if(window.location.pathname=="/Home/Tienda"){
Tienda();
}

if(window.location.pathname=="/Home/Torneo"){
  Torneo();
}
if(window.location.pathname=="/Home/Historial"){
  Historial();
}

async function Tienda(){
  const Productos=await Listar("Producto");
  console.log(Productos);
  let i=0;
  while(i<Productos.length){
    const nombre_producto=document.getElementById("nombre_producto_"+(i+1));
    const foto_producto=document.getElementById("foto_producto_"+(i+1));
    const precio_producto=document.getElementById("precio_producto_"+(i+1));
    nombre_producto.innerText=Productos[i].nombre;
    foto_producto.setAttribute("src",Productos[i].foto);
    precio_producto.innerText="$ "+Productos[i].precio;
    i++;
  }
}

async function Torneo(){
  const Rivales=await Listar("Rival");
  const RivalXTorneo=await ListarRivalesTorneo('RivalXTorneo',1);
  let i=0;
  const tabla=document.getElementById("TablaTorneo");
  let contenidotabla = [];
  while(i<RivalXTorneo.length){
    console.log(Rivales[i].foto);
    if(Rivales[i].nombre!='Diarco'){
    contenidotabla.push(
      `<tr>
        <td>${i+1}</td>
        <td><img src="${Rivales[RivalXTorneo[i].id_rival-1].foto}" class="escudo"></img></td>
        <td class="torneo__equipo"><h3>${Rivales[RivalXTorneo[i].id_rival-1].nombre}</h3></td>
        <td>${RivalXTorneo[i].puntos}</td>
        <td>${(RivalXTorneo[i].ganados + RivalXTorneo[i].perdidos + RivalXTorneo[i].empatados)}</td>
        <td>${RivalXTorneo[i].ganados}</td>
        <td>${RivalXTorneo[i].empatados}</td>
        <td>${RivalXTorneo[i].perdidos}</td>
        <td>${RivalXTorneo[i].golesFavor}</td>
        <td>${RivalXTorneo[i].golesContra}</td>
        <td>${(RivalXTorneo[i].golesFavor - RivalXTorneo[i].golesContra)}</td>
      </tr>`
    )
    }else{
      contenidotabla.push(
        `<tr class="amarillo">
          <td>${i+1}</td>
          <td><img src="${Rivales[RivalXTorneo[i].id_rival-1].foto}" class="escudo"></img></td>
          <td class="torneo__equipo"><h3>${Rivales[RivalXTorneo[i].id_rival-1].nombre}</h3></td>
          <td>${RivalXTorneo[i].puntos}</td>
          <td>${(RivalXTorneo[i].ganados + RivalXTorneo[i].perdidos + RivalXTorneo[i].empatados)}</td>
          <td>${RivalXTorneo[i].ganados}</td>
          <td>0</td>
          <td>0</td>
          <td>3</td>
          <td>1</td>
          <td>2</td>
        </tr>`
      )
    }
    i++;
  }
  tabla.innerHTML=contenidotabla;
}

async function Historial(){
  const Partidos=await ListarPartidos();
  const Torneos=await Listar('Torneo');
  const Rivales=await Listar('Rival');
  let i=0;
  const tabla=document.getElementById("tabla_historial");
  let contenidoHistorial=[];
  while(i<Partidos.length){
    contenidoHistorial.push(
    `<article class="historial__partido">
    <h3 class="partidoH__titulo">${Torneos[(Partidos[i].torneo_id-1)].Nombre}</h3>

    <div class="partidoH__info">
        <div class="partidoH__equipos">
            <div class="partidoH__equipo">
                <div class="partidoH__equipo--wrapper">
                    <img class="partidoH__logo" src="${Rivales[8].foto}"/>
                    <h6 class="partidoH__nombre">Diarco United</h6>
                </div>
                <h6 class="partidoH__resultado">${Partidos[i].GolesFavor}</h6>
            </div>
                 <div class="partidoH__equipo">
                    <div class="partidoH__equipo--wrapper">
                        <img class="partidoH__logo" src="${Rivales[Partidos[i].rival_id-1].foto}"/>
                        <h6 class="partidoH__nombre">${Rivales[Partidos[i].rival_id-1].nombre}</h6>
                    </div>
                    <h6 class="partidoH__resultado">${Partidos[i].GolesContra}</h6>
            </div>
        </div>
        <div class="partidoH__derecha">
            <div class="partidoH__hora">
                <h5 class="partidoH__fin">Fin</h5>
                <h4 class="partidoH__fecha">${Partidos[i].Fecha}</h4>
            </div>
        </div></div></article>`)
        console.log(i);

    i++;
  }

  tabla.innerHTML=contenidoHistorial;
}
