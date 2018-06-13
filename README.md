<p align="center">
    <a href="http://mpvue.com/">
        <img width="200" src="http://mpvue.com/assets/logo.png">
    </a>
    <a href="https://weapp.iviewui.com">
        <img width="200" src="https://file.iviewui.com/weapp-logo.svg">
    </a>
</p>

## 简介
本项目为`mpvue`引入`小程序原生组件`示例程序，通过`webpack-plugin`的方式将`iview`文件夹下组件引用到`dist`，插件地址：[`import-weapp-component`](https://github.com/JJJYY/import-weapp-component)

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
