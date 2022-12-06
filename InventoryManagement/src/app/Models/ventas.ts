
import{articulos}from '../Models/articulo';
export interface ventas{
    id:String
    nombre:String
    Descripcion:String
    Ganancias:Number
    img_path:String
    articulos: articulos[]
}