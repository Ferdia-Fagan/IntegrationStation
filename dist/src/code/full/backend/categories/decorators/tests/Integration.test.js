var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ConstructorWithPropertiesA } from "../../../factories/constructors/ConstructionObjectPropertySetter";
import { IntegrateChildComponents } from "../Integration";
let IntegrationContainer = class IntegrationContainer extends ConstructorWithPropertiesA {
    iccc() {
        return 10;
    }
};
IntegrationContainer = __decorate([
    IntegrateChildComponents(
    // "cc1"
    [
        ["cc1", ["cc1Function"]],
        ["cc2", ["cc2Function"]]
    ])
], IntegrationContainer);
describe('IntegrationContainer', () => {
    it('integrate properties', () => {
        const cc1 = {
            cc12Function() {
                return 0;
            },
            cc1Function() {
                return 0;
            }
        };
        const cc2 = {
            cc3Function() {
                return 0;
            },
            cc2Function() {
                return 0;
            }
        };
        const inst = new IntegrationContainer({ cc1, cc2 });
        expect(inst.cc1).toBe(cc1);
        expect(inst.cc2).toBe(cc2);
    });
});
//# sourceMappingURL=Integration.test.js.map