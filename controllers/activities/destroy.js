import Activity from "../../models/Activity.js";

export default async(req,res,next)=>{
    try {
        let {id} = req.params
        let one = await Activity.findByIdAndDelete(id)
        if(one){
            return res.status(200).json({
                success: true,
                message: 'activity deleted',
                response: one._id
            })    
        }else{
            return res.status(400).json({
                success: false,
                message: 'not deleted',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}