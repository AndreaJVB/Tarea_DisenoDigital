
import {writeFile} from 'node:fs/promises'

export function establecerID(tareas)
{
    if(tareas.length === 0)
        {
            return {"id": 1}
        }
    
   const id = tareas.map((tarea)=>tarea.id)

   return {"id": Math.max(...id)+1}
}

export async function guardarEnArchivo(tarea)
{
    
    try{
        const data = JSON.stringify(tarea, null, 2);
        console.log(data)

        if(data != null){
            await writeFile('./ToDo/tareas.json', data)
            console.log("Guardando")
        }
        

    }catch(e){
        console.log("Error en guardar archivo")
    }
}