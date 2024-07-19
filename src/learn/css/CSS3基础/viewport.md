1. 用户对浏览器进行了调整，即触发`resize` 事件，例如将窗口调小，那么`viewport`会变小，因为能够承载的CSS像素变少了。此时，页面文档(`html` 元素)的大小就是视口的大小，即`document.documentElement.innerWidth` 和`window.innerWidth` 保持一致。此时浏览器会产生滚动条，可以滚动查看更多的页面内容。

2. 用户进行了缩放。如果放大，那么`viewport`也会变小，因为，放大后一个CSS像素占据的物理像素变多，窗口就那么大，能够承载的CSS像素变少。而此时`document.documentElement.innerWidth` 并不会发生变化，元素的CSS大小还是那么大，只不过是放大了一屏放不下，需要拖动页面才能查看完整，这个不是滚动条的效果。
