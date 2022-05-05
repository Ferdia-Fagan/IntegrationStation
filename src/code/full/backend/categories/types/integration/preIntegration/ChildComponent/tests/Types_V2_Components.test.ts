import {assert, IsExact, IsNever} from "conditional-type-checks";
import {IsTWithinUnion, TypesAreTheSame} from "../../../../../../../../../../tests/testingUtils/TypeTesting";
import {KeysOfPropertiesOfT} from "../../../../utils/Filtering";
import {ChildComponent_NS} from "../ChildComponent";
import SpecificChildComponent = ChildComponent_NS.Types.SpecificChildComponent;
import ChildComponentT = ChildComponent_NS.Types.ChildComponentT;
import ChildComponentsMapWithinContainer = ChildComponent_NS.Types.ChildComponentsMapWithinContainer;
import IntegrationContainerChildComponentsArray = ChildComponent_NS.Types.IntegrationContainerChildComponentsArray;
import CoverageByComponentsArray = ChildComponent_NS.Types.Transformations.CoverageByComponentsArray;
import ChildComponent = ChildComponent_NS.Types.ChildComponent;

describe('ChildComponent_NS', () => {
    
    describe('Types', () => {

        it("symbol", () => {

            interface SampleComponentInterface {
                fun1(): number
            }

            interface SampleComponent extends ChildComponent, SampleComponentInterface {
            }

            class SampleComponentImpl implements SampleComponent {
                [ChildComponent_NS.Types.ChildComponentSymbol]: void
                fun1(): number {
                    return 10
                }
            }

            class SampleComponentImplImpersonator {
                fun1(): number {
                    return 10
                }
            }



            let sampleComponentInst = new SampleComponentImpl()
            let sampleComponentInstImpersonator = new SampleComponentImplImpersonator()

            type x = Pick<SampleComponent, keyof ChildComponent>

            assert<IsNever<
                Pick<SampleComponent, keyof ChildComponent>
            >>(false)
            assert<IsNever<
                Pick<SampleComponentImpl, keyof ChildComponent>
            >>(false)

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
            const xafds1 = ChildComponent_NS.Types.ChildComponentSymbol
            const xafds2 = sampleComponentInst[ChildComponent_NS.Types.ChildComponentSymbol]
            const xafds3 = (ChildComponent_NS.Types.ChildComponentSymbol in sampleComponentInst) && sampleComponentInst[ChildComponent_NS.Types.ChildComponentSymbol]


            if(xafds1){
                const x = sampleComponentInst
                console.log()

            } else {
                const x = Object.prototype.hasOwnProperty.call(sampleComponentInst, ChildComponent_NS.Types.ChildComponentSymbol)
                console.log()
            }


        })
        
        // TODO: if SpecificChildComponent needed
        it('SpecificChildComponent', () => {
            // given
            interface ChildComponentInterface1 {
                function1(): number
            }
            interface NotChildComponentInterface {
                function2(): number
                function3(): number
            }

            interface Container {
                component1: ChildComponentInterface1
                function3(): number
            }

            // when
            assert<IsNever<
                SpecificChildComponent<ChildComponentInterface1, 'component1', Container>
            >>(false)
            assert<IsNever<
                SpecificChildComponent<NotChildComponentInterface, 'component1', Container>
            >>(true)
        })
        
        it('ChildComponentT', () => {
            // given
            interface ChildComponentInterface1 {
                function1(): number
            }
            interface ChildComponentInterface2 {
                function2(): number
            }
            interface NotChildComponentInterface {
                function3(): number
            }
    
            interface Container {
                component1: ChildComponentInterface1
                component2: ChildComponentInterface2
                function4(): number
            }
            
            // when
            type ChildComponentOfContainerType1 = Exclude<ChildComponentInterface1, ChildComponentT<Container>> extends ChildComponentInterface1 ? true : false
            type ChildComponentOfContainerType2 = Exclude<ChildComponentInterface1, ChildComponentT<Container>> extends ChildComponentInterface1 ? true : false
            type NotChildComponentOfContainerType = ChildComponentT<Container> extends NotChildComponentInterface ? true : false
            
            assert<ChildComponentOfContainerType1>(true)
            assert<ChildComponentOfContainerType2>(true)
            assert<NotChildComponentOfContainerType>(false)
        })

        it("ChildComponentsMapWithinContainer", () => {
            // given:
            interface ChildComponentInterface1 {
                function1(): number
            }
            interface ChildComponentInterface2 {
                function2(): number
            }

            interface Container {
                component1: ChildComponentInterface1
                component2: ChildComponentInterface2
                function3(): number
            }

            // when
            type childComponentsMapT = ChildComponentsMapWithinContainer<Container>

            interface childComponentMap{
                component1: ChildComponentInterface1
                component2: ChildComponentInterface2
            }
            interface notChildComponentMap{
                component1: ChildComponentInterface1
                component3: ChildComponentInterface2
            }

            // then
            assert<IsNever<Exclude<childComponentMap, Required<childComponentsMapT>>>>(true)
            assert<IsNever<Exclude<notChildComponentMap, Required<childComponentsMapT>>>>(false)
        })

        it('IntegrationContainerChildComponentsArray', () => {
            // given:
            interface ChildComponentInterface1 {
                function1(): number
            }
            interface ChildComponentInterface2 {
                function2(): number
            }
            interface NotComponentInterface {
                function3(): number
            }

            interface Container {
                component1: ChildComponentInterface1
                component2: ChildComponentInterface2
                function3(): number
            }

            // when
            type childComponentsArray = IntegrationContainerChildComponentsArray<
                Container
            >

            // then
            assert<IsTWithinUnion<ChildComponentInterface1, childComponentsArray>>(true)
            assert<IsTWithinUnion<NotComponentInterface, childComponentsArray>>(false)

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
        })

    })
    
    describe('Transformations', () => {
        it('CoverageByComponents', () => {
            // given:
            interface X {
                function1(): number
            }
            const x: X = {
                function1(): number {
                    return 0;
                }
            }

            interface Y {
                function2(): number
            }
            const y: Y = {
                function2(): number {
                    return 0;
                }
            }

            interface TheSpread {
                function1(): number
                function2(): number
            }
            interface NotTheSpread {
                function3(): number
                function4(): number
            }


            // when
            const l = [x,y]
            type coverageOfXAndY = CoverageByComponentsArray<typeof l>

            // then
            assert<IsExact<coverageOfXAndY, TheSpread>>(true)
            assert<IsExact<coverageOfXAndY, NotTheSpread>>(false)
        })
    })



})


