var dist;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************************************!*\
  !*** ./src/code/dump/IntegrationStation.ts ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntegrateHostWithComponent": () => (/* binding */ IntegrateHostWithComponent),
/* harmony export */   "IntegrateWithComponent": () => (/* binding */ IntegrateWithComponent)
/* harmony export */ });
function* loopThroughLevelsGenerator(root, funcToGetLevelVulnerableFunctions = getLevelVulnerableFunctions) {
    let currentLevelOfComponent = Object.getPrototypeOf(root);
    let nextLevelOfComponent = Object.getPrototypeOf(currentLevelOfComponent);
    let functionsAtLevels = [];
    while (nextLevelOfComponent) {
        yield funcToGetLevelVulnerableFunctions(currentLevelOfComponent);
        currentLevelOfComponent = nextLevelOfComponent;
        nextLevelOfComponent = Object.getPrototypeOf(nextLevelOfComponent);
    }
}
// type FuncToGetLevelVulnerableFunctions1 = (...v: any[]) => string[]
const getLevelVulnerableFunctions = (prototype) => Object.getOwnPropertyNames(prototype).filter(method => method !== 'constructor');
const filterFunctionsToTakeover = (functionMethodsInfected) => {
    return (prototype) => {
        const x = Object.getOwnPropertyNames(prototype);
        return x.filter(method => {
            const x = (method !== 'constructor'
                &&
                    !functionMethodsInfected.has(method));
            return x;
        });
    };
};
// function getLevelVulnerableFunctions(prototype: any): string[] {
//     return Object.getOwnPropertyNames(prototype).filter(method => method !== 'constructor')
// }
// function filterFunctionsToTakeover (prototype: any, functionMethodsInfected: Set<string>) =
//     Object.getOwnPropertyNames(prototype).filter(method => (
//         method !== 'constructor'
//         ||
//         method ! in functionMethodsInfected
//     ))
// function loopThroughLevels<T>(root: T, functionMethodsInfected: Set<string> = null): Generator<string[]> {
//
//
//
// }
function getFunctionsAtLevels(theObject) {
    let currentLevelOfComponent = Object.getPrototypeOf(theObject);
    let nextLevelOfComponent = Object.getPrototypeOf(currentLevelOfComponent);
    let i = 0;
    let functionsAtLevels = [];
    while (nextLevelOfComponent) {
        functionsAtLevels[i++] = Object.getOwnPropertyNames(currentLevelOfComponent).filter(method => method !== 'constructor');
        currentLevelOfComponent = nextLevelOfComponent;
        nextLevelOfComponent = Object.getPrototypeOf(nextLevelOfComponent);
    }
    return functionsAtLevels;
}
// export function IntegrateComponentWithSubComponent<COMPONENT extends Partial<INTEGRATION>,INTEGRATION>(
// export function IntegrateComponentWithSubComponent<COMPONENT extends Required<INTEGRATION>,INTEGRATION>(
function IntegrateWithComponent(component, integration) {
    const integrationProcedureDetails = prepIntegrationToBecomeHost(integration);
    return IntegrateHostWithComponent(component, integrationProcedureDetails);
}
// export function IntegrateWithComponents<
//     COMPONENT extends IntegratedComponent<HOST, INTEGRATION>,
//     INTEGRATION,
//     HOST // = ([ ...COMPONENTS ] & INTEGRATION)
// >(
//     categories: [COMPONENT],
//     integration: INTEGRATION
// ): HOST {
//     categories.reduce((hostInConstructionStasis: INTEGRATION , component: COMPONENT) => {
//         return IntegrateWithComponent<COMPONENT, INTEGRATION>(component, hostInConstructionStasis)
//         // return hostInConstructionStasis
//     }, integration)
//     // categories.reduce((hostInConstructionStasis: INTEGRATION , component: IntegratedComponent<HOST, INTEGRATION>) => {
//     //     IntegrateWithComponent(component, hostInConstructionStasis)
//     // }, integration)
// }
function IntegrateHostWithComponent(component, integrationProcedureDetails) {
    const funcsToIntegrate = ([...loopThroughLevelsGenerator(component, filterFunctionsToTakeover(integrationProcedureDetails.funcsTakingOver))]).flat();
    funcsToIntegrate.forEach((funcThatIsNotTakenOver) => {
        const funcKey = funcThatIsNotTakenOver;
        integrationProcedureDetails.hostInMimicking[funcKey] = component[funcKey];
    });
    return integrationProcedureDetails.hostInMimicking;
}
function prepIntegrationToBecomeHost(integration) {
    return {
        funcsTakingOver: new Set(getFunctionsAtLevels(integration).flat()),
        hostInMimicking: integration
    };
}
function completeIntegrationProcess(hostInMimickingState) {
    return hostInMimickingState;
}
// type Components<INTEGRATION> = Array<Component<INTEGRATION>>
//     {
//     [P in keyof INTEGRATION]-?: INTEGRATION[P]
// }
// type Components<
//     COMPONENTS extends Array<Component<Any>>,
//     INTEGRATION
//     > = COMPONENTS
//
// type Componentss<COMPONENT extends Component<Any>> = Array<COMPONENT>
// type ComponentOfIntegration<
//     Components,
//     INTEGRATION
// > = INTEGRATION
// export function IntegrateWithComponents<
//     Components,
//     INTEGRATION extends Partial<COMPONENTS>,
//     HOST = (COMPONENT & INTEGRATION)
// >(
//     component: Array<Component<integration>>,
//     integration: INTEGRATION
// ): HOST {
//     let funcsTakingOver = new Set(getFunctionsAtLevels(integration).flat());
//
//     const host = integration as unknown as COMPONENT
//
//     component.reduce((e,l) => {
//
//     }, )
// }

dist = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=IntegrationStation.ts.js.map