import {
    FilteredKeysByNotType,
    FilteredKeysByType, KeysOfPropertiesOfT,
    MergeTypeDominatingLeft,
    NoType, TWithOnlyMethods, TWithOnlyProperties,
    UnionToIntersection
} from "./utils/Types";

export namespace ChildComponent_NS {

    export namespace Types {

        export declare const ChildComponentSymbol: unique symbol

        export interface ChildComponent {
            [ChildComponentSymbol]: void
        }

        export type ChildComponentMapKey<Iccc> = keyof Iccc

        export type SpecificChildComponent<
            Cc,
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

            export type CoverageByComponents<
                COMPONENTS extends ChildComponent_NS.Types.ChildComponentT<any>
            > =
                UnionToIntersection<COMPONENTS>

            /**
             * Tested: done
             */
            export type CoverageByComponentsArray<
                COMPONENTS extends Array<ChildComponent_NS.Types.ChildComponentT<any>>
            > =
                UnionToIntersection<COMPONENTS[number]>

        }

    }

}

export namespace IntegrationContainer_NS {

    export namespace Types {

        export declare const IntegrationContainerSymbol: unique symbol

        export interface IntegrationContainer {
            [IntegrationContainerSymbol]: void
        }

        // TODO: potentially bad
        export type ContainerOfChildComponent<Cc, refName extends keyof Iccc, Iccc> = {
            [k in refName]: Iccc[k] extends Cc ? Cc: never;
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
        export interface IntegrationChildComponentContainerIntegrationConstructor<
            Cc,
            refName extends keyof Iccc,
            Iccc extends ContainerOfChildComponent<Cc, refName, Iccc>,
            Ic extends IntegratedComponent_NS.Types.IntegratedComponentT<
                Cc,
                refName,
                Iccc
            >
        > {
            integrateIntegrationChildComponentContainer(cc: ChildComponent_NS.Types.SpecificChildComponent<Cc, refName, Iccc>): Ic
        }

        export namespace Transformations {

            import ChildComponentT = ChildComponent_NS.Types.ChildComponentT;

            /**
             * Get total coverage of container and all components
             * TODO: Components should be able to be specified with decorator
             */
            export type CoverageOfContainer<
                Iccc
            > = Partial<UnionToIntersection<
                ChildComponentOfContainer<Iccc> & TWithOnlyMethods<Iccc>
            >>

            export type CoverageOfContainerAndComponents<
                Iccc,
                componentKeys extends KeysOfPropertiesOfT<Iccc>
            > =
                Partial<UnionToIntersection<Iccc[componentKeys]> & TWithOnlyMethods<Iccc>>

            export type CoverageOfContainerAndComponentsArray<
                Iccc,
                Ccs extends ChildComponentT<Iccc>
            > =
                Partial<UnionToIntersection<Ccs & TWithOnlyMethods<Iccc>>>
            
            export type CoverageOfContainerAndComponentsType<
                Iccc,
                Ccs extends ChildComponentT<Iccc> | KeysOfPropertiesOfT<Iccc>
            > =
                Ccs extends ChildComponentT<Iccc> ? CoverageOfContainerAndComponentsArray<Iccc, Ccs> : 
                    Ccs extends KeysOfPropertiesOfT<Iccc> ? CoverageOfContainerAndComponents<Iccc, Ccs> : 
                        never

            /**
             * *** IntegrationChildComponentContainer ***
             *
             * Gets all properties (filtering methods) from Iccc
             */
            export type ChildComponentOfContainer<Iccc> =
                                                        UnionToIntersection<
                                                            TWithOnlyProperties<Iccc>
                                                        >


        }

    }


}

export namespace IntegratedComponent_NS {

    export namespace Types {

        export declare const IntegratedComponentSymbol: unique symbol

        export interface IntegratedComponent {
            [IntegratedComponentSymbol]: void
        }

        import CoverageOfContainerAndComponentsType = IntegrationContainer_NS.Types.Transformations.CoverageOfContainerAndComponentsType;

        export type IntegratedComponentT<    // TODO: correct
            Cc,
            refName extends keyof Iccc,
            Iccc
        > = {
            [k in keyof Partial<MergeTypeDominatingLeft<
                Iccc,
                Cc
                >>]: k extends keyof MergeTypeDominatingLeft<
                Iccc,
                Cc
                >? MergeTypeDominatingLeft<
                Iccc,
                Cc
                >[k] : never
        }

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
            CoverageOfContainerAndComponentsType<Iccc, Cc> extends infer Ic ? Ic : never

    }

    export namespace Transformations {


    }

}

export type IsCovered<L extends R, R> = Pick<L, keyof R>


