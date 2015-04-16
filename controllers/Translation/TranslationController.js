var restful = require('node-restful');

module.exports = function(app, route) {

    //Setup REST
    var rest = restful.model(
        'translation',
        app.models.translation
    ).methods([
            'get',
            'put',
            'post',
            'delete'
        ]);

    //Registering endpoint
    rest.register(app, route);

    //Return middleware
    return function(req, res, next) {
        next();
    };

};