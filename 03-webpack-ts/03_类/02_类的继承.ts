(() => {
    class Person {
        name: string
        age: number
        gender: string
        constructor(name: string = '小明', age: number = 18, gender: string = '男') {
            this.name = name
            this.age = age
            this.gender = gender
        }
        sayHi(str: string) {
            console.log(`我是${this.name},${str}`);
        }
    }
    // 定义一个继承的类
    class Student extends Person {
        constructor(name: string, age: number, gender: string) {
            // 调用父类中的构造函数，使用super方法
            super(name, age, gender)
        }
        sayHi() {
            console.log('我是学生的sayHi方法');

            super.sayHi('哈哈')
        }
    }

    // 实例化Person
    const person = new Person('大明', 89, '男')
    person.sayHi('嘎嘎')
    // 实例化Student
    const student = new Student('小红', 16, '女')
    student.sayHi()
})()