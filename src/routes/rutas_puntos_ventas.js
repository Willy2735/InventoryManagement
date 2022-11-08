const {Router}=require("express");
const router=Router();
const ventasCtrl=require('../Controllers/ventas.controller.js')
router.get('/',ventasCtrl.getArticulos)
router.get('/:id',ventasCtrl.getArticulo);
router.get('/:id/articulos',ventasCtrl.getArticulos_V);
router.delete('/:id',ventasCtrl.deleteArticulo);
router.put('/:id',ventasCtrl.updateArticulo);
router.post('/',ventasCtrl.crearArticulos)
router.post('/:id/articulos/:idA',ventasCtrl.addArticulo);
module.exports = router;