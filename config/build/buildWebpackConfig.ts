import webpack from 'webpack';
import { buildDevServer } from './buildDevServer';
import { buildLoader } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolve } from './buildResolve';
import { IBuildOptions } from './types/config';

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;
    return {
        mode,
        entry: paths.entry,
        module: {
            rules: buildLoader(options),
        },
        resolve: buildResolve(),
        output: {
            filename: '[name].[contenthash:8].js',
            path: paths.build,
            clean: true
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : undefined
    };
}