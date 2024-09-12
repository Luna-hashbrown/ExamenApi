import { Router } from "express";
import { ViruelaRoutes } from "./viruela/routes";

export class AppRoutes{
    static get routes() :Router{
        const router = Router();
        router.use("/api/viruela", ViruelaRoutes.routes)
        return router;
    }
}