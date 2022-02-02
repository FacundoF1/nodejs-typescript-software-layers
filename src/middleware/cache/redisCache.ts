import { createClient } from 'redis';

const client = createClient();

// create redis middleware
const redisMiddleware = async (req, res, next) => {

    client.on('error', (err) => { console.log('Redis Client Error', err); return client.disconnect(); });

    await client.connect();
    const key = "__expIress__" + req.originalUrl || req.url;

    const reply = await client.get(key);

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

export default redisMiddleware
