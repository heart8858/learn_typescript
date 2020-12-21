(() => {
    function hi(str: string) {
        return '你好' + str
    }
    let text = 'a air'
    console.log(hi(text))
})()

// ts的文件中如果直接书写js语法的代码，在html文件中直接引入ts文件，在chrome中可以直接使用
