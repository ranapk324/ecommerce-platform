const express = require("express");

const router = express.Router();

const {
    registerUser,
    loginUser,
    getProfile
} = require("../controllers/Usercontroller");


const authMiddleware = require("../middleware/authMiddleware");

const adminMiddleware =
require("../middleware/adminMiddleware");

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get(
    "/profile",
    authMiddleware,
    getProfile
);

router.get(
    "/admin",
    authMiddleware,
    adminMiddleware,
    (req, res) => {

        res.json({
            message: "Welcome Admin"
        });

    }
);


module.exports = router;