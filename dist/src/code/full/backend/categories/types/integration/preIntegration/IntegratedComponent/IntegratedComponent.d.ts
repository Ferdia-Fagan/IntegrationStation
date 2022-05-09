import { KeysOfPropertiesOfT } from "../../../utils/Filtering";
import { MergeTypeDominatingLeft } from "../../../utils/General";
import { ChildComponent_NS } from "../ChildComponent/ChildComponent";
import { IntegrationContainer_NS } from "../IntegrationContainer/IntegrationContainer";
import CoverageOfContainerAndComponentsType = IntegrationContainer_NS.Types.Transformations.CoverageOfContainerAndComponentsType;
export declare namespace IntegratedComponent_NS {
    namespace Types {
        const IntegratedComponentSymbol: unique symbol;
        interface IntegratedComponent {
            [IntegratedComponentSymbol]: void;
        }
        type IntegratedComponentT<// TODO: correct
        Cc, refName extends keyof Iccc, Iccc> = {
            [k in keyof Partial<MergeTypeDominatingLeft<Iccc, Cc>>]: k extends keyof MergeTypeDominatingLeft<Iccc, Cc> ? MergeTypeDominatingLeft<Iccc, Cc>[k] : never;
        };
        /**
         *
         */
        type SpecificIntegrableComponent<Iccc, Cc extends (ChildComponent_NS.Types.ChildComponentT<Iccc> | KeysOfPropertiesOfT<Iccc>), Ic extends CoverageOfContainerAndComponentsType<Iccc, Cc>> = Ic;
        type IntegrableComponent<Iccc, Cc extends (ChildComponent_NS.Types.ChildComponentT<Iccc> | KeysOfPropertiesOfT<Iccc>)> = CoverageOfContainerAndComponentsType<Iccc, Cc> extends infer Ic ? Ic : never;
    }
    namespace Transformations {
    }
}
