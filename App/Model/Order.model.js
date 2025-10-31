import mongoose from "mongoose";
let Schema = mongoose.Schema;
const OrderSchema = new Schema({
    address:{
        type:String,
        require: true
    },
    userId :{
        type :Number,
        require:true
    },
    orderNumber :{
        type:Number,
        require:true
    },
    date:{
        type: String,
        require:true
    },
    orderStatus:{
        type:String,
        reuire:true
    },
    quantity:{
        type:Number,
        require:true
    },
    totalPayment:{
        type:Number,
        require:true
    },
    paymentStatus:{
        type:String,
        require:true
    },
    deliveredBy:{
        type:String,
        require:false
    },
    delivereyTime:{
        type:String,
        require:false
    }
})

const User = mongoose.model('Order',OrderSchema);
export default User;