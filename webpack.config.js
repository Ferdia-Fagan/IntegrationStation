const path = require('path');
const rootDir = path.resolve(__dirname, ".")
const tsConfigPath = path.resolve(__dirname, "tsconfig.json")
const keysTransformer = require('ts-transformer-keys/transformer').default;
const {TsconfigPathsPlugin} = require('tsconfig-paths-webpack-plugin');
module.exports = {
    devtool: 'source-map',
    mode: 'development',
    // entry: {
    //     main: "./src/index.js",
    // },
    context: rootDir,
    optimization: {
        minimize: false
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        // modules: [
        //     path.resolve(__dirname, 'node_modules'),
        //     path.resolve(__dirname, './'),
        // ],
        // modules: ['./src', './node_modules'],
        extensions: ['.tsx', '.ts', '.js', '.json'],
        // plugins: [
        //     new TsconfigPathsPlugin(
        //         {
        //             configFile: tsConfigPath
        //         }
        //     )
        // ]
    },
    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, 'dist'),
    // },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        library: 'dist'
    },
};