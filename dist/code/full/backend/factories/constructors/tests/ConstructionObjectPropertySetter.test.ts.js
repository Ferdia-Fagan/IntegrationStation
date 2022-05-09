var dist;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/code/full/backend/factories/constructors/ConstructionObjectPropertySetter.ts":
/*!******************************************************************************************!*\
  !*** ./src/code/full/backend/factories/constructors/ConstructionObjectPropertySetter.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConstructorWithPropertiesA": () => (/* binding */ ConstructorWithPropertiesA)
/* harmony export */ });
class ConstructorWithPropertiesA {
    constructor(objSelfAssignments) {
        Object.assign(this, objSelfAssignments);
        console.log();
    }
    integrate(objSelfAssignments) {
        Object.assign(this, objSelfAssignments);
    }
}


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
/*!*****************************************************************************************************!*\
  !*** ./src/code/full/backend/factories/constructors/tests/ConstructionObjectPropertySetter.test.ts ***!
  \*****************************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConstructionObjectPropertySetter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ConstructionObjectPropertySetter */ "./src/code/full/backend/factories/constructors/ConstructionObjectPropertySetter.ts");

describe('ConstructorWithPropertiesA', () => {
    it('takes props as constructor, and assigns to "this"', () => {
        class SampleObject extends _ConstructionObjectPropertySetter__WEBPACK_IMPORTED_MODULE_0__.ConstructorWithPropertiesA {
        }
        const props = {
            a: 10,
            b: "klsdf",
            sampleFunc: () => {
                return 10;
            }
            // sampleFunc(): number {
            //     return 10
            // }
        };
        function fds(x) {
            return x;
        }
        fds(props);
        const inst = new SampleObject(props);
        expect(inst.a).toBe(props.a);
        expect(inst.b).toBe(props.b);
        const xdsf = inst.sampleFunc();
        expect(xdsf).toBe(10);
    });
    it('takes methods as constructor, and assigns to "this"', () => {
        class SampleObject extends _ConstructionObjectPropertySetter__WEBPACK_IMPORTED_MODULE_0__.ConstructorWithPropertiesA {
        }
        const sampleMethod = jest.fn(() => 10);
        const props = {
            sampleMethod: sampleMethod,
            c: 10
        };
        const inst = new SampleObject(props);
        expect(inst.sampleMethod()).toBe(10);
    });
});

})();

dist = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=ConstructionObjectPropertySetter.test.ts.js.map