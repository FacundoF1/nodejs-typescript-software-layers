import flatCache from 'flat-cache';

// load new cache
let cache = flatCache.load('productsCache');

// create flat cache routes
let flatCacheMiddleware = (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url;
    let cacheContent = cache.getKey(key);
    if (cacheContent) {
        const response = JSON.parse(cacheContent);
        res.send(response);
    } else {
        res.sendResponse = res.send;
        res.send = (body) => {
            cache.setKey(key, body);
            cache.save();
            res.sendResponse(body)
        }
        next();
    }
};

export default flatCacheMiddleware
