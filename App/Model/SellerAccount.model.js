import mongoose from 'mongoose';

let Schema = mongoose.SchemaTypes()

const SellerModel = new Schema({
      CompanyName:{
        type:String,
        require:true
    },
    Address:{
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

const SellerAccount = mongoose.model('SellerAccountInfo',SellerModel)
export default SellerAccount;