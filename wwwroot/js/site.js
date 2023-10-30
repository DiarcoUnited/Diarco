import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://thgcusmwbavdcuyotqxc.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
const formInsertar = document.getElementById("form-insertar")

async function Listar(tabla){
  const { data, error } = await supabase
  .from(tabla)
  .select()
  //se guardan en data
}



 async function InsertarJugador(e){
    console.log(e);
    const nombre = document.getElementById("nombreJugador").value;
    const numero = document.getElementById("numeroJugador").value;
    const posicion = document.getElementById("posicionJugador").value;
    const link_foto = document.getElementById("foto_Jugador").value;


  const { error } = await supabase
  .from('Jugador')
  .insert({Nombre: nombre,Numero:numero, Posicion:posicion,Foto:link_foto})
}

