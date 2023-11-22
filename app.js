import express from 'express'
import cookieParser from 'cookie-parser'
import { mockData } from './mockData.js';

const app = express();
const PORT = 5000;
app.use(cookieParser())
app.get('/', (req, res)=>{
    res.send(mockData)
})
app.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`)
})

