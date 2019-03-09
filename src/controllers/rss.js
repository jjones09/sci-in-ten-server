import requestor from '../helpers/requestor';

const getFormattedRSS = async (req, res) => {
    const convertedRSS = await requestor.getConvertedRSS();

    res.send(convertedRSS);
}

module.exports = { getFormattedRSS };