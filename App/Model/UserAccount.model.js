import mongoose from "mongoose";

let Schema = mongoose.Schema();

let SignupModel = new  Schema ({
    Name:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    Phone:{
        type:Number,
        require:true
    },
    Password:{
        type:String,
        require:true
    }

})

let UserSignup = mongoose.model("AccountInfo",SignupModel)
export default UserSignup