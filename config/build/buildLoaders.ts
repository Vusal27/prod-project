import webpack from "webpack";
import  MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { IBuildOptions } from "./types/config";

export function buildLoader({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (filePath: string) => Boolean(filePath.includes('.module.scss')),
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[contenthash:8]'
                    }
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    return [
        tsLoader,
        cssLoader
    ];
}