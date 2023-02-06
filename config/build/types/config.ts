export type TBuildMode = 'production' | 'development';

export type TBuildPaths = {
    entry: string;
    build: string;
    html: string;
}

export interface IEnv {
    mode: TBuildMode;
    port: number;
}

export interface IBuildOptions {
    mode: TBuildMode;
    paths: TBuildPaths;
    isDev: boolean;
    port: number;
}