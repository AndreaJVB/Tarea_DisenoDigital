let listaTareas = []

function agregarTarea(descripcion){
    listaTareas.push({
        descripcion: descripcion,
        completada: false 
    })
}

function marcarTareaComoCompletada (descripcion){
    let tarea = listaTareas.find((tarea) => tarea.descripcion == descripcion)
    tarea.completada = true
}

function listarTareasPendientes()
{
    const pendientes = listaTareas.filter((tareas) => tareas.completada == false)

    console.log("TAREAS PENDIENTES")

    pendientes.forEach((pendiente) => 
        console.log("Nombre: ", pendiente.descripcion, " ", !pendiente.completada ? "Tarea pendiente" : ""))
}

function listarTareasCompletadas()
{
    const completadas = listaTareas.filter((tareas) => tareas.completada == true)

    console.log("TAREAS COMPLETADAS")

    completadas.forEach((completada) => 
        console.log("Nombre: ", completada.descripcion, " ", completada.completada ? "Tarea completada" : ""))
}

agregarTarea("Comprar leche");
agregarTarea("Llamar al médico");
agregarTarea("Estudiar JavaScript")

marcarTareaComoCompletada("Estudiar JavaScript");

listarTareasPendientes()
listarTareasCompletadas()



