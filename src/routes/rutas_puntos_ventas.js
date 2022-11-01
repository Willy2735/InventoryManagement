const {Router}=require("express");
const router=Router();
const Ventas=require("./Puntos de Venta.json")
router.get('/',(req,res)=>{
    
    res.json(Ventas);
});
router.get('/:id',(req,res)=>{
    
    const {id}=req.params;
    Ventas.forEach(tienda => {
        if(tienda.id==id){
            res.json(tienda)
        }
    });

    console.log(id)

});
router.post('/',(req,res)=>{
    const {Nombre_Punto_Venta,Ganancias,Imagen,Articulos}=req.body;
    if(Nombre_Punto_Venta){
        const id=Ventas.length+1;
        const nueva_tienda={id,...req.body};
        Ventas.push(nueva_tienda);
        res.send(Ventas);
    }else{
        res.status(500).json({error:"no data"});
        res.send("ERROR");
    }
    
});


module.exports = router;