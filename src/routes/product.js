const express = require('express');
const products = require('../utils/data');

const productRouter=express.Router();

productRouter.get("/products",(req,res)=>{
    res.status(200).json({products});
})

module.exports=productRouter;