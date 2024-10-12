const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const app = express();
app.use(express.json());
require('dotenv').config();
const databaseString = process.env.CONNECTIONSTRING;

app.get('/',(req,res)=>{
    res.json("This is a get request");
})



//create a product
app.post('/api/products',async (req,res)=>{

try {

const product = await Product.create(req.body);
res.status(200).json(product);
    



    
} catch (error) {
    res.status(500).json({message:error.message});
}

})

//get all products
app.get('/api/products',async (req,res)=>{

try {

    const product =await Product.find({});
    res.status(200).json(product);



    
} catch (error) {
    res.status(500).json({message:error.message});
}


})

// get a single product
app.get('/api/product/:id',async (req,res)=>{
    try{

        const {id} = req.params;
        console.log(id);
        const product = await Product.findById(id);
        res.status(200).json(product);

    }
    catch(error)
    {
        res.status(500).json({message:error.message});
        
    }
});


//update a product


app.put('/api/product/:id',async (req,res)=>{
try{

    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body);
    if(!product)
    {
        return res.status(404).json("There was error updating the product");
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);

    
}
catch(error){
    res.status(500).json({message:error.message});
}



});

//delete a prodcut

app.delete('/api/product/:id',async (req,res)=>{
    try{
    
        const {id } = req.params;
        
        const product  = await Product.findByIdAndDelete(id);
        if(!product)
            {
                return res.status(404).json({message:"Product not found"});
            }
    
            res.status(200).json({"message":"Product deleted succesfully ",
                "prodcut":product});
        }
        catch(error){
            res.status(500).json({message:error.message});
        }
    
    });
    






mongoose.connect(databaseString)
   .then(()=> {console.log('The database is connected');
    app.listen(3000, ()=>
        {
            console.log("Server is running in port 3000");
        })

   })
.catch((err)=>console.log('There was an error connecting to the database',err));


