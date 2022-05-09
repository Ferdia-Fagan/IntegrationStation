import { ConstructorWithPropertiesA } from "../ConstructionObjectPropertySetter";
describe('ConstructorWithPropertiesA', () => {
    it('takes props as constructor, and assigns to "this"', () => {
        class SampleObject extends ConstructorWithPropertiesA {
        }
        const props = {
            a: 10,
            b: "klsdf",
            sampleFunc: () => {
                return 10;
            }
            // sampleFunc(): number {
            //     return 10
            // }
        };
        function fds(x) {
            return x;
        }
        fds(props);
        const inst = new SampleObject(props);
        expect(inst.a).toBe(props.a);
        expect(inst.b).toBe(props.b);
        const xdsf = inst.sampleFunc();
        expect(xdsf).toBe(10);
    });
    it('takes methods as constructor, and assigns to "this"', () => {
        class SampleObject extends ConstructorWithPropertiesA {
        }
        const sampleMethod = jest.fn(() => 10);
        const props = {
            sampleMethod: sampleMethod,
            c: 10
        };
        const inst = new SampleObject(props);
        expect(inst.sampleMethod()).toBe(10);
    });
});
//# sourceMappingURL=ConstructionObjectPropertySetter.test.js.map