const mid= (req,res,next) => {
    const {user}= req.query;
    if(user === "davide"){
        return next();
        
    }

    return res.status(404).json({message: "Error"});
};


const mid2= (req,res,next) => {
    const {user}= req.query;
    if(user.toLowerCase() === "davide"){
        return next();
    }

    return res.status(404).json({message: "Error"});
};
module.exports= {mid,mid2};