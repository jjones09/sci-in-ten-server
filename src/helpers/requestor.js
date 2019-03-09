const axios = require('axios');

import feed from 'rss-to-json';
const RSS_FEED_URL = 'http://mediapub.it.ox.ac.uk/feeds/142523/audio.xml';

const getConvertedRSS = async () => {
    return new Promise(resolve => {
        feed.load(RSS_FEED_URL, (err, res) => {
            if (!err) {
                resolve(res);
            }
            else {
                console.log('UH OH SPAGHETTI-Os!');
                resolve();
            }
        })
    })
}

module.exports = { getConvertedRSS };