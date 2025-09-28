
var express = require('express');
const { PrismaClient } = require('../generated/prisma')
var { withAccelerate } = require('@prisma/extension-accelerate')
const bcrypt = require('bcrypt')
const Prisma = new PrismaClient().$extends(withAccelerate())


// const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

var router = express.Router();

var app = express();





router.post('/', async function (req, res, next) {

	const authHeader = req.headers.authorization;


	const ChangedUserPrimaryDetails = req.body.changedFields1; // user changed fields from user table or primary details
	const notChangedUserPrimaryDetails = req.body.formData1; // unchanged details of user table or primary details 
	const userSecondaryDetails = req.body.formData2; // fields from userDetails table or secondary details
	
	

	const updatedUserDetails = []






	try {
		const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);



		const userExisting = await Prisma.user.findUnique({ where: { userID: req.body.userID } })



		if (userExisting && Object.keys(ChangedUserPrimaryDetails).length > 0) {


			const updateUserPrimaryDetailsACK = await Prisma.user.updateManyAndReturn({

				where: {
					userID: req.body.userID
				}, data: ChangedUserPrimaryDetails

			})

		} else {


			updatedUserDetails.push(notChangedUserPrimaryDetails)
		}







		if (userSecondaryDetails) {

			const updateUserSecondaryDetailsACK = await Prisma.userDetails.upsert({
				where: {
					userID: req.body.userID
				},
				update:
					userSecondaryDetails
				,
				create:
					userSecondaryDetails,
			})

			updatedUserDetails.push(updateUserSecondaryDetailsACK)


		}



		res.status(200).json({
			isUpdated: true,
			message: "User updated successfully",
			update: updatedUserDetails
		});


	} catch (err) {
		res.status(401).json({ message: err + "" });

		// res.status(500).json({ error: "Registration Failed" });
	}




});







module.exports = router;
