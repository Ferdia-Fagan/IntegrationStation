import {assert} from "conditional-type-checks";
import {IntegrationContainer_NS} from "../Types_V2";
import CoverageOfContainerAndComponentsArray = IntegrationContainer_NS.Types.Transformations.CoverageOfContainerAndComponentsArray;
import CoverageOfContainerAndComponents = IntegrationContainer_NS.Types.Transformations.CoverageOfContainerAndComponents;

describe('IntegratedComponent_NS', () => {

    describe('Types', () => {

        it.todo('IntegratedComponent')

        it.todo('IntegrateableComponent', () => {
            // given
            interface ChildComponentInterface1 {
                function1(): number
            }
            interface ChildComponentInterface2 {
                function2(): number
            }
            interface NotChildComponentInterface {
                function4(): number
            }

            interface Container {
                component1: ChildComponentInterface1
                component2: ChildComponentInterface2
                function3(): number
            }

            interface DesiredIntegratedComponentInterface {
                function1(): number
                function2(): number
                function3(): number
            }

            // when
            // type xx =

            type x = CoverageOfContainerAndComponentsArray<
                Container, Array<ChildComponentInterface1 | ChildComponentInterface2>
            >
            type xa = CoverageOfContainerAndComponents<Container, 'component1' | 'component2'>

        })

    })


})



