const express=require('express');
const router=express.Router();
const{getproduct,getproducts,updateproduct,createproduct,deleteproduct}=require('../controllers/productcontrols')

router.get('/',getproducts);
router.get('/:id',getproduct);
router.post('/',createproduct);
router.put('/:id',updateproduct);
router.delete('/:id',deleteproduct);


module.exports=router