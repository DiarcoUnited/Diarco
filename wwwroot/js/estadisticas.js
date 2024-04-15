import{Listar} from '../js/site.js'

const goleadoresNombre = document.getElementsByClassName("goleadores__nombre")
const goleadoresGoles = document.getElementsByClassName("goleadores__goles")
const goleadoresEnContra = document.getElementsByClassName("goleadores__enContra")
const goleadoresDif = document.getElementsByClassName("goleadores__dif")
const goleadoresPG = document.getElementsByClassName("goleadores__PG")

const jugadores =await Listar("Jugador");
var index = 0;

jugadores.forEach(jugador => {
    goleadoresNombre[index].textContent = `${jugador.Nombre}  ${jugador.Apellido}`
    goleadoresGoles[index].textContent = `${jugador.Goles}`;
    goleadoresEnContra[index].textContent = `${jugador.Goles_en_contra}`;
    goleadoresDif[index].textContent = `${jugador.Goles - jugador.Goles_en_contra}`;
    goleadoresPG[index].textContent = "19";

    index++;

});

