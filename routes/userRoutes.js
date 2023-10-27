const express = require("express");
const router = express.Router();
const { authorizePermissions } = require("../middleware/authentication");
const {
  updateUser,
  updateUserPassword,
  editProfilePicture,
  deleteProfilePicture,
  createProfilePicture,
  getSingleUser,
} = require("../controllers/userController");

// Route for updating user information
router.patch("/updateUser", updateUser);
//Route for gettinguser information
router.get("/:id" , getSingleUser);
// Route for updating user password
router.patch("/updateUserPassword", updateUserPassword);

// Route for editing profile picture
router.patch("/editProfilePicture", editProfilePicture);

// Route for deleting profile picture
router.delete("/deleteProfilePicture", deleteProfilePicture);

// Route for creating a profile picture
router.post("/createProfilePicture", createProfilePicture);

module.exports = router;
