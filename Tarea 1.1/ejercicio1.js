
console.log("*****EJERCICIO 1******")

async function obtenerUsuarios (){
    try{
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!respuesta.ok){
            throw new Error ("Error en la respuesta")
        }

        const usuarios = await respuesta.json();
        

        usuarios.forEach(usuario => {
            console.log("nombre: "+usuario.name+ ", Email: " +usuario.email )
        });
       
    }catch(err){
        console.log("Hubo un error en la peticion HTTP "+ err);
    }
}

obtenerUsuarios();