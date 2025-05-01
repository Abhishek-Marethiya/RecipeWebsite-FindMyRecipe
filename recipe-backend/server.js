const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');
const cookieParser=require("cookie-parser");
const app=express();

const userRouter =require('./routes/userRoutes');
const recipeRouter=require('./routes/recipeRoutes');
dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use(cors({
	origin: 'https://findmyrecipe-frontend.onrender.com', // your frontend's URL
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	allowedHeaders: ['Content-Type', 'Authorization'],
	credentials: true // allow cookies and credentials
}));
const connectMongoDB = async()=>{
    try {
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected at : ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connection to mongoDB: ${error.message}`);
		process.exit(1);
	}
}

app.use('/api/user',userRouter);
app.use('/api/recipes',recipeRouter);

const PORT=process.env.SERVER_PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
})
