const express=require('express');
const User =require('../models/User.js');
const bcrypt =require('bcryptjs');
const generateTokenAndSetCookie =require('../utils/generateToken.js')
const protect=require('../middleware/protect.js')
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        const {name,password,email}=req.body;
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ error: 'Email already in use' });
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
      const user = new User({
        name,
        email,
        password:hashedPassword
      });
    if(user){
        generateTokenAndSetCookie(user._id, res);
      await user.save();
      res.status(201).json(user);
    }
      else {
        res.status(400).json({ error: "Invalid user data" });
    }
    
 } catch (error) {
    console.log("Error in signup", error.message);
    res.status(500).json({ error: "Internal Server Error" })
 }
   
});

router.post('/login', async (req,res)=>{
    try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

		if (!email || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

		generateTokenAndSetCookie(user._id, res);
		res.status(200).json(user);
        
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

router.post('/logout',async (req,res)=>{
	
    try {
		const token=req.cookies.jwt;
		// console.log(token);
		
		res.cookie("jwt", "", { maxAge: 0 });
		// res.clearCookie("token");
		
		res.status(200).json({ message: "Logged out successfully" });    
		
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
} )

router.put('/update-favorites',protect,async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    user.favorites = req.body.favorites;
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update favorites' });
  }
});

router.get('/me',protect, async (req, res) => {
	try {
		const user = await User.findById(req.user._id).select("-password");  //user detail excluding password
		res.status(200).json(user); //Sends the retrieved data as a JSON response to the client.
	} catch (error) {
		console.log("Error in getMe controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
})
module.exports = router;
