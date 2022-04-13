const path = require('path');
const isProduction = process.env.NODE_ENV == 'production';

const config = {
    entry: {
        defined: {
            import: './src/defined/index.ts', filename: './defined/index.js',
            library: { type: 'umd', name: 'defined' },
        },
        flatMap: { import: './src/flatMap/index.ts', filename: './flatMap/index.js' },
        onEmpty: { import: './src/onEmpty/index.ts', filename: './onEmpty/index.js' },
        index: { import: './src/index.ts', filename: './index.js' },
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        globalObject: 'this',
    },
    devtool: 'source-map',
    plugins: [],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/i,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },

        ],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
