const signup=(req,res)=>{
   const {name,email,password,confirmPassword}=req.body;
   console.log(name,email,password,confirmPassword);

   res.status(500).send({
    success:false,
    data:{}
   })
}

module.exports={
    signup
}