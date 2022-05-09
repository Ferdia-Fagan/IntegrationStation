import { assert } from "conditional-type-checks";
describe('IntegratedComponent_NS', () => {
    describe('Types', () => {
        it.todo('IntegratedComponent');
        it('IntegrateableComponent', () => {
            const xi = {
                function1() {
                    return 0;
                }, function2() {
                    return 0;
                }, function3() {
                    return 0;
                }
            };
            const xai = {
                function1() {
                    return 0;
                }, function2() {
                    return 0;
                }, function3() {
                    return 0;
                }
            };
            const specificIntegrableComponentTInst = {
                function1() {
                    return 0;
                }, function2() {
                    return 0;
                },
                function3() {
                    return 0;
                }
            };
            const integrableComponentInst = {
                function1() {
                    return 0;
                }, function2() {
                    return 0;
                },
                function3() {
                    return 0;
                }
            };
            assert(true);
            // const irew: Omit<XXX, keyof Pick<XXX, keyof YYY>> = {
            //     first(): number {
            //         return 109
            //     }
            // }
            //
            // assert<DoesLTypeExtendsRType<right,Required<integrableComponent>>>(true)
            // assert<DoesLTypeExtendsRType<integrableComponent,wrong>>(false)
        });
    });
});
//# sourceMappingURL=Types_V2_IntegratedComponent.test.js.map