const {Router}=require("express");
const router=Router();
const usuarios=require("./usuarios.json")
router.get('/',(req,res)=>{
    
    res.json(usuarios);
});
router.get('/:id',(req,res)=>{
    
    const {id}=req.params;
    usuarios.forEach(usuario => {
        if(usuario.id==id){
            res.json(usuario)
        }
    });

    console.log(id)

});

router.post('/',(req,res)=>{
    const {Email,Articulos,puntos_venta,PassWord}=req.body;
    if(Email&&PassWord){
        const id=usuarios.length+1;
        const nuevo_usuario={id,...req.body};
        usuarios.push(nuevo_usuario);
        res.send(usuarios);
    }else{
        res.status(500).json({error:"no data"});
        res.send("ERROR");
    }
    
});
module.exports = router;