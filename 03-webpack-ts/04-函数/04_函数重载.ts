// 函数重载：函数名字相同，函数的参数及个数不同
(() => {
    // 需求：定义一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行详解

    // 函数重载声明
    function add(x: string, y: string): string
    function add(x: number, y: number): number

    function add(x: string | number, y: string | number): string | number {
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y // 字符串拼接
        } else if (typeof x === 'number' && typeof y === 'number') {
            return x + y // 数字相加
        }
    }

    // 参数都为字符串
    console.log(add('诸葛', '孔明'));
    // 都为数字
    console.log(add(10, 20));
    // 非法数据
    // console.log(add('add', 10)); // undefined
    // console.log(add(10, '10')); // undefined
})()