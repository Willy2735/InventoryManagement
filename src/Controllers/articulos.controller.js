const articulosCtrl={}
const articulos= require('../models/articulos.js')
articulosCtrl.getArticulos= async(req,res)=>{
    const items=await articulos.find();
    res.json(items)
};
articulosCtrl.crearArticulos= async(req,res)=>{
    const nuevoArticulo=new articulos(req.body);
    await nuevoArticulo.save()
    res.send({message:'Articulo creado'});
};
articulosCtrl.getArticulo= async(req,res)=>{
    const item=await articulos.findById(req.params.id)
    res.json(item)
};
articulosCtrl.deleteArticulo= async(req,res)=>{
    const item=await articulos.findByIdAndDelete(req.params.id)
    res.send({message:'Articulo eliminado',item});
};
articulosCtrl.updateArticulo= async(req,res)=>{
    const item=await articulos.findByIdAndUpdate(req.params.id,req.body)
    
    res.send({message:'Articulo actualizado',item});
};
module.exports=articulosCtrl