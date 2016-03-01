# other-webpack-loaders
Loader 关怀计划 - 专门介绍 Webpack 那几个冷门的 Loader 

Webpack 的官方文档上有一个 [list-of-loaders](http://webpack.github.io/docs/list-of-loaders.html)
之是其中的大部分被使用到的机会非常少, 好心疼这些缺 :heart: 的模块, 所以有这个 repo 专门介绍这些冷门 Loader .

- [json][#json-loader]
- [script][#script-loader]

# json-loader

作用:加载一个JSON文件的内容并返回对象.

在 Node.JS 环境下可以 require 一个 .json 格式的文件:

```
require('./config.json')
```

但是在 wepack 打包的时候不可以直接 require 一个 .json 的文件. 这是因为 webpack 会把 .json 文件当成是 .js 文件来解析导致报错.
因此正确的做法是使用 json-loader

```
require('json!./config.json')
```

# script-loader

有的时候不希望 webpack 在打包某些文件的时候进行解析, 而是希望在浏览器中直接运行.
一个不常见的例子是某段代码重新定义了 require , 如下:

**browser_require.js**

```
window.require=function(){
    console.log(arguments);
}
require(2);
```

引入该文件的正确方法是:

```
require('script!./browser_require.js')
```

这样该文件内容里的 require 就不会被 webpack 解析了, 使用 script-loader 整个文件会被转成字符串打到包里,最终在浏览器里通过 eval 来执行.