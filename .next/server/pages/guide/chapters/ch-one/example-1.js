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
exports.id = "pages/guide/chapters/ch-one/example-1";
exports.ids = ["pages/guide/chapters/ch-one/example-1"];
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

/***/ "./pages/guide/chapters/ch-one/example-1/index.tsx":
/*!*********************************************************!*\
  !*** ./pages/guide/chapters/ch-one/example-1/index.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @next-translate-root/i18n */ \"./i18n.js\");\n/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-translate/loadNamespaces */ \"next-translate/loadNamespaces\");\n/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__);\n// @ts-ignore\n\n\n// @ts-ignore\n\nconst ChOneExamOne = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Hello! You are in Chapter1 - Example 1\"\n    }, void 0, false, {\n        fileName: \"C:\\\\01-TUTORIALS\\\\02-Frameworks\\\\REACT\\\\NextJS\\\\next-js-guide-git-hub\\\\pages\\\\guide\\\\chapters\\\\ch-one\\\\example-1\\\\index.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChOneExamOne);\n// @ts-ignore\nasync function getStaticProps(ctx) {\n    // @ts-ignore\n    // @ts-ignore\n    // @ts-ignore\n    return {\n        // @ts-ignore\n        // @ts-ignore\n        // @ts-ignore\n        props: {\n            // @ts-ignore\n            // @ts-ignore\n            ...await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()({\n                // @ts-ignore\n                ...ctx,\n                // @ts-ignore\n                pathname: \"/guide/chapters/ch-one/example-1/index\",\n                // @ts-ignore\n                loaderName: \"getStaticProps\",\n                // @ts-ignore\n                ...(_next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1___default()),\n                // @ts-ignore\n                loadLocaleFrom: (l, n)=>__webpack_require__(\"./locales lazy recursive ^\\\\.\\\\/.*\\\\/.*$\")(`./${l}/${n}`).then((m)=>m.default)\n            })\n        }\n    };\n// @ts-ignore\n} // @ts-ignore\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ndWlkZS9jaGFwdGVycy9jaC1vbmUvZXhhbXBsZS0xL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLGFBQWE7QUFDVDtBQUFvRDtBQUN4RCxhQUFhO0FBQ21EO0FBTWhFLE1BQU1FLFlBQVksR0FBYSxJQUFNO0lBQ25DLHFCQUNFLDhEQUFDQyxJQUFFO2tCQUFDLHdDQUNKOzs7OztpQkFBSyxDQUNOO0FBQ0gsQ0FBQztBQUVELGlFQUFlRCxZQUFZO0FBSTNCLGFBQWE7QUFDRixlQUFlRSxjQUFjLENBQUNDLEdBQUcsRUFBRTtJQUM5QyxhQUFhO0lBRWIsYUFBYTtJQUViLGFBQWE7SUFDTCxPQUFPO1FBQ2YsYUFBYTtRQUViLGFBQWE7UUFFYixhQUFhO1FBQ0hDLEtBQUssRUFBRTtZQUNqQixhQUFhO1lBRWIsYUFBYTtZQUNELEdBQUksTUFBTUwsb0VBQWdCLENBQUM7Z0JBQ3ZDLGFBQWE7Z0JBQ0MsR0FBR0ksR0FBRztnQkFDcEIsYUFBYTtnQkFDQ0UsUUFBUSxFQUFFLHdDQUF3QztnQkFDaEUsYUFBYTtnQkFDQ0MsVUFBVSxFQUFFLGdCQUFnQjtnQkFDMUMsYUFBYTtnQkFDQyxHQUFHUixrRUFBWTtnQkFDN0IsYUFBYTtnQkFDQ1MsY0FBYyxFQUFFLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxHQUFLLGdFQUFPLEdBQThCLEVBQUVELENBQUMsQ0FBQyxDQUFDLEVBQUVDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsSUFBSSxDQUFDQyxDQUFBQSxDQUFDLEdBQUlBLENBQUMsQ0FBQ0MsT0FBTyxDQUFDO2FBRWhHLENBQUM7U0FFSDtLQUVGO0FBQ1QsYUFBYTtBQUNULENBQUMsQ0FDTCxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10c3gtZ3VpZGUvLi9wYWdlcy9ndWlkZS9jaGFwdGVycy9jaC1vbmUvZXhhbXBsZS0xL2luZGV4LnRzeD85MmUzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gQHRzLWlnbm9yZVxuICAgIGltcG9ydCBfX2kxOG5Db25maWcgZnJvbSAnQG5leHQtdHJhbnNsYXRlLXJvb3QvaTE4bidcbi8vIEB0cy1pZ25vcmVcbiAgICBpbXBvcnQgX19sb2FkTmFtZXNwYWNlcyBmcm9tICduZXh0LXRyYW5zbGF0ZS9sb2FkTmFtZXNwYWNlcydcbi8vIEB0cy1pZ25vcmVcbiAgICBcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIlxyXG5pbXBvcnQge05leHRQYWdlfSBmcm9tIFwibmV4dFwiXHJcblxyXG5jb25zdCBDaE9uZUV4YW1PbmU6IE5leHRQYWdlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aDI+SGVsbG8hIFlvdSBhcmUgaW4gQ2hhcHRlcjEgLSBFeGFtcGxlIDFcclxuICAgIDwvaDI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaE9uZUV4YW1PbmVcclxuXHJcblxuXG4vLyBAdHMtaWdub3JlXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGN0eCkge1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICBcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiB7XG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgcHJvcHM6IHtcbi8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgLi4uKGF3YWl0IF9fbG9hZE5hbWVzcGFjZXMoe1xuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAuLi5jdHgsXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2d1aWRlL2NoYXB0ZXJzL2NoLW9uZS9leGFtcGxlLTEvaW5kZXgnLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICBsb2FkZXJOYW1lOiAnZ2V0U3RhdGljUHJvcHMnLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAuLi5fX2kxOG5Db25maWcsXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgIGxvYWRMb2NhbGVGcm9tOiAobCwgbikgPT4gaW1wb3J0KGBAbmV4dC10cmFuc2xhdGUtcm9vdC9sb2NhbGVzLyR7bH0vJHtufWApLnRoZW4obSA9PiBtLmRlZmF1bHQpLFxuLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgfSkpXG4vLyBAdHMtaWdub3JlXG4gICAgICAgICAgfVxuLy8gQHRzLWlnbm9yZVxuICAgICAgICB9XG4vLyBAdHMtaWdub3JlXG4gICAgfVxuLy8gQHRzLWlnbm9yZVxuICAiXSwibmFtZXMiOlsiX19pMThuQ29uZmlnIiwiX19sb2FkTmFtZXNwYWNlcyIsIkNoT25lRXhhbU9uZSIsImgyIiwiZ2V0U3RhdGljUHJvcHMiLCJjdHgiLCJwcm9wcyIsInBhdGhuYW1lIiwibG9hZGVyTmFtZSIsImxvYWRMb2NhbGVGcm9tIiwibCIsIm4iLCJ0aGVuIiwibSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/guide/chapters/ch-one/example-1/index.tsx\n");

/***/ }),

/***/ "next-translate/loadNamespaces":
/*!************************************************!*\
  !*** external "next-translate/loadNamespaces" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-translate/loadNamespaces");

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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/guide/chapters/ch-one/example-1/index.tsx"));
module.exports = __webpack_exports__;

})();