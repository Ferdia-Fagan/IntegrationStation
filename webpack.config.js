const path = require('path');
const keysTransformer = require('ts-transformer-keys/transformer').default;

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                // use: 'ts-loader',
                options: {
                    // make sure not to set `transpileOnly: true` here, otherwise it will not work
                    getCustomTransformers: program => ({
                        before: [
                            keysTransformer(program)
                        ]
                    })
                },
                exclude: /node_modules/
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};