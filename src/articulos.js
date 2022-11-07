const { Schema,model } = require("mongoose")
const mongoose= require("mongoose")
new Schema({

    nombre:{type:String, required:true},
        
        Precio:{type:String, required:true,default:"0.00"},
        Tipo_Articulo:{type:String,required:true},
        Descripcion:{type:String,required:false},
        Imagen:{type:Image,required:false},
        Cantidad:{type:Number,required:false,default:0},
        puntos_ventas:[{
            type:mongoose.Schema.Types.ObjectId,
            required:false,
            ref:"Puntos_Ventas"
        }]
})