const { app } = require('./app');
// after: const { app } = require('./app');
const queueRoute = require('./routes/queue_route');
// after: const queueRoute = require('./routes/queue_route');
const { ERROR_CODE, ...errors } = require('./errors');

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
// after: the first middleware
app.use('/queue', queueRoute);

module.exports = app; // this should always be the last line