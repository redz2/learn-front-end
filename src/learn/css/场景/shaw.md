1. 如何给图片添加蒙层？
    * 伪元素 + opacity: 0.5
2. 如何给图片添加眨眼睛效果呢？呈现一张图片
    * clip-path + annimation
    * 改变裁剪的形状
3. 文字下落效果
    * clip-path + annimation + transfromY(-100%)
4. 两张图片做切换
    * clip-path + annimation
    * 裁剪合适的形状，利用（overflow: hidden + 绝对定位 + transform + 动画）来达到图片以特定形状覆盖的效果
5. 伟人去世，给页面添加滤镜
    * filter: grayscale(100%);
6. CSS差值写法
    * mix-blend-mode: 用于定义元素的内容（如文本、图片、SVG 图形等）与其直接父元素的内容和背景如何混合
        * difference: 差值
        * screen: 高光效果