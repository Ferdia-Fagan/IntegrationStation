import { assert } from "conditional-type-checks";
import { pick } from "lodash";
import { keys } from 'ts-transformer-keys';
import { ExtractFunctionsFrom } from "../Extraction";
describe('ComponentFunctionMap', () => {
    it('provides map of keys to components functions', () => {
        assert(true);
        assert(false);
    });
});
const sampleWholeInst = {
    func3() {
        return false;
    },
    func1() {
        return 0;
    }, func2() {
        return "";
    }
};
const result = ExtractFunctionsFrom(sampleWholeInst, keys());
describe('ExtractFunctionsFrom', () => {
    it('extracts map of functions of components (extracted)', () => {
        const sampleWholeInst = {
            func3() {
                return false;
            },
            func1() {
                return 0;
            }, func2() {
                return "";
            }
        };
        const expectedWholeInstExtracted = pick(sampleWholeInst, "func1", "func2");
        // const result = ExtractFunctionsFrom<SamplePartInterface>(sampleWholeInst, keys<SamplePartInterface>())
        expect(result).toEqual(expectedWholeInstExtracted);
    });
});
//# sourceMappingURL=Extraction.test.js.map