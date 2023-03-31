import joi from "joi";

export const userSchema = joi.object({
    username: joi.string().min(4).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    gender: joi.string().required()
})