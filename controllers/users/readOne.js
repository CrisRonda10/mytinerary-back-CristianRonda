import User from "../../models/User.js";
export default async (req, res) => {
    try {
        let oneUser = await User.findOne({_id:req.params.id}).select("mail photo -_id")
        // let oneUserId = await User.findById(req.params.id)
        if(oneUser){
            return res.status(200).json({
                success: true,
                message: 'users found',
                response: oneUser
            })
        }else{
            return res.status(404).json({
                success: false,
                message: 'not found user',
                response: null
            })
        }
    } catch (error) {
        next(error)
    }
}