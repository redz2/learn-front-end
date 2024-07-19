# 字典
a = {
    "name": "zhouyi",
    'func1': lambda x: print(x)
}

# 类与实例
class B:
    def __init__(self, name):
        self.name = name

    def func1(self, x):
        return x + 1

if __name__ == "__main__":
    print(a['func1'](222))
    x = B("zhouyi")
    print(x.func1(222))
