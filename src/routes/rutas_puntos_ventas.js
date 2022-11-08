const {Router}=require("express");
const router=Router();
const ventasCtrl=require('../Controllers/ventas.controller.js')
router.get('/',ventasCtrl.getArticulos)
router.get('/:id',ventasCtrl.getArticulo);
router.delete('/:id',ventasCtrl.deleteArticulo);
router.put('/:id',ventasCtrl.updateArticulo);
router.post('/',ventasCtrl.crearArticulos)
module.exports = router;