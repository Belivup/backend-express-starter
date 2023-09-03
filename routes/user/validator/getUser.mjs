import joi from "joi";

export const Schema = joi.object({
    user: joi.string().required(),
    email: joi.string().email().required(),
})


export const getUserValidate = (req, res, next) => {

    const {error, value} = Schema.validate(req.query)

    if (error){
        console.log(error)
        return res.status(400).send({error : error.details[0].message});
    }

    req.isValid = value;
    next();
}
