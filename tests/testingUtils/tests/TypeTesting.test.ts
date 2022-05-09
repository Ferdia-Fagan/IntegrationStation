import {DoesLTypeExtendsRType} from "../TypeTesting";


describe('DoesLTypeExtendsRType', () => {
    it('works', () => {
        interface RightInterface {
            func1(): string
            func2(): string
            func3(): string
        }
        interface LeftInterface {
            func1(): string
            func2(): string
        }
        interface NotLeftInterface {
            func1(): string
            func(): string
        }

        type result1 = DoesLTypeExtendsRType<LeftInterface, RightInterface>
        type result2 = DoesLTypeExtendsRType<NotLeftInterface, RightInterface>
    })
})


