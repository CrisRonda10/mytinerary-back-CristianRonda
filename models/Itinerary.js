import { model,Schema,Types } from "mongoose";

let collection = "itineraries"
let schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: String, required: true },
    tags: [{ type: String }],
    photo: { type: String, required: true },
    city_id: { type:Types.ObjectId, required: true, ref: 'cities' } 
    // Relaciono la propiedad city_id con la coleccion "cities"
});

let Itinerary = model(collection, schema);

export default Itinerary;
