import express from "express"
import postsController from "../controller/postsController.js"
import postNotFoundCheck from "../middleware/postNotFoundMiddleware.js";

const router = express.Router();

router.get("/", postsController.index);
router.get("/:id", postNotFoundCheck, postsController.show);
router.post("/", postsController.store);
router.put("/:id", postNotFoundCheck, postsController.update);
router.delete("/:id", postNotFoundCheck, postsController.destroy);

export default router