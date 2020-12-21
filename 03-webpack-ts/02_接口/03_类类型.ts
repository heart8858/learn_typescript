(() => {
    interface IFly {
        name: string
        // 该方法没有任何的实现
        fly()
    }
    // IFly接口约束了当前的这个Person类
    class Person implements IFly {
        // 实现接口中的方法
        name: string
        fly() {
            console.log('I can fly');
        }
        constructor(name: string) {
            this.name = name
        }
    }
    const person = new Person('john')
    person.fly()
    console.log(person.name);

    interface ISwim {
        swim()
    }

    console.log('------------');

    // 定义一个可以 实现多个接口的 类
    class Person1 implements IFly, ISwim {
        name: string
        fly() {
            console.log('I can fly');
        }
        swim() {
            console.log('I can swim');
        }
    }
    const person1 = new Person1()
    person1.fly()
    person1.swim()

    // 接口可以继承其他多个接口
    interface IMyFlyAndSwim extends IFly, ISwim { }

    // 定义一个类，直接实现 IMyFlyAndSwim这个接口
    class Person2 implements IMyFlyAndSwim {
        name: string
        fly() {
            console.log('I can fly2');
        }
        swim() {
            console.log('I can swim2');
        }
    }
    const person2 = new Person2()
    person2.fly()
    person2.swim()

    // 接口和接口之间叫继承(extends)，类和接口之间叫实现(implements)
})()