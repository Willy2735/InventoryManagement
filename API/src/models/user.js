const { Schema,model } = require("mongoose")
const mongoose= require("mongoose")
const userSchema=new Schema({

    nombre:{type:String, required:false},
        
        PASSWORD:{type:String, required:true},
        EMAIL:{type:String,required:true},
        img_path:{type:String,required:false,default:"../../../assets/imagenes/user.png"},
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