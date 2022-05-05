// import {FilteredKeysByType, Subset, Super, Superset, WithoutFunctions} from "../../../src/code/full/utils/Types";
// import {ComponentI, IntegrationContainerI} from "./utils/TestDataStructures";
//
// describe("Child categories", () => {
//
//     it("Single: basic structure", () => {
//         let component: ComponentI = {
//             function1(a: number): string {
//                 return "";
//             },
//             function2(a: string): number {
//                 return 0;
//             },
//             function3(a: string): string {
//                 return "";
//             }
//         }
//
//         let imposterComponent = {
//             function1(a: number): string {
//                 return "";
//             },
//             function2(a: string): number {
//                 return 0;
//             },
//             function3(a: string): string {
//                 return "";
//             }
//         }
//
//         const validIntegrationContainer: IntegrationContainerI = {
//             component: component,
//             function3(a: number): string {
//                 return "";
//             },
//             other(a: string): string {
//                 return "";
//             }
//         }
//
//         // type ChildComponentType = ChildComponent<typeof imposterComponent, "component" , IntegrationContainerI>
//
//         let isAChildComponent = isChildComponent<ComponentI, "component" , IntegrationContainerI>(
//             component, "component", validIntegrationContainer
//         )
//         expect(isAChildComponent).toBe(true)
//         let isAImposterChildComponent = isChildComponent<ComponentI, "component" , IntegrationContainerI>(
//             imposterComponent, "component", validIntegrationContainer
//         )
//         expect(isAImposterChildComponent).toBe(false)
//     })
//
//     it("Multiple: basic structure", () => {
//         interface TestComponent1I {
//             component1FunctionToShareWithIntegration(a: number): string
//             component1FunctionToHideFromIntegration(a: number): string
//         }
//         let component1: TestComponent1I = {
//             component1FunctionToShareWithIntegration(a: number): string {
//                 return "";
//             },
//             component1FunctionToHideFromIntegration(a: number): string {
//                 return "";
//             },
//         }
//
//         interface TestComponent2I {
//             component2FunctionToShareWithIntegration(a: number): string
//             component2FunctionToHideFromIntegration(a: number): string
//         }
//         let component2: TestComponent2I = {
//             component2FunctionToShareWithIntegration(a: number): string {
//                 return "";
//             },
//             component2FunctionToHideFromIntegration(a: number): string {
//                 return "";
//             },
//         }
//
//         let imposterComponent = {
//             imposterComponent1Function(a: number): string {
//                 return "";
//             },
//             imposterComponent2Function(a: number): string {
//                 return "";
//             }
//         }
//
//         interface TestIntegrationContainerI {
//             component1: TestComponent1I
//             component2: TestComponent2I
//             integrationFunction(a: number): string,
//             integrationTakeoverFunction(a: number): string
//         }
//         const validIntegrationContainer: TestIntegrationContainerI = {
//             component1: component1,
//             component2: component2,
//             integrationFunction(a: number): string {
//                 return ""
//             },
//             integrationTakeoverFunction(a: number): string {
//                 return ""
//             }
//         }
//
//         interface TestIntegrationInterface {
//             component1Function(a: number): string
//             component2Function(a: number): string
//             integrationFunction(a: number): string
//             integrationTakeoverFunction(a: number): string
//         }
//
//         // type ChildComponentType = ChildComponent<typeof imposterComponent, "component" , IntegrationContainerI>
//
//         let isAChildComponent1 = isChildComponent<TestComponent1I, "component1" , TestIntegrationContainerI>(
//             component1, "component1", validIntegrationContainer
//         )
//         expect(isAChildComponent1).toBe(true)
//         let isAChildComponent2 = isChildComponent<TestComponent2I, "component2" , TestIntegrationContainerI>(
//             component2, "component2", validIntegrationContainer
//         )
//         expect(isAChildComponent2).toBe(true)
//
//         // now check array:
//         const childComponentsMap: ChildComponentsMapWithinIntergrationContainer<TestIntegrationContainerI> = {
//             "component1": validIntegrationContainer.component1,
//             "component2": validIntegrationContainer.component2
//         }
//         const xxx = typeof validIntegrationContainer.integrationFunction
//         const xxxx = typeof validIntegrationContainer.component1
//
//         console.log()
//
//         const childComponents = Object.values(childComponentsMap)
//
//         type aat = typeof childComponents[number]
//         type aa = typeof childComponents[number]
//
//         type fads = IntegrationContainerChildComponentsArray<
//             TestIntegrationContainerI
//         >
//
//         type a2 = CoverageByChildComponentsArray<
//             IntegrationContainerChildComponentsArray<
//                 TestIntegrationContainerI
//             >
//         >
//
//         // const aaa: a2 = {
//         //     component1FunctionToShareWithIntegration(a: number): string {
//         //         return "";
//         //     },
//         //     component1FunctionToHideFromIntegration(a: number): string {
//         //         return "";
//         //     },
//         //     component2FunctionToShareWithIntegration(a: number): string {
//         //         return "";
//         //     },
//         //     component2FunctionToHideFromIntegration(a: number): string {
//         //         return "";
//         //     }
//         // }
//     })
//
// })
//
//
// describe("IntegratedComponent", () => {
//
//     it("here", () => {
//         interface TestComponent1I {
//             component1FunctionToShareWithIntegration(a: number): string
//             component1FunctionToHideFromIntegration(a: number): string
//         }
//         let component: TestComponent1I = {
//             component1FunctionToShareWithIntegration(a: number): string {
//                 return "";
//             },
//             component1FunctionToHideFromIntegration(a: number): string {
//                 return "";
//             },
//         }
//
//         interface ImposterComponentInterface {
//             function1(a: number): string
//             function2(a: string): number
//             function3(a: string): string
//         }
//         let imposterComponent = {
//             function1(a: number): string {
//                 return "";
//             },
//             function2(a: string): number {
//                 return 0;
//             },
//             function3(a: string): string {
//                 return "";
//             }
//         }
//
//         interface TestIntegrationContainerI {
//             component1: TestComponent1I
//             integrationFunction(a: number): string,
//             integrationTakeoverFunction(a: number): string
//         }
//         const validIntegrationContainer: TestIntegrationContainerI = {
//             component1: component,
//             integrationFunction(a: number): string {
//                 return ""
//             },
//             integrationTakeoverFunction(a: number): string {
//                 return ""
//             }
//         }
//
//         interface DesiredIntegratedComponentInterface {
//             component1FunctionToShareWithIntegration(a: number): string
//             component1FunctionToHideFromIntegration(a: number): string
//             integrationFunction(a: number): string
//             integrationTakeoverFunction(a: number): string
//             // integrationTakeoverFunction1(a: number): string
//         }
//
//         // define types
//         let a = {
//
//         }
//         type x = ChildComponent_NS.ChildComponentT<TestIntegrationContainerI>
//
//         const afadsfa: x = component
//
//         type afd = WithoutFunctions<TestIntegrationContainerI>
//
//         const fad: afd = {
//             component1: component,
//             // integrationFunction(a: number): string {
//             //     return "";
//             // },
//             // integrationTakeoverFunction(a: number): string {
//             //     return "";
//             // }
//             // "component1": component
//         }
//
//         // let xx: x = {
//         //     "component1": component
//         // }
//
//         // check types
//
//         type dsfx = ChildComponent_NS.CoverageByChildComponentsArray<
//             Array<TestComponent1I>
//         >
//
//         // const adsflkjfdsa: dsfx = {
//         //
//         // }
//
//         type xafds = ChildComponent_NS.CoverageByChildComponentsArray<TestComponent1I> & Pick<TestIntegrationContainerI,FilteredKeysByType<TestIntegrationContainerI, Function>>
//         type xafds1 = Pick<TestComponent1I,FilteredKeysByType<TestComponent1I, Function>> & Pick<TestIntegrationContainerI,FilteredKeysByType<TestIntegrationContainerI, Function>>
//         type xafdss = Partial<Super<xafds>>
//
//         type integrateAbleInterface = IntegrateableComponent<
//             TestComponent1I,
//             TestIntegrationContainerI,
//             DesiredIntegratedComponentInterface
//         >
//
//         let asdf: integrateAbleInterface = {
//             component1FunctionToShareWithIntegration: function (a: number): string {
//                 throw new Error("Function not implemented.");
//             },
//             component1FunctionToHideFromIntegration: function (a: number): string {
//                 throw new Error("Function not implemented.");
//             },
//             integrationFunction: function (a: number): string {
//                 throw new Error("Function not implemented.");
//             },
//             integrationTakeoverFunction: function (a: number): string {
//                 throw new Error("Function not implemented.");
//             }
//         }
//
//         type xxx = Superset<DesiredIntegratedComponentInterface, xafds1>
//
//
//         // type xxx<T, xafdss > = T
//         // type afdsfdsa = xxx<DesiredIntegratedComponentInterface>
//
//         const x: xafdss = {
//             component1FunctionToShareWithIntegration(a: number): string {
//                 return "";
//             },
//             component1FunctionToHideFromIntegration(a: number): string {
//                 return "";
//             },
//             integrationFunction(a: number): string {
//                 return ""
//             },
//             integrationTakeoverFunction(a: number): string {
//                 return ""
//             },
//         }
//
//         type afdskjhfdsa = Subset<DesiredIntegratedComponentInterface, (ChildComponent_NS.CoverageByChildComponentsArray<TestComponent1I> & Pick<TestIntegrationContainerI,FilteredKeysByType<TestIntegrationContainerI, Function>>)>
//
//         type integrateableComponentType = IntegrateableComponent<
//             TestComponent1I,
//             TestIntegrationContainerI,
//             DesiredIntegratedComponentInterface
//         >
//
//         function xafdsafds<a,b,c, T = IntegrateableComponent<
//             TestComponent1I,
//             TestIntegrationContainerI,
//             DesiredIntegratedComponentInterface
//         >>(t: T): T {
//            return t
//         }
//
//         const fdsa = {
//             component1FunctionToShareWithIntegration(a: number): string {
//                 return "";
//             },
//             component1FunctionToHideFromIntegration(a: number): string {
//                 return "";
//             },
//             integrationFunction(a: number): string {
//                 return ""
//             },
//             integrationTakeoverFunction(a: number): string {
//                 return ""
//             },
//         }
//         xafdsafds<
//             TestComponent1I,
//             TestIntegrationContainerI,
//             DesiredIntegratedComponentInterface
//         >(fdsa)
//
//         const realIntegratedComponent = {
//             component1FunctionToShareWithIntegration(a: number): string {
//                 return "";
//             },
//             component1FunctionToHideFromIntegration(a: number): string {
//                 return "";
//             },
//             integrationFunction(a: number): string {
//                 return ""
//             },
//             integrationTakeoverFunction(a: number): string {
//                 return ""
//             },
//         }
//         const kjfd: integrateableComponentType = realIntegratedComponent
//
//         const fakeIntegratedComponent = {
//             function1(a: number): string {
//                 return "";
//             },
//             function2(a: string): number {
//                 return 0;
//             },
//             function3(a: string): string {
//                 return "";
//             },
//             other(a: string): string {
//                 return "";
//             }
//         }
//     })
//
// })
//
//
//
