import express from "express"
import postsController from "../controller/postsController.js"
import postNotFoundCheck from "../middleware/postNotFoundMiddleware.js";
import researchMiddleware from "../middleware/researchMiddleware.js"
import postContentChecker from "../middleware/contentCheckMiddleware.js";

const router = express.Router();

router.get("/", researchMiddleware, postsController.index);
router.get("/:id", postNotFoundCheck, postsController.show);
router.post("/", postsController.store);
router.put("/:id", postNotFoundCheck, postContentChecker, postsController.update);
router.delete("/:id", postNotFoundCheck, postsController.destroy);

export default router