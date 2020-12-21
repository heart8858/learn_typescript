// 泛型：在定义函数、接口、类的时候不能预先确定要使用的数据的类型，而是在使用函数、接口、类的时候才能确定数据的类型
(() => {
    // 需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量。返回根据数量产生对应个数的数据，存入数组
    // function getArr1(value: number, count: number): number[] {
    //     const arr: number[] = []
    //     for (let i = 0; i < count; i++) {
    //         arr.push(value)
    //     }
    //     return arr
    // }
    // const arr1 = getArr1(10.123, 3)
    // console.log(arr1);

    // function getArr2(value: string, count: number): string[] {
    //     const arr: string[] = []
    //     for (let i = 0; i < count; i++) {
    //         arr.push(value)
    //     }
    //     return arr
    // }
    // const arr2 = getArr2('abc', 3)
    // console.log(arr2);

    // 需求：可以传入任意类型的数据，返回来的是存储这个任意类型数据的数组
    // function getArr3(value: any, count: number): any[] {
    //     const arr: number[] = []
    //     for (let i = 0; i < count; i++) {
    //         arr.push(value)
    //     }
    //     return arr
    // }
    // const arr1 = getArr3(10.123, 3)
    // const arr2 = getArr3('abc', 3)
    // console.log(arr1);
    // console.log(arr2);
    // // arr1中存储的是数字类型的数据
    // // arr2中存储的是字符串类型的数据
    // console.log(arr1[0].toFixed(2));
    // console.log(arr2[0].split(''));

    function getArr4<T>(value: T, count: number): T[] {
        // const arr: T[] = []
        const arr: Array<T> = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    const arr1 = getArr4<number>(200.13242, 5)
    const arr2 = getArr4<string>('abc', 5)
    console.log(arr1);
    console.log(arr2);
    console.log(arr1[0].toFixed(3));
    console.log(arr2[0].split(''));


    // console.log(arr1);
    // console.log(arr2);
    // // arr1中存储的是数字类型的数据
    // // arr2中存储的是字符串类型的数据
    // console.log(arr1[0].toFixed(2));
    // console.log(arr2[0].split(''));
})()