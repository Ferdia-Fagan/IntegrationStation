import { FilteredKeysByNotType, KeysOfPropertiesOfT } from "../../../utils/Filtering";
import { UnionToIntersection } from "../../../utils/TypeTransformations";
import { IntegrationContainer_NS } from "../IntegrationContainer/IntegrationContainer";
export declare namespace ChildComponent_NS {
    namespace Types {
        const ChildComponentSymbol: unique symbol;
        interface ChildComponent {
            [ChildComponentSymbol]: void;
        }
        type ChildComponentMapKey<Iccc> = keyof Iccc;
        type SpecificChildComponent<Cc, refName extends ChildComponentMapKey<Iccc>, Iccc> = Iccc[refName] extends Cc ? Cc : never;
        type ChildComponentT<Iccc> = {
            [key in KeysOfPropertiesOfT<Iccc>]: Iccc[key] extends infer R ? Iccc[key] : never;
        }[FilteredKeysByNotType<Iccc, Function>];
        type ChildComponentsMapWithinContainer<Iccc> = {
            [key in KeysOfPropertiesOfT<Iccc>]?: Iccc[key] extends infer R ? Iccc[key] : never;
        };
        type IntegrationContainerChildComponentsArray<Iccc> = {
            [key in KeysOfPropertiesOfT<Iccc>]?: Iccc[key] extends infer R ? Iccc[key] : never;
        }[KeysOfPropertiesOfT<Iccc>];
        namespace Checks {
        }
        namespace Transformations {
            import ChildComponentOfContainer = IntegrationContainer_NS.Types.Transformations.ChildComponentOfContainer;
            type CoverageByComponents<COMPONENTS extends ChildComponent_NS.Types.ChildComponentT<any>> = UnionToIntersection<COMPONENTS>;
            /**
             * Tested: done
             */
            type CoverageByComponentsArray<COMPONENTS extends Array<ChildComponent_NS.Types.ChildComponentT<any>>> = UnionToIntersection<COMPONENTS[number]>;
            type ChildComponentSubInterfaceT<componentI, subI> = subI extends Partial<componentI> ? subI : never;
            type ValidChildComponent<Iccc> = ChildComponentOfContainer<Iccc>[keyof ChildComponentOfContainer<Iccc>];
        }
    }
}
