var dist;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/conditional-type-checks/dist/index.js":
/*!************************************************************!*\
  !*** ./node_modules/conditional-type-checks/dist/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Asserts at compile time that the provided type argument's type resolves to the expected boolean literal type.
 * @param expectTrue - True if the passed in type argument resolved to true.
 */
function assert(expectTrue) {
}
exports.assert = assert;


/***/ }),

/***/ "./node_modules/ts-transformer-keys/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ts-transformer-keys/index.js ***!
  \***************************************************/
/***/ (() => {



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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************************************************************************************************************************!*\
  !*** ./src/code/full/backend/categories/types/integration/preIntegration/IntegrationContainer/tests/Types_V2_Container.test.ts ***!
  \*********************************************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! conditional-type-checks */ "./node_modules/conditional-type-checks/dist/index.js");
/* harmony import */ var ts_transformer_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-transformer-keys */ "./node_modules/ts-transformer-keys/index.js");
/* harmony import */ var ts_transformer_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ts_transformer_keys__WEBPACK_IMPORTED_MODULE_1__);


describe('IntegrationContainer_NS', () => {
    describe('types', () => {
        it.todo('ContainerOfChildComponent');
    });
    describe('transformations', () => {
        it('CoverageOfContainerAndComponents', () => {
            // then
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(true);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(true);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(true);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(true);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
        });
        it('CoverageOfContainerAndComponentsArray', () => {
            // then
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(true);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(true);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(true);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(true);
            (0,conditional_type_checks__WEBPACK_IMPORTED_MODULE_0__.assert)(false);
        });
        describe('ChildComponentOfContainer', () => {
            it('will look like type', () => {
                const x = (0,ts_transformer_keys__WEBPACK_IMPORTED_MODULE_1__.keys)();
                expect(x.length).toBe(2);
                expect(x).toEqual(["exampleChildComponentInst", "exampleChildComponentInst2"]);
                // type example = ChildComponentOfContainer<ExampleChildComponentContainer>[keyof ExampleChildComponentContainer]
                // const x = keys<example>()
                // expect(x.length).toBe(1)
                // expect(x[0]).toBe("func1")
            });
        });
        describe('ChildComponentExtractionPairs', () => {
            it('defines a list of child component extraction pairs', () => {
                // type a = (TWithOnlyMethods<Exclude<ChildComponentOfContainer<ExampleChildComponentContainer>["exampleChildComponentInst"], undefined>>)[]
                const fdsa = ["exampleChildComponentInst", ["func11"]];
                const resultInst = [
                    ["exampleChildComponentInst", ["func11"]],
                    ["exampleChildComponentInst2", ["func21"]],
                ];
            });
        });
    });
});

})();

dist = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=Types_V2_Container.test.ts.js.map