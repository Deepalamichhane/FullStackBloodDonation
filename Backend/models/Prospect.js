const mongoose=require("mongoose");

const ProspectSchema=mongoose.Schema({
    name:{type:String,require:true},
    email:{type:String,require:true},
    address:{type:String},
    phone_no:{type:String},
    bloodgroup:{type:String},
    gender:{type:String},
    age:{type:Number},
    weight:{type:Number},
    lastdonated:{type:Date},
    AnyDisease: { type: String},
    status:{type:Number,default:0}

    
})

module.exports=mongoose.model("Prospect",ProspectSchema);