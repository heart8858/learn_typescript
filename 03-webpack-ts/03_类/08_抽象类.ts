// 抽象类：包含抽象方法（抽象方法一般没有任何的具体内容的实现）
(() => {
    abstract class Animal {
        // abstract name: string
        // 抽象方法不能有具体的实现
        abstract eat()
        // {
        //     console.log('eat');
        // }
        // 实例方法
        sayHi() {
            console.log('hello');
        }
    }
    // 定义一个派生类
    class Dog extends Animal {
        // name: string = '小黄'
        // 重新的实现抽象类中的方法，此时这个方法就是当前Dog类实例的方法
        eat() {
            console.log('好吃');
        }
    }
    const dog: Dog = new Dog()
    dog.eat()
    dog.sayHi()
    // console.log(dog.name);

    // 实例化抽象类的对象
    // const ani:Animal = new Animal()
})()