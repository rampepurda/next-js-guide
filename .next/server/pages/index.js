/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./locales lazy recursive ^\\.\\/.*\\/.*$":
/*!*****************************************************!*\
  !*** ./locales/ lazy ^\.\/.*\/.*$ namespace object ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/common": [
		"./locales/en/common.json",
		"locales_en_common_json"
	],
	"./en/common.json": [
		"./locales/en/common.json",
		"locales_en_common_json"
	],
	"./en/en": [
		"./locales/en/en.json",
		"locales_en_en_json"
	],
	"./en/en.json": [
		"./locales/en/en.json",
		"locales_en_en_json"
	],
	"./en/home": [
		"./locales/en/home.json",
		"locales_en_home_json"
	],
	"./en/home.json": [
		"./locales/en/home.json",
		"locales_en_home_json"
	],
	"./en/projects": [
		"./locales/en/projects.json",
		"locales_en_projects_json"
	],
	"./en/projects.json": [
		"./locales/en/projects.json",
		"locales_en_projects_json"
	],
	"./zh/common": [
		"./locales/zh/common.json",
		"locales_zh_common_json"
	],
	"./zh/common.json": [
		"./locales/zh/common.json",
		"locales_zh_common_json"
	],
	"./zh/home": [
		"./locales/zh/home.json",
		"locales_zh_home_json"
	],
	"./zh/home.json": [
		"./locales/zh/home.json",
		"locales_zh_home_json"
	],
	"./zh/projects": [
		"./locales/zh/projects.json",
		"locales_zh_projects_json"
	],
	"./zh/projects.json": [
		"./locales/zh/projects.json",
		"locales_zh_projects_json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./locales lazy recursive ^\\.\\/.*\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/***/ ((module) => {

"use strict";
eval("\nmodule.exports = {\n    defaultLocale: \"en\",\n    locales: [\n        \"en\",\n        \"zh\"\n    ],\n    loader: true,\n    pages: {\n        \"*\": [\n            \"common\",\n            \"home\"\n        ],\n        \"/projects\": [\n            \"projects\"\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pMThuLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBQTtBQUFBQSxNQUFNLENBQUNDLE9BQU8sR0FBRztJQUNmQyxhQUFhLEVBQUUsSUFBSTtJQUNuQkMsT0FBTyxFQUFFO1FBQUMsSUFBSTtRQUFFLElBQUk7S0FBQztJQUNyQkMsTUFBTSxFQUFFLElBQUk7SUFDWkMsS0FBSyxFQUFFO1FBQ0wsR0FBRyxFQUFFO1lBQUMsUUFBUTtZQUFDLE1BQU07U0FBQztRQUN0QixXQUFXLEVBQUU7WUFBQyxVQUFVO1NBQUM7S0FDMUI7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdHN4LWd1aWRlLy4vaTE4bi5qcz85MzhiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGRlZmF1bHRMb2NhbGU6ICdlbicsXHJcbiAgbG9jYWxlczogWydlbicsICd6aCddLFxyXG4gIGxvYWRlcjogdHJ1ZSxcclxuICBwYWdlczoge1xyXG4gICAgJyonOiBbXCJjb21tb25cIixcImhvbWVcIl0sXHJcbiAgICAnL3Byb2plY3RzJzogW1wicHJvamVjdHNcIl0sXHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZhdWx0TG9jYWxlIiwibG9jYWxlcyIsImxvYWRlciIsInBhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./i18n.js\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ \"./i18n.js\");\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/loadNamespaces */ \"next-translate/loadNamespaces\");\n/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-translate/useTranslation */ \"next-translate/useTranslation\");\n/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4__);\n// @ts-ignore\n\n\n// @ts-ignore\n\n\n\nconst Home = ()=>{\n    const { t  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_4___default()(\"common\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: t(\"welcome\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"description\",\n                    content: \"Generated by create next app\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"width=device-width, initial-scale=1\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"icon\",\n                    href: \"/favicon.ico\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\index.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\index.tsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n// @ts-ignore\nasync function getStaticProps(ctx) {\n    // @ts-ignore\n    // @ts-ignore\n    // @ts-ignore\n    return {\n        // @ts-ignore\n        // @ts-ignore\n        // @ts-ignore\n        props: {\n            // @ts-ignore\n            // @ts-ignore\n            ...await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()({\n                // @ts-ignore\n                ...ctx,\n                // @ts-ignore\n                pathname: \"/index\",\n                // @ts-ignore\n                loaderName: \"getStaticProps\",\n                // @ts-ignore\n                ...(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___default()),\n                // @ts-ignore\n                loadLocaleFrom: (l, n)=>__webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\/.*$\")(`./${l}/${n}`).then((m)=>m.default)\n            })\n        }\n    };\n// @ts-ignore\n} // @ts-ignore\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsYUFBYTtBQUNUO0FBQW9EO0FBQ3hELGFBQWE7QUFDbUQ7QUFJcEM7QUFDOEI7QUFFMUQsTUFBTUksSUFBSSxHQUFhLElBQU07SUFDM0IsTUFBTSxFQUFFQyxDQUFDLEdBQUUsR0FBR0Ysb0VBQWMsQ0FBQyxRQUFRLENBQUM7SUFFdEMscUJBQ0U7a0JBQ0UsNEVBQUNELGtEQUFJOzs4QkFDSCw4REFBQ0ksT0FBSzs4QkFBRUQsQ0FBQyxDQUFDLFNBQVMsQ0FBQzs7Ozs7NkJBQVM7OEJBQzdCLDhEQUFDRSxNQUFJO29CQUFDQyxJQUFJLEVBQUMsYUFBYTtvQkFBQ0MsT0FBTyxFQUFDLDhCQUE4Qjs7Ozs7NkJBQUU7OEJBQ2pFLDhEQUFDRixNQUFJO29CQUFDQyxJQUFJLEVBQUMsVUFBVTtvQkFBQ0MsT0FBTyxFQUFDLHFDQUFxQzs7Ozs7NkJBQUU7OEJBQ3JFLDhEQUFDQyxNQUFJO29CQUFDQyxHQUFHLEVBQUMsTUFBTTtvQkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzZCQUFFOzs7Ozs7cUJBQ2pDO3FCQUNOLENBQ0o7QUFDSCxDQUFDO0FBRUQsaUVBQWVSLElBQUk7QUFHbkIsYUFBYTtBQUNGLGVBQWVTLGNBQWMsQ0FBQ0MsR0FBRyxFQUFFO0lBQzlDLGFBQWE7SUFFYixhQUFhO0lBRWIsYUFBYTtJQUNMLE9BQU87UUFDZixhQUFhO1FBRWIsYUFBYTtRQUViLGFBQWE7UUFDSEMsS0FBSyxFQUFFO1lBQ2pCLGFBQWE7WUFFYixhQUFhO1lBQ0QsR0FBSSxNQUFNZCxvRUFBZ0IsQ0FBQztnQkFDdkMsYUFBYTtnQkFDQyxHQUFHYSxHQUFHO2dCQUNwQixhQUFhO2dCQUNDRSxRQUFRLEVBQUUsUUFBUTtnQkFDaEMsYUFBYTtnQkFDQ0MsVUFBVSxFQUFFLGdCQUFnQjtnQkFDMUMsYUFBYTtnQkFDQyxHQUFHakIsa0VBQVk7Z0JBQzdCLGFBQWE7Z0JBQ0NrQixjQUFjLEVBQUUsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEdBQUssZ0VBQU8sR0FBOEIsRUFBRUQsQ0FBQyxDQUFDLENBQUMsRUFBRUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxJQUFJLENBQUNDLENBQUFBLENBQUMsR0FBSUEsQ0FBQyxDQUFDQyxPQUFPLENBQUM7YUFFaEcsQ0FBQztTQUVIO0tBRUY7QUFDVCxhQUFhO0FBQ1QsQ0FBQyxDQUNMLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRzeC1ndWlkZS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gQHRzLWlnbm9yZVxuICAgIGltcG9ydCBfX2kxOG5Db25maWcgZnJvbSAnQG5leHQtdHJhbnNsYXRlLXJvb3QvaTE4bidcbi8vIEB0cy1pZ25vcmVcbiAgICBpbXBvcnQgX19sb2FkTmFtZXNwYWNlcyBmcm9tICduZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlcydcbi8vIEB0cy1pZ25vcmVcbiAgICBcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tIFwibmV4dC10cmFuc2xhdGUvdXNlVHJhbnNsYXRpb25cIlxyXG5cclxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB0IH0gPSB1c2VUcmFuc2xhdGlvbignY29tbW9uJylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dCgnd2VsY29tZScpfTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIi8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuXG5cbi8vIEB0cy1pZ25vcmVcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY3R4KSB7XG4vLyBAdHMtaWdub3JlXG4gICAgICAgIFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICBcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIHtcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICBwcm9wczoge1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAuLi4oYXdhaXQgX19sb2FkTmFtZXNwYWNlcyh7XG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIC4uLmN0eCxcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvaW5kZXgnLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBsb2FkZXJOYW1lOiAnZ2V0U3RhdGljUHJvcHMnLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAuLi5fX2kxOG5Db25maWcsXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIGxvYWRMb2NhbGVGcm9tOiAobCwgbikgPT4gaW1wb3J0KGBAbmV4dC10cmFuc2xhdGUtcm9vdC9sb2NhbGVzLyR7bH0vJHtufWApLnRoZW4obSA9PiBtLmRlZmF1bHQpLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgfSkpXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgfVxuLy8gQHRzLWlnbm9yZVxuICAgICAgICB9XG4vLyBAdHMtaWdub3JlXG4gICAgfVxuLy8gQHRzLWlnbm9yZVxuICAiXSwibmFtZXMiOlsiX19pMThuQ29uZmlnIiwiX19sb2FkTmFtZXNwYWNlcyIsIkhlYWQiLCJ1c2VUcmFuc2xhdGlvbiIsIkhvbWUiLCJ0IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImdldFN0YXRpY1Byb3BzIiwiY3R4IiwicHJvcHMiLCJwYXRobmFtZSIsImxvYWRlck5hbWUiLCJsb2FkTG9jYWxlRnJvbSIsImwiLCJuIiwidGhlbiIsIm0iLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next-translate/loadNamespaces":
/*!************************************************!*\
  !*** external "next-translate/loadNamespaces" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/loadNamespaces");

/***/ }),

/***/ "next-translate/useTranslation":
/*!************************************************!*\
  !*** external "next-translate/useTranslation" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();