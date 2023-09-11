import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(25).messages({
        "string.min": "name must have at least 3 characterts please",
        "string.max": "name must be less than 26 characterts please",
        "any.required": "name is required",
        "string.empty": "name is required"
    }),
    lastName: joi.string().required().min(2).max(25).messages({
        "string.min": "last name must have at least 3 characterts please",
        "string.max": "last name must be less than 26 characterts please",
        "any.required": "last name is required",
        "string.empty": "last name is required"
    }),
    mail: joi.string().required().min(8).max(25).messages({
        "string.min": "mail must have at least 3 characterts please",
        "string.max": "mail must be less than 26 characterts please",
        "any.required": "mail is required",
        "string.empty": "mail is required"
    }),
    photo: joi.string().required(),
    password: joi.string().required().min(8).max(25).messages({
        "string.min": "password must have at least 3 characterts please",
        "string.max": "password must be less than 26 characterts please",
        "any.required": "password is required",
        "string.empty": "password is required"
    }),
    country: joi.string().required().required().messages({
        "any.required": "country is required",
        "string.empty": "country is required"
    }),
})

export default registerSchema