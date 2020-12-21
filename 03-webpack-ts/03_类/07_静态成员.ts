// 静态成员：在类中通过static修饰的属性或者方法，那么就是静态的属性及静态的方法，即静态成员
(() => {
    class Person {
        // 静态属性
        // 类中默认有name属性
        static name1: string = '小明'
        constructor() {
            // name1是静态属性，不能通过实例对象直接调用
            // this.name1 = name
        }
        static sayhi() {
            console.log('111');
        }
    }
    const person = new Person()
    console.log(Person.name1);
    Person.sayhi()
    // person.name1 = '小天'

})()