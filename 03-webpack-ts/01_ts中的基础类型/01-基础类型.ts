(() => {
    // 布尔类型
    // let 变量名: 数据类型 = 值
    let flag: boolean = true
    flag = false
    console.log(flag);

    // 数字类型
    let a1: number = 10 // 十进制
    let a2: number = 0b1010  // 二进制
    let a3: number = 0o12 // 八进制
    let a4: number = 0xa // 十六进制
    console.log(a1);
    console.log(a2);
    console.log(a3);
    console.log(a4);

    // 字符串
    let str1: string = '头给你锤爆'
    let str2: string = '窗前明月光'
    let str3: string = '摸不到头脑'
    console.log(`${str1},${str2},${str3}`);

    // 字符串和数字之间能够一起拼接
    let str4: string = '遇到一耳光'
    let num: number = 1000
    console.log(`${str4} ${num}`);
    console.log(str4 + ' ' + num);

    console.log('-------------------');

    // undefined 和 null
    let und: undefined = undefined
    let nll: null = null
    console.log(und);
    console.log(nll);
    // undefined 和 null 都可以作为其他类型的子类型
    let num2: number = undefined
    console.log(num2);
    let num3: null = null
    console.log(num3);

    // 数组类型
    // 数组定义方式1
    // let 变量名: 数据类型[]: [值1,值2,值3]
    let arr1: number[] = [10, 20]
    console.log(arr1);

    // 数组定义方式2: 泛型的写法
    // let 变量名: Array<数据类型>: [值1,值2,值3]
    let arr2: Array<number> = [100, 200, 300]
    console.log(arr2);
    // 注意：数组定义后，里面的数据类型和定义数组的时候是一致的，否则报错

    // 元组类型: 在定义数组的时候，类型和数据的个数一开始就已经限定了
    let arr3: [string, number, boolean] = [`a sir`, 100.12345, true]
    console.log(arr3);
    // 注意：元组类型在使用的时候，数据的类型的位置和数据的个数，应该一一对应
    console.log(arr3[0].split(''))
    console.log(arr3[1].toFixed(2));

    // 枚举类型,枚举里面的每个数据称为元素,每个元素都有自己的编号，从0开始一次递增
    enum Color {
        red,
        green,
        blue
    }
    // 定义一个Color的枚举类型的变量来接收枚举的值
    let color: Color = Color.red
    console.log(color);
    console.log(Color.red, Color.green, Color.blue); // 0 1 2
    // 也可以手动指定成员的数值
    // 可以由枚举的值得到它的名字
    console.log(Color[1]); // green

    enum Gender {
        // 元素可以是中文的数据值,但是不推荐
        女,
        男
    }
    console.log(Gender.男);

    // any类型: 不确定存入什么类型或使用第三方库时
    let str: any = 100
    console.log(100);
    console.log(typeof (str)); // number
    str = '不过三五瓶'
    console.log(str);
    console.log(typeof (str)); // string

    // 当一个数组中要存储多个数据，个数不确定，类型不确定，可使用any类型
    let arr: any[] = [100, '年少不知软饭香', true]
    // let arr5: any[] = [100, [100, 200], [300, [400, [500, 600]]]].flat(Infinity)
    // console.log(arr5);
    console.log(arr);
    // 此处无错误提示信息
    // console.log(arr[0].split(''));


    // void 类型,在函数声明的时候，小括号后面使用:void 表示该函数没有任何的返回值
    function showMsg(): void {
        console.log('来点色图');
        // return
        // return undefined
        return null
    }
    showMsg()
    console.log(showMsg()); // undefined
    // 定义一个void类型的变量，可以接收一个undefined的值，但是没卵用
    let vd: void = undefined
    console.log(vd);

    console.log('-------------------');
    // object类型
    // 定义一个函数，参数是object类型，返回obj
    function getObj(obj: object) {
        console.log(obj);
        return {
            name: '插队',
            age: 28
        }
    }
    // console.log(getObj({ name: 'mmk', age: 19 }));
    // console.log(getObj('123')); // 错误的
    // console.log(getObj(new String('123')));
    console.log(getObj(String));

    // 联合类型
    // 需求1: 定义一个一个函数得到一个数字或字符串值的字符串形式值
    // function getString(str: number | String): string {
    //     return str.toString()
    // }
    // console.log(getString(123)); // 123
    // console.log(getString('123'));

    // 类型断言的语法方式1：<类型>变量名
    // 方式2：值 as 类型

    // 需求2: 定义一个一个函数得到一个数字或字符串值的长度
    function getString(str: number | String): number {
        // return str.toString().length
        // 如果str本身就是String对象，那么没有必要调用toString()
        if ((<string>str).length) {
            // return (<string>str).length
            return (str as string).length
        } else {
            // 此时传入的是number
            return str.toString().length
        }
    }
    console.log(getString('123')); // 3
    console.log(getString(123)); // 3
    console.log(getString('0123456')); // 7


    // 类型推断
    let txt = 100
    // txt = 'try to get it'
    console.log(txt);

    let test // any 类型
    test = 100
    test = '头给你锤爆'
    console.log(test);
    console.log(typeof (test));

})()
