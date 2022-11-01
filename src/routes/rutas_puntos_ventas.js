const {Router}=require("express");
const router=Router();
const juegos=require("./data.json")
router.get('/',(req,res)=>{
    
    res.json(juegos);
});
router.get('/:id',(req,res)=>{
    
    const {id}=req.params;
    juegos.forEach(juego => {
        if(juego.id==id){
            res.json(juego)
        }
    });

    console.log(id)

});
router.post('/',(req,res)=>{
    const {titulo,Saga,genero}=req.body;
    if(titulo&&Saga&&genero){
        const id=juegos.length+1;
        const nuevo_juego={...req.body,id};
        juegos.push(nuevo_juego);
        res.send(juegos);
    }else{
        res.status(500).json({error:"no data"});
        res.send("ERROR");
    }
    
});


module.exports = router;