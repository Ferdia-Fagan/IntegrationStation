import {assert, IsExact, IsNever} from "conditional-type-checks";
import {IntegrationContainer_NS} from "../Types";
import CoverageOfContainerAndComponents = IntegrationContainer_NS.Types.Transformations.CoverageOfContainerAndComponents;
import CoverageOfContainerAndComponentsArray = IntegrationContainer_NS.Types.Transformations.CoverageOfContainerAndComponentsArray;

describe('IntegrationContainer_NS', () => {

    describe('types', () => {

        it.todo('ContainerOfChildComponent')

    })

    describe('transformations', () => {

        it('CoverageOfContainerAndComponents', () => {
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

            interface TheSpread {
                function1(): number
                function2(): number
                function3(): number
                // function4(): number
                // function5(): number
            }
            interface NotTheSpread {
                function1(): number
                function2(): number
                function3(): number
                function4(): number
                function5(): number
            }


            // when
            type coverageOfXAndY = CoverageOfContainerAndComponents<
                Container, "component1" | "component2"
            >

            // then
            assert<IsNever<coverageOfXAndY>>(false)
            assert<IsNever<TheSpread>>(false)
            assert<IsNever<Exclude<coverageOfXAndY, TheSpread>>>(true)
            assert<IsNever<Exclude<TheSpread, coverageOfXAndY>>>(true)

            assert<IsNever<NotTheSpread>>(false)
            assert<IsNever<Exclude<coverageOfXAndY, NotTheSpread>>>(false)
            assert<IsNever<Exclude<Required<NotTheSpread>, Required<coverageOfXAndY>>>>(true)

            assert<IsExact<coverageOfXAndY, TheSpread>>(true)
            assert<IsExact<coverageOfXAndY, NotTheSpread>>(false)
        })

        it('CoverageOfContainerAndComponentsArray', () => {
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

            interface TheSpread {
                function1(): number
                function2(): number
                function3(): number
                // function4(): number
                // function5(): number
            }
            interface NotTheSpread {
                function1(): number
                function2(): number
                function3(): number
                function4(): number
                function5(): number
            }


            // when
            type coverageOfXAndY = CoverageOfContainerAndComponentsArray<
                Container, ChildComponentInterface1 | ChildComponentInterface2
            >

            // then
            assert<IsNever<coverageOfXAndY>>(false)
            assert<IsNever<TheSpread>>(false)
            assert<IsNever<Exclude<coverageOfXAndY, TheSpread>>>(true)
            assert<IsNever<Exclude<TheSpread, coverageOfXAndY>>>(true)

            assert<IsNever<NotTheSpread>>(false)
            assert<IsNever<Exclude<coverageOfXAndY, NotTheSpread>>>(false)
            assert<IsNever<Exclude<Required<NotTheSpread>, Required<coverageOfXAndY>>>>(true)

            assert<IsExact<coverageOfXAndY, TheSpread>>(true)
            assert<IsExact<coverageOfXAndY, NotTheSpread>>(false)
        })

    })


})


