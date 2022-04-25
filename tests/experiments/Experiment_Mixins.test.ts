
function applyMixins(derivedCtor: any, constructors: any[]) {
    constructors.map((baseCtor) => {
        return Object.getOwnPropertyNames(baseCtor.prototype).map((name) => {
            return Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
                Object.create(null)
            );
        });
    });
}

type Constructor = new (...args: any[]) => {}

function ApplyMixins2<TBase extends Constructor>(Base: TBase, components: any) {
    return Object.assign(class ApplyMixins2 extends Base {

    }, components)
}


function TimeStamp<T extends { new(...args: any[]): {}}>(target: T) {
    return class extends target {
    }
}

class StartState {
    startState = 1
}

declare const Xjklfdsjkl: unique symbol

interface StartStateI {
    [Xjklfdsjkl]: void
    startState?: number
}

abstract class StartStateA implements StartStateI{
    [Xjklfdsjkl]: void
}

class X extends StartStateA implements StartStateI{
    // [x: string]: any;
    x = 10
    // fdsa() {
    //     return this.startState
    // }
}
class Y {
    y = 100
}

class XAndY {
    xAndY = 1000
}

// interface XAndY extends X,Y {}

// applyMixins(XAndY, [X,Y])

describe("mixins", () => {

    const InstImpl = ApplyMixins2(XAndY, X)
    const inst = new InstImpl()
    const x = Object.getOwnPropertyNames(inst)

    expect(inst.x).toBe(10)
    expect(inst.y).toBe(100)
    expect(inst.xAndY).toBe(1000)

})

