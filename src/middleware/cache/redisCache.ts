
import { createClient } from 'redis';

// create redis middleware
export const redisMiddleware = async (req, res, next) => {
    const client = createClient();

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();
    const key = "__expIress__1+" + req.originalUrl || req.url;

    const reply = await client.get(key);

    console.log('reply', reply);

    if (reply) {
        console.log('if');
        const response = JSON.parse(reply);
        res.send(response);
    } else {
        console.log('else');
        res.sendResponse = res.send;
        res.send = async (body) => {
            await client.set(key, body);
            res.sendResponse(body);
        }
        next();
    }
    await client.disconnect();
};


// @countInstances
// class redisMiddleware {

//     private _req: Request | any;
//     private _res: Response | any;
//     private client = createClient();
//     private _next;

//     constructor(req: Request, res: Response, next) {
//         this._req = req;
//         this._res = res;
//         this._next = next;
//     }

//     async handleRequest() {
//         this.client.on('error', (err) => err);
//         await this.client.connect();
//         const key = "__expIress__" + this._req.originalUrl || this._req.url;

//         const reply = await this.client.get(key);

//         if (reply) {
//             console.log('if');
//             const response = JSON.parse(reply);
//             this._res.send(response);
//         } else {
//             console.log('else');
//             this._res.sendResponse = this._res.send;
//             this._res.send = async (body) => {
//                 await this.client.set(key, body);
//                 this._res.sendResponse(body);
//             }
//             this._next();
//         }
//         await this.client.disconnect();

//     }

// }