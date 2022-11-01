const {Router}=require("express");
const router=Router();
const articulos=require("./articulos.json")
router.get('/',(req,res)=>{
    
    res.json(articulos);
});
router.get('/:id',(req,res)=>{
    
    const {id}=req.params;
    articulos.forEach(articulo => {
        if(articulo.id==id){
            res.json(articulo)
        }
    });

    console.log(id)

});

router.post('/',(req,res)=>{
    const {Nombre_Articulo,Precio,Tipo_Articulo,Descripcion,Cantidad,Imagen,Puntos_venta}=req.body;
    if(Nombre_Articulo&&Precio&&Tipo_Articulo&&Descripcion&&Cantidad){
        const id=articulos.length+1;
        const nuevo_articulo={id,...req.body};
        articulos.push(nuevo_articulo);
        res.send(articulos);
    }else{
        res.status(500).json({error:"no data"});
        res.send("ERROR");
    }
    
});
module.exports = router;