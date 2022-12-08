const ventasCtrl={}
const puntos_ventas= require('../models/Puntos_Ventas.js')
const articulos= require('../models/articulos.js');

ventasCtrl.getArticulos= async(req,res)=>{
    const items=await puntos_ventas.find();
    res.json(items)
};
ventasCtrl.crearArticulos= async(req,res)=>{
    const nuevoArticulo=new puntos_ventas(req.body);
    await nuevoArticulo.save()
    res.send({nuevoArticulo});
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
    const item=await puntos_ventas.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.send(item);
};

ventasCtrl.getArticulos_V= async(req,res)=>{
    const item=await articulos.findById(req.params.id)
    const item1=item.articulos;
    res.json(item1)
};
ventasCtrl.addArticulo= async(req,res)=>{
    
    const item1=await articulos.findById(req.params.idA)
    const item=item1.puntos_ventas
    
    await puntos_ventas.updateMany({_id:{$in:item}},{$addToSet:{"articulos": item1}})
    res.json(item1)
    
};
ventasCtrl.removeArticulo= async(req,res)=>{
    const item=await puntos_ventas.findById(req.params.id)
    const art=item.articulos;
    
    const arr= await articulos.find({_id:{$in:art}})
    arr.forEach(element => {
        
        element.puntos_ventas.splice(element.puntos_ventas.indexOf(item._id),1)
        element.save()
        
    });
    res.json({"id":item,"ventas":arr})
};
module.exports=ventasCtrl