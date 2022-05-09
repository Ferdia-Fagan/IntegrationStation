import { assert } from "conditional-type-checks";
import { keys } from "ts-transformer-keys";
describe('IntegrationContainer_NS', () => {
    describe('types', () => {
        it.todo('ContainerOfChildComponent');
    });
    describe('transformations', () => {
        it('CoverageOfContainerAndComponents', () => {
            // then
            assert(false);
            assert(false);
            assert(true);
            assert(true);
            assert(false);
            assert(false);
            assert(true);
            assert(true);
            assert(false);
        });
        it('CoverageOfContainerAndComponentsArray', () => {
            // then
            assert(false);
            assert(false);
            assert(true);
            assert(true);
            assert(false);
            assert(false);
            assert(true);
            assert(true);
            assert(false);
        });
        describe('ChildComponentOfContainer', () => {
            it('will look like type', () => {
                const x = keys();
                expect(x.length).toBe(2);
                expect(x).toEqual(["exampleChildComponentInst", "exampleChildComponentInst2"]);
                // type example = ChildComponentOfContainer<ExampleChildComponentContainer>[keyof ExampleChildComponentContainer]
                // const x = keys<example>()
                // expect(x.length).toBe(1)
                // expect(x[0]).toBe("func1")
            });
        });
        describe('ChildComponentExtractionPairs', () => {
            it('defines a list of child component extraction pairs', () => {
                // type a = (TWithOnlyMethods<Exclude<ChildComponentOfContainer<ExampleChildComponentContainer>["exampleChildComponentInst"], undefined>>)[]
                const fdsa = ["exampleChildComponentInst", ["func11"]];
                const resultInst = [
                    ["exampleChildComponentInst", ["func11"]],
                    ["exampleChildComponentInst2", ["func21"]],
                ];
            });
        });
    });
});
//# sourceMappingURL=Types_V2_Container.test.js.map