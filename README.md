<p align="center">
  <img width="200" src="https://raw.githubusercontent.com/JJJYY/mpvue-iview/master/static/qrcode.jpg">
</p>

----------

> 增加直接跳转到原生页面的支持
> 适配了高版本的`mpvue`及`mpvue-loader`，`import-weapp-component`增加了支持直接拷贝的功能
> 详细请看项目中的`pages/native/index`

配置文件修改：
```js
// webpack.base.conf.js
new ImportComponent({
  src: path.resolve(__dirname, '../src'),
  native: true
})
```

#### 关于项目的一些说明：
1. `mpvue`中引用小程序组件可以将组件直接拷贝到`static`目录来实现，这个插件有什么意义?
> 总的来说原理相同，都是拷贝的（事实上插件也是从`copy-webpack-plugin` fork 的），差别在与`import-weapp-component`增加了对组件的自动引入，而不用没引用一个拷贝一次（如果使用组件库，一次性拷贝，用不到的组件会增加包体积），另外在最新版本中增加了对`mpvue`混合开发的支持（即增加对页面拷贝的支持，原理与组件相同），可以对老项目的平稳过渡有些作用。

2. `mpvue`组件中如何引用小程序组件？
> 这个暂时无法支持，`mpvue`并没有用原生`Component`机制，也不会有`json`生成

3. 如何在`mpvue`中修改原生组件样式？
> 这个问题需要看原生组件是否支持，另外如果支持，请不要把样式写到`scope`中，因为`mpvue-loader`会给样式增加唯一`data-scope`。

<p align="center">
  <a href="http://mpvue.com/">
    <img width="200" src="http://mpvue.com/assets/logo.png">
  </a>
  <a href="https://weapp.iviewui.com">
    <img width="200" src="https://file.iviewui.com/weapp-logo.svg">
  </a>
</p>

## 简介
本项目为`mpvue`引入`小程序原生组件`示例程序，通过`webpack-plugin`的方式将`iview`文件夹下组件引用到`dist`，插件地址：[`import-weapp-component`](https://github.com/JJJYY/import-weapp-component)

## 缺陷
若原生组件通过`click`事件，即`this.triggerEvent('click', { index })`来进行父子组件通信，`mpvue`无法从`event.mp`中读取到正确的`detail`，原因是因为`mpvue`将`click`事件编译为`tap`导致`this.triggerEvent('click', { index })`无法找到`click`句柄

## 解决方案
修改组件库`click`事件名称，例如：

`this.triggerEvent('click', { index })` => `this.triggerEvent('iclick', { index })`

对应的模板中：

`@click` => `@iclick`

> 注：本次示例中修改了`modal`组件

## 受影响组件(仅传值情况受影响)
1. action-sheet
2. modal

## 示例代码
关于示例部分代码通过脚本生成的基础上进行的修改，没有注意格式，仅供参考

## License
[MIT](http://opensource.org/licenses/MIT)
