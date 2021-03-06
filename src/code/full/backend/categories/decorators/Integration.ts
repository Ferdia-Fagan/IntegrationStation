import {pick} from "lodash";
import {Constructor} from "../../factories/constructors/ConstructionObjectPropertySetter";
import {
    IntegrationContainer_NS
} from "../types/integration/preIntegration/IntegrationContainer/IntegrationContainer";
import {ComponentInterfaceExtraction} from "./tests/Integration.test";
import CoverageOfContainer = IntegrationContainer_NS.Types.Transformations.CoverageOfContainer;
import ChildComponentOfContainer = IntegrationContainer_NS.Types.Transformations.ChildComponentOfContainer;
import ChildComponentExtractionPairs = IntegrationContainer_NS.Types.Transformations.ChildComponentExtractionPairs;


/**
 * @typeParam Iccc - Integration child component container
 * @param {IntegrationContainer_NS.Types.Transformations.ChildComponentExtractionPairs<Iccc>} childComponentsKeys
 * @returns {<T extends {new(...args: any[]): {}}>(constructor: T) => {new(...args: any[]): any, prototype: {}}}
 * @constructor
 */
export function IntegrateChildComponents<
    Iccc,
    Ici extends CoverageOfContainer<Iccc>
>(
    childComponentsKeys: ChildComponentExtractionPairs<Iccc>
): <T extends { new(...args: any[]): {}; }>(constructor: T) => { new(...args: any[]): any; prototype: {}; }{

    return function injectionTarget <T extends { new (...args: any[]): {} }>(constructor: T): { new(...args: any[]): any; prototype: {} } {
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args)
                const childComponents = args[0]
                const _this = this
                childComponentsKeys.forEach(([key,methodsToExtract]) => {
                    const extractedChildComponentMethods = pick(childComponents[key], methodsToExtract)
                    Object.assign(
                        _this,
                        extractedChildComponentMethods
                    )
                }, {})
            }
        }
    }

    // return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    //     // const x = args[0]
    //     return class extends constructor {
    //         constructor(...args: any[]) {
    //             x = childComponentsKeys.forEach(([key,extractedFuncs]) => {
    //                 console.log()
    //                 const a = key
    //             })
    //         }
    //
    //     };
    // }
    // return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    //     const x = childComponentsKeys.reduce((childComponentsExtracted: any,[key,methodsToExtract]) => {
    //         const x = pick(constructor.prototype[key], methodsToExtract)
    //         return Object.assign(
    //             childComponentsExtracted,
    //             pick(constructor.prototype[key], methodsToExtract)
    //         )
    //     }, {})
    //     console.log()
    //     // Object.assign(constructor, )
    // }
    // return function (constructor: Function) {
    //     const x1 = childComponentsKeys.reduce((childComponentsExtracted: any,[key,methodsToExtract]) => {
    //         const y = constructor.prototype[key]
    //         const x2 = pick(constructor.prototype[key], methodsToExtract)
    //         return Object.assign(
    //             childComponentsExtracted,
    //             pick(constructor.prototype[key], methodsToExtract)
    //         )
    //     }, {})
    //     console.log()
    // }
}
