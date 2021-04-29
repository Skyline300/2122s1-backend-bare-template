const { app } = require('./app');
app.get('/', function (req, res, next) {
    return {
        message: 'Welcome to our queue system, the following are the supported APIs',
        apis: [
            {
                name: 'Enqueue',
                endpoint: '/queue',
                method: 'POST',
            },
            {
                name: 'Dequeue',
                endpoint: '/queue',
                method: 'DELETE',
            },
        ],
    };
});
module.exports = app; // this should always be the last line