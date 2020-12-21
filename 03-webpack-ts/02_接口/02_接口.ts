// 接口
(() => {
    // 需求: 创建人的对象, 需要对人的属性进行一定的约束
    // id是number类型, 必须有, 只读的
    // name是string类型, 必须有
    // age是number类型, 必须有
    // sex是string类型, 可以没有


    // 定义一个接口
    interface Iperson {
        // readonly 表示只读
        readonly id: number
        name: string
        age: number
        // ? 可有可无
        sex?: string
    }
    const person: Iperson = {
        id: 1,
        name: "包头",
        age: 19,
        // sex: "female"
    }
    console.log(person);
    // id 此时可读写
    // person.id = 100
    person.sex = 'male'
    // person.money = '1234' //报错
    console.log(person);



})()