const { Schema,model } = require("mongoose")
const mongoose= require("mongoose")
const articuloSchema=new Schema({

    nombre:{type:String, required:true},
        
        Precio:{type:Number, required:true,default:0},
        Tipo_Articulo:{type:String,required:true},
        Descripcion:{type:String,required:false},
        Cantidad:{type:Number,required:false,default:0},
        img_path:{type:String,required:false,default:"../../../assets/imagenes/ITEM.png"},
        puntos_ventas:[{
            type:mongoose.Schema.Types.ObjectId,
            required:false,
            ref:"Puntos_Ventas"
        }]},{
    timestamps:true,
    versionKey:false
})
module.exports=model('articulos',articuloSchema)