// 修饰符指类中的成员(属性，构造函数，方法)的可访问性
// 类中的成员都有默认的 public 访问修饰符
// private 表示私有的，外部无法访问, 子类中也无法访问
// protected 表示受保护的,外部无法访问，子类中可以访问
(() => {
    class Person {
        // public name: string
        // private name: string
        protected name: string
        public constructor(name: string) {
            this.name = name
        }
        public eat() {
            console.log('真好吃', this.name);
        }
    }
    class Student extends Person {
        constructor(name: string) {
            super(name)
        }
        play() {
            console.log('玩沙子', this.name);
        }
    }
    const per = new Person('大蛇丸')
    // 在类的外部可以访问类中的属性成员
    // 当属性为私有时，外部不可以直接访问
    // console.log(per.name);
    per.eat()
    const stu = new Student('小学生')
    stu.play()
})()