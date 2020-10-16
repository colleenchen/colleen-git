// 這邊使用 HtmlWebpackPlugin，將 bundle 好的 <script> 插入到 body。${__dirname} 為 ES6 語法對應到 __dirname  
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: `${__dirname}/app/index.html`,
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    // 檔案起始點從 entry 進入，因為是陣列所以也可以是多個檔案
    entry: ['./app/index.js', './app/app.jsx'],
    // output 是放入產生出來的結果的相關參數
    output: {
        path: `${__dirname}/dist`,
        filename: 'index_bundle.js',
    },
    //將loader的設定寫在module的rules屬性中
    module: {
        //rules的值是一個陣列可以存放多個loader物件
        rules: [
            //第一個loader編譯JSX
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react', '@babel/preset-env'] } } },
            //第二個loader編譯ES6
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } }
        ]
    },
    // devServer 則是 webpack-dev-server 設定
    devServer: {
        inline: true,
        //指定開啟port為9000
        port: 9000,
    },
    // plugins 放置所使用的外掛
    plugins: [HTMLWebpackPluginConfig],
};