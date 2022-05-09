var dist;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/conditional-type-checks/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/conditional-type-checks/dist/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Asserts at compile time that the provided type argument's type resolves to the expected boolean literal type.
 * @param expectTrue - True if the passed in type argument resolved to true.
 */
function assert(expectTrue) {
}
exports.assert = assert;


/***/ }),

/***/ "./src/code/full/backend/categories/types/integration/preIntegration/ChildComponent/ChildComponent.ts":
/*!************************************************************************************************************!*\
  !*** ./src/code/full/backend/categories/types/integration/preIntegration/ChildComponent/ChildComponent.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChildComponent_NS": () => (/* binding */ ChildComponent_NS)
/* harmony export */ });
var ChildComponent_NS;
(function (ChildComponent_NS) {
    let Types;
    (function (Types) {
    })(Types = ChildComponent_NS.Types || (ChildComponent_NS.Types = {}));
})(ChildComponent_NS || (ChildComponent_NS = {}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************************************************************************************************!*\
  !*** ./src/code/full/backend/categories/types/integration/preIntegration/ChildComponent/tests/Types_V2_Components.test.ts ***!
  \****************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! conditional-type-checks */ "./node_modules/conditional-type-checks/dist/index.js");
/* harmony import */ var _ChildComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ChildComponent */ "./src/code/full/backend/categories/types/integration/preIntegration/ChildComponent/ChildComponent.ts");


describe('ChildComponent_NS', () => {
    describe('Types', () => {
        it("symbol", () => {
            class SampleComponentImpl {
                fun1() {
                    return 10;
                }
            }
            _ChildComponent__WEBPACK_IMPORTED_MODULE_1__.ChildComponent_NS.Types.ChildComponentSymbol;
            class SampleComponentImplImpersonator {
                fun1() {
                    return 10;
                }
            }
            let sampleComponentInst = new SampleComponentImpl();
            let sampleComponentInstImpersonator = new SampleComponentImplImpersonator();
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
            // function isA(s: SampleComponent): SampleComponent {
            //     return s
            // }
            //
            // isA(sampleComponentInst)
            // isA(sampleComponentInstImpersonator)
            // let sampleComponentInstObj: SampleComponent = {
            //     [ChildComponentSymbolllll]: undefined
            // }
            // function isAComponent<SampleComponentInterface>(potentialComponent: SampleComponentInterface): potentialComponent is ChildComponent {
            //     // const x = typeof potentialComponent
            //     // const y = potentialComponent.ChildComponentSymbol
            //     // const x = potentialComponent.afddsa
            //     const z = ChildComponent_NS.Types.ChildComponentSymbol in potentialComponent
            //     const a = (ChildComponent_NS.Types.ChildComponentSymbol in potentialComponent) && potentialComponent[ChildComponent_NS.Types.ChildComponentSymbol]
            //     // return potentialComponent.ChildComponentSymbol !== undefined
            //     return false
            // }
            const xafds1 = _ChildComponent__WEBPACK_IMPORTED_MODULE_1__.ChildComponent_NS.Types.ChildComponentSymbol;
            const xafds2 = sampleComponentInst[_ChildComponent__WEBPACK_IMPORTED_MODULE_1__.ChildComponent_NS.Types.ChildComponentSymbol];
            const xafds3 = (_ChildComponent__WEBPACK_IMPORTED_MODULE_1__.ChildComponent_NS.Types.ChildComponentSymbol in sampleComponentInst) && sampleComponentInst[_ChildComponent__WEBPACK_IMPORTED_MODULE_1__.ChildComponent_NS.Types.ChildComponentSymbol];
            if (xafds1) {
                const x = sampleComponentInst;
                console.log();
            }
            else {
                const x = Object.prototype.hasOwnProperty.call(sampleComponentInst, _ChildComponent__WEBPACK_IMPORTED_MODULE_1__.ChildComponent_NS.Types.ChildComponentSymbol);
                console.log();
            }
        });
        // TODO: if SpecificChildComponent needed
        it('SpecificChildComponent', () => {
            // when
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(true);
        });
        it('ChildComponentT', () => {
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(true);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(true);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
        });
        it("ChildComponentsMapWithinContainer", () => {
            // then
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(true);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
        });
        it('IntegrationContainerChildComponentsArray', () => {
            // then
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(true);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
            // interface TheSpread {
            //     function1(): number
            //     function2(): number
            // }
            // interface NotTheSpread {
            //     function3(): number
            //     function4(): number
            // }
            //
            // // then
            // assert<TypesAreTheSame<TheSpread, spreadOfChildComponents>>(true)
        });
    });
    describe('Transformations', () => {
        it('CoverageByComponents', () => {
            const x = {
                function1() {
                    return 0;
                }
            };
            const y = {
                function2() {
                    return 0;
                }
            };
            // when
            const l = [x, y];
            // then
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(true);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
        });
    });
});

})();

dist = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=Types_V2_Components.test.ts.js.map