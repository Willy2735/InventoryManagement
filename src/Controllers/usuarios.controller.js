const userCtrl={}
const users= require('../models/user.js')
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
userCtrl.deleteArticulo= async(req,res)=>{
    const item=await users.findByIdAndDelete(req.params.id)
    res.send({message:'Usuario eliminado',item});
};
userCtrl.updateArticulo= async(req,res)=>{
    const item=await users.findByIdAndUpdate(req.params.id,req.body)
    
    res.send({message:'Usuario actualizado',item});
};
module.exports=userCtrl