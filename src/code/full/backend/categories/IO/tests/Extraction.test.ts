import {assert} from "conditional-type-checks";
import {pick} from "lodash";
import { keys } from 'ts-transformer-keys';
import {AssertTypeLIsWithinR} from "../../../../../../../tests/testingUtils/TypeTesting";
import {ComponentFunctionMapT, ExtractFunctionsFrom} from "../Extraction";


describe('ComponentFunctionMap', () => {
    it('provides map of keys to components functions', () => {
        interface SampleComponent {
            func1(): number
            func2(): string
            func3(): boolean
        }

        type componentFunctionMapT = ComponentFunctionMapT<SampleComponent>

        interface PossibleComponentFunctionMapI {
            func1(): number
            func2(): string
        }

        interface ImpossibleComponentFunctionMapI {
            func3(): boolean
            func5(): number
        }

        assert<AssertTypeLIsWithinR<PossibleComponentFunctionMapI, componentFunctionMapT>>(true)
        assert<AssertTypeLIsWithinR<ImpossibleComponentFunctionMapI, componentFunctionMapT>>(false)
    })
})

interface SamplePartInterface {
    func1(): number
    func2(): string
}
const sampleWholeInst = {
    func3(): boolean {
        return false;
    },
    func1(): number {
        return 0;
    }, func2(): string {
        return "";
    }
}

const result = ExtractFunctionsFrom<SamplePartInterface>(sampleWholeInst, keys<SamplePartInterface>())


describe('ExtractFunctionsFrom', () => {
    it('extracts map of functions of components (extracted)', () => {
        interface SampleWholeInterface {
            func1(): number
            func2(): string
            func3(): boolean
        }
        const sampleWholeInst: SampleWholeInterface = {
            func3(): boolean {
                return false;
            },
            func1(): number {
                return 0;
            }, func2(): string {
                return "";
            }
        }

        const expectedWholeInstExtracted = pick(sampleWholeInst, "func1", "func2")

        interface SamplePartInterface {
            func1(): number
            func2(): string
        }

        // const result = ExtractFunctionsFrom<SamplePartInterface>(sampleWholeInst, keys<SamplePartInterface>())

        expect(result).toEqual(expectedWholeInstExtracted)
    })
})