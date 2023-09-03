class Class{

    createUser(req, res){
        res.send({message : "POST - createUser Class"})
    }

    getUser(req, res){
        res.send({message : "GET - GetUser Class"})
    }

    updateUser(req, res){
        res.send({message : "PUT - updateUser Class"})
    }

    deleteUser(req, res){
        res.send({message : "DELETE - deleteUser Class"})
    }

}


export default new Class
