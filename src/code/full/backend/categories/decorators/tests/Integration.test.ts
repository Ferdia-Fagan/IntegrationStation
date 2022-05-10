import {keys} from "ts-transformer-keys";
import {IntegrationContainer_NS} from "../../types/integration/preIntegration/IntegrationContainer/IntegrationContainer";
import {
    ConstructorWithPropertiesA,
    ConstructorWithSelfAssignments,
    PropertyOfT
} from "../../../factories/constructors/ConstructionObjectPropertySetter";
import {KeysOfComponentsOfT, KeysOfMethodsOfT, KeysOfPropertiesOfT} from "../../utils/types/Filtering";
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
    cc12Function(): number
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
        ["cc1", ["cc1Function", "cc12Function"]],
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

    constructor(objSelfAssignments: PropertyOfT<IntegrationContainerT>) {
        super(objSelfAssignments);
    }

    cc1: Cc1 | undefined
    cc2: Cc2 | undefined

    iccc(): number {
        return 10
    }

}


function factory<ici>(
    cons: ConstructorWithSelfAssignments<
        IntegrationContainerT,
        PropertyOfT<IntegrationContainerT>
    >,
    objProperties: PropertyOfT<IntegrationContainerT>
): ici {
    return new cons(objProperties) as ici
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

        const inst = factory<Ic>(IntegrationContainer,{cc1, cc2})
        expect(inst.iccc()).toBe(10)
        expect(inst.cc1Function).toBe(cc1.cc1Function)
        expect(inst.cc12Function).toBe(cc1.cc12Function)
        expect(inst.cc2Function).toBe(cc2.cc2Function)
        // expect(inst.cc1Function()).toBe(0)
        // expect(inst.cc2Function()).toBe(0)

    })

})


