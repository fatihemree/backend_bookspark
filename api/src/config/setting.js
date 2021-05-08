module.exports = {
    title: 'BookSpark API',

    swaggerOptions: {
        swaggerDefinition: {
            info: {
                description: 'BookSpark API',
                title: 'BookSpark API',
                version: '1.0.0',
            },
            consumes: ['application/json', 'multipart/form-data'],
            basePath: '',
            produces: [
                'application/json',
                'application/xml',
                'multipart/form-data'
            ],
            schemes: ['http', 'https'],
            security: [
                {
                    JWT: [],
                }
            ],
            securityDefinitions: {
                JWT: {
                    type: 'apiKey',
                    in: 'header',
                    name: 'Authorization',
                    description: '',
                },
            }
        },
        basedir: __dirname, // app absolute path
        files: [
            '../../public/controller/**/*.js',
        ],
    }
};