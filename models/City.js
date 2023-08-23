import { model,Schema,Types } from "mongoose";

let collection = "cities"
let schema = new Schema({
    country:{type:String,required:true},
    fundation:{type:Date,required:true},
    population:{type:Number},
    photo:{ type:String,required:true},
    city: {type:String,required:true},
    description:{type:String,required:true},
    smalldescription:{type:String,required:true},
    featuredLocation:{type:String,required:true},
    admin_id:{type:Types.ObjectId,required:true,ref:'users'}
    //para relacionar datos en mongo es necesario referenciar el dato hacia la coleccion que necesito relacionarme
},{timestamps:true}
)
//estoy parado en el modelo city de la coleccion cities
// y necesito relacionar la propiedad admin_id con la coleccion users
//esto lo logro referenciando con la propiedad ref:'nombreDeLaColeccionaReferenciarse'

let City = model(collection,schema)
export default City