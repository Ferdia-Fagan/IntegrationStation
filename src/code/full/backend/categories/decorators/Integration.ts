import {pick} from "lodash";
import {
    IntegrationContainer_NS
} from "../types/preIntegration/IntegrationContainer/IntegrationContainer";
import {Constructor} from "../../../utils/Types";
import {ComponentInterfaceExtraction} from "./tests/Integration.test";
import CoverageOfContainer = IntegrationContainer_NS.Types.Transformations.CoverageOfContainer;
import ChildComponentOfContainer = IntegrationContainer_NS.Types.Transformations.ChildComponentOfContainer;
import ChildComponentExtractionPairs = IntegrationContainer_NS.Types.Transformations.ChildComponentExtractionPairs;

export function IntegrateChildComponents<
    Iccc,
    Ici extends CoverageOfContainer<Iccc>
    // Ici extends CoverageOfContainer<Iccc>,
    // ChildComponentContainerKeys = (ChildComponentOfContainer<Iccc>),
    // Ici = Extract<Iccc, ChildComponentContainerKeys>
// extends IntegrableComponent<Iccc, ChildComponentContainerKeys>,
>(
    // childComponentsKeys: (keyof ChildComponentOfContainer<Iccc>)[],
    childComponentsKeys: ChildComponentExtractionPairs<Iccc>
){

    return function injectionTarget <T extends { new (...args: any[]): {} }>(constructor: T): { new(...args: any[]): any; prototype: {} } {
        return class extends constructor {
            constructor(...args: any[]) {
                super(...args)
                const childComponents = args[0]
                const x1 = childComponentsKeys.reduce((childComponentsExtracted: any,[key,methodsToExtract]) => {
                    const y = childComponents[key]
                    const x2 = pick(childComponents[key], methodsToExtract)
                    const xc = Object.assign(
                        childComponentsExtracted,
                        x2
                    )
                    console.log()
                    return xc
                }, {})
                console.log()
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
