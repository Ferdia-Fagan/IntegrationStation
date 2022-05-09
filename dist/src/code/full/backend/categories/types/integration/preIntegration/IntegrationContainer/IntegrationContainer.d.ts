import { KeysOfPropertiesOfT, SubOfTWithOnlyProperties, TWithOnlyMethods } from "../../../utils/Filtering";
import { UnionToIntersection } from "../../../utils/TypeTransformations";
import { ChildComponent_NS } from "../ChildComponent/ChildComponent";
import { IntegratedComponent_NS } from "../IntegratedComponent/IntegratedComponent";
export declare namespace IntegrationContainer_NS {
    namespace Types {
        const IntegrationContainerSymbol: unique symbol;
        interface IntegrationContainer {
            [IntegrationContainerSymbol]: void;
        }
        type ContainerOfChildComponent<Cc, refName extends keyof Iccc, Iccc> = {
            [k in refName]: Iccc[k] extends Cc ? Cc : never;
        };
        interface IntegrationChildComponentContainerIntegrationConstructor<Cc, refName extends keyof Iccc, Iccc extends ContainerOfChildComponent<Cc, refName, Iccc>, Ic extends IntegratedComponent_NS.Types.IntegratedComponentT<Cc, refName, Iccc>> {
            integrateIntegrationChildComponentContainer(cc: ChildComponent_NS.Types.SpecificChildComponent<Cc, refName, Iccc>): Ic;
        }
        namespace Transformations {
            import ChildComponentT = ChildComponent_NS.Types.ChildComponentT;
            /**
             * Get total coverage of container and all categories
             * TODO: Components should be able to be specified with decorator
             */
            type CoverageOfContainer<Iccc> = Partial<UnionToIntersection<ChildComponentOfContainer<Iccc> & TWithOnlyMethods<Iccc>>>;
            type CoverageOfContainerAndComponents<Iccc, componentKeys extends KeysOfPropertiesOfT<Iccc>> = Partial<UnionToIntersection<Iccc[componentKeys]> & TWithOnlyMethods<Iccc>>;
            type CoverageOfContainerAndComponentsArray<Iccc, Ccs extends ChildComponentT<Iccc>> = Partial<UnionToIntersection<Ccs & TWithOnlyMethods<Iccc>>>;
            type CoverageOfContainerAndComponentsType<Iccc, Ccs extends ChildComponentT<Iccc> | KeysOfPropertiesOfT<Iccc>> = Ccs extends ChildComponentT<Iccc> ? CoverageOfContainerAndComponentsArray<Iccc, Ccs> : Ccs extends KeysOfPropertiesOfT<Iccc> ? CoverageOfContainerAndComponents<Iccc, Ccs> : never;
            /**
             * *** IntegrationChildComponentContainer ***
             *
             * Gets all properties (filtering methods) from Iccc
             */
            type ChildComponentOfContainer<Iccc> = UnionToIntersection<SubOfTWithOnlyProperties<Iccc>>;
            type ChildComponentExtractionPair<Iccc, childComponentKey extends keyof ChildComponentOfContainer<Iccc>> = [
                childComponentKey,
                (keyof TWithOnlyMethods<Exclude<ChildComponentOfContainer<Iccc>[childComponentKey], undefined>>)[]
            ];
            type ChildComponentExtractionPairs<Iccc> = ({
                [key in keyof ChildComponentOfContainer<Iccc>]: ChildComponentExtractionPair<Iccc, key>;
            }[keyof ChildComponentOfContainer<Iccc>])[];
        }
    }
}
export declare type IsCovered<L extends R, R> = Pick<L, keyof R>;
