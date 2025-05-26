import express from "express"
import postsController from "../controller/postsController.js"

const router = express.Router();

router.get("/", postsController.index);
router.get("/:id", postsController.show);
router.post("/", postsController.store);
router.put("/:id", postsController.update);
router.delete("/:id", postsController.destroy);

export default router