import { Request, Response } from "express";
import { ViruelaModel } from "../../data/models/viruela.models";
import { EmailService } from "../../domain/services/email.service";

export class ViruelaController{

    public getCases = async (req:Request, res:Response) =>{
        try {
            const cases = await ViruelaModel.find();
            res.json(cases);
        } catch (error) {
            
        }
    }

    public createCases = async (req:Request, res:Response) =>{
        try {
            const { lat, lng, genre, age, creationDate } = req.body;
            const newCase = await ViruelaModel.create({
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
            return res.json(newCase)
        } catch (error) {
            
        }
    }

    public getItemById = async (req:Request, res:Response) =>{
        const { id } = req.params;
        try {
            const cases = await ViruelaModel.findById(id);
            res.json(cases);
        } catch (error) {
            console.error(error);
        }
    }

    public updateCase = async (req:Request, res:Response) =>{
        const { id } = req.params;
        const { lat, lng, genre, age, creationDate } = req.body
        try {
            const cases = await ViruelaModel.findByIdAndUpdate(id, {
                lat,
                lng,
                genre,
                age,
                creationDate
            });
            res.json(cases);
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
}