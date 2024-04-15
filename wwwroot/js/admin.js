import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
import{Listar} from '../js/site.js'
const supabase = createClient('https://thgcusmwbavdcuyotqxc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZ2N1c213YmF2ZGN1eW90cXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2NjYzOTAsImV4cCI6MjAxNDI0MjM5MH0.Ekd9wURADgAVccw6uyqwwH7cdySXLjxFvBlbWwmupwM')


const golesfavor=document.getElementById("GolesFavor");
const golescontra=document.getElementById("GolesContra");
const GolesRival1=document.getElementById("GolesRival1");
const GolesRival2=document.getElementById("GolesRival2");

const botonPartidoDiarco=document.getElementById("submitPartidoDiarco")
const botonPartido=document.getElementById("submitPartido")


const selectDiarco=document.getElementById("selectPartidoDiarco");
const selectPartido=document.getElementById("selectPartido")

const partidosDiarco=await Listar("Partido");
const rivales=await Listar("Rival");
const partidosLiga=await Listar("PartidoLiga");



var x="";
partidosDiarco.forEach(element => {
    x+=`<option value="${element.id}">${element.Fecha} contra ${rivales[element.rival_id].nombre} en la cancha ${element.cancha}</option>`
    
});
selectDiarco.innerHTML=x;



x="";
partidosLiga.forEach(element => {
    x+=`<option value="${element.id}">${rivales[element.idrival1].nombre} contra ${rivales[element.idrival2].nombre}     ${element.fecha}</option>`
    
});
selectPartido.innerHTML=x;






const SubirDiarco=async ()=>{
    console.log("x");
 if(golesfavor.value>=0 && golescontra.value>=0){
    await BDPartidoDiarco(golesfavor.value,golescontra.value)

  }else{
    alert("No existen goles negativos bobi");
  }
 }

async function BDPartidoDiarco(golesDiarco,golesRival){
    const { error } = await supabase
    .from('Partido')
    .update({ GolesFavor: golesDiarco,GolesContra:golesRival })
    .eq('id', selectDiarco.value)
} 





const SubirPartido=async ()=>{
    console.log("x");
 if(GolesRival1.value>=0 && GolesRival2.value>=0){
    await BDPartido(GolesRival1.value,GolesRival2.value)

  }else{
    alert("No existen goles negativos bobi");
  }
 }



async function BDPartido(goles1,goles2){
    const { error } = await supabase
    .from('PartidoLiga')
    .update({ golesRival1: goles1,golesRival2:goles2 })
    .eq('id', selectPartido.value)
} 



botonPartidoDiarco.addEventListener("click",SubirDiarco);
botonPartido.addEventListener("click",SubirPartido);

