## 标签
### 块级元素(block)
<html> <body> <h1> <div> <ul>
1. 在页面中独占一行
2. 默认宽度：撑满整个父元素
3. 默认高度：由内容撑开
4. 可以通过css设置宽高

### 行内元素(inline)
<br> <em> <strong> <sup> <sub> <del> <ins>
<a> <label> <span>
1. 在页面中不独占一行
2. 默认宽度：由内容撑开
3. 默认高度：由内容撑开
4. 不可以通过css设置宽高!!!

### 行内块元素(inline-block)
<img> <td> <th> <input> <button> <select>
1. 在页面中不独占一行
2. 默认宽度：由内容撑开
3. 默认高度：由内容撑开
4. 可以通过css设置宽高!!!

### 修改元素的显示模式
display: "none|inline|inline-block|block"
不要太在意元素本来的样式和显示方式，可以随便改，比如h1是块元素，就可以把a改成块级元素
<a href="www.baidu.com" display="block">去百度</a>


## CSS3新增长度单位
* CSS2
    1. px(像素值)
    2. em(相对于父级元素字体大小，浏览器默认是font-size为16px)
    3. %(简单点说就是相对于父级元素字体大小)
* CSS3
    1. rem(html根元素字体大小)
    2. vw(viewport width: 50vw/视口宽度的50%) 
    3. ***vh(viewport height: 100vh/视口高度100%)***
    4. vmax(viewport 宽高中大一点的)
    5. vmin(viewport 宽高中小一点的)
* 计算长度
    <!-- 两边一定要有空格 -->
    1. calc(100vh - 100px)











    