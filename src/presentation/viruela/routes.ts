import { Router, Request, Response } from "express";
import { ViruelaController } from "./controller";

export class ViruelaRoutes{
    static get routes() :Router{
        const router = Router();
        const viruelaController = new ViruelaController();
        router.get("/",viruelaController.getCases);
        router.post("/",viruelaController.createCases);
        router.get("/:id",viruelaController.getItemById);
        router.put("/:id", viruelaController.updateCase);
        router.delete("/:id", viruelaController.deleteCase);
        return router;
    }
}