import * as express from 'express';

import { Application,Request, Response } from 'express';
import {FbDataService} from "../services/fb.data.service";
import {Subscriber} from "rxjs";
import IRouterHandler = express.IRouterHandler;

class ApiController {

    constructor(private app: Application) {
    }


    ApiOgScraperAction<T> (): any {

        return  this.app.route('/api/ogscraper').get(
            (req: Request, res: Response)=>{
                let data = new FbDataService();
                let url = req.param('url');
              data.getData(url).subscribe(
                    item =>  res.send(item)
                );
            }
        );
    }

}

export { ApiController };