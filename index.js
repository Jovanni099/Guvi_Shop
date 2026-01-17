/* index.js это точка входа в приложение */
import express from 'express'

app.use(express.json())

const app = express()

app.listen(4445, err => {
    if(err){
        console.log(err);
    }
    console.log('Server OK');
    
})