import { Request, Response } from "express";
import { ViruelaModel } from "../../data/models/viruela.models";
import { EmailService } from "../../domain/services/email.service";

export class ViruelaController{

    public getCasos = async (req:Request, res:Response) =>{
        try {
            const casos = await ViruelaModel.find();
            res.json(casos);
        } catch (error) {
            
        }
    }

    public createCasos = async (req:Request, res:Response) =>{
        try {
            const { lat, lng, genre, age, creationDate } = req.body;
            const newCaso = await ViruelaModel.create({
                lat : lat,
                lng : lng,
                genre : genre,
                age : age,
                creationDate : creationDate
            });
            // const emailService = new EmailService();
            // await emailService.sendEmail({
            //     to:"danyjmoon@gmail.com",
            //     subject: title,
            //     htmlBody: `<h1>${description}</h1>`
            // });
            return res.json(newCaso)
        } catch (error) {
            
        }
    }

    public getItemById = async (req:Request, res:Response) =>{
        const { id } = req.params;
        try {
            const casos = await ViruelaModel.findById(id);
            res.json(casos);
        } catch (error) {
            console.error(error);
        }
    }

    public updateCase = async (req:Request, res:Response) =>{
        const { id } = req.params;
        const { lat, lng, genre, age, creationDate } = req.body
        try {
            const casos = await ViruelaModel.findByIdAndUpdate(id, {
                lat,
                lng,
                genre,
                age,
                creationDate
            });
            res.json(casos);
        } catch (error) {
            console.error(error);
        }
    }

    public deleteCase = async (req:Request, res:Response) =>{
        const { id } = req.params;
        try {
            await ViruelaModel.findByIdAndDelete(id);
            res.json({message: "Registro borrado"});
        } catch (error) {
            console.error(error);
        }
    }

    public getRecentCases = async (req: Request, res: Response) => {
        try {
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

            const recentCases = await ViruelaModel.find({
                creationDate: { $gte: oneWeekAgo }
            });

            res.json(recentCases);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error al obtener los casos recientes" });
        }
    }
}