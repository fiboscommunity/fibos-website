const withSass = require('@zeit/next-sass')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports =
    withSass(
        {
            webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
                // Perform customizations to webpack config
                // Important: return the modified config
                config.module.rules.push({
                    test: /\.(png|jpg|gif)$/,
                    use: [
                        {
                            loader: 'url-loader', //是指定使用的loader和loader的配置参数
                            options: {
                                limit: 500,  //是把小于500B的文件打成Base64的格式，写入JS
                                outputPath: '../imgs', //打包后的图片放到images文件夹下
                                publicPath: '../../../imgs'
                            }
                        }
                    ],
                    
                });
                // config.plugins.push(new BundleAnalyzerPlugin) 
                return config;
            },
            webpackDevMiddleware: config => {
                // Perform customizations to webpack dev middleware config
                // Important: return the modified config
                return config;
            },
            
        }
    )



