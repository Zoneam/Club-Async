import express from "express";

const router = express.Router();
import { requireSignin } from "../middlewares";
import { submitLink, getLink } from "../controllers/link";

router.post("/submitlink", requireSignin, submitLink);
router.get("/getlink", requireSignin, getLink);

module.exports = router;
