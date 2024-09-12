import { Router, Request, Response } from "express";
import { ViruelaController } from "./controller";

export class ViruelaRoutes{
    static get routes() :Router{
        const router = Router();
        const viruelaController = new ViruelaController();
        router.get("/",viruelaController.getCasos);
        router.post("/",viruelaController.createCasos);
        router.get("/:id",viruelaController.getItemById);
        router.put("/:id", viruelaController.updateCase);
        router.delete("/:id", viruelaController.deleteCase);
        router.get("/recent", viruelaController.getRecentCases);
        return router;
    }
}