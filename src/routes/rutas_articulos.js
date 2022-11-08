const {Router}=require("express");
const router=Router();

const articulosCtrl=require('../Controllers/articulos.controller.js')
router.get('/',articulosCtrl.getArticulos)
router.get('/:id',articulosCtrl.getArticulo);
router.get('/:id/Puntos_De_Venta',articulosCtrl.getVentas);
router.delete('/:id',articulosCtrl.deleteArticulo);
router.put('/:id',articulosCtrl.updateArticulo);
router.post('/',articulosCtrl.crearArticulos)
router.post('/:id/Puntos_De_Venta/:idV',articulosCtrl.addVenta);
module.exports = router;