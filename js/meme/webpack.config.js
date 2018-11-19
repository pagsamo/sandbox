module:{
    rules:[
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use:{
                loader: 'babel-loader',
                options:{
                    presets: ['env', 'es2015'],
                }
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        }
    ]
}