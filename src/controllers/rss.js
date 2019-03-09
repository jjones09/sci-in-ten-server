import cacheManager from '../helpers/cacheManager';
import logger from '../helpers/logger';
import requestor from '../helpers/requestor';

const getFormattedRSS = async (req, res) => {
    let rss = cacheManager.getCachedData('jsonRss');

    if (!rss) {
        logger.info('No cached content found - requesting RSS from server');
        rss = await requestor.getConvertedRSS();
        cacheManager.setCachedData('jsonRss', rss);
    }

    res.send(rss);
}

module.exports = { getFormattedRSS };