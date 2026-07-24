import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import authRoutes from './Routes/authRoutes.js'
const app = express()

app.use(cors())
app.use(express.json())

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB connected")
    }
    catch(err){
        console.log("Error while connecting to DB....",err.message)
    }
}

connectDB();

app.use('/api/auth',authRoutes)

console.log("profile routes mounted")
const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server listening at Port: ${PORT}`)
})