import Activity from "../../models/Activity.js";

export default async(req, res, next)=>{
    try {
        let queries = {}
        if (req.query.itinerary_id){
            queries.itinerary_id = req.query.itinerary_id
        }
        let all = await Activity.find(queries)
        .populate({
            path: "itinerary_id",
            select: "name photo _id"
        })
        return res.status(200).json({
            success: true,
            message: "activities found",
            response: all

        })
    } catch (error) {
        next(error)
    }
}