const { Schema,model } = require("mongoose")
const mongoose= require("mongoose")
new Schema({

    nombre:{type:String, required:true},
        
        PASSWORD:{type:String, required:true},
        EMAIL:{type:String,required:true},
        Imagen:{type:Image,required:false},
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
})