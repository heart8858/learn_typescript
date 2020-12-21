// ts中类的写法
(function () {
    // 定义一个类
    var Person = /** @class */ (function () {
        function Person(firstName, lastName) {
            // 更新属性数据
            this.firstName = firstName;
            this.lastName = lastName;
            // 姓名
            // this.fullName = this.firstName + '_' + this.lastName
        }
        return Person;
    }());
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 实例化对象
    var person = new Person('诸葛', '孔明');
    console.log(showFullName(person));
})();
