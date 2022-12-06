
import{ventas}from '../Models/ventas';
import{articulos}from '../Models/articulo';
export interface user{
    id:String
    PASSWORD:String
    EMAIL:String
    img_path:String
    articulos: articulos[]
    ventas:ventas[]
}