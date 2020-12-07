const mongoose = require('mongoose');
let FormSchema = mongoose.Schema({
    OrderNo:{
        type:String,
        required:false,
        unique:false
    },
    Date:{
        type:Date,
        required:false
    },
    Name:{
        type:String,
        required:false
    },
    AadharNo:{
        type:Number,
        required:false
    },
    Address:{
        type:String,
        required:false
    },
    Tehsil:{
        type:String,
        required:false
    },
    District:{
        type:String,
        required:false
    },
    PinCode:{
        type:Number,
        required:false
    },
    State:{
        type:String,
        required:false
    },
    Whatsapp:{
        type:Number,
        required:false,
        min : 1000000000,
        max : 9999999999
    },
    Contact:{
        type:Number,
        required:false,
        min : 1000000000,
        max : 9999999999
        
    },
    CompanyName:{
        type:String,
        required:false
    },
    Order:[{
        Details:{type:String, required:false, default: 'reva g9'},
        Qty:{type:Number, required:false, default:0 },
        Rate:{type:Number, required:false, default:0.0},
        Amount:{type:Number,required:false, default:0.0}
    }],
    TotalAmt:{
        type:Number,
        required:false
    },
    BillAmt:{
        type:Number,
        required:false
    },
    TrasportChrg:{
        type:Number,
        required:false
    },
    Advance:{
        type:Number,
        required:false
    },
    DueAmt:{
        type:Number,
        required:false
    },
    DeliveryDate:{
        type:Date,
        required:false
    },
    DeliveryPlace:{
        type:String,
        required:false
    },
    Deposit:{
        DDate:{type:Date,required:false},
        Amount:{type:Number,required:false},
        UTRNo:{type:String,required:false},
        Bank:{type:String,required:false}

    },
    Ac:{
        type:String,
        required:false
    },
    AcHolder:{
        type:String,
        required:false
    },
    AcNo:{
        type:Number,
        required:false,
        
    },
    IFSC:{
        type:String,
        required:false
    },
    DealerName:{
        type:String,
        required:false
    },
    DealerContact:{
        type:Number,
        required:false,
        min : 1000000000,
        max : 9999999999
        
    },
    


})
let Form = module.exports = mongoose.model("Forms",FormSchema);