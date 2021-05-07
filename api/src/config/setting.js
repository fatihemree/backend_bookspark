module.exports = {
    title: 'News API',

    swaggerOptions: {
        swaggerDefinition: {
            info: {
                description: 'News API',
                title: 'News API',
                version: '1.0.0',
            },
            host: 'localhost:3000',
            basePath: '',
            produces: [
                'application/json',
                'application/xml',
            ],
            schemes: ['http', 'https']
        },
        basedir: __dirname, // app absolute path
        files: [
            '../../public/controller/**/*.js',
        ],
    }
};