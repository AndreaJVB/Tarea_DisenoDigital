# Para iniciar se requiere instalar:
- npm install express
- npm install zod
## Luego ejecutar
 - npm run dev

#Manejo de peticiones
##El formato de las peticiones estara definido en el archivo api.http
**GET**
- Para ver todo los objetos en la lista: *http://localhost:3000/tareas*
- Para filtrar uno: Eje: *http://localhost:3000/tareas/2*

**POST**
- Enviar una peticion POST:
POST http://localhost:3000/tareas
Content-Type: application/json
{
    "titulo": "Completar tareas designadas",
    "descripcion": "Finalizarlas antes",
    "completada": true,
    "fecha_creacion": "2024-02-12"
}
*Funcion*: El titulo es requerido. Aunque los demas campos sean opcionales tanto la propiedad
completada y fecha_creacion poseeran un valor por defecto, al no colocar una descripcion este no se mostrara. El numero max
de caracteres en la descripcion es 20 y los id se generan automaticamente.
**El formato de fecha es yy-mm-dd**

**PUT**
PUT http://localhost:3000/tareas/2
Content-Type: application/json

{
    "titulo": "Cambiar",
    "descripcion": "completo"
}

**DELETE**
DELETE http://localhost:3000/tareas/2
