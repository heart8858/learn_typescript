// 泛型接口：在定义接口时，为接口中的属性或方法定义泛型类型，在使用接口时，再指定具体的泛型类型
(() => {
    // 定义一个泛型接口
    interface IBaseCRUD<T> {
        data: Array<T>
        add: (t: T) => T
        getUserId: (id: number) => T
    }

    class User {
        id?: number
        name: string
        age: number
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }
    class UserCRUD implements IBaseCRUD<User>{
        // 用来保存多个User类型的用户信息对象
        data: Array<User> = []
        add(user: User): User { // 方法用来存储用户信息对象的
            user.id = Date.now() + Math.random()
            // 把用户信息对象添加到data数组中
            this.data.push(user)
            return user
        }
        getUserId(id: number): User { // 根据id用户信息
            return this.data.find(user => user.id === id)
        }
    }

    // 实例化添加用户信息对象的类UserCRUD
    const userCRUD: UserCRUD = new UserCRUD()
    userCRUD.add(new User('jack', 20))
    userCRUD.add(new User('lucy', 12))
    const { id } = userCRUD.add(new User('john', 18))
    userCRUD.add(new User('ben', 22))
    console.log(userCRUD.data);
    // 根据id查询用户信息对象数据
    const user = userCRUD.getUserId(id)
    console.log(user);
})()