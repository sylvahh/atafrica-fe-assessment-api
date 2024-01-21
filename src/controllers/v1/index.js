import { Router } from "express";
import stockRouter from "./get-stocks"


const router = Router()


router.use(stockRouter);


export default router