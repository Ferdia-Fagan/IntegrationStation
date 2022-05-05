import {IntegrationContainer_NS} from "../types/preIntegration/IntegrationContainer/IntegrationContainer";
import {Constructor} from "../../../utils/Types";
import {ComponentInterfaceExtraction} from "./tests/Integration.test";
import CoverageOfContainer = IntegrationContainer_NS.Types.Transformations.CoverageOfContainer;
import ChildComponentOfContainer = IntegrationContainer_NS.Types.Transformations.ChildComponentOfContainer;

export function IntegrateChildComponents<
    Iccc,
    Ici extends CoverageOfContainer<Iccc>
    // Ici extends CoverageOfContainer<Iccc>,
    // ChildComponentContainerKeys = (ChildComponentOfContainer<Iccc>),
    // Ici = Extract<Iccc, ChildComponentContainerKeys>
// extends IntegrableComponent<Iccc, ChildComponentContainerKeys>,
>(
    // childComponentsKeys: (keyof ChildComponentOfContainer<Iccc>)[],
    childComponentsKeys: (ComponentInterfaceExtraction<Iccc, ChildComponentOfContainer<Iccc>, >)[],
){
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {

        return class extends constructor {

        };
    }
}
