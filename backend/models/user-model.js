const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const UserModel=mongoose.model('userdata',userSchema)

module.exports=UserModel