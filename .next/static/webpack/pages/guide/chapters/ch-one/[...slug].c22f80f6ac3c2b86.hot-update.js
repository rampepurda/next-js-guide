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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components */ \"./components/index.ts\");\n// @ts-ignore\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n//const ChOneSlug: () => (void) = () => {\nvar ChOneSlug = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var _query = router.query, _slug = _query.slug, slug = _slug === void 0 ? [] : _slug;\n    var testRouter = router.pathname;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"Param length is: \".concat(slug.length));\n        console.log(\"Param length is: \".concat(testRouter));\n    }, [\n        slug\n    ]);\n    if (slug.length === 2) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.AlertBox, {\n        className: \"has-padding\",\n        children: \"you are in: 2\"\n    }, void 0, false, {\n        fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-one\\\\[...slug].tsx\",\n        lineNumber: 26,\n        columnNumber: 32\n    }, _this);\n    else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            children: \"you are in: zero\"\n        }, void 0, false, {\n            fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-one\\\\[...slug].tsx\",\n            lineNumber: 27,\n            columnNumber: 15\n        }, _this);\n    }\n};\n_s(ChOneSlug, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ChOneSlug;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChOneSlug);\nvar _c;\n$RefreshReg$(_c, \"ChOneSlug\");\n // @ts-ignore\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ndWlkZS9jaGFwdGVycy9jaC1vbmUvWy4uLnNsdWddLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLGFBQWE7QUFDVDs7O0FBT2lDO0FBQ047QUFDaUI7QUFHaEQseUNBQXlDO0FBQ3pDLElBQU1HLFNBQVMsR0FBZSxXQUFNOztJQUNsQyxJQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIsSUFBcUJJLE1BQVksR0FBWkEsTUFBTSxDQUFDQyxLQUFLLFVBQVpELE1BQVksQ0FBekJFLElBQUksRUFBSkEsSUFBSSxzQkFBRyxFQUFFO0lBQ2pCLElBQU1DLFVBQVUsR0FBR0gsTUFBTSxDQUFDSSxRQUFRO0lBRWxDUCxnREFBUyxDQUFDLFdBQU07UUFDZFEsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQWtCLENBQWMsT0FBWkosSUFBSSxDQUFDSyxNQUFNLENBQUUsQ0FBQztRQUM5Q0YsT0FBTyxDQUFDQyxHQUFHLENBQUMsbUJBQWtCLENBQWEsT0FBWEgsVUFBVSxDQUFFLENBQUM7SUFDL0MsQ0FBQyxFQUFFO1FBQUNELElBQUk7S0FBQyxDQUFDO0lBRVYsSUFBR0EsSUFBSSxDQUFDSyxNQUFNLEtBQUssQ0FBQyxFQUFFLHFCQUFPLDhEQUFDVCxpREFBUTtRQUFDVSxTQUFTLEVBQUUsYUFBYTtrQkFBRSxlQUFhOzs7OzthQUFXO1NBQ3BGO1FBQUMscUJBQU0sOERBQUNDLElBQUU7c0JBQUMsa0JBQWdCOzs7OztpQkFBSztJQUFBLENBQUM7QUFDeEMsQ0FBQztHQVpLVixTQUFTOztRQUNFSCxrREFBUzs7O0FBRHBCRyxLQUFBQSxTQUFTOztBQWNmLCtEQUFlQSxTQUFTOzs7QUF1Q25CLENBQ0wsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ndWlkZS9jaGFwdGVycy9jaC1vbmUvWy4uLnNsdWddLnRzeD82MjAxIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gQHRzLWlnbm9yZVxuICAgIGltcG9ydCBfX2kxOG5Db25maWcgZnJvbSAnQG5leHQtdHJhbnNsYXRlLXJvb3QvaTE4bidcbi8vIEB0cy1pZ25vcmVcbiAgICBpbXBvcnQgX19sb2FkTmFtZXNwYWNlcyBmcm9tICduZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlcydcbi8vIEB0cy1pZ25vcmVcbiAgICBcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCJcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge0FsZXJ0Qm94fSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50c1wiO1xyXG5cclxuXHJcbi8vY29uc3QgQ2hPbmVTbHVnOiAoKSA9PiAodm9pZCkgPSAoKSA9PiB7XHJcbmNvbnN0IENoT25lU2x1ZzogKCkgPT4gdm9pZCA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgc2x1ZyA9IFtdfSA9IHJvdXRlci5xdWVyeVxyXG4gIGNvbnN0IHRlc3RSb3V0ZXIgPSByb3V0ZXIucGF0aG5hbWVcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBQYXJhbSBsZW5ndGggaXM6ICR7c2x1Zy5sZW5ndGh9YClcclxuICAgIGNvbnNvbGUubG9nKGBQYXJhbSBsZW5ndGggaXM6ICR7dGVzdFJvdXRlcn1gKVxyXG4gIH0sIFtzbHVnXSlcclxuXHJcbiAgaWYoc2x1Zy5sZW5ndGggPT09IDIpIHJldHVybiA8QWxlcnRCb3ggY2xhc3NOYW1lPXsnaGFzLXBhZGRpbmcnfT55b3UgYXJlIGluOiAyPC9BbGVydEJveD5cclxuICBlbHNlIHtyZXR1cm48aDI+eW91IGFyZSBpbjogemVybzwvaDI+fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaE9uZVNsdWdcclxuXHJcblxuXG4vLyBAdHMtaWdub3JlXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgIFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4ge1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHByb3BzOiB7XG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC4uLihhd2FpdCBfX2xvYWROYW1lc3BhY2VzKHtcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgLi4uY3R4LFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBwYXRobmFtZTogJy9ndWlkZS9jaGFwdGVycy9jaC1vbmUvWy4uLnNsdWddJyxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgbG9hZGVyTmFtZTogJ2dldFNlcnZlclNpZGVQcm9wcycsXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIC4uLl9faTE4bkNvbmZpZyxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgbG9hZExvY2FsZUZyb206IChsLCBuKSA9PiBpbXBvcnQoYEBuZXh0LXRyYW5zbGF0ZS1yb290L2xvY2FsZXMvJHtsfS8ke259YCkudGhlbihtID0+IG0uZGVmYXVsdCksXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB9KSlcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICB9XG4vLyBAdHMtaWdub3JlXG4gICAgICAgIH1cbi8vIEB0cy1pZ25vcmVcbiAgICB9XG4vLyBAdHMtaWdub3JlXG4gICJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJBbGVydEJveCIsIkNoT25lU2x1ZyIsInJvdXRlciIsInF1ZXJ5Iiwic2x1ZyIsInRlc3RSb3V0ZXIiLCJwYXRobmFtZSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJjbGFzc05hbWUiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/guide/chapters/ch-one/[...slug].tsx\n"));

/***/ })

});