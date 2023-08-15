import City from "../../models/City.js";
export default async (req, res) => {
    try {
        let oneCity = await City.findOne({_id:req.params.id}).select("country photo city")
        // let oneCityId = await City.findById(req.params.id)
        return res.status(200).json({
            success: true,
            message: 'city found',
            response: oneCity
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: 'not found',
            response: null
        })
    }
}