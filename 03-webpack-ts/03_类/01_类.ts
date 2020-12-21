// 类可以理解为模板，通过模板实例化对象
(() => {
    class Person {
        name: string
        age: number
        gender: string
        // 定义构造函数：为了将来实例化对象的时候，可以对属性的值进行初始化
        constructor(name: string = '小甜甜', age: number = 16, gender: string = '女') {
            // 更新对象中的属性数据
            this.name = name
            this.age = age
            this.gender = gender
        }
        // 定义实例方法
        sayHi(str: string) {
            console.log(`大家好,我是${this.name},今年${this.age}岁了,是个${this.gender}孩子,`, str);
        }
    }
    // ts中使用类， 实例化对象
    const person = new Person('佐助', 19, '男')
    person.sayHi('你叫什么名字啊')

})()