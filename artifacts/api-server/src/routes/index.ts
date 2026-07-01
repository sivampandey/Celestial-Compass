import { Router } from "express";
import healthRouter from "./health";
import consultationsRouter from "./consultations";
import adminRouter from "./admin";

const router = Router();

router.use(healthRouter);
router.use(consultationsRouter);
router.use(adminRouter);

export default router;