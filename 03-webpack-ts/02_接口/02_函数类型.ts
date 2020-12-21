(() => {
    // 为了使用接口表示函数类型，需要给接口定义一个调用签名
    // 通过接口的方式作为函数的类型来使用
    // 它就像是一个只有参数列表和返回值类型的函数定义。参数列表里的每个参数都需要名字和类型。

    // 定义一个接口
    interface IsearchFunc {
        // 定义一个调用签名
        (source: string, subString: string): boolean
    }

    // 定义一个函数
    const searchString: IsearchFunc = function (source: string, subString: string): boolean {
        return source.search(subString) > -1
    }

    // 调用函数
    console.log(searchString('头给你锤爆', '爆'));

})()