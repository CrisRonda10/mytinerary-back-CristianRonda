import { model,Schema } from "mongoose";

//necesitamos crear espacio virtual donde se van a guardar todos los documentos modelos
//es decir la coleccion (conjunto de documentos/modelos de datos)
let collection = 'users'

//definimos schema de datos del modelo
// es decir el molde / la forma que tiene que tener mi modelo de datos
let schema = new Schema({
    name: { type:String,required:true }, //por default todos los datos son opcionales (required:false)
    lastName: { type:String }, // si es opcional no necesito agregar required
    mail: { type:String,required:true,unique:true }, //unique:true comprueba que el mail sea unico (no mails duplicados)
    photo: { type:String,default:"https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg" },   //default
    password: {type:String,required:true},
    country: {type:String,required:true}
})
//para crear un modelo de datos utilizo el metodo model
// pasando como parametros donde tengo que crear los documentos
let User = model(collection,schema)
export default User