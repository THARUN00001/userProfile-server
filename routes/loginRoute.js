
var express = require('express');
const { PrismaClient } = require('../generated/prisma')
var { withAccelerate } = require('@prisma/extension-accelerate')

const Prisma = new PrismaClient().$extends(withAccelerate())

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
var router = express.Router();

var app = express();



router.post("/", async function (req, res) {


	try {
			const { email, password } = req.body;

	const user = await Prisma.user.findUnique({
		where: {
			emailID: email
		},
			include:{
				userDetails:true
			}
	});

	if (user) {
			const passwordVerification = await bcrypt.compare(password, user.passwordHash);

	if (passwordVerification) {



	const token = jwt.sign( {user} , process.env.JWT_SECRET, { expiresIn: "1h" });

		


		return res.status(201).json({
			isRegisteredAndLoggedIn: true,
			token: token,
			user: user
		})
	} else {
		return res.status(401).json({ isRegisteredAndLoggedIn: false }, { error: "Invalied credentials" });
	}
	} else {
		return res.status(401).json({ isRegisteredAndLoggedIn: false }, { error: "user is not registered, please Login" });
	}

	} catch (error) {
		return res.status(401).json({ error: error });
	}







});

module.exports = router;