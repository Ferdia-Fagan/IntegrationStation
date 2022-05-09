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
/*!******************************************************************************************************************************************!*\
  !*** ./src/code/full/backend/categories/types/integration/preIntegration/IntegratedComponent/tests/Types_V2_IntegratedComponent.test.ts ***!
  \******************************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! conditional-type-checks */ "./node_modules/conditional-type-checks/dist/index.js");

describe('IntegratedComponent_NS', () => {
    describe('Types', () => {
        it.todo('IntegratedComponent');
        it('IntegrateableComponent', () => {
            const xi = {
                function1() {
                    return 0;
                }, function2() {
                    return 0;
                }, function3() {
                    return 0;
                }
            };
            const xai = {
                function1() {
                    return 0;
                }, function2() {
                    return 0;
                }, function3() {
                    return 0;
                }
            };
            const specificIntegrableComponentTInst = {
                function1() {
                    return 0;
                }, function2() {
                    return 0;
                },
                function3() {
                    return 0;
                }
            };
            const integrableComponentInst = {
                function1() {
                    return 0;
                }, function2() {
                    return 0;
                },
                function3() {
                    return 0;
                }
            };
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(true);
            // const irew: Omit<XXX, keyof Pick<XXX, keyof YYY>> = {
            //     first(): number {
            //         return 109
            //     }
            // }
            //
            // assert<DoesLTypeExtendsRType<right,Required<integrableComponent>>>(true)
            // assert<DoesLTypeExtendsRType<integrableComponent,wrong>>(false)
        });
    });
});

})();

dist = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=Types_V2_IntegratedComponent.test.ts.js.map