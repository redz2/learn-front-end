1. 声明变量（CSS自定义属性，变量大小写敏感）
    body {
    --foo: #7F583F;
    --bar: #F7EFD2;
    }

2. var()
* 用于读取变量
    color: var(--foo, #7F583F);
* 用于变量声明
    :root {
    --primary-color: red;
    --logo-text: var(--primary-color);
    }

3. 变量值的类型
* 字符串
    --bar: 'hello';
    --foo: var(--bar)' world';
* 数字（不能直接拼接）
    .foo {
    --gap: 20;
    margin-top: calc(var(--gap) * 1px);
    }

    如果变量值带有单位，就不能写成字符串
    /* 无效 */.foo {  --foo: '20px';  font-size: var(--foo);}
    /* 有效 */.foo {  --foo: 20px;  font-size: var(--foo);}

4. 作用域
和CSS的层叠规则一致

5. 响应式布局
可以在响应式布局的media命令里面声明变量，使得不同的屏幕宽度有不同的变量值
    body {
    --primary: #7F583F;
    --secondary: #F7EFD2;
    }

    a {
    color: var(--primary);
    text-decoration-color: var(--secondary);
    }

    @media screen and (min-width: 768px) {
    body {
        --primary:  #F7EFD2;
        --secondary: #7F583F;
    }
    }

6. 兼容性

7. JS操作
// 设置变量
document.body.style.setProperty('--primary', '#7F583F');

// 读取变量
document.body.style.getPropertyValue('--primary').trim();
// '#7F583F'

// 删除变量
document.body.style.removeProperty('--primary');