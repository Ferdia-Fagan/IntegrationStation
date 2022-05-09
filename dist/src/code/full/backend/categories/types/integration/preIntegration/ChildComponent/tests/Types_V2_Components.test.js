import { assert } from "conditional-type-checks";
import { ChildComponent_NS } from "../ChildComponent";
describe('ChildComponent_NS', () => {
    describe('Types', () => {
        it("symbol", () => {
            class SampleComponentImpl {
                fun1() {
                    return 10;
                }
            }
            ChildComponent_NS.Types.ChildComponentSymbol;
            class SampleComponentImplImpersonator {
                fun1() {
                    return 10;
                }
            }
            let sampleComponentInst = new SampleComponentImpl();
            let sampleComponentInstImpersonator = new SampleComponentImplImpersonator();
            assert(false);
            assert(false);
            // function isA(s: SampleComponent): SampleComponent {
            //     return s
            // }
            //
            // isA(sampleComponentInst)
            // isA(sampleComponentInstImpersonator)
            // let sampleComponentInstObj: SampleComponent = {
            //     [ChildComponentSymbolllll]: undefined
            // }
            // function isAComponent<SampleComponentInterface>(potentialComponent: SampleComponentInterface): potentialComponent is ChildComponent {
            //     // const x = typeof potentialComponent
            //     // const y = potentialComponent.ChildComponentSymbol
            //     // const x = potentialComponent.afddsa
            //     const z = ChildComponent_NS.Types.ChildComponentSymbol in potentialComponent
            //     const a = (ChildComponent_NS.Types.ChildComponentSymbol in potentialComponent) && potentialComponent[ChildComponent_NS.Types.ChildComponentSymbol]
            //     // return potentialComponent.ChildComponentSymbol !== undefined
            //     return false
            // }
            const xafds1 = ChildComponent_NS.Types.ChildComponentSymbol;
            const xafds2 = sampleComponentInst[ChildComponent_NS.Types.ChildComponentSymbol];
            const xafds3 = (ChildComponent_NS.Types.ChildComponentSymbol in sampleComponentInst) && sampleComponentInst[ChildComponent_NS.Types.ChildComponentSymbol];
            if (xafds1) {
                const x = sampleComponentInst;
                console.log();
            }
            else {
                const x = Object.prototype.hasOwnProperty.call(sampleComponentInst, ChildComponent_NS.Types.ChildComponentSymbol);
                console.log();
            }
        });
        // TODO: if SpecificChildComponent needed
        it('SpecificChildComponent', () => {
            // when
            assert(false);
            assert(true);
        });
        it('ChildComponentT', () => {
            assert(true);
            assert(true);
            assert(false);
        });
        it("ChildComponentsMapWithinContainer", () => {
            // then
            assert(true);
            assert(false);
        });
        it('IntegrationContainerChildComponentsArray', () => {
            // then
            assert(true);
            assert(false);
            // interface TheSpread {
            //     function1(): number
            //     function2(): number
            // }
            // interface NotTheSpread {
            //     function3(): number
            //     function4(): number
            // }
            //
            // // then
            // assert<TypesAreTheSame<TheSpread, spreadOfChildComponents>>(true)
        });
    });
    describe('Transformations', () => {
        it('CoverageByComponents', () => {
            const x = {
                function1() {
                    return 0;
                }
            };
            const y = {
                function2() {
                    return 0;
                }
            };
            // when
            const l = [x, y];
            // then
            assert(true);
            assert(false);
        });
    });
});
//# sourceMappingURL=Types_V2_Components.test.js.map