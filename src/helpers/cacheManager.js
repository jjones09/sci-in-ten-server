import NodeCache from 'node-cache';

import logger from './logger';

const CACHE_TTL = 86400;
const CACHE_CHECK = 3600;

const cache = new NodeCache({ stdTTL: CACHE_TTL, checkperiod: CACHE_CHECK });

const getCachedData = (key) => {
    return cache.get(key);
}

const setCachedData = (key, data) => {
    cache.set(key, data, err => {
        if (err) {
            logger.error('Failed to save RSS JSON data to cache');
        }
    });
}

module.exports = { getCachedData, setCachedData };