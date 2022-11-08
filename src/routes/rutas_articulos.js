const {Router}=require("express");
const router=Router();
const articulos=require("./articulos.json")
const articulosCtrl=require('../Controllers/articulos.controller.js')
router.get('/',articulosCtrl.getArticulos)
router.get('/:id',articulosCtrl.getArticulo);
router.delete('/:id',articulosCtrl.deleteArticulo);
router.put('/:id',articulosCtrl.updateArticulo);
router.post('/',articulosCtrl.crearArticulos)
module.exports = router;