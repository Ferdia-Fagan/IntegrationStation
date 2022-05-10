import {KeysOfPropertiesOfT} from "../../../../utils/types/Filtering";
import {MergeTypeDominatingLeft} from "../../../../utils/types/General";
import {ChildComponent_NS} from "../ChildComponent/ChildComponent";
import {IntegrationContainer_NS} from "../IntegrationContainer/IntegrationContainer";

import CoverageOfContainerAndComponentsType = IntegrationContainer_NS.Types.Transformations.CoverageOfContainerAndComponentsType;

export namespace IntegratedComponent_NS {

    export namespace Types {

        export declare const IntegratedComponentSymbol: unique symbol

        export interface IntegratedComponent {
            [IntegratedComponentSymbol]: void
        }

        export type IntegratedComponentT<    // TODO: correct
            Cc,
            refName extends keyof Iccc,
            Iccc> = {
            [k in keyof Partial<MergeTypeDominatingLeft<Iccc,
                Cc>>]: k extends keyof MergeTypeDominatingLeft<Iccc,
                Cc> ? MergeTypeDominatingLeft<Iccc,
                Cc>[k] : never
        }


        /**
         *
         */
        export type SpecificIntegrableComponent<
            Iccc,
            Cc extends (ChildComponent_NS.Types.ChildComponentT<Iccc> | KeysOfPropertiesOfT<Iccc>),
            Ic extends CoverageOfContainerAndComponentsType<Iccc, Cc>
        > =
            Ic

        export type IntegrableComponent<
            Iccc,
            Cc extends (ChildComponent_NS.Types.ChildComponentT<Iccc> | KeysOfPropertiesOfT<Iccc>)
        > =
            CoverageOfContainerAndComponentsType<Iccc, Cc> extends infer Ic
                ? Ic
                : never

    }

    export namespace Transformations {


    }

}


type X<T> = T


/**
 *
 * @param {T} name
 * @returns {string}
 * @constructor
 */
function XXX<T>(name: T): string {
    return ""
}