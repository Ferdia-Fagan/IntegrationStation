import {assert, IsExact} from "conditional-type-checks";
import {DoesLTypeExtendsRType} from "../../../../../../../../../../tests/testingUtils/TypeTesting";
import {IntegratedComponent_NS} from "../IntegratedComponent";
import {IntegrationContainer_NS} from "../../IntegrationContainer/IntegrationContainer";
import CoverageOfContainerAndComponentsArray = IntegrationContainer_NS.Types.Transformations.CoverageOfContainerAndComponentsArray;
import CoverageOfContainerAndComponents = IntegrationContainer_NS.Types.Transformations.CoverageOfContainerAndComponents;
import CoverageOfContainerAndComponentsType = IntegrationContainer_NS.Types.Transformations.CoverageOfContainerAndComponentsType;
import IntegrateableComponent = IntegratedComponent_NS.Types.SpecificIntegrableComponent;
import IntegrableComponent = IntegratedComponent_NS.Types.IntegrableComponent;

describe('IntegratedComponent_NS', () => {

    describe('Types', () => {

        it.todo('IntegratedComponent')

        it('IntegrateableComponent', () => {
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

            // type x = CoverageOfContainerAndComponentsArray<
            //     Container, ChildComponentInterface1 | ChildComponentInterface2
            // >
            // type xa = CoverageOfContainerAndComponents<Container, 'component1' | 'component2'>
            type x = CoverageOfContainerAndComponentsType<Container, ChildComponentInterface1 | ChildComponentInterface2>
            type xa = CoverageOfContainerAndComponentsType<Container, 'component1' | 'component2'>


            const xi: x = {
                function1(): number {
                    return 0;
                }, function2(): number {
                    return 0;
                }, function3(): number {
                    return 0;
                }

            }

            const xai: xa = {
                function1(): number {
                    return 0;
                }, function2(): number {
                    return 0;
                }, function3(): number {
                    return 0;
                }

            }

            type specificIntegrableComponentT = IntegrateableComponent<
                Container,
                ChildComponentInterface1 | ChildComponentInterface2,
                DesiredIntegratedComponentInterface
            >
            const specificIntegrableComponentTInst: specificIntegrableComponentT = {
                function1(): number {
                    return 0;
                }, function2(): number {
                    return 0;
                }
                , function3(): number {
                    return 0;
                }

            }

            type integrableComponent = IntegrableComponent<
                Container,
                ChildComponentInterface1 | ChildComponentInterface2
            >

            const integrableComponentInst: integrableComponent = {
                function1(): number {
                    return 0;
                }, function2(): number {
                    return 0;
                }
                , function3(): number {
                    return 0;
                }

            }

            interface right {
                function1(): number
                function2(): number
                function3(): number
            }

            interface wrong {
                function1(): number
                function2(): number
                function5(): number
            }

            assert<DoesLTypeExtendsRType<Required<DesiredIntegratedComponentInterface>, Required<integrableComponent>>>(true)
            // type X1 = Pick<right, keyof Required<integrableComponent>>
            // type X = Exclude<right, >
            // type fdslkj = keyof Required<integrableComponent>
            // function OIJKDXSOn(d: fdslkj): fdslkj {
            //     return d
            // }
            // OIJKDXSOn("function1")

            interface XXX {
                first(): number
                second(): number
            }

            interface YYY {
                first(): number
                second(): number
            }

            // const irew: Omit<XXX, keyof Pick<XXX, keyof YYY>> = {
            //     first(): number {
            //         return 109
            //     }
            // }
            //
            // assert<DoesLTypeExtendsRType<right,Required<integrableComponent>>>(true)
            // assert<DoesLTypeExtendsRType<integrableComponent,wrong>>(false)

        })

    })


})



