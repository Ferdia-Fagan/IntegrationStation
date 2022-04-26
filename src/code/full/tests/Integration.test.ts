import {
    IntegrationContainer_NS
} from "../Types";
import { Constructor } from "../utils/Types";
import ChildComponentOfContainer = IntegrationContainer_NS.Types.Transformations.ChildComponentOfContainer;
import CoverageOfContainer = IntegrationContainer_NS.Types.Transformations.CoverageOfContainer;
import CoverageOfContainerAndComponentsArray = IntegrationContainer_NS.Types.Transformations.CoverageOfContainerAndComponentsArray;
import CoverageOfContainerAndComponentsType = IntegrationContainer_NS.Types.Transformations.CoverageOfContainerAndComponentsType;

function IntegrateChildComponents<
    Iccc,
    Ici extends CoverageOfContainer<Iccc>
    // Ici extends CoverageOfContainer<Iccc>,
    // ChildComponentContainerKeys = (ChildComponentOfContainer<Iccc>),
    // Ici = Extract<Iccc, ChildComponentContainerKeys>
// extends IntegrableComponent<Iccc, ChildComponentContainerKeys>,
>(
    childComponentsKeys: (keyof ChildComponentOfContainer<Iccc>)[],
    integrationChildComponentContainer: Constructor<Iccc>,
){
    // const x= Object.getOwnPropertyNames(integrationChildComponentContainer.prototype)
    type ExpectedClass = Constructor<Iccc>
    // return (constructor: ExpectedClass) => {
    //     const fdsa = constructor.prototype.constructor
    //     const d = Object.getOwnPropertyNames(fdsa)
    //     const childComponents = childComponentsKeys.map(key => constructor.prototype[key])
    //     const x = constructor.prototype[childComponents[0]]
    //     // IntegrateWithComponent<Ici, >(x,constructor.prototype)
    // }
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
        args
        return class extends constructor {

        };
    }
}

interface Iccc {
    cc1: Cc1
    cc2: Cc2
    iccc(): number
}

interface Cc1 {
    cc1Function(): number
}

interface Cc2 {
    cc2Function(): number
}

interface Ic {
    cc1Function(): number
    cc2Function(): number
    iccc(): number
}

const x: (keyof ChildComponentOfContainer<Iccc>)[] = ["cc1", "cc2"]
const a = ["cc1", "cc2"]

type fds = CoverageOfContainer<Iccc>
// const xdsfa: Required<fds> = {
//
// }
//
// function KNMlk<Iccc, Ici extends CoverageOfContainer<Iccc>>() {
//
// }

// KNMlk<Iccc, Ic>()

@IntegrateChildComponents<
    Iccc, Ic
>(
    ["cc1"],
    IntegrationContainer,
)
class IntegrationContainer {

    constructor(cc1: Cc1, cc2: Cc2) {
        this.cc1 = cc1
        this.cc2 = cc2
    }

    cc1: Cc1
    cc2: Cc2

    iccc(): number {
        return 10
    }
}

describe('fdsa', () => {
    it('fdsa', () => {
        const cc1: Cc1 = {
            cc1Function(): number {
                return 0;
            }
        }
        const cc2: Cc2 = {
            cc2Function(): number {
                return 0;
            }

        }
        const inst = new IntegrationContainer(cc1,cc2)
        expect(true).toBe(true)
    })
})


