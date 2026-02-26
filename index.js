/* index.js это точка входа в приложение */
import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'



mongoose
	.connect('mongodb+srv://Guvi_shop_adminnator:OERzJfnN2Vq512uG@cluster0.nit1wsy.mongodb.net')
	.then(() => console.log('DB ok'))
	.catch(err => console.log('DB error', err))


const app = express()

app.use(express.json())


app.listen(4445, err => {
    
    if (err) {
        console.log(err);
    }
    console.log('Server OK');
})


