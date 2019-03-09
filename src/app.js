import express from 'express';

import rss from './controllers/rss';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send({
        version: '1.0',
    });
});

app.get('/rss', async (req, res) => {
    rss.getFormattedRSS(req, res);
});

app.listen(process.env.PORT || port, err => {
    if (err) {
        return console.log('Something weng wrong', err);
    }
    console.log(`Server is listening on port ${port}`);
});