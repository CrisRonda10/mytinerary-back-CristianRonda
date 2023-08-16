import City from "../../models/City.js";
export default async (req, res, next) => {
    try {
        let updatedCity = await City.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {new:true}
            ).select('country photo city')
            if (updatedCity){
                return res.status(200).json({
                    success: true,
                    message: 'city updated',
                    response: updatedCity
                })
            }else{
                return res.status(400).json({
                    success: false,
                    message: 'not updated',
                    response: null
                })
            }
    } catch (error) {
        next(error)
    }
}