// readonly修饰符：使该属性成员，不能在外部被随意的修改
// 构造函数中，可以对只读的属性成员进行修改
// 如果构造函数中没有任何参数，类中的属性成员此时已经使用readonly进行修饰，那么外部也是不能对这个属性值就行更改的
(() => {
    // class Person {
    //     readonly name: string = '大明'
    //     constructor(name: string) {
    //         this.name = name
    //     }
    //     sayHi() {
    //         console.log('你好');
    //         // 类中的普通方法中，也不能修改readonly修饰的成员属性值
    //         // this.name = '大明'
    //     }
    // }
    // const person = new Person('小明')
    // console.log(person.name);
    // // 此时无法修改，为只读属性
    // // person.name = '小糯米'
    // console.log(person);
    // console.log(person.name);

    class Person {
        // 构造函数中的name参数，使用readonly修饰之后，该属性称为参数属性
        // 外部也是无法修改类中的name属性成员值
        constructor(readonly name: string) {
            // this.name = name
        }
    }
    const person = new Person('小明')
    console.log(person.name);
    // 此时无法修改，为只读属性
    // person.name = '小糯米'
    console.log(person);
    console.log(person.name);
})()