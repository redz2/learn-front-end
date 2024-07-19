## 一等函数
1. 函数是function类的实例
2. 使用高阶函数：接受函数为参数，或者把函数作为结果返回（sorted(arr,key=len)）
3. 匿名函数：sorted(fruits,key=lambda x: x[::-1])
    * 除了作为参数传给高阶函数，python很少使用lambda
4. 可调用对象
    1. 用户定义的函数
    2. 内置函数
    3. 内置方法
    4. 方法
    5. 类
    6. 类的实例（如果类定义了__callable__方法）
    7. 生成器函数（使用yield关键字）


## 函数装饰器和闭包
1. 装饰器是一个可调用对象，参数是另外一个函数（被装饰函数），装饰器通常把函数替换成另外一个函数
    * 重新定义函数，可以添加前处理和后处理，扩展函数功能
```
@decorate
def target():
    print('running target()')

target = decorate(target)

function(func1){
    def func2():
        <!-- 前处理 -->
        res = func1() // 这里就涉及到闭包，为什么func2中可以使用func1
        <!-- 后处理 -->
        return res
    return func2
}
```
2. Python何时执行装饰器（被装饰函数的函数定义之后立即执行）
3. 变量作用域
    * Python会尝试从本地环境获取变量
    * 如何声明全局变量：global b
4. 闭包
    * 只有涉及嵌套函数才有闭包问题，嵌套函数中才会使用匿名函数，所以人们把匿名函数和闭包联系在一起，其实不是这样
    * 闭包指的是延伸了作用域的函数，能访问定义体之外的非全局变量
```
def func1():
    series = []

    def func2():
        series.append("good")

需要将count声明为自由变量，否则count+=1会隐式创建局部变量
def func3():
    nonlocal count = 0

    def func4():
        count += 1
```