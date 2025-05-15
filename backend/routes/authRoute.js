import express from "express";

const router = express.Router();

// import controllers
router.get("/signup", (req, res) => {
res.send("signup page");
});

router.get("/signin", (req, res) => {
    res.send("signin page");
})
export default router;