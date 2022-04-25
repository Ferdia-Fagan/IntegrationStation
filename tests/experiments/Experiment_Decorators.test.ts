
function ClassDecorator(constructor: Function) {
    console.log("ClassDecorator called")
    constructor.prototype.x = 10
}

function ReportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    console.log("ReportableClassDecorator called first")
    return class extends constructor {
        x = 20;
    };
}

interface X {
    x?: Number
}

@ClassDecorator
class TheClassToDecorate1 implements X {

    constructor() {
        console.log("TheClassToDecorate1 constructor called")
    }

}

@ReportableClassDecorator
class TheClassToDecorate2 {

    constructor() {
        console.log("TheClassToDecorate2 constructor called")
    }

}

console.log("---------------------STARTED---------------------")

describe('decorators', () => {

    it('test', () => {
        let inst1 = new TheClassToDecorate1() as (TheClassToDecorate1 & X)
        let inst2 = new TheClassToDecorate2() as (TheClassToDecorate2 & X)

        expect(true).toBe(true)
        expect(inst1.x).toBe(10)
        expect(inst2.x).toBe(20)
    })

})



