import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { IEnv } from './config/build/types/config';

export default (env: IEnv): webpack.Configuration => {
    const mode = env.mode || 'development';
    const PORT = env.port || 3002;
    const isDev = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            build: path.resolve(__dirname, 'build'),
            html: path.resolve(__dirname, 'public', 'index.html')
        },
        isDev,
        port: PORT
    });
};
