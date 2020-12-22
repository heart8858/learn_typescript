(() => {
    class GenericNumber<T>{
        // 默认的属性的值的类型是泛型类型
        defaultValue: T
        add: (x: T, y: T) => T
    }

    // 在实例化类的对象时再确定泛型的类型
    const g1: GenericNumber<number> = new GenericNumber<number>()
    // 设置属性值
    g1.defaultValue = 100
    g1.add = function (x, y) {
        return x + y
    }
    console.log(g1.add(g1.defaultValue, 20));

    const g2: GenericNumber<string> = new GenericNumber<string>()
    // 设置属性值
    g2.defaultValue = '头贴'
    g2.add = function (x, y) {
        return x + y
    }
    console.log(g2.add('傻逼', g2.defaultValue));

})()