import {assert, IsExact, IsNever} from "conditional-type-checks";
import {keys} from "ts-transformer-keys";
import {
    SubOfTWithOnlyMethods,
    SubOfTWithOnlyProperties,
    TWithOnlyMethods,
    TWithOnlyProperties
} from "../../../../../../utils/Types";
import {IntegrationContainer_NS} from "../IntegrationContainer";
import CoverageOfContainerAndComponents = IntegrationContainer_NS.Types.Transformations.CoverageOfContainerAndComponents;
import CoverageOfContainerAndComponentsArray = IntegrationContainer_NS.Types.Transformations.CoverageOfContainerAndComponentsArray;
import ChildComponentOfContainer = IntegrationContainer_NS.Types.Transformations.ChildComponentOfContainer;
import ChildComponentExtractionPairs = IntegrationContainer_NS.Types.Transformations.ChildComponentExtractionPairs;
import ChildComponentExtractionPair = IntegrationContainer_NS.Types.Transformations.ChildComponentExtractionPair;

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
            assert<IsNever<Exclude<coverageOfXAndY, Partial<TheSpread>>>>(true)
            assert<IsNever<Exclude<TheSpread, coverageOfXAndY>>>(true)

            assert<IsNever<NotTheSpread>>(false)
            assert<IsNever<Exclude<coverageOfXAndY, NotTheSpread>>>(false)
            assert<IsNever<Exclude<Required<NotTheSpread>, Required<coverageOfXAndY>>>>(true)

            assert<IsExact<coverageOfXAndY, Partial<TheSpread>>>(true)
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
            assert<IsNever<Exclude<coverageOfXAndY, Partial<TheSpread>>>>(true)
            assert<IsNever<Exclude<TheSpread, coverageOfXAndY>>>(true)

            assert<IsNever<NotTheSpread>>(false)
            assert<IsNever<Exclude<coverageOfXAndY, NotTheSpread>>>(false)
            assert<IsNever<Exclude<Required<NotTheSpread>, Required<coverageOfXAndY>>>>(true)

            assert<IsExact<coverageOfXAndY, Partial<TheSpread>>>(true)
            assert<IsExact<coverageOfXAndY, NotTheSpread>>(false)
        })

        describe('ChildComponentOfContainer', () => {

            it('will look like type', () => {

                interface ExampleChildComponent {
                    func1(): string
                }
                interface ExampleChildComponent2 {
                    func1(): string
                }

                interface ExampleChildComponentContainer {
                    exampleChildComponentInst: ExampleChildComponent
                    exampleChildComponentInst2: ExampleChildComponent2
                }

                type childComponentMapOfContainer = ChildComponentOfContainer<ExampleChildComponentContainer>
                const x = keys<childComponentMapOfContainer>()
                expect(x.length).toBe(2)
                expect(x).toEqual(["exampleChildComponentInst", "exampleChildComponentInst2"])

                // type example = ChildComponentOfContainer<ExampleChildComponentContainer>[keyof ExampleChildComponentContainer]
                // const x = keys<example>()
                // expect(x.length).toBe(1)
                // expect(x[0]).toBe("func1")
            })

        })

        describe('ChildComponentExtractionPairs', () => {

            it('defines a list of child component extraction pairs', () => {
                interface ExampleChildComponent {
                    func11(): string
                    func12(): string
                }
                interface ExampleChildComponent2 {
                    func21(): string
                    func22(): string
                }

                interface ExampleChildComponentContainer {
                    exampleChildComponentInst: ExampleChildComponent
                    exampleChildComponentInst2: ExampleChildComponent2
                }

                interface ExampleExtraction {
                    func11(): string
                }

                // type x = keyof ChildComponentOfContainer<ExampleChildComponentContainer>

                type otherResult = ChildComponentExtractionPair<
                        ExampleChildComponentContainer,
                        "exampleChildComponentInst"
                    >
                // type a = (TWithOnlyMethods<Exclude<ChildComponentOfContainer<ExampleChildComponentContainer>["exampleChildComponentInst"], undefined>>)[]
                const fdsa: otherResult = ["exampleChildComponentInst",["func11"]]

                type result = Exclude<
                    ChildComponentExtractionPairs<ExampleChildComponentContainer>,
                    undefined
                >

                const resultInst: result = [
                    ["exampleChildComponentInst",["func11"]],
                    ["exampleChildComponentInst2",["func21"]],
                ]

            })

        })

    })


})


