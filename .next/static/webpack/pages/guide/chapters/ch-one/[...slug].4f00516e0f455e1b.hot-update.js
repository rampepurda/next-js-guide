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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n// @ts-ignore\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n//const ChOneSlug: () => (void) = () => {\nvar ChOneSlug = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var _query = router.query, _slug = _query.slug, slug = _slug === void 0 ? [] : _slug;\n    var testRouter = router.pathname;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"Param length is: \".concat(slug.length));\n        console.log(\"Param length is: \".concat(testRouter));\n    }, [\n        slug\n    ]);\n    if (slug === 2) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"you are in: 2\"\n    }, void 0, false, {\n        fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-one\\\\[...slug].tsx\",\n        lineNumber: 25,\n        columnNumber: 25\n    }, _this);\n    else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"you are in: zero\"\n        }, void 0, false, {\n            fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-one\\\\[...slug].tsx\",\n            lineNumber: 26,\n            columnNumber: 15\n        }, _this);\n    }\n};\n_s(ChOneSlug, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ChOneSlug;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChOneSlug);\nvar _c;\n$RefreshReg$(_c, \"ChOneSlug\");\n // @ts-ignore\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ndWlkZS9jaGFwdGVycy9jaC1vbmUvWy4uLnNsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsYUFBYTtBQUNUOzs7QUFPaUM7QUFDTjtBQUcvQix5Q0FBeUM7QUFDekMsSUFBTUUsU0FBUyxHQUFlLFdBQU07O0lBQ2xDLElBQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUMxQixJQUFxQkcsTUFBWSxHQUFaQSxNQUFNLENBQUNDLEtBQUssVUFBWkQsTUFBWSxDQUF6QkUsSUFBSSxFQUFKQSxJQUFJLHNCQUFHLEVBQUU7SUFDakIsSUFBTUMsVUFBVSxHQUFHSCxNQUFNLENBQUNJLFFBQVE7SUFFbENOLGdEQUFTLENBQUMsV0FBTTtRQUNkTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBa0IsQ0FBYyxPQUFaSixJQUFJLENBQUNLLE1BQU0sQ0FBRSxDQUFDO1FBQzlDRixPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBa0IsQ0FBYSxPQUFYSCxVQUFVLENBQUUsQ0FBQztJQUMvQyxDQUFDLEVBQUU7UUFBQ0QsSUFBSTtLQUFDLENBQUM7SUFFVixJQUFHQSxJQUFJLEtBQUssQ0FBQyxFQUFFLHFCQUFPLDhEQUFDTSxJQUFFO2tCQUFDLGVBQWE7Ozs7O2FBQUs7U0FDdkM7UUFBQyxxQkFBTSw4REFBQ0EsSUFBRTtzQkFBQyxrQkFBZ0I7Ozs7O2lCQUFLO0lBQUEsQ0FBQztBQUN4QyxDQUFDO0dBWktULFNBQVM7O1FBQ0VGLGtEQUFTOzs7QUFEcEJFLEtBQUFBLFNBQVM7O0FBY2YsK0RBQWVBLFNBQVM7OztBQXVDbkIsQ0FDTCxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2d1aWRlL2NoYXB0ZXJzL2NoLW9uZS9bLi4uc2x1Z10udHN4PzYyMDEiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBAdHMtaWdub3JlXG4gICAgaW1wb3J0IF9faTE4bkNvbmZpZyBmcm9tICdAbmV4dC10cmFuc2xhdGUtcm9vdC9pMThuJ1xuLy8gQHRzLWlnbm9yZVxuICAgIGltcG9ydCBfX2xvYWROYW1lc3BhY2VzIGZyb20gJ25leHQtdHJhbnNsYXRlL2xvYWROYW1lc3BhY2VzJ1xuLy8gQHRzLWlnbm9yZVxuICAgIFxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXHJcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIlxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuLy9jb25zdCBDaE9uZVNsdWc6ICgpID0+ICh2b2lkKSA9ICgpID0+IHtcclxuY29uc3QgQ2hPbmVTbHVnOiAoKSA9PiB2b2lkID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBzbHVnID0gW119ID0gcm91dGVyLnF1ZXJ5XHJcbiAgY29uc3QgdGVzdFJvdXRlciA9IHJvdXRlci5wYXRobmFtZVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYFBhcmFtIGxlbmd0aCBpczogJHtzbHVnLmxlbmd0aH1gKVxyXG4gICAgY29uc29sZS5sb2coYFBhcmFtIGxlbmd0aCBpczogJHt0ZXN0Um91dGVyfWApXHJcbiAgfSwgW3NsdWddKVxyXG5cclxuICBpZihzbHVnID09PSAyKSByZXR1cm4gPGgyPnlvdSBhcmUgaW46IDI8L2gyPlxyXG4gIGVsc2Uge3JldHVybjxoMj55b3UgYXJlIGluOiB6ZXJvPC9oMj59XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoT25lU2x1Z1xyXG5cclxuXG5cbi8vIEB0cy1pZ25vcmVcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICBcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiB7XG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgcHJvcHM6IHtcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLi4uKGF3YWl0IF9fbG9hZE5hbWVzcGFjZXMoe1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAuLi5jdHgsXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2d1aWRlL2NoYXB0ZXJzL2NoLW9uZS9bLi4uc2x1Z10nLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBsb2FkZXJOYW1lOiAnZ2V0U2VydmVyU2lkZVByb3BzJyxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgLi4uX19pMThuQ29uZmlnLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBsb2FkTG9jYWxlRnJvbTogKGwsIG4pID0+IGltcG9ydChgQG5leHQtdHJhbnNsYXRlLXJvb3QvbG9jYWxlcy8ke2x9LyR7bn1gKS50aGVuKG0gPT4gbS5kZWZhdWx0KSxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIH0pKVxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIH1cbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgfVxuLy8gQHRzLWlnbm9yZVxuICAgIH1cbi8vIEB0cy1pZ25vcmVcbiAgIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkNoT25lU2x1ZyIsInJvdXRlciIsInF1ZXJ5Iiwic2x1ZyIsInRlc3RSb3V0ZXIiLCJwYXRobmFtZSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/guide/chapters/ch-one/[...slug].tsx\n"));

/***/ })

});