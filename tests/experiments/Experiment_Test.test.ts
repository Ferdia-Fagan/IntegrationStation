
type RequiredByMethod = {
    [key:string]: number[] //methodName: [param indexes]
}

type RequiredByClass = {
    [key:string]: RequiredByMethod
}

class RequiredAttrs {
    static data:RequiredByClass|{} = {}

    static addRequired(className: string, methodName:string, attrIndex: number){

        // @ts-ignore
        let reqByMethod:RequiredByMethod = this.data[className] || {}
        if(!reqByMethod[methodName]) {//If we haven't registered required parameters for this method yet
            reqByMethod[methodName] = []
        }
        reqByMethod[methodName].push(attrIndex)//add the index of the parameter as required
        // @ts-ignore
        this.data[className] = reqByMethod
    }

    static getRequired(className: string, methodName: string): number[] {
        // @ts-ignore
        return this.data[className][methodName]
    }
}

//Set an attribute as required: i.e that is not undefined
function required(target: any, methodName: string, index: number) {
    let targetKey = target.constructor.name
    RequiredAttrs.addRequired(targetKey, methodName, index)
}

//Validate the recevied attributes to make sure that a required one is not undefined
function validate(target: any, methodName: string, propDescriptor: PropertyDescriptor) {
    let fn:Function = propDescriptor.value

    propDescriptor.value = (...args:number[]) => {//overwrite our original method
        let targetKey = target.constructor.name
        let requiredAttrs = RequiredAttrs.getRequired(targetKey, methodName)
        let missingAttrs = requiredAttrs.filter( attrIndex => typeof args[attrIndex] == "undefined").length > 0
        if(missingAttrs){//if there are required attributes with undefined value, we throw an exception
            throw new Error("Missing required attributes on method " + methodName)
        }
        // @ts-ignore
        return fn.apply(this, args)//execute the original code here
    }
}

class TestClass {

    @validate
    add(x: number, @required y: number): number {
        return x + y
    }

}

let T = new TestClass()
console.log(T.add(2,3))
// console.log(T.add(2, undefined))

describe('help', function () {
    it('fds', () => {
        expect(true).toBe(true)
    })
});