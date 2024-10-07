console.log("************Ejercicio 2**********")

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
consultarBaseDeDatos().then((mensaje)=>{
    console.log(mensaje);
}).catch((error)=>{
    console.log(error)
})