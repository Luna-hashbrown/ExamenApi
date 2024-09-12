import express, {Request, Response} from 'express'
import { envs } from './config/envs';
import { MongoDatabase } from './data/init';
import { ViruelaModel } from './data/models/viruela.models';
import { AppRoutes } from './presentation/routes';
import { emailJob } from './domain/jobs/email.job';

console.log(envs.PORT)

const app = express();
app.use(express.json());
app.use(AppRoutes.routes);

(async () => 
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL, 
        dbName: envs.MONGO_DB
    }))
();

app.listen(3000, () => {
    console.log("Server running on port 3000")
    emailJob();
});