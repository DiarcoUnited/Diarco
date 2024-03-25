import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabase = createClient('https://thgcusmwbavdcuyotqxc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZ2N1c213YmF2ZGN1eW90cXhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2NjYzOTAsImV4cCI6MjAxNDI0MjM5MH0.Ekd9wURADgAVccw6uyqwwH7cdySXLjxFvBlbWwmupwM')


const goles=document.getElementById("golesfavor");
const formDiarco=document.getElementById("formPartidoDiarco");
const botonPartidoDiarco=document.getElementById("submitPartidoDiarco")
var golesAcumulados=0;


const Goleadores=()=>{
    var i=1
    while(goles.value>=i) {
        formDiarco.appendChild(`<h3>gol ${i}:</h3> 
        <select name="goleador${i}" class="goleadores"> 
        <option value="1">Huevo</option> 
        <option value="2">Yuze</option> 
        <option value="3">Zasel</option>
        <option value="4">Axel</option>
        <option value="5">Reifut</option>
        <option value="6">Becher</option>
        <option value="7">Mata</option>
        <option value="8">Zober</option>
        <option value="9">Ivo</option>
        <option value="10">Zorro</option></select>`);
        i++;
    }

}

const SubirDatos=()=>{
    if(goles.value>0){
        const goleadores=document.getElementsByClassName("goleadores").value;
        const golesXJugador=pasar(goleadores);
    }else{
        
    }

}

const pasar=(goleadores)=>{
    const arreglo = [];
    const x=-1;
    switch (goleadores) {
        case 7:
             x=arreglo.indexOf(e => (e.id == 7));
            if (x!=-1) {
                
                arreglo[x].goles++;

            }else{
                arreglo.push({
                    id:7,
                    goles:1
                })
            }
        break;
        case 1:
             x=arreglo.indexOf(e => (e.id == 1));
            if (x!=-1) {
                
                arreglo[x].goles++;

            }else{
                arreglo.push({
                    id:1,
                    goles:1
                })
            }
        break;
    }
}

async function BDPartidoDiarco(){

} 


botonPartidoDiarco.addEventListener(onclick,SubirDatos());
goles.addEventListener(onkeyup,Goleadores());