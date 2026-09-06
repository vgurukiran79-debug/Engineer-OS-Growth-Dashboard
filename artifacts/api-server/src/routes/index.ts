import { Router, type IRouter } from "express";
import healthRouter from "./health";
import guruRouter from "./guru";

const router: IRouter = Router();

router.use(healthRouter);
router.use(guruRouter);

export default router;
