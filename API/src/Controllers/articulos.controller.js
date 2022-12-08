const articulosCtrl={}
const articulos= require('../models/articulos.js')
const puntos_ventas= require('../models/Puntos_Ventas.js')
articulosCtrl.getArticulos= async(req,res)=>{
    const items=await articulos.find();
    res.json(items)
};
articulosCtrl.crearArticulos= async(req,res)=>{
    const nuevoArticulo=new articulos(req.body);
    await nuevoArticulo.save()
    res.send({nuevoArticulo});
};
articulosCtrl.getArticulo= async(req,res)=>{
    const item=await articulos.findById(req.params.id)
    res.json(item)
};
articulosCtrl.getVentas= async(req,res)=>{
    const item=await articulos.findById(req.params.id)
    const ventas=item.puntos_ventas;
    res.json(ventas)
};
articulosCtrl.addVenta= async(req,res)=>{
    
    const item1=await puntos_ventas.findById(req.params.idV)
    const item=item1.articulos
    await articulos.updateMany({_id:{$in:item}},{$addToSet:{"puntos_ventas": item1}})
    res.json(item1)
    
};
articulosCtrl.removeVenta= async(req,res)=>{
    const item=await articulos.findById(req.params.id)
    const art=item.puntos_ventas;
    
    const arr= await puntos_ventas.find({_id:{$in:art}})
    arr.forEach(element => {
        
        element.articulos.splice(element.articulos.indexOf(item._id),1)
        element.save()
        
    });
    res.json({"id":item,"ventas":arr})
};
articulosCtrl.deleteArticulo= async(req,res)=>{
    const item=await articulos.findByIdAndDelete(req.params.id)
    res.send({message:'Articulo eliminado',item});
};
articulosCtrl.updateArticulo= async(req,res)=>{
    const item=await articulos.findByIdAndUpdate(req.params.id,req.body,{new:true})
    item.save()
    res.send(item);
};
module.exports=articulosCtrl