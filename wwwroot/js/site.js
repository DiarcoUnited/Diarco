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

async function ListarRivalesTorneo(tabla,idTorneo){
  const { data, error } = await supabase
  .from(tabla)
  .select()
  .eq('id_torneo', idTorneo)
  .order('puntos',{ascending:false})
  return data;
}

async function ListarRivales(tabla){
  const { data, error } = await supabase
  .from(tabla)
  .select()
  .order('puntos', { referenceTable: 'RivalXTorneo', ascending: false })
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
window.addEventListener('load', equipo());
}

if(window.location.pathname=="/Home/Tienda"){
window.addEventListener('load', Tienda());
}

if(window.location.pathname=="/Home/Torneo"){
  Torneo();
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
        <td class="torneo__equipo">
          <img src="${Rivales[RivalXTorneo[i].id_rival-1].foto}" class="escudo"></img>
         <h3>${Rivales[RivalXTorneo[i].id_rival-1].nombre}</h3>
        </td>
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
          <td class="torneo__equipo">
            <img src="${Rivales[RivalXTorneo[i].id_rival-1].foto}" class="escudo"></img>
           <h3>${Rivales[RivalXTorneo[i].id_rival-1].nombre}</h3>
          </td>
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