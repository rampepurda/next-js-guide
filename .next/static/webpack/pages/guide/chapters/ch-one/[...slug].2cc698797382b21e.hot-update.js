"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/guide/chapters/ch-one/[...slug]",{

/***/ "./pages/guide/chapters/ch-one/[...slug].tsx":
/*!***************************************************!*\
  !*** ./pages/guide/chapters/ch-one/[...slug].tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components */ \"./components/index.ts\");\n// @ts-ignore\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n//const ChOneSlug: () => (void) = () => {\nvar ChOneSlug = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var _query = router.query, _slug = _query.slug, slug = _slug === void 0 ? [] : _slug;\n    var testRouter = router.pathname;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"Param length is: \".concat(slug.length));\n        console.log(\"Param length is: \".concat(testRouter));\n    }, [\n        slug\n    ]);\n    if (slug.length === 1) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.AlertBox, {\n        className: \"danger\",\n        children: [\n            \"you are in: `$\",\n            slug,\n            \"`\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-one\\\\[...slug].tsx\",\n        lineNumber: 26,\n        columnNumber: 32\n    }, _this);\n    if (slug.length === 2) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.AlertBox, {\n        className: \"danger\",\n        children: \"you are in: 2\"\n    }, void 0, false, {\n        fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-one\\\\[...slug].tsx\",\n        lineNumber: 27,\n        columnNumber: 32\n    }, _this);\n};\n_s(ChOneSlug, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ChOneSlug;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChOneSlug);\nvar _c;\n$RefreshReg$(_c, \"ChOneSlug\");\n // @ts-ignore\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ndWlkZS9jaGFwdGVycy9jaC1vbmUvWy4uLnNsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLGFBQWE7QUFDVDs7O0FBT2lDO0FBQ047QUFDaUI7QUFHaEQseUNBQXlDO0FBQ3pDLElBQU1HLFNBQVMsR0FBZSxXQUFNOztJQUNsQyxJQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIsSUFBcUJJLE1BQVksR0FBWkEsTUFBTSxDQUFDQyxLQUFLLFVBQVpELE1BQVksQ0FBekJFLElBQUksRUFBSkEsSUFBSSxzQkFBRyxFQUFFO0lBQ2pCLElBQU1DLFVBQVUsR0FBR0gsTUFBTSxDQUFDSSxRQUFRO0lBRWxDUCxnREFBUyxDQUFDLFdBQU07UUFDZFEsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQWtCLENBQWMsT0FBWkosSUFBSSxDQUFDSyxNQUFNLENBQUUsQ0FBQztRQUM5Q0YsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQWtCLENBQWEsT0FBWEgsVUFBVSxDQUFFLENBQUM7SUFDL0MsQ0FBQyxFQUFFO1FBQUNELElBQUk7S0FBQyxDQUFDO0lBRVYsSUFBR0EsSUFBSSxDQUFDSyxNQUFNLEtBQUssQ0FBQyxFQUFFLHFCQUFPLDhEQUFDVCxpREFBUTtRQUFDVSxTQUFTLEVBQUUsUUFBUTs7WUFBRSxnQkFBYztZQUFDTixJQUFJO1lBQUMsR0FBQzs7Ozs7O2FBQVc7SUFDNUYsSUFBR0EsSUFBSSxDQUFDSyxNQUFNLEtBQUssQ0FBQyxFQUFFLHFCQUFPLDhEQUFDVCxpREFBUTtRQUFDVSxTQUFTLEVBQUUsUUFBUTtrQkFBRSxlQUFhOzs7OzthQUFXO0FBQ3RGLENBQUM7R0FaS1QsU0FBUzs7UUFDRUgsa0RBQVM7OztBQURwQkcsS0FBQUEsU0FBUzs7QUFjZiwrREFBZUEsU0FBUzs7O0FBdUNuQixDQUNMLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ3VpZGUvY2hhcHRlcnMvY2gtb25lL1suLi5zbHVnXS50c3g/NjIwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIEB0cy1pZ25vcmVcbiAgICBpbXBvcnQgX19pMThuQ29uZmlnIGZyb20gJ0BuZXh0LXRyYW5zbGF0ZS1yb290L2kxOG4nXG4vLyBAdHMtaWdub3JlXG4gICAgaW1wb3J0IF9fbG9hZE5hbWVzcGFjZXMgZnJvbSAnbmV4dC10cmFuc2xhdGUvbG9hZE5hbWVzcGFjZXMnXG4vLyBAdHMtaWdub3JlXG4gICAgXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHtBbGVydEJveH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHNcIjtcclxuXHJcblxyXG4vL2NvbnN0IENoT25lU2x1ZzogKCkgPT4gKHZvaWQpID0gKCkgPT4ge1xyXG5jb25zdCBDaE9uZVNsdWc6ICgpID0+IHZvaWQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IHNsdWcgPSBbXX0gPSByb3V0ZXIucXVlcnlcclxuICBjb25zdCB0ZXN0Um91dGVyID0gcm91dGVyLnBhdGhuYW1lXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgUGFyYW0gbGVuZ3RoIGlzOiAke3NsdWcubGVuZ3RofWApXHJcbiAgICBjb25zb2xlLmxvZyhgUGFyYW0gbGVuZ3RoIGlzOiAke3Rlc3RSb3V0ZXJ9YClcclxuICB9LCBbc2x1Z10pXHJcblxyXG4gIGlmKHNsdWcubGVuZ3RoID09PSAxKSByZXR1cm4gPEFsZXJ0Qm94IGNsYXNzTmFtZT17J2Rhbmdlcid9PnlvdSBhcmUgaW46IGAke3NsdWd9YDwvQWxlcnRCb3g+XHJcbiAgaWYoc2x1Zy5sZW5ndGggPT09IDIpIHJldHVybiA8QWxlcnRCb3ggY2xhc3NOYW1lPXsnZGFuZ2VyJ30+eW91IGFyZSBpbjogMjwvQWxlcnRCb3g+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoT25lU2x1Z1xyXG5cclxuXG5cbi8vIEB0cy1pZ25vcmVcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICBcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiB7XG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgcHJvcHM6IHtcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLi4uKGF3YWl0IF9fbG9hZE5hbWVzcGFjZXMoe1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAuLi5jdHgsXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2d1aWRlL2NoYXB0ZXJzL2NoLW9uZS9bLi4uc2x1Z10nLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBsb2FkZXJOYW1lOiAnZ2V0U2VydmVyU2lkZVByb3BzJyxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgLi4uX19pMThuQ29uZmlnLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBsb2FkTG9jYWxlRnJvbTogKGwsIG4pID0+IGltcG9ydChgQG5leHQtdHJhbnNsYXRlLXJvb3QvbG9jYWxlcy8ke2x9LyR7bn1gKS50aGVuKG0gPT4gbS5kZWZhdWx0KSxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIH0pKVxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIH1cbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgfVxuLy8gQHRzLWlnbm9yZVxuICAgIH1cbi8vIEB0cy1pZ25vcmVcbiAgIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkFsZXJ0Qm94IiwiQ2hPbmVTbHVnIiwicm91dGVyIiwicXVlcnkiLCJzbHVnIiwidGVzdFJvdXRlciIsInBhdGhuYW1lIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/guide/chapters/ch-one/[...slug].tsx\n"));

/***/ })

});