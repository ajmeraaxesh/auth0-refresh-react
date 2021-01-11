module.exports = {
    // images: {
    //     domains: ['images.unsplash.com', 'tailwindui.com'],
    //     loader: 'cloudinary',
    //     path: 'https://res.cloudinary.com/dtkvfdjg5/image/upload',
    // },
    webpack: (config, { dev, isServer }) => {
        // if (!dev && !isServer) {
        //     Object.assign(config.resolve.alias, {
        //         react: 'preact/compat',
        //         'react-dom/test-utils': 'preact/test-utils',
        //         'react-dom': 'preact/compat',
        //     })
        // }
        return config
    },
}
