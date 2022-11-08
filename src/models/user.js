const { Schema,model } = require("mongoose")
const mongoose= require("mongoose")
const userSchema=new Schema({

    nombre:{type:String, required:true},
        
        PASSWORD:{type:String, required:true},
        EMAIL:{type:String,required:true},
        puntos_ventas:[{
            type:mongoose.Schema.Types.ObjectId,
            required:false,
            ref:"Puntos_Ventas"
        }],
        articulos:[{
            type:mongoose.Schema.Types.ObjectId,
            required:false,
            ref:"articulos"
        }]
},{
    timestamps:true,
    versionKey:false
})
module.exports=model('user',userSchema)