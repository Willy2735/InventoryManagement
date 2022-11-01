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
//amongo
router.post('/',(req,res)=>{
    const {titulo,Saga,genero}=req.body;
    if(titulo&&Saga&&genero){
        const id=articulos.length+1;
        const nuevo_juego={...req.body,id};
        articulos.push(nuevo_juego);
        res.send(articulos);
    }else{
        res.status(500).json({error:"no data"});
        res.send("ERROR");
    }
    
});
module.exports = router;