import {ConstructorWithPropertiesA, MethodOfT, PropertyOfT} from "../ConstructionObjectPropertySetter";

describe('ConstructorWithPropertiesA', () => {
    it('takes props as constructor, and assigns to "this"', () => {
        interface SampleObjectI {
            a: number
            b: string
            sampleFunc(): number
        }

        class SampleObject extends ConstructorWithPropertiesA<
            SampleObjectI,
            PropertyOfT<SampleObjectI>
        > {
            a!: undefined
            b!: undefined
            //
            // sampleFunc!: () => number
        }
        type X = PropertyOfT<SampleObjectI>

        const props = {
            a: 10,
            b: "klsdf",
            sampleFunc: (): number  => {
                return 10
            }
            // sampleFunc(): number {
            //     return 10
            // }
        }

        function fds(x: X): X {
            return x
        }
        fds(props)

        const inst: any = new SampleObject(props)
        expect(inst.a).toBe(props.a)
        expect(inst.b).toBe(props.b)
        const xdsf = inst.sampleFunc()
        expect(xdsf).toBe(10)
    })

    it('takes methods as constructor, and assigns to "this"', () => {
        interface SampleObjectI {
            sampleMethod?(): number
        }

        class SampleObject
            extends ConstructorWithPropertiesA<
                        SampleObjectI,
                        MethodOfT<SampleObjectI>
                    >
        {
            sampleMethod!: (() => number);
        }
        const sampleMethod = jest.fn(() => 10)
        const props = {
            sampleMethod: sampleMethod,
            c: 10
        }
        const inst = new SampleObject(props)
        expect(inst.sampleMethod()).toBe(10)
    })
})







