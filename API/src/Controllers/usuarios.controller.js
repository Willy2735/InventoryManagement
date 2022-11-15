const userCtrl={}
const users= require('../models/user.js')
const articulos= require('../models/articulos.js')
const puntos_ventas= require('../models/Puntos_Ventas.js')
userCtrl.getArticulos= async(req,res)=>{
    const items=await users.find();
    res.json(items)
};
userCtrl.crearArticulos= async(req,res)=>{
    const nuevoArticulo=new users(req.body);
    await nuevoArticulo.save()
    res.send({message:'Usuario creado'});
};
userCtrl.getArticulo= async(req,res)=>{
    const item=await users.findById(req.params.id)
    res.json(item)
};

userCtrl.getArticulossUser= async(req,res)=>{
    const item=await users.findById(req.params.id)
    const ventas=item.articulos;
    res.json(ventas)
};
userCtrl.getVentasUser= async(req,res)=>{
    const item=await users.findById(req.params.id)
    const ventas=item.puntos_ventas;
    res.json(ventas)
};
userCtrl.addVentasUser= async(req,res)=>{
    const item=await users.findById(req.params.id)
    const tienda=await puntos_ventas.findById(req.params.idV)
    item.puntos_ventas.push(tienda)
    item.save();
    res.json(item)
};
userCtrl.addArticulosUser= async(req,res)=>{
    const item=await users.findById(req.params.id)
    const articulo=await articulos.findById(req.params.idA)
    item.articulos.push(articulo)
    item.save();
    res.json(item)
};
userCtrl.getArticuloUser= async(req,res)=>{
    const item=await users.findById(req.params.id)
    const art=item.articulos;
    const item2={};
    art.forEach(element => {
        if(element.id==req.idA){
          item2 =element;
        }
    });
    res.json(item2)
};
userCtrl.getVentaUser= async(req,res)=>{
    const item=await users.findById(req.params.id)
    const ventas=item.puntos_ventas;
    const venta={};
    ventas.forEach(element => {
        if(element.id==req.idV){
          venta =element;
        }
    });

    res.json(venta)
};
userCtrl.deleteArticulo= async(req,res)=>{
    const item=await users.findByIdAndDelete(req.params.id)
    res.send({message:'Usuario eliminado',item});
};
userCtrl.updateArticulo= async(req,res)=>{
    const item=await users.findByIdAndUpdate(req.params.id,req.body)
    
    res.send({message:'Usuario actualizado',item});
};
userCtrl.deleteArticuloUser= async(req,res)=>{
    const item=await users.findById(req.params.id)
    const art=item.articulos;
    
    art.forEach(element => {
        
        if(element.id==req.idA){
            art.splice(art.indexOf(element),1)
           
        articulos.findByIdAndDelete(element.id)
        }
        
    });
    
    
    res.send({message:'Articulo eliminado'});
};
userCtrl.deleteVentaUser= async(req,res)=>{
    const item=await users.findById(req.params.id)
    const ventas=item.puntos_ventas;
    const venta={};
    ventas.forEach(element => {
        if(element.id==req.idV){
            ventas.splice(ventas.indexOf(element),1)
           
            puntos_ventas.findByIdAndDelete(element.id)
        }
    });
    res.json(venta)
};
module.exports=userCtrl