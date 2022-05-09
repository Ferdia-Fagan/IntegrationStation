import { pick } from "lodash";
/**
 * @typeParam Iccc - Integration child component container
 * @param {IntegrationContainer_NS.Types.Transformations.ChildComponentExtractionPairs<Iccc>} childComponentsKeys
 * @returns {<T extends {new(...args: any[]): {}}>(constructor: T) => {new(...args: any[]): any, prototype: {}}}
 * @constructor
 */
export function IntegrateChildComponents(
// childComponentsKeys: (keyof ChildComponentOfContainer<Iccc>)[],
childComponentsKeys) {
    return function injectionTarget(constructor) {
        return class extends constructor {
            constructor(...args) {
                super(...args);
                const childComponents = args[0];
                const x1 = childComponentsKeys.reduce((childComponentsExtracted, [key, methodsToExtract]) => {
                    const y = childComponents[key];
                    const x2 = pick(childComponents[key], methodsToExtract);
                    const xc = Object.assign(childComponentsExtracted, x2);
                    console.log();
                    return xc;
                }, {});
                console.log();
            }
        };
    };
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
//# sourceMappingURL=Integration.js.map