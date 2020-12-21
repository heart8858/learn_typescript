(() => {
    // 传入形式和名字得到姓名
    // 不传入则返回默认内容
    // 只传入姓氏，则返回姓氏，名字同理
    const getFullName = function (firstName: string = '东方', lastName?: string) {
        if (lastName) {
            return `${firstName}_${lastName}`
        } else {
            return firstName
        }
    }
    // 什么也不传
    console.log(getFullName());
    // 只传入姓氏
    console.log(getFullName('诸葛'));
    // 传入姓氏和名字
    console.log(getFullName('诸葛', '村夫'));
})()