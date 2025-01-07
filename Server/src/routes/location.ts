import { Router } from "express";
import { authorize } from "../middleware/auth";
import locationController from "../controllers/location";
import validateSchema from "../middleware/validate";
import { createLocationSchema, editLocationSchema } from "../validation/location";

const router = Router();

router.get("/", locationController.getAll);
router.get("/:id", locationController.getById);
router.post(
  "/",
  authorize({ isAdmin: true }),
  validateSchema(createLocationSchema),
  locationController.create
);
router.put(
  "/:id",
  validateSchema(editLocationSchema),
  authorize({ isAdmin: true }),
  locationController.edit
)
router.delete("/:id", authorize({ isAdmin: true }), locationController.remove);

export default router;
