
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
