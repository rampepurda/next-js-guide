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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../store/hooks */ \"./store/hooks.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _slices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../slices */ \"./slices/index.ts\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components */ \"./components/index.ts\");\n/* harmony import */ var _configuration_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../configuration/navigation */ \"./configuration/navigation.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../queries */ \"./queries/index.ts\");\n// @ts-ignore\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction CountryId(param) {\n    var countries = param.countries;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery)(_queries__WEBPACK_IMPORTED_MODULE_8__.GET_COUNTRIES_DETAIL_QUERY, {\n        variables: {\n            code: code\n        }\n    }).data;\n    var dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    var countriesGraphQL = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function(state) {\n        return state.Countries;\n    }).countriesGraphQL;\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        dispatch((0,_slices__WEBPACK_IMPORTED_MODULE_4__.getCountries)());\n        console.log(\"Country: \".concat(countriesGraphQL.length));\n    }, [\n        countriesGraphQL\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Next JS | Guide | Ch-twelve-Country\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"cols\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-3 has-br\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.Navigation, {\n                            links: _configuration_navigation__WEBPACK_IMPORTED_MODULE_6__.navigationGuideLinks\n                        }, void 0, false, {\n                            fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-9 has-br\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Country:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: countries.code\n                            }, void 0, false, {\n                                fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Code:\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: countries.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-twelve\\\\[code].tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(CountryId, \"FfIUfbIKjdBWFJRiE06f/bqcan4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useQuery,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch,\n        _store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = CountryId;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountryId);\nvar _c;\n$RefreshReg$(_c, \"CountryId\");\n // @ts-ignore\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ndWlkZS9jaGFwdGVycy9jaC10d2VsdmUvW2NvZGVdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxhQUFhO0FBQ1Q7O0FBTW1DO0FBSWdDO0FBQ2hDO0FBQ1M7QUFDRztBQUN3QjtBQUUvQztBQUNjO0FBQzJDO0FBWXJGLFNBQVNXLFNBQVMsQ0FBQyxLQUFpQixFQUFFO1FBQW5CLFNBQVUsR0FBVixLQUFpQixDQUFoQkMsU0FBUzs7SUFDM0IsSUFBTUMsTUFBTSxHQUFHYixzREFBUyxFQUFFO0lBQzFCLElBQU0sSUFBTSxHQUFLUyx3REFBUSxDQUFDQyxnRUFBMEIsRUFBRTtRQUNwREssU0FBUyxFQUFFO1lBQUVDLElBQUksRUFBSkEsSUFBSTtTQUFFO0tBQ3BCLENBQUMsQ0FGTUYsSUFBSTtJQUlaLElBQU1HLFFBQVEsR0FBR2hCLDREQUFjLEVBQUU7SUFDakMsSUFBTSxnQkFBa0IsR0FBS0MsNERBQWMsQ0FBQ2lCLFNBQUFBLEtBQUs7ZUFBSUEsS0FBSyxDQUFDQyxTQUFTO0tBQUEsQ0FBQyxDQUE3REYsZ0JBQWdCO0lBRXhCZCxnREFBUyxDQUFDLFdBQU07UUFDZGEsUUFBUSxDQUFDWixxREFBWSxFQUFFLENBQUM7UUFDeEJnQixPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFVLENBQTBCLE9BQXhCSixnQkFBZ0IsQ0FBQ0ssTUFBTSxDQUFFLENBQUM7SUFDcEQsQ0FBQyxFQUFFO1FBQUNMLGdCQUFnQjtLQUFDLENBQUM7SUFFdEIscUJBQ0U7OzBCQUNFLDhEQUFDVixrREFBSTswQkFDSCw0RUFBQ2dCLE9BQUs7OEJBQUMscUNBQW1DOzs7Ozt3QkFBUTs7Ozs7b0JBQzdDOzBCQUVQLDhEQUFDQyxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsTUFBTTs7a0NBQ25CLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsY0FBYztrQ0FDM0IsNEVBQUNwQixtREFBVTs0QkFBQ3FCLEtBQUssRUFBRXBCLDJFQUFvQjs7Ozs7Z0NBQUk7Ozs7OzRCQUN2QztrQ0FFTiw4REFBQ2tCLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxjQUFjOzswQ0FDM0IsOERBQUNFLE9BQUs7MENBQUMsVUFBUTs7Ozs7b0NBQVE7MENBQ3ZCLDhEQUFDQyxJQUFFOzBDQUFFakIsU0FBUyxDQUFDSSxJQUFJOzs7OztvQ0FBTTswQ0FDekIsOERBQUNZLE9BQUs7MENBQUMsT0FBSzs7Ozs7b0NBQVE7MENBQ3BCLDhEQUFDQyxJQUFFOzBDQUFFakIsU0FBUyxDQUFDa0IsSUFBSTs7Ozs7b0NBQU07Ozs7Ozs0QkFDckI7Ozs7OztvQkFDRjs7b0JBQ0wsQ0FDSjtBQUNILENBQUM7R0FsQ1FuQixTQUFTOztRQUNEWCxrREFBUztRQUNQUyxvREFBUTtRQUlSUix3REFBYztRQUNGQyx3REFBYzs7O0FBUHBDUyxLQUFBQSxTQUFTOztBQWtEbEIsK0RBQWVBLFNBQVMsRUFBQzs7O0FBcUNwQixDQUNMLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ3VpZGUvY2hhcHRlcnMvY2gtdHdlbHZlL1tjb2RlXS50c3g/MThmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIEB0cy1pZ25vcmVcbiAgICBpbXBvcnQgX19pMThuQ29uZmlnIGZyb20gJ0BuZXh0LXRyYW5zbGF0ZS1yb290L2kxOG4nXG4vLyBAdHMtaWdub3JlXG4gICAgaW1wb3J0IF9fbG9hZE5hbWVzcGFjZXMgZnJvbSAnbmV4dC10cmFuc2xhdGUvbG9hZE5hbWVzcGFjZXMnXG4vLyBAdHMtaWdub3JlXG4gICAgXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IENvdW50cmllc1FMIH0gZnJvbSBcIi4uLy4uLy4uLy4uL3R5cGVzXCJcclxuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uZmlndXJhdGlvbi9lbnZpcm9ubWVudFwiXHJcbmltcG9ydCB7IENvdW50cnkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9Db3VudHJ5XCJcclxuaW1wb3J0IHt1c2VBcHBEaXNwYXRjaCwgdXNlQXBwU2VsZWN0b3J9IGZyb20gXCIuLi8uLi8uLi8uLi9zdG9yZS9ob29rc1wiO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2dldENvdW50cmllc30gZnJvbSBcIi4uLy4uLy4uLy4uL3NsaWNlc1wiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBuYXZpZ2F0aW9uR3VpZGVMaW5rcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb25maWd1cmF0aW9uL25hdmlnYXRpb25cIlxyXG5pbXBvcnQgeyBQYWdlcyB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb25maWd1cmF0aW9uL2NvbW1vblwiXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5pbXBvcnQgeyBHRVRfQ09VTlRSSUVTX0RFVEFJTF9RVUVSWSwgR0VUX0NPVU5UUklFU19RVUVSWSB9IGZyb20gXCIuLi8uLi8uLi8uLi9xdWVyaWVzXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1JPVVRFfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29uZmlndXJhdGlvbi9yb3V0ZXNcIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgY291bnRyaWVzOiB7XHJcbiAgICBjb2RlOiBzdHJpbmcsXHJcbiAgICBuYW1lOiBzdHJpbmcsXHJcbiAgICBlbW9qaTogc3RyaW5nLFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQ291bnRyeUlkKHtjb3VudHJpZXN9OlByb3BzKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9DT1VOVFJJRVNfREVUQUlMX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHsgY29kZSB9LFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHsgY291bnRyaWVzR3JhcGhRTCB9ID0gdXNlQXBwU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuQ291bnRyaWVzKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZ2V0Q291bnRyaWVzKCkpXHJcbiAgICBjb25zb2xlLmxvZyhgQ291bnRyeTogJHtjb3VudHJpZXNHcmFwaFFMLmxlbmd0aH1gKVxyXG4gIH0sIFtjb3VudHJpZXNHcmFwaFFMXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5OZXh0IEpTIHwgR3VpZGUgfCBDaC10d2VsdmUtQ291bnRyeTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2xzJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLTMgaGFzLWJyJz5cclxuICAgICAgICAgIDxOYXZpZ2F0aW9uIGxpbmtzPXtuYXZpZ2F0aW9uR3VpZGVMaW5rc30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC05IGhhcy1icic+XHJcbiAgICAgICAgICA8bGFiZWw+Q291bnRyeTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGgzPntjb3VudHJpZXMuY29kZX08L2gzPlxyXG4gICAgICAgICAgPGxhYmVsPkNvZGU6PC9sYWJlbD5cclxuICAgICAgICAgIDxoMz57Y291bnRyaWVzLm5hbWV9PC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbiBjb25zdCBfZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gIC8vY29uc3QgcGFyYW0gPSBjb250ZXh0LnF1ZXJ5LmlkXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBgJHtlbnZpcm9ubWVudC5jb3VudHJpZXNVUkx9LyR7Y29udGV4dC5xdWVyeS5jb2RlfWBcclxuICApO1xyXG4gIGNvbnN0IGNvZGUgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBjb2RlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudHJ5SWQ7XG5cbi8vIEB0cy1pZ25vcmVcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICBsZXQgcmVzID0gX2dldFNlcnZlclNpZGVQcm9wcyhjdHgpXG4vLyBAdHMtaWdub3JlXG4gICAgICAgIGlmKHR5cGVvZiByZXMudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmVzID0gYXdhaXQgcmVzXG4vLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiB7XG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgLi4ucmVzLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgIHByb3BzOiB7XG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAuLi4ocmVzLnByb3BzIHx8IHt9KSxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIC4uLihhd2FpdCBfX2xvYWROYW1lc3BhY2VzKHtcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgLi4uY3R4LFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBwYXRobmFtZTogJy9ndWlkZS9jaGFwdGVycy9jaC10d2VsdmUvW2NvZGVdJyxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgbG9hZGVyTmFtZTogJ2dldFNlcnZlclNpZGVQcm9wcycsXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIC4uLl9faTE4bkNvbmZpZyxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgbG9hZExvY2FsZUZyb206IChsLCBuKSA9PiBpbXBvcnQoYEBuZXh0LXRyYW5zbGF0ZS1yb290L2xvY2FsZXMvJHtsfS8ke259YCkudGhlbihtID0+IG0uZGVmYXVsdCksXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICB9KSlcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICB9XG4vLyBAdHMtaWdub3JlXG4gICAgICAgIH1cbi8vIEB0cy1pZ25vcmVcbiAgICB9XG4vLyBAdHMtaWdub3JlXG4gICJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJnZXRDb3VudHJpZXMiLCJOYXZpZ2F0aW9uIiwibmF2aWdhdGlvbkd1aWRlTGlua3MiLCJIZWFkIiwidXNlUXVlcnkiLCJHRVRfQ09VTlRSSUVTX0RFVEFJTF9RVUVSWSIsIkNvdW50cnlJZCIsImNvdW50cmllcyIsInJvdXRlciIsImRhdGEiLCJ2YXJpYWJsZXMiLCJjb2RlIiwiZGlzcGF0Y2giLCJjb3VudHJpZXNHcmFwaFFMIiwic3RhdGUiLCJDb3VudHJpZXMiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJsaW5rcyIsImxhYmVsIiwiaDMiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/guide/chapters/ch-twelve/[code].tsx\n"));

/***/ })

});