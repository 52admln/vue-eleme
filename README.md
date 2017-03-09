## vue-element

## Problems


1. stylus 引入失败

Terminal 中运行 

`npm install stylus stylus-loader style-loader --save-dev`

解决方法：

https://segmentfault.com/q/1010000005916025


2. border-1px 问题

```
// 解决 1px 像素问题
border-1px($color)
  position: relative
  &::before
    display: block
    position: absolute
    left: 0
    top: 0
    width 100%
    border-top: 1px solid $color
    content: ''
  &::after
    display: block
    position: absolute
    left: 0
    bottom: 0
    width 100%
    border-bottom: 1px solid $color
    content: ''

// 解决 1px 像素问题
@media (-webkit-min-device-pixel-ratio: 1.5),(min-device-pixel-ratio: 1.5)
  .border-1px
    &::after
      -webkit-transform: scaleY(0.7)
      transform: scaleY(0.7)

@media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2)
  .border-1px
    &::after
      -webkit-transform: scaleY(0.7)
      transform: scaleY(0.7)

```

3. flex 布局

flex: [等分] [内容不足时缩放情况] [占位空间]

4.
