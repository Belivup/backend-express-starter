import joi from "joi";
import {Schema} from "../user/validator/createUser.mjs";

const schema = joi.object({
    email : joi.string().email().required(),
    password : joi.string().email().required()
})

const validatorLogin = (req, res, next) => {

    const {error, value} = schema.validate(req.body)

    if (error){
        return res.status(400).send({error : error.details[0].message});
    }

    req.isValid = value;
    next();

}

export default validatorLogin
