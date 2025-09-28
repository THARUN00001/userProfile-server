
var express = require('express');
const { PrismaClient } = require('../generated/prisma')
var { withAccelerate } = require('@prisma/extension-accelerate')
const bcrypt = require('bcrypt')
const Prisma = new PrismaClient().$extends(withAccelerate())
const multer  = require('multer')
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });
// const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
var router = express.Router();

var app = express();





router.post('/', upload.single('profilePic'), async function (req, res, next) {



	

	const { name, emailID, password } = req.body;
	const receivedUser = req.body;
// const profilePic = req.file ? req.file.filename : null



	try {

		const userExisting = await Prisma.user.findUnique({ where: { emailID: emailID } })


		if (userExisting) {


			return res.status(400).json({ error: "User Already Exists" });
		} else {

			const hashedPassword = await bcrypt.hash(password, 9)
			const user = await Prisma.user.create({
				data: {
					firstName: receivedUser.firstName,
					lastName: receivedUser.lastName,
					emailID: receivedUser.emailID,
					phone: receivedUser.phone,
					dateOfBirth: receivedUser.dateOfBirth,
					gender: receivedUser.gender,
					address: receivedUser.address,
					city: receivedUser.city,
					state: receivedUser.state,
					country: receivedUser.country,
					postalCode: parseInt(receivedUser.postalCode),
					userHeadline: receivedUser.userHeadline,
					userSummary: receivedUser.userSummary,
					skills: receivedUser.skills,
					experience: parseInt(receivedUser.experience),
					profilePic:req.file ? req.file.filename : "" ,
					passwordHash: hashedPassword
				}
			});
			// CREATING A JWT

			const token = jwt.sign( {user}, process.env.JWT_SECRET, { expiresIn: "1h" });

			//SEND response along with JWT to user
			return res.status(201).json({
				isRegistered: true,
				token: token,
				user
			})


		}

	} catch (error) {
		res.status(500).json({ error: "Registration Failed" });
	}




});







module.exports = router;
