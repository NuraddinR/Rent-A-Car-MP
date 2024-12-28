import { Router } from "express";
import { authorize } from "../middleware/auth";
import reservationController from "../controllers/reservation";
import validateSchema from "../middleware/validate";
import { createReservationSchema } from "../validation/reservation";

const router = Router();

router.get("/", authorize(), reservationController.getAll);
router.post("/", authorize(), validateSchema(createReservationSchema),reservationController.create);

export default router;
