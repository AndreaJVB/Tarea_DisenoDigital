import express, {json} from 'express'
import tareas from './ToDo/tareas.json' with {type: "json"}
import { validacionTarea, validatePartialSchema} from './schemas/tareasSchemas.js';
import { establecerID, guardarEnArchivo } from './ToDo/otros.js';


const app = express(); //Se crea el servidor

app.use(json())

//Definir el puerto
const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>
    {
        res.send("Api ToDo")
    })

//GET Para todas las tareas
app.get('/tareas', (req, res)=>
    {
        if(tareas.length <= 0)
            {
                res.
                status(200)
                .json({"message": "No hay tareas asignadas"})
            }else{
                res
            .header('Content-Type', 'application/json')
            .status(200)
            .json(tareas)
            }
    })

//GET Por ID
app.get('/tareas/:id', (req, res)=>{
    
    const { id } = req.params

    const tareaEncontrada = tareas.find(tarea => tarea.id == id)

    if(!tareaEncontrada)
        {
            res.
            status(404)
            .json("No se encontro la tarea seleccionada")
        }
    
    res.
    status(302)
    .json(tareaEncontrada)
})

//METODO POST PARA INGRESAR TAREA
app.post('/tareas', (req, res) => {
    const dataBody = req.body

    if(dataBody.hasOwnProperty('id'))
        {
            res.status(401)
            .json({message: "No puede establecer un id manualmente"})
        }

    const data = {...establecerID(tareas), ...dataBody}

    const {success, data: tarea ,error} = validacionTarea(data)

    if(!success)
        {
            res
                .status(400)
                .json({message: JSON.parse(error.message)})
        }
    
    //Si la validacion fue exitosa    
    // Enviarla a la lista
    
    if(tarea != null)
        {
            tareas.push(tarea)
            guardarEnArchivo(tareas)
                   
       
           res.status(201)
               .json(tareas)
        }
   
   
    
});

//ACTUALIZAR TAREA
app.put('/tareas/:id', (req, res) => {
    const data = req.body;
    const { success, data: tarea, error } = validatePartialSchema(data);

    if (!success) {
        return res.status(400).json({
            message: JSON.parse(error.message)
        });
    }

    const { id } = req.params;
    const tareaIndex = tareas.findIndex(tarea => tarea.id == id);

    // Buscar el id
    if (tareaIndex === -1) {
        return res.status(404).json({
            message: "Usuario no encontrado"
        });
    }

    // Actualizar tarea
    if (tarea) {
        tareas[tareaIndex] = { ...tareas[tareaIndex], ...tarea };

        // Guardar cambios en el archivo
        guardarEnArchivo(tareas);

        return res.status(200).json(tareas[tareaIndex]);
    }
});

//ELIMINAR TAREA
app.delete('/tareas/:id', (req, res)=>
    {
        const {id} = req.params

        const tareaIndex = tareas.findIndex(tarea => tarea.id == id)

        if(tareaIndex === -1)
            {
                res.status(400)
                .json({
                    message: "Usuario no encotrado"
                })
            }
        
       tareas.splice(tareaIndex, 1)

       guardarEnArchivo(tareas)

       res.status(200)
       .json({
        message: "Tarea eliminada",
       })
    })

//Escuchar el puerto
app.listen(PORT, ()=>{
    console.log(`El servidor escucha en el puerto ${PORT}`)
});