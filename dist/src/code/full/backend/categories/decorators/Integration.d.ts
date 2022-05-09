import { IntegrationContainer_NS } from "../types/integration/preIntegration/IntegrationContainer/IntegrationContainer";
import CoverageOfContainer = IntegrationContainer_NS.Types.Transformations.CoverageOfContainer;
import ChildComponentExtractionPairs = IntegrationContainer_NS.Types.Transformations.ChildComponentExtractionPairs;
/**
 * @typeParam Iccc - Integration child component container
 * @param {IntegrationContainer_NS.Types.Transformations.ChildComponentExtractionPairs<Iccc>} childComponentsKeys
 * @returns {<T extends {new(...args: any[]): {}}>(constructor: T) => {new(...args: any[]): any, prototype: {}}}
 * @constructor
 */
export declare function IntegrateChildComponents<Iccc, Ici extends CoverageOfContainer<Iccc>>(childComponentsKeys: ChildComponentExtractionPairs<Iccc>): <T extends {
    new (...args: any[]): {};
}>(constructor: T) => {
    new (...args: any[]): any;
    prototype: {};
};
