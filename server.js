import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import authRoutes from './Routes/authRoutes.js'
import eventRoutes from './Routes/eventRoutes.js'
import connectionRoutes from './Routes/connectionRoutes.js'
import projectRoutes from './Routes/projectRoutes.js'
import eventAiRoutes from './Routes/eventAiRoutes.js'
import profileRoutes from './Routes/profileRoutes.js'
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

app.use('/api/auth', authRoutes)
app.use('/api/event', eventRoutes)
app.use('/api/request', connectionRoutes)
app.use('/api/connection', connectionRoutes)
app.use('/api/project', projectRoutes)
app.use('/api/event-ai', eventAiRoutes)
app.use('/api/profile', profileRoutes)

console.log("profile routes mounted")
const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server listening at Port: ${PORT}`)
})