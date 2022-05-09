import { IntegrationContainer_NS } from "../../types/integration/preIntegration/IntegrationContainer/IntegrationContainer";
import { KeysOfMethodsOfT } from "../../types/utils/Filtering";
import ChildComponentOfContainer = IntegrationContainer_NS.Types.Transformations.ChildComponentOfContainer;
export declare type ComponentInterfaceExtraction<Iccc, componentKey extends ChildComponentOfContainer<Iccc>, extractedMethods extends (keyof KeysOfMethodsOfT<componentKey>)[]> = [
    componentKey,
    extractedMethods
];
