import {IntegrationContainer_NS} from "../../src/code/full/backend/categories/types/integration/preIntegration/IntegrationContainer/IntegrationContainer";
import ChildComponentOfContainer = IntegrationContainer_NS.Types.Transformations.ChildComponentOfContainer;

export function ClassDecorator<T>(x: (keyof ChildComponentOfContainer<T>)[]) {
    return function Helper(constructor: Function) {
        console.log("ClassDecorator called")
        constructor.prototype.x = 100
    }
}

export function ClassDecoratorT<T>(y: number) {
    return function Helper<T extends { new (...args: any[]): {} }>(constructor: T) {
        console.log("ReportableClassDecorator called first")
        return class extends constructor {
            y = y;
        };
    }
}

function ReportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    console.log("ReportableClassDecorator called first")
    return class extends constructor {
        y = 20;
    };
}

interface TheClassToDecorate1 {
    x: Number
}

@ClassDecorator<TheClassToDecorate1>(['x', 'x'])
class TheClassToDecorate1 {
    constructor() {
        console.log("TheClassToDecorate1 constructor called")
    }

}

interface TheClassToDecorate2 {
    y: Number
}
@ClassDecoratorT<TheClassToDecorate2>(10)
class TheClassToDecorate2 {

    constructor(a: number) {
        this.y = a
        console.log("TheClassToDecorate2 constructor called")
    }

}

console.log("---------------------STARTED---------------------")

describe('decorators', () => {

    it('test', () => {
        let inst1 = new TheClassToDecorate1()
        let inst2 = new TheClassToDecorate2(10)

        expect(true).toBe(true)
        expect(inst1.x).toBe(100)
        expect(inst2.y).toBe(20)
    })

})



