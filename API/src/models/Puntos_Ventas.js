const { Schema,model } = require("mongoose")
const mongoose= require("mongoose")
const ventaSchema=new Schema({

    nombre:{type:String, required:true},
        Descripcion:{type:String,required:false},
        Ganancias:{type:Number,required:false,default:0},
        img_path:{type:String,required:false,default:"../../../assets/imagenes/STORE.png"},
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