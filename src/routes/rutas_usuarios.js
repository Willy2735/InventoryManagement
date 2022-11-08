const {Router}=require("express");
const router=Router();
const usersCtrl=require('../Controllers/usuarios.controller.js')
router.get('/',usersCtrl.getArticulos)
router.get('/:id',usersCtrl.getArticulo);
router.get('/:id/Puntos_De_Venta',usersCtrl.getVentasUser);
router.get('/:id/articulos',usersCtrl.getArticulossUser);
router.get('/:id/Puntos_De_Venta/:idV',usersCtrl.getVentaUser);
router.get('/:id/articulos/:idA',usersCtrl.getArticuloUser);
router.delete('/:id',usersCtrl.deleteArticulo);
router.put('/:id',usersCtrl.updateArticulo);
router.post('/',usersCtrl.crearArticulos)
router.post('/:id/Puntos_De_Venta/:idV',usersCtrl.addVentasUser);
router.post('/:id/articulos/:idA',usersCtrl.addArticulosUser);
module.exports = router;