// 定义一个接口
(function () {
    //输出姓名
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    var person = {
        firstName: '东方',
        lastName: "不败"
    };
    console.log(showFullName(person));
})();
