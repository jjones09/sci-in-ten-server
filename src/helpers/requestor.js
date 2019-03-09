import feed from 'rss-to-json';

const RSS_FEED_URL = 'http://mediapub.it.ox.ac.uk/feeds/142523/audio.xml';

const getConvertedRSS = async () => {
    return new Promise(resolve => {
        feed.load(RSS_FEED_URL, (err, res) => {
            resolve(!err ? res : '');
        })
    })
}

module.exports = { getConvertedRSS };