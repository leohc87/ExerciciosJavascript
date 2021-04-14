const obj = {
    test: 123,
    subObj: {
        test: 123
    }
};

const obj2 = {
    ...obj, subObj: { ...obj.subObj } };


    obj2.subObj.test = 456;

    console.log(obj);