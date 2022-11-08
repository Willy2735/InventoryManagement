const ventasCtrl={}
const puntos_ventas= require('../models/Puntos_Ventas.js')
ventasCtrl.getArticulos= async(req,res)=>{
    const items=await puntos_ventas.find();
    res.json(items)
};
ventasCtrl.crearArticulos= async(req,res)=>{
    const nuevoArticulo=new puntos_ventas(req.body);
    await nuevoArticulo.save()
    res.send({message:'Punto de venta creado'});
};
ventasCtrl.getArticulo= async(req,res)=>{
    const item=await puntos_ventas.findById(req.params.id)
    res.json(item)
};
ventasCtrl.deleteArticulo= async(req,res)=>{
    const item=await puntos_ventas.findByIdAndDelete(req.params.id)
    res.send({message:'Punto de Venta eliminado',item});
};
ventasCtrl.updateArticulo= async(req,res)=>{
    const item=await puntos_ventas.findByIdAndUpdate(req.params.id,req.body)
    res.send({message:'Articulo actualizado',item});
};
module.exports=ventasCtrl