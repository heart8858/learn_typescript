(() => {
    // 外部可以传入姓氏和名字数据，同时使用set和get来控制姓名的数据，外部也可以进行修改操作
    class Person {
        firstName: string
        LastNmae: string
        constructor(firstName: string, lastName: string) {
            this.firstName = firstName
            this.LastNmae = lastName
        }
        // 读取器---负责读取数据
        get fullName() {
            console.log('get方法...');
            return this.firstName + '_' + this.LastNmae
        }
        // 设置器---负责设置数据（修改）
        set fullName(val) {
            console.log('set方法...');
            // 把姓氏和名字获取到，重新复制给firstName和lastName
            let names = val.split('_')
            this.firstName = names[0]
            this.LastNmae = names[1]
        }
    }
    const person = new Person('chew', 'po')
    console.log(person);
    // 获取该属性成员属性
    console.log(person.fullName);
    // 设置该属性的数据
    person.fullName = '诸葛_孔明'
    console.log(person.fullName);

})()