/* eslint-disable @typescript-eslint/no-var-requires */
const {merge} = require('webpack-merge')
const originalConfigs = require('@salesforce/pwa-kit-dev/configs/webpack/config.js')

const customConfig = {
    optimization: {
        minimize: process.env.NODE_ENV === 'production',
        splitChunks: {
            maxSize: 1024 * 100 /* KB */
        }
    }
}

// Check if originalConfigs is an array and merge each configuration with customConfig
if (Array.isArray(originalConfigs)) {
    module.exports = originalConfigs.map((config) => merge(config, customConfig))
} else {
    module.exports = merge(originalConfigs, customConfig)
}
