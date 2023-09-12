import Activity from "../../models/Activity.js"

export default async (req, res, next)=>{
    try {
        let data = req.body
        let one = await Activity.create(data)
        return res.status(201).json({
            success:true,
            message:"activity created",
            response: one._id
        })
    } catch (error) {
        next(error)
    }
}