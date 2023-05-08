"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/guide/chapters/ch-twelve/[code]",{

/***/ "./pages/guide/chapters/ch-twelve/[code].tsx":
/*!***************************************************!*\
  !*** ./pages/guide/chapters/ch-twelve/[code].tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/hooks */ \"./store/hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _slices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../slices */ \"./slices/index.ts\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components */ \"./components/index.ts\");\n/* harmony import */ var _configuration_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../configuration/navigation */ \"./configuration/navigation.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../queries */ \"./queries/index.ts\");\n// @ts-ignore\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction CountryId() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(_queries__WEBPACK_IMPORTED_MODULE_8__.GET_COUNTRIES_DETAIL_QUERY, {\n    }).data;\n    var dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var countriesGraphQL = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.Countries;\n    }).countriesGraphQL;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        dispatch((0,_slices__WEBPACK_IMPORTED_MODULE_4__.getCountries)());\n        console.log(\"Countries: \".concat(countriesGraphQL[3].code));\n    }, [\n        countriesGraphQL\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Next JS | Guide | Ch-twelve-Country\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cols\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-3 has-br\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.Navigation, {\n                            links: _configuration_navigation__WEBPACK_IMPORTED_MODULE_6__.navigationGuideLinks\n                        }, void 0, false, {\n                            fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-9 has-br\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Country:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"dda\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Code:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"code.name\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CountryId, \"FfIUfbIKjdBWFJRiE06f/bqcan4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = CountryId;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryId);\nvar _c;\n$RefreshReg$(_c, \"CountryId\");\n // @ts-ignore\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ndWlkZS9jaGFwdGVycy9jaC10d2VsdmUvW2NvZGVdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxhQUFhO0FBQ1Q7O0FBTW1DO0FBR2dDO0FBQ2hDO0FBQ1M7QUFDRztBQUN3QjtBQUUvQztBQUNhO0FBQzRDO0FBY3JGLFNBQVNXLFNBQVMsR0FBRzs7SUFDbkIsSUFBTUMsTUFBTSxHQUFHWixzREFBUyxFQUFFO0lBQzFCLElBQU0sSUFBTSxHQUFLUyx3REFBUSxDQUFDQyxnRUFBMEIsRUFBRTtLQUVyRCxDQUFDLENBRk1HLElBQUk7SUFJWixJQUFNQyxRQUFRLEdBQUdiLDREQUFjLEVBQUU7SUFDakMsSUFBTSxnQkFBa0IsR0FBS0MsNERBQWMsQ0FBQ2MsU0FBQUEsS0FBSztlQUFJQSxLQUFLLENBQUNDLFNBQVM7S0FBQSxDQUFDLENBQTdERixnQkFBZ0I7SUFFeEJYLGdEQUFTLENBQUMsV0FBTTtRQUNkVSxRQUFRLENBQUNULHFEQUFZLEVBQUUsQ0FBQztRQUN4QmEsT0FBTyxDQUFDQyxHQUFHLENBQUMsYUFBWSxDQUEyQixPQUF6QkosZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUNLLElBQUksQ0FBRSxDQUFDO0lBQ3ZELENBQUMsRUFBRTtRQUFDTCxnQkFBZ0I7S0FBQyxDQUFDO0lBRXRCLHFCQUNFOzswQkFDRSw4REFBQ1Asa0RBQUk7MEJBQ0gsNEVBQUNhLE9BQUs7OEJBQUMscUNBQW1DOzs7Ozt3QkFBUTs7Ozs7b0JBQzdDOzBCQUVQLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsTUFBTTs7a0NBQ25CLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsY0FBYztrQ0FDM0IsNEVBQUNqQixtREFBVTs0QkFBQ2tCLEtBQUssRUFBRWpCLDJFQUFvQjs7Ozs7Z0NBQUk7Ozs7OzRCQUN2QztrQ0FFTiw4REFBQ2UsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGNBQWM7OzBDQUMzQiw4REFBQ0UsT0FBSzswQ0FBQyxVQUFROzs7OztvQ0FBUTswQ0FDdkIsOERBQUNDLElBQUU7MENBQUMsS0FBRzs7Ozs7b0NBQUs7MENBQ1osOERBQUNELE9BQUs7MENBQUMsT0FBSzs7Ozs7b0NBQVE7MENBQ3BCLDhEQUFDQyxJQUFFOzBDQUFDLFdBQVM7Ozs7O29DQUFLOzs7Ozs7NEJBQ2Q7Ozs7OztvQkFDRjs7b0JBQ0wsQ0FDSjtBQUNILENBQUM7R0FsQ1FmLFNBQVM7O1FBQ0RYLGtEQUFTO1FBQ1BTLG9EQUFRO1FBSVJSLHdEQUFjO1FBQ0ZDLHdEQUFjOzs7QUFQcENTLEtBQUFBLFNBQVM7O0FBbURsQiwrREFBZUEsU0FBUyxFQUFDOzs7QUFxQ3BCLENBQ0wsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ndWlkZS9jaGFwdGVycy9jaC10d2VsdmUvW2NvZGVdLnRzeD8xOGYzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gQHRzLWlnbm9yZVxuICAgIGltcG9ydCBfX2kxOG5Db25maWcgZnJvbSAnQG5leHQtdHJhbnNsYXRlLXJvb3QvaTE4bidcbi8vIEB0cy1pZ25vcmVcbiAgICBpbXBvcnQgX19sb2FkTmFtZXNwYWNlcyBmcm9tICduZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlcydcbi8vIEB0cy1pZ25vcmVcbiAgICBcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCJcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uZmlndXJhdGlvbi9lbnZpcm9ubWVudFwiXHJcbmltcG9ydCB7IENvdW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Db3VudHJ5XCJcclxuaW1wb3J0IHt1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3J9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9ob29rc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2dldENvdW50cmllc30gZnJvbSBcIi4uLy4uLy4uLy4uL3NsaWNlc1wiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBuYXZpZ2F0aW9uR3VpZGVMaW5rcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb25maWd1cmF0aW9uL25hdmlnYXRpb25cIlxyXG5pbXBvcnQgeyBQYWdlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb25maWd1cmF0aW9uL2NvbW1vblwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXHJcbmltcG9ydCB7IEdFVF9DT1VOVFJJRVNfREVUQUlMX1FVRVJZLCBHRVRfQ09VTlRSSUVTX1FVRVJZIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3F1ZXJpZXNcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IFJPVVRFIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbmZpZ3VyYXRpb24vcm91dGVzXCI7XHJcbmltcG9ydCB7IENvdW50cmllc1Jlc3BvbnNlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3NlcnZpY2VzL0NvdW50cmllc1wiXHJcbmltcG9ydCBncmFwaFFMQ2xpZW50IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL0NvdW50cmllcydcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY29kZToge1xyXG4gICAgY29kZTogc3RyaW5nLFxyXG4gICAgbmFtZTogc3RyaW5nLFxyXG4gICAgZW1vamk6IHN0cmluZyxcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvdW50cnlJZCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoR0VUX0NPVU5UUklFU19ERVRBSUxfUVVFUlksIHtcclxuICAgIC8vdmFyaWFibGVzOiB7IGNvZGUgfSxcclxuICB9KVxyXG5cclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKClcclxuICBjb25zdCB7IGNvdW50cmllc0dyYXBoUUwgfSA9IHVzZUFwcFNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLkNvdW50cmllcylcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKGdldENvdW50cmllcygpKVxyXG4gICAgY29uc29sZS5sb2coYENvdW50cmllczogJHtjb3VudHJpZXNHcmFwaFFMWzNdLmNvZGV9YClcclxuICB9LCBbY291bnRyaWVzR3JhcGhRTF0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+TmV4dCBKUyB8IEd1aWRlIHwgQ2gtdHdlbHZlLUNvdW50cnk8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29scyc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0zIGhhcy1icic+XHJcbiAgICAgICAgICA8TmF2aWdhdGlvbiBsaW5rcz17bmF2aWdhdGlvbkd1aWRlTGlua3N9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtOSBoYXMtYnInPlxyXG4gICAgICAgICAgPGxhYmVsPkNvdW50cnk6PC9sYWJlbD5cclxuICAgICAgICAgIDxoMz5kZGE8L2gzPlxyXG4gICAgICAgICAgPGxhYmVsPkNvZGU6PC9sYWJlbD5cclxuICAgICAgICAgIDxoMz5jb2RlLm5hbWU8L2gzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuIGNvbnN0IF9nZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgLy9jb25zdCBwYXJhbSA9IGNvbnRleHQucXVlcnkuaWRcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgIGAke2Vudmlyb25tZW50LmNvdW50cmllc1VSTH0vJHtjb250ZXh0LnF1ZXJ5LmNvZGV9YFxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGFcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudHJ5SWQ7XG5cbi8vIEB0cy1pZ25vcmVcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICBsZXQgcmVzID0gX2dldFNlcnZlclNpZGVQcm9wcyhjdHgpXG4vLyBAdHMtaWdub3JlXG4gICAgICAgIGlmKHR5cGVvZiByZXMudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmVzID0gYXdhaXQgcmVzXG4vLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiB7XG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgLi4ucmVzLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHByb3BzOiB7XG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAuLi4ocmVzLnByb3BzIHx8IHt9KSxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC4uLihhd2FpdCBfX2xvYWROYW1lc3BhY2VzKHtcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgLi4uY3R4LFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBwYXRobmFtZTogJy9ndWlkZS9jaGFwdGVycy9jaC10d2VsdmUvW2NvZGVdJyxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgbG9hZGVyTmFtZTogJ2dldFNlcnZlclNpZGVQcm9wcycsXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIC4uLl9faTE4bkNvbmZpZyxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgbG9hZExvY2FsZUZyb206IChsLCBuKSA9PiBpbXBvcnQoYEBuZXh0LXRyYW5zbGF0ZS1yb290L2xvY2FsZXMvJHtsfS8ke259YCkudGhlbihtID0+IG0uZGVmYXVsdCksXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB9KSlcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICB9XG4vLyBAdHMtaWdub3JlXG4gICAgICAgIH1cbi8vIEB0cy1pZ25vcmVcbiAgICB9XG4vLyBAdHMtaWdub3JlXG4gICJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJnZXRDb3VudHJpZXMiLCJOYXZpZ2F0aW9uIiwibmF2aWdhdGlvbkd1aWRlTGlua3MiLCJIZWFkIiwidXNlUXVlcnkiLCJHRVRfQ09VTlRSSUVTX0RFVEFJTF9RVUVSWSIsIkNvdW50cnlJZCIsInJvdXRlciIsImRhdGEiLCJkaXNwYXRjaCIsImNvdW50cmllc0dyYXBoUUwiLCJzdGF0ZSIsIkNvdW50cmllcyIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJsaW5rcyIsImxhYmVsIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/guide/chapters/ch-twelve/[code].tsx\n"));

/***/ })

});