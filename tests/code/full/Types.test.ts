import {ChildComponent_NS} from "../../../src/code/full/Types";
import {WithoutFunctions} from "../../../src/code/full/utils/Types";
import {ComponentI, ComponentIT, IntegrationContainerI} from "./utils/TestDataStructures";
import isChildComponent = ChildComponent_NS.isChildComponent;
import ChildComponentsMapWithinIntergrationContainer = ChildComponent_NS.ChildComponentsMapWithinIntergrationContainer;
import CoverageByChildComponentsArray = ChildComponent_NS.CoverageByChildComponentsArray;
import IntegrationContainerChildComponentsArray = ChildComponent_NS.IntegrationContainerChildComponentsArray;

describe("Child components", () => {

    it("Single: basic structure", () => {
        let component: ComponentI = {
            function1(a: number): string {
                return "";
            },
            function2(a: string): number {
                return 0;
            },
            function3(a: string): string {
                return "";
            }
        }

        let imposterComponent = {
            function1(a: number): string {
                return "";
            },
            function2(a: string): number {
                return 0;
            },
            function3(a: string): string {
                return "";
            }
        }

        const validIntegrationContainer: IntegrationContainerI = {
            component: component,
            function3(a: number): string {
                return "";
            },
            other(a: string): string {
                return "";
            }
        }

        // type ChildComponentType = ChildComponent<typeof imposterComponent, "component" , IntegrationContainerI>

        let isAChildComponent = isChildComponent<ComponentI, "component" , IntegrationContainerI>(
            component, "component", validIntegrationContainer
        )
        expect(isAChildComponent).toBe(true)
        let isAImposterChildComponent = isChildComponent<ComponentI, "component" , IntegrationContainerI>(
            imposterComponent, "component", validIntegrationContainer
        )
        expect(isAImposterChildComponent).toBe(false)
    })

    it("Multiple: basic structure", () => {
        interface TestComponent1I {
            component1FunctionToShareWithIntegration(a: number): string
            component1FunctionToHideFromIntegration(a: number): string
        }
        let component1: TestComponent1I = {
            component1FunctionToShareWithIntegration(a: number): string {
                return "";
            },
            component1FunctionToHideFromIntegration(a: number): string {
                return "";
            },
        }

        interface TestComponent2I {
            component2FunctionToShareWithIntegration(a: number): string
            component2FunctionToHideFromIntegration(a: number): string
        }
        let component2: TestComponent2I = {
            component2FunctionToShareWithIntegration(a: number): string {
                return "";
            },
            component2FunctionToHideFromIntegration(a: number): string {
                return "";
            },
        }

        let imposterComponent = {
            imposterComponent1Function(a: number): string {
                return "";
            },
            imposterComponent2Function(a: number): string {
                return "";
            }
        }

        interface TestIntegrationContainerI {
            component1: TestComponent1I
            component2: TestComponent2I
            integrationFunction(a: number): string,
            integrationTakeoverFunction(a: number): string
        }
        const validIntegrationContainer: TestIntegrationContainerI = {
            component1: component1,
            component2: component2,
            integrationFunction(a: number): string {
                return ""
            },
            integrationTakeoverFunction(a: number): string {
                return ""
            }
        }

        interface TestIntegrationInterface {
            component1Function(a: number): string
            component2Function(a: number): string
            integrationFunction(a: number): string
            integrationTakeoverFunction(a: number): string
        }

        // type ChildComponentType = ChildComponent<typeof imposterComponent, "component" , IntegrationContainerI>

        let isAChildComponent1 = isChildComponent<TestComponent1I, "component1" , TestIntegrationContainerI>(
            component1, "component1", validIntegrationContainer
        )
        expect(isAChildComponent1).toBe(true)
        let isAChildComponent2 = isChildComponent<TestComponent2I, "component2" , TestIntegrationContainerI>(
            component2, "component2", validIntegrationContainer
        )
        expect(isAChildComponent2).toBe(true)

        // now check array:
        const childComponentsMap: ChildComponentsMapWithinIntergrationContainer<TestIntegrationContainerI> = {
            "component1": validIntegrationContainer.component1,
            "component2": validIntegrationContainer.component2
        }
        const xxx = typeof validIntegrationContainer.integrationFunction
        const xxxx = typeof validIntegrationContainer.component1

        console.log()

        const childComponents = Object.values(childComponentsMap)

        type aat = typeof childComponents[number]
        type aa = typeof childComponents[number]

        type a2 = CoverageByChildComponentsArray<
            IntegrationContainerChildComponentsArray<
                TestIntegrationContainerI
            >
        >

        const aaa: a2 = {
            component1FunctionToShareWithIntegration(a: number): string {
                return "";
            },
            component1FunctionToHideFromIntegration(a: number): string {
                return "";
            },
            component2FunctionToShareWithIntegration(a: number): string {
                return "";
            },
            component2FunctionToHideFromIntegration(a: number): string {
                return "";
            }
        }
    })

})


describe("IntegratedComponent", () => {

    it("here", () => {
        interface TestComponent1I {
            component1FunctionToShareWithIntegration(a: number): string
            component1FunctionToHideFromIntegration(a: number): string
        }
        let component: TestComponent1I = {
            component1FunctionToShareWithIntegration(a: number): string {
                return "";
            },
            component1FunctionToHideFromIntegration(a: number): string {
                return "";
            },
        }

        interface ImposterComponentInterface {
            function1(a: number): string
            function2(a: string): number
            function3(a: string): string
        }
        let imposterComponent = {
            function1(a: number): string {
                return "";
            },
            function2(a: string): number {
                return 0;
            },
            function3(a: string): string {
                return "";
            }
        }

        interface TestIntegrationContainerI {
            component1: TestComponent1I
            component2: TestComponent1I
            integrationFunction(a: number): string,
            integrationTakeoverFunction(a: number): string
        }
        const validIntegrationContainer: TestIntegrationContainerI = {
            component1: component,
            component2: component,
            integrationFunction(a: number): string {
                return ""
            },
            integrationTakeoverFunction(a: number): string {
                return ""
            }
        }

        // define types
        let a = {

        }
        type x = ChildComponent_NS.ChildComponent2<ImposterComponentInterface, TestIntegrationContainerI>

        const afadsfa: x = component

        type afd = WithoutFunctions<TestIntegrationContainerI>

        const fad: afd = {
            component1: component,
            component2: component,
            // integrationFunction(a: number): string {
            //     return "";
            // },
            // integrationTakeoverFunction(a: number): string {
            //     return "";
            // }
            // "component1": component
        }

        // let xx: x = {
        //     "component1": component
        // }

        // check types

        const realIntegratedComponent = {
            component1FunctionToShareWithIntegration(a: number): string {
                return "";
            },
            component1FunctionToHideFromIntegration(a: number): string {
                return "";
            },
            integrationFunction(a: number): string {
                return ""
            },
            integrationTakeoverFunction(a: number): string {
                return ""
            }
        }

        const fakeIntegratedComponent = {
            function1(a: number): string {
                return "";
            },
            function2(a: string): number {
                return 0;
            },
            function3(a: string): string {
                return "";
            },
            other(a: string): string {
                return "";
            }
        }
    })

})



