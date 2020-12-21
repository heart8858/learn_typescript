(() => {
    // js的书写方式
    // 命名函数
    function add(x, y) {
        return x + y
    }

    // 函数表达式
    const add2 = function (x, y) {
        return x + y
    }

    // 为函数定义类型
    function add3(x: number, y: number): number {
        return x + y
    }
    const add4 = function (x: string, y: string): string {
        return x + y
    }
    const res1: string = add4('111', '2222')
    console.log(res1);
    const res2: number = add3(111, 2222)
    console.log(res2);


    // 完整写法
    // add3--->变量名---> 函数add3
    // (x: number, y: number) => number 当前的这个函数的类型
    // function (x: number, y: number): number {return x + y} 就相当于符合上面的这个函数类型的值
    const add5: (x: number, y: number) => number = function (x: number, y: number): number {
        return x + y
    }
    console.log(add5(10, 100));

})()