// 多态：父类型的引用指向了子类型的对象，不同类型的对象针对相同的方法产生了不同的行为
(() => {
    class Animal {
        name: string
        constructor(name: string) {
            this.name = name
        }
        run(distance: number = 0) {
            console.log(`跑了${distance}距离`, this.name);
        }
    }
    class Dog extends Animal {
        constructor(name: string) {
            super(name)
        }
        run(distance: number = 5) {
            console.log(`跑了${distance}距离`, this.name);
        }
    }
    class Pig extends Animal {
        constructor(name: string) {
            super(name)
        }
        run(distance: number = 10) {
            console.log(`跑了${distance}距离`, this.name);
        }
    }
    // 实例化父类对象
    const ani: Animal = new Animal('动物')
    ani.run()
    // 实例化子类
    const dog: Dog = new Dog('大黄')
    dog.run()
    const pig: Pig = new Pig('佩奇')
    pig.run()

    // 用父类的类型创建子类的对象
    const dog1: Animal = new Dog('小黄')
    dog1.run()
    const pig1: Animal = new Pig('乔治')
    pig1.run()


    console.log('----------------');
    // 该函数需要的参数是Animal类型的
    function showRun(ani: Animal) {
        ani.run()
    }
    showRun(dog1)
    showRun(pig1)
})()