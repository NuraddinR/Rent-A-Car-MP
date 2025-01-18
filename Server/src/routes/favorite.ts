import { Router } from "express";
import { authorize } from "../middleware/auth";
import favoriteController from "../controllers/favorite";
import validateSchema from "../middleware/validate";
import { getAllRentSchema } from "../validation/rent";

const router = Router();
router.get("/", validateSchema(getAllRentSchema), favoriteController.getAll);

router.get("/pagination-favorite", favoriteController.getAllPagination);


router.post("/:id", authorize(), favoriteController.toggle);

export default router;
