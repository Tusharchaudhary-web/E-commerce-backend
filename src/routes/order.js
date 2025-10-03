const express = require('express');
const validateOrder = require('../utils/validateOrder');
const products = require('../utils/data');

const orderRouter = express.Router();

orderRouter.post("/order", validateOrder, (req, res) => {
    try {
        const { firstName, lastName, address, items } = req.body;

        if (!items || items.length === 0) {
            return res.status(400).json({ message: "Products are required" });
        }

        let totalPrice = 0;
        items.forEach((item) => {
            const product = products.find((p) => p.id === item.id);
            if (product) {
                totalPrice += product.price * (item.quantity || 1);
            }
        });


        console.log("Order placed:", { firstName, lastName, address, items, totalPrice });


        res.status(200).json({
            message: "Order placed successfully",
            items,
            totalPrice
        });

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = orderRouter;
