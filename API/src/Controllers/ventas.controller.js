const ventasCtrl={}
const puntos_ventas= require('../models/Puntos_Ventas.js')
const articulos= require('../models/articulos.js')
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
    const item=await puntos_ventas.findByIdAndUpdate(req.params.id,req.body)
    res.send({message:'Articulo actualizado',item});
};

ventasCtrl.getArticulos_V= async(req,res)=>{
    const item=await articulos.findById(req.params.id)
    const item1=item.articulos;
    res.json(item1)
};
ventasCtrl.addArticulo= async(req,res)=>{
    const item=await puntos_ventas.findById(req.params.id)
    const item1=await articulos.findById(req.params.idA)
    item.articulos.push(item1)
    item.save();
    res.json(item)
};
ventasCtrl.removeArticulo= async(req,res)=>{
    const item=await puntos_ventas.findById(req.params.id)
    const art=item.articulos;
    art.forEach(element => {
        
        if(element.id==req.idA){
            art.splice(art.indexOf(element),1)
        }
        
    });
    res.json(item)
};
module.exports=ventasCtrl