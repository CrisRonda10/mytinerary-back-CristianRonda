import joi from "joi";

let signinSchema = joi.object({
    mail: joi.string().required().min(8).max(25).messages({
        "string.min": "mail must have at least 3 characterts please",
        "string.max": "mail must be less than 26 characterts please",
        "any.required": "mail is required",
        "string.empty": "mail is required"
    }),
    password: joi.string().required().min(8).max(25).messages({
        "string.min": "password must have at least 3 characterts please",
        "string.max": "password must be less than 26 characterts please",
        "any.required": "password is required",
        "string.empty": "password is required"
    }),
})

export default signinSchema