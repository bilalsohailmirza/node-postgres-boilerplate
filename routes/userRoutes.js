const express = require("express");
const router = express.Router();
const { getAllUsers, getUserWithPosts, createUser } = require("../controllers/userController");

router.get("/", getAllUsers);
router.get("/:id/posts", getUserWithPosts);
router.post("/", createUser);

module.exports = router;
