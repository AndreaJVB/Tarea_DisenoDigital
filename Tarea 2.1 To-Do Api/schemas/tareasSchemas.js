import {z} from 'zod'

const tareaSchema = z.object(
    {
        "id": z.number(
            {
                invalid_type_error: "El id debe ser un numero"
            }
        ).int().optional(),
        "titulo": z.string({
            required_error: "El titulo es requerido",
            invalid_type_error: "El titulo debe ser un String"
        }),

        "descripcion": z.string(
            {
                invalid_type_error: "La descripcion debe solo ser caracteres de string"
            }
        ).max(20,"La descripcion debe tener un maximo de 20 caracteres").optional(),

        "completada": z.boolean(
            {invalid_type_error: "Por favor solo ingrese valores booleanos"}
        ).optional()
            .default(false),

        "fecha_creacion": z
            .string()
            .date(
                "El formato es invalido"
            ).default
            (() => new Date().toISOString().slice(0, 10)),

    }

)

export const validacionTarea = (tarea) => tareaSchema.safeParse(tarea)
