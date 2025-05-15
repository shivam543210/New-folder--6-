import express from 'express'
import authRoute from './routes/authRoute.js'

const app = express();

app.use("/api/auth", authRoute)

app.listen(5001, ()=>{
    console.log("srever is running on 5001");
})