// ts中类的写法
(() => {
    // 定义一个接口
    interface Iperson {
        firstName: string
        lastName: string
    }
    // 定义一个类
    class Person {
        // 定义公共的字段（属性）
        firstName: string
        lastName: string
        fullName: string
        constructor(firstName: string, lastName: string) {
            // 更新属性数据
            this.firstName = firstName
            this.lastName = lastName
            // 姓名
            // this.fullName = this.firstName + '_' + this.lastName
        }
    }
    function showFullName(person: Iperson) {
        return person.firstName + '_' + person.lastName
    }

    // 实例化对象
    const person = new Person('诸葛', '孔明')
    console.log(showFullName(person));
})()