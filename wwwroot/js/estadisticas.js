import{Listar,ListarJugadores} from '../js/site.js'

const goleadoresgoles = document.getElementsByClassName("goleadores__nombre");
const goleadoresGoles = document.getElementsByClassName("goleadores__goles");
const goleadoresEnContra = document.getElementsByClassName("goleadores__enContra");
const goleadoresDif = document.getElementsByClassName("goleadores__dif");
const goleadoresPG = document.getElementsByClassName("goleadores__pg");
const partidos_jugados=document.getElementById("Partidos_jugados");
const Partidos_ganados=document.getElementById("Partidos_ganados");
const Partidos_empatados=document.getElementById("Partidos_empatados");
const Partidos_perdidos=document.getElementById("Partidos_perdidos");
const Porcentaje_victorias=document.getElementById("Porcentaje_victorias");

const grandes__estadisticas_Goleadores = document.getElementById("grandes__estadisticas--goleadores");
const chica__estadisticas_amarillas = document.getElementById("chica__estadisticas--amarillas")
const chica__estadisticas_partidos = document.getElementById("chica__estadisticas_partidos")

const jugadoresPorGol =await ListarJugadores("Goles");
const jugadoresPorAmarilla =await ListarJugadores("Amarillas");
const jugadoresPorPartido =await ListarJugadores("Apellido");


const partidosDiarco=await Listar("Partido");
var index = 0, ganados=0,empatados=0,perdidos=0;
const IMOS={nombre:"IMOS",goles:0,contra:0,ganados:0};
const GRUN={nombre:"GRUN",goles:0,contra:0,ganados:0};
const Asturiano={nombre:"Asturiano",goles:0,contra:0,ganados:0};
const Poli={nombre:"Poli",goles:0,contra:0,ganados:0};

partidosDiarco.forEach(e => {
    if(e.GolesFavor!=null && e.GolesContra!=null){
        if(e.GolesFavor>e.GolesContra){
            ganados++;
        }else if(e.GolesFavor<e.GolesContra){
            perdidos++;
        }else{
            empatados++;
        }
        switch(e.cancha){
            case "IMOS":
                IMOS.goles+=e.GolesFavor;
                IMOS.contra+=e.GolesContra;
                if(e.GolesFavor>e.GolesContra){
                    IMOS.ganados++;
                }
                break;
                case "GRUN":
                    GRUN.goles+=e.GolesFavor;
                    GRUN.contra+=e.GolesContra;
                    if(e.GolesFavor>e.GolesContra){
                        GRUN.ganados++;
                    }
                    break;
                case "Asturiano":
                    Asturiano.goles+=e.GolesFavor;
                    Asturiano.contra+=e.GolesContra;
                     if(e.GolesFavor>e.GolesContra){
                        Asturiano.ganados++;
                     }
                    break;
                case "Poli":
                    Poli.goles+=e.GolesFavor;
                    Poli.contra+=e.GolesContra;
                    if(e.GolesFavor>e.GolesContra){
                        Poli.ganados++;
                     }
                    break;
        }
    }
});

const Canchas=[IMOS,GRUN,Asturiano,Poli];


partidos_jugados.innerText=partidosDiarco.length
Partidos_ganados.innerText=ganados;
Partidos_empatados.innerText=empatados;
Partidos_perdidos.innerText=perdidos;
Porcentaje_victorias.innerText=`${(100*ganados/partidosDiarco.length)}%`

const tablaGoleadores = (jugador) => {
    const diferenciaGoles = jugador.Goles - jugador.Goles_en_contra;
    var PGGoles = jugador.Goles / jugador.Partidos_jugados;
    PGGoles = 1
    //goleadoresNombre[index].textContent = `${jugador.Nombre}  ${jugador.Apellido}`
    const goleadores__nombre = document.createElement("h3");
    goleadores__nombre.setAttribute("class", "grandes__stat goleadores__nombre");
    goleadores__nombre.textContent = `${jugador.Nombre}  ${jugador.Apellido}`
    grandes__estadisticas_Goleadores.appendChild(goleadores__nombre)
    //goleadoresGoles[index].textContent = `${jugador.Goles}`;
    const goleadores__goles = document.createElement("h3");
    goleadores__goles.setAttribute("class", "grandes__stat goleadores__goles");
    goleadores__goles.textContent = `${jugador.Goles}`;
    grandes__estadisticas_Goleadores.appendChild(goleadores__goles)

    //goleadoresEnContra[index].textContent = `${jugador.Goles_en_contra}`;
    const goleadores__enContra = document.createElement("h3");
    goleadores__enContra.setAttribute("class", "grandes__stat goleadores__enContra");
    goleadores__enContra.textContent = `${jugador.Goles_en_contra}`
    grandes__estadisticas_Goleadores.appendChild(goleadores__enContra)

    //goleadoresDif[index].textContent = `${jugador.Goles - jugador.Goles_en_contra}`;
    const goleadores__dif = document.createElement("h3");
    goleadores__dif.setAttribute("class", "grandes__stat goleadores__dif");
    goleadores__dif.textContent = `${diferenciaGoles}`
    grandes__estadisticas_Goleadores.appendChild(goleadores__dif)

    //goleadoresPG[index].textContent = `${PGGoles}`;
    const goleadores__pg = document.createElement("h3");
    goleadores__pg.setAttribute("class", "grandes__stat goleadores__pg");
    goleadores__pg.textContent = `${PGGoles}`
    grandes__estadisticas_Goleadores.appendChild(goleadores__pg)

}

const tablaAmarillas = (jugador) => {
    const amarillas_nombre = document.createElement("h3");
    amarillas_nombre.setAttribute("class", "chicas__stat")
    amarillas_nombre.textContent = `${jugador.Nombre} ${jugador.Apellido}`;
    chica__estadisticas_amarillas.appendChild(amarillas_nombre);

    const amarillas_numero = document.createElement("h3");
    amarillas_numero.setAttribute("class", "chicas__stat");
    amarillas_numero.textContent = `${jugador.Amarillas}`;
    chica__estadisticas_amarillas.appendChild(amarillas_numero);
}

const tablaPartidos = (jugador) => {
    const partidosNombre = document.createElement("h3");
    partidosNombre.setAttribute("class", "chica__stat");
    partidosNombre.textContent = `${jugador.Nombre} ${jugador.Apellido}`
    console.log(partidosNombre + "A" + chica__estadisticas_partidos);
    chica__estadisticas_partidos.appendChild(partidosNombre)

    const partidosF5 = document.createElement("h3");
    partidosF5.setAttribute("class", "chica__stat");
    partidosF5.textContent = `${jugador.Partidos_jugados_f5}`;
    chica__estadisticas_partidos.appendChild(partidosF5);

    const partidosF8 = document.createElement("h3");
    partidosF8.setAttribute("class", "chica__stat");
    partidosF8.textContent = `${jugador.Partidos_jugados_f8}`;
    chica__estadisticas_partidos.appendChild(partidosF8);

    const partidosTotal = document.createElement("h3");
    partidosTotal.setAttribute("class", "chica__stat");
    partidosTotal.textContent = `${jugador.Partidos_jugados_f8 + jugador.Partidos_jugados_f5}`;
    chica__estadisticas_partidos.appendChild(partidosTotal);
}


jugadoresPorGol.forEach(jugador => {
    console.log(jugador.Goles);
    tablaGoleadores(jugador);
    
    index++;

});

jugadoresPorAmarilla.forEach(jugador => {
    tablaAmarillas(jugador)
});

jugadoresPorPartido.forEach(jugador => {
    tablaPartidos(jugador)
})


