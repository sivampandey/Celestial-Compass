import { Router } from "express";
import healthRouter from "./health";
import consultationsRouter from "./consultations";

const router = Router();

router.use(healthRouter);
router.use(consultationsRouter);

export default router;