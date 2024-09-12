export interface IViruela {
    lat: number,
    lng: number,
    isSent: boolean,
    genre: string,
    age: number,
    creationDate: Date;
}

export interface IViruelaDocument extends Document, IViruela {

}