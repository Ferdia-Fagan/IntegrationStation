import {FilteredKeysByNotType, KeysOfPropertiesOfT} from "../../../utils/Filtering";
import {UnionToIntersection} from "../../../utils/TypeTransformations";
import {IntegrationContainer_NS} from "../IntegrationContainer/IntegrationContainer";

export namespace ChildComponent_NS {

    export namespace Types {

        export declare const ChildComponentSymbol: unique symbol

        export interface ChildComponent {
            [ChildComponentSymbol]: void
        }

        export type ChildComponentMapKey<Iccc> = keyof Iccc

        export type SpecificChildComponent<Cc,
            refName extends ChildComponentMapKey<Iccc>,
            Iccc // extends IntegrationContainer_NS.Types.ContainerOfChildComponent<Cc, refName, Iccc>
            > =
            Iccc[refName] extends Cc ? Cc : never

        export type ChildComponentT<Iccc> = {
            [key in KeysOfPropertiesOfT<Iccc>]: Iccc[key] extends infer R ? Iccc[key] : never
        }[FilteredKeysByNotType<Iccc, Function>]

        export type ChildComponentsMapWithinContainer<Iccc> = {
            [key in KeysOfPropertiesOfT<Iccc>]?: Iccc[key] extends infer R ? Iccc[key] : never
        }

        export type IntegrationContainerChildComponentsArray<Iccc> = {
            [key in KeysOfPropertiesOfT<Iccc>]?: Iccc[key] extends infer R ? Iccc[key] : never
        }[KeysOfPropertiesOfT<Iccc>]

        export namespace Checks {

            // TODO: fix
            // export function isChildComponent<
            //     Cc,
            //     CcRefName extends keyof Iccc,
            //     Iccc extends IntegrationContainer_NS.Types.ContainerOfChildComponent<Cc, CcRefName, Iccc>
            // > (potentialChildComponent: unknown, ccRefName: CcRefName, iccc: Iccc): potentialChildComponent is ChildComponent<Cc, CcRefName, Iccc> {
            //     return iccc[ccRefName] == potentialChildComponent
            // }

        }

        export namespace Transformations {

            import ChildComponentOfContainer = IntegrationContainer_NS.Types.Transformations.ChildComponentOfContainer;
            export type CoverageByComponents<COMPONENTS extends ChildComponent_NS.Types.ChildComponentT<any>> =
                UnionToIntersection<COMPONENTS>

            /**
             * Tested: done
             */
            export type CoverageByComponentsArray<COMPONENTS extends Array<ChildComponent_NS.Types.ChildComponentT<any>>> =
                UnionToIntersection<COMPONENTS[number]>

            export type ChildComponentSubInterfaceT<componentI, subI> = subI extends Partial<componentI> ? subI : never

            export type ValidChildComponent<Iccc> = ChildComponentOfContainer<Iccc>[keyof ChildComponentOfContainer<Iccc>]
        }

    }



}