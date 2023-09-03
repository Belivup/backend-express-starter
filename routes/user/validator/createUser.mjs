
import joi from 'joi'

export const Schema = joi.object({
    username: joi.string().required(),
    email: joi.string().email().required(),
    password : joi.string().required()
})


export const createUserValidate = (req, res, next) => {

    const {error, value} = Schema.validate(req.query)

    if (error){
        return res.status(400).send({error : error.details[0].message});
    }

    req.isValid = value;
    next();
}


