import { ViruelaModel } from "../../data/models/viruela.models";
import { IViruelaDocument } from "../entities/viruela.entity";

export class ViruelaDataSource {
    public updateIncident = async (id:string, viruela:Partial<IViruelaDocument>) => {
        await ViruelaModel.findByIdAndUpdate(id,{
            lat: viruela.lat,
            lng: viruela.lng,
            isSent: viruela.isSent,
            genre: viruela.title,
            age: viruela.age,
            creationDate: viruela.creationDate,
        });
    }
}