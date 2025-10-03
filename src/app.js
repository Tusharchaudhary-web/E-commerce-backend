const express = require('express');
const productRouter = require('./routes/product');
const orderRouter = require('./routes/order');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/", productRouter);
app.use("/", orderRouter);

app.listen(4000, () => {
    console.log("Server is sucessfully running at port 4000 🚀");
})

