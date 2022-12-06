 
import{ventas}from '../Models/ventas';
 export interface articulos{
    id:String
    nombre:String
    Precio:Number
    Tipo_Articulo:String
    Descripcion:String
    Cantidad:Number
    img_path:String
    puntos_ventas:ventas[]
}