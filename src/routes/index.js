const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');

function routes(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
}

module.exports = routes;
