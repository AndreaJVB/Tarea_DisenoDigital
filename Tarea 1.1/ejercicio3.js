console.log("************Ejercicio 3**********")

function consultarBaseDeDatos(){
    return new Promise((resolve, reject) => 
        {
            setTimeout(()=>{
                let numero = Math.floor(Math.random() * (100 - 1)) + 1;
                console.log("numero escogido: "+ numero)
                if(numero%2 == 0 ){
                    resolve("Consulta exitosa")
                }else{
                    reject("Error en la consulta")
                }
            }, 3000)
        }
    )
}

async function ejecutarConsulta(){
    try{
        const consulta = await consultarBaseDeDatos();

        console.log(consulta)
    }catch(error){
        console.log(error)
    }
}

ejecutarConsulta()