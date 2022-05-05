import {
    KeysOfPropertiesOfT, SubOfTWithOnlyMethods,
    SubOfTWithOnlyProperties,
    TWithOnlyMethods,
    TWithOnlyProperties,
    UnionToIntersection
} from "../../../../../utils/Types";
import {ChildComponent_NS} from "../ChildComponent/ChildComponent";
import {IntegratedComponent_NS} from "../IntegratedComponent/IntegratedComponent";

export namespace IntegrationContainer_NS {

    export namespace Types {

        export declare const IntegrationContainerSymbol: unique symbol

        export interface IntegrationContainer {
            [IntegrationContainerSymbol]: void
        }

        // TODO: potentially bad
        export type ContainerOfChildComponent<Cc, refName extends keyof Iccc, Iccc> = {
            [k in refName]: Iccc[k] extends Cc ? Cc : never;
        }

        // export type ContainerOfT<Cc, key extends string> = {
        //     [k in key]: Cc extends infer R ? R : never
        // }
        //
        // export type PossibleContainerOfT<
        //     Cc,
        //     Iccc extends ChildComponent_NS.Types.ChildComponentT<Cc>
        // > =
        //     Iccc

        // TODO: I want to include specifying the interface for the Integration Component Container local  controller
        export interface IntegrationChildComponentContainerIntegrationConstructor<Cc,
            refName extends keyof Iccc,
            Iccc extends ContainerOfChildComponent<Cc, refName, Iccc>,
            Ic extends IntegratedComponent_NS.Types.IntegratedComponentT<Cc,
                refName,
                Iccc>> {
            integrateIntegrationChildComponentContainer(cc: ChildComponent_NS.Types.SpecificChildComponent<Cc, refName, Iccc>): Ic
        }

        export namespace Transformations {

            import ChildComponentT = ChildComponent_NS.Types.ChildComponentT;

            /**
             * Get total coverage of container and all categories
             * TODO: Components should be able to be specified with decorator
             */
            export type CoverageOfContainer<Iccc> = Partial<UnionToIntersection<ChildComponentOfContainer<Iccc> & TWithOnlyMethods<Iccc>>>

            export type CoverageOfContainerAndComponents<Iccc,
                componentKeys extends KeysOfPropertiesOfT<Iccc>> =
                Partial<UnionToIntersection<Iccc[componentKeys]> & TWithOnlyMethods<Iccc>>

            export type CoverageOfContainerAndComponentsArray<Iccc,
                Ccs extends ChildComponentT<Iccc>> =
                Partial<UnionToIntersection<Ccs & TWithOnlyMethods<Iccc>>>

            export type CoverageOfContainerAndComponentsType<Iccc,
                Ccs extends ChildComponentT<Iccc> | KeysOfPropertiesOfT<Iccc>> =
                Ccs extends ChildComponentT<Iccc> ? CoverageOfContainerAndComponentsArray<Iccc, Ccs> :
                    Ccs extends KeysOfPropertiesOfT<Iccc> ? CoverageOfContainerAndComponents<Iccc, Ccs> :
                        never

            /**
             * *** IntegrationChildComponentContainer ***
             *
             * Gets all properties (filtering methods) from Iccc
             */
            export type ChildComponentOfContainer<Iccc> =
                UnionToIntersection<SubOfTWithOnlyProperties<Iccc>>

            export type ChildComponentExtractionPair<
                Iccc,
                childComponentKey extends keyof ChildComponentOfContainer<Iccc>
            >
                = [
                childComponentKey,
                (keyof TWithOnlyMethods<Exclude<ChildComponentOfContainer<Iccc>[childComponentKey], undefined>>)[]
            ]

            export type ChildComponentExtractionPairs<
                Iccc
            > = (
                {
                    [key in keyof ChildComponentOfContainer<Iccc>]: ChildComponentExtractionPair<Iccc, key>
                }[keyof ChildComponentOfContainer<Iccc>]
            )[]

        }

    }


}

export type IsCovered<L extends R, R> = Pick<L, keyof R>
