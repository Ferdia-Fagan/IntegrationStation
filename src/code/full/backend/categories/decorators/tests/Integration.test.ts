import {keys} from "ts-transformer-keys";
import {IntegrationContainer_NS} from "../../types/preIntegration/IntegrationContainer/IntegrationContainer";
import {ConstructorWithPropertiesA, PropertyOfT} from "../../../../utils/ConstructionObjectPropertySetter";
import {KeysOfComponentsOfT, KeysOfMethodsOfT, KeysOfPropertiesOfT} from "../../../../utils/Types";
import {IntegrateChildComponents} from "../Integration";
import ChildComponentOfContainer = IntegrationContainer_NS.Types.Transformations.ChildComponentOfContainer;

interface Iccc {
    cc1: Cc1
    cc2: Cc2
    iccc(): number
}

interface Cc1 {
    cc1Function(): number
    cc12Function(): number
}

interface Cc2 {
    cc2Function(): number
    cc3Function(): number
}

interface Ic {
    cc1Function(): number
    cc2Function(): number
    iccc(): number
}
declare const XXX: unique symbol
interface IntegrationContainerT {
    cc1?: Cc1
    cc2?: Cc2
}

export type ComponentInterfaceExtraction<
    Iccc,
    componentKey extends ChildComponentOfContainer<Iccc>,
    extractedMethods extends (keyof KeysOfMethodsOfT<componentKey>)[]
> =
    [componentKey, extractedMethods]


@IntegrateChildComponents<
    Iccc, Ic
>(
    // "cc1"

    [
        ["cc1", ["cc1Function"]],
        ["cc2", ["cc2Function"]]
    ]
)
class IntegrationContainer
    extends ConstructorWithPropertiesA<
        IntegrationContainerT,
        PropertyOfT<IntegrationContainerT>
    >
    implements IntegrationContainerT
{

    cc1: Cc1 | undefined
    cc2: Cc2 | undefined

    iccc(): number {
        return 10
    }

}

describe('IntegrationContainer', () => {
    it('integrate properties', () => {
        const cc1: Cc1 = {
            cc12Function(): number {
                return 0;
            },
            cc1Function(): number {
                return 0;
            }
        }
        const cc2: Cc2 = {
            cc3Function(): number {
                return 0;
            },
            cc2Function(): number {
                return 0;
            }
        }

        const inst = new IntegrationContainer({cc1, cc2})
        expect(inst.cc1).toBe(cc1)
        expect(inst.cc2).toBe(cc2)

    })

})


