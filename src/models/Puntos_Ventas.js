const { Schema,model } = require("mongoose")
const mongoose= require("mongoose")
const ventaSchema=new Schema({

    nombre:{type:String, required:true},
        Descripcion:{type:String,required:false},
        Imagen:{type:Image,required:false},
        Ganancias:{type:Number,required:false,default:0},

        articulos:[{
            type:mongoose.Schema.Types.ObjectId,
            required:false,
            ref:"articulos"
        }]
},{
    timestamps:true,
    versionKey:false
})
module.exports=model('Puntos_Ventas',ventaSchema)