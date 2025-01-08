import { Router } from "express";
import favoriteController from "../controllers/favorite";
import { authorize } from "../middleware/auth";

const router = Router();

router.get("/", favoriteController.getAll);
router.post("/:id", authorize(),favoriteController.toggle);

export default router;
