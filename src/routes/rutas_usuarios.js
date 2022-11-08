const {Router}=require("express");
const router=Router();
const usersCtrl=require('../Controllers/usuarios.controller.js')
router.get('/',usersCtrl.getArticulos)
router.get('/:id',usersCtrl.getArticulo);
router.get('/:id/Puntos_De_Venta',usersCtrl.getVentasUser);
router.get('/:id/articulos',usersCtrl.getArticulossUser);
router.delete('/:id',usersCtrl.deleteArticulo);
router.put('/:id',usersCtrl.updateArticulo);
router.post('/',usersCtrl.crearArticulos)
module.exports = router;