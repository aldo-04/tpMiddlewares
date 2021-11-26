let names = ["ana","greta","vim","tim"]

const adminCheck = (req,res,next) =>{
    if(names.includes(req.query.user)){
        next()
    }else{
        res.send("No tienes los privilegios para ingresar")
    }
}

module.exports= adminCheck