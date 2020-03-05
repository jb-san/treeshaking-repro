
import path from 'path';

import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json';

const plugins = [
    resolve({
        dedupe: ['react']
    }),
    babel({
        exclude: /node_modules\/(?!(react-spring\/renderprops)\/).*/,
        presets: ['@babel/env', '@babel/preset-react']
    }),
    commonjs({
        exclude: [...Object.keys(pkg.peerDependencies)]
    }),
    
]

export default [
    {
        input: 'index.js',
        preserveModules: true,
        external: Object.keys(pkg.peerDependencies),
        plugins,
        output: [
            {
                dir: path.dirname(pkg.main),
                format: 'cjs',
                sourcemap: true
            },
            {
                dir: path.dirname(pkg.module),
                format: 'esm',
                sourcemap: true
            }
        ]
    }
];
