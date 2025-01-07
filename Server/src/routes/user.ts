import { Router } from "express";
import { authorize } from "../middleware/auth";
import userController from "../controllers/user";
import validateSchema from "../middleware/validate";
import { editUserSchema } from "../validation/user";
import { uploadAvatar } from "../middleware/uploadavatar";

const router = Router();

router.get("/", authorize({ isAdmin: true }), userController.getAll);
router.put(
  "/:id",
  uploadAvatar.single("avatar"),
  validateSchema(editUserSchema),
  authorize(),
  userController.update
);
router.delete("/", authorize(), userController.remove);

export default router;
