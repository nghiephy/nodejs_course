const newsRouter = require('./news');
const siteRouter = require('./site');

function routes(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = routes;
