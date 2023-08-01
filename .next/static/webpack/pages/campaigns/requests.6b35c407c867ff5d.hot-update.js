"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/esm/index.js\");\n\n\n\n\n\n\n\n\nvar RequestRow = /*#__PURE__*/ function(Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(RequestRow, Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(RequestRow);\n    function RequestRow() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, RequestRow);\n        return _super.apply(this, arguments);\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(RequestRow, [\n        {\n            key: \"render\",\n            value: function render() {\n                var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__.Table.Cell;\n                var _props = this.props, id = _props.id, request = _props.request, approversCount = _props.approversCount;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: id\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\arsla\\\\OneDrive\\\\Desktop\\\\kickstart\\\\components\\\\RequestRow.js\",\n                            lineNumber: 16,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: request.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\arsla\\\\OneDrive\\\\Desktop\\\\kickstart\\\\components\\\\RequestRow.js\",\n                            lineNumber: 19,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(request.value, \"ether\")\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\arsla\\\\OneDrive\\\\Desktop\\\\kickstart\\\\components\\\\RequestRow.js\",\n                            lineNumber: 22,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: request.recipient\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\arsla\\\\OneDrive\\\\Desktop\\\\kickstart\\\\components\\\\RequestRow.js\",\n                            lineNumber: 26,\n                            columnNumber: 1\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                            children: request.approvalCount / approversCount\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\arsla\\\\OneDrive\\\\Desktop\\\\kickstart\\\\components\\\\RequestRow.js\",\n                            lineNumber: 30,\n                            columnNumber: 1\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\arsla\\\\OneDrive\\\\Desktop\\\\kickstart\\\\components\\\\RequestRow.js\",\n                    lineNumber: 15,\n                    columnNumber: 1\n                }, this);\n            }\n        }\n    ]);\n    return RequestRow;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBcUM7QUFDRTtBQUNoQjtBQUV2QixjQUFnQixpQkFvQ2Y7OzhFQXBDS0ksVUFBVTsrRkFBVkEsVUFBVTthQUFWQSxVQUFVO2dHQUFWQSxVQUFVOzs7a0ZBQVZBLFVBQVU7O1lBSWZDLEdBQU0sRUFBTkEsUUFBTTttQkFBTkEsU0FBQUEsTUFBTSxHQUNOO2dCQUNDLElBQU9DLEdBQUcsR0FBT0osd0RBQVAsRUFBQ0ssSUFBSSxHQUFFTCx5REFBRjtnQkFDakIsSUFBa0MsTUFBVSxHQUFWLElBQUksQ0FBQ00sS0FBSyxFQUFyQ0MsRUFBRSxHQUF5QixNQUFVLENBQXJDQSxFQUFFLEVBQUNDLE9BQU8sR0FBaUIsTUFBVSxDQUFsQ0EsT0FBTyxFQUFDQyxjQUFjLEdBQUUsTUFBVSxDQUExQkEsY0FBYztnQkFDOUIscUJBRUYsOERBQUNMLEdBQUc7O3NDQUNKLDhEQUFDQyxJQUFJO3NDQUNKRSxFQUFFOzs7OztnQ0FDSTtzQ0FDUCw4REFBQ0YsSUFBSTtzQ0FDSkcsT0FBTyxDQUFDRSxXQUFXOzs7OztnQ0FDYjtzQ0FDUCw4REFBQ0wsSUFBSTtzQ0FDSkosMERBQWtCLENBQUNPLE9BQU8sQ0FBQ0ssS0FBSyxFQUFDLE9BQU8sQ0FBQzs7Ozs7Z0NBQ25DO3NDQUVQLDhEQUFDUixJQUFJO3NDQUNKRyxPQUFPLENBQUNNLFNBQVM7Ozs7O2dDQUNYO3NDQUVQLDhEQUFDVCxJQUFJO3NDQUVKRyxPQUFPLENBQUNPLGFBQWEsR0FBQ04sY0FBYzs7Ozs7Z0NBRTlCOzs7Ozs7d0JBQ0QsQ0FFRjtZQUNILENBQUM7OztXQWpDSVAsVUFBVTtDQWtDZixDQWxDd0JILDRDQUFTLENBa0NqQztBQUVELCtEQUFlRyxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVxdWVzdFJvdy5qcz9jYTMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtUYWJsZX0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmltcG9ydCB3ZWIzIGZyb20gJ3dlYjMnXHJcblxyXG5jbGFzcyBSZXF1ZXN0Um93IGV4dGVuZHMgQ29tcG9uZW50XHJcbntcclxuXHJcblxyXG5cdHJlbmRlcigpXHJcblx0e1xyXG5cdFx0Y29uc3Qge1JvdyxDZWxsfT1UYWJsZVxyXG5jb25zdCB7aWQscmVxdWVzdCxhcHByb3ZlcnNDb3VudH09dGhpcy5wcm9wc1xyXG5cdFx0cmV0dXJuIChcclxuXHJcbjxSb3c+XHJcbjxDZWxsPlxyXG57aWR9XHJcbjwvQ2VsbD5cclxuPENlbGw+XHJcbntyZXF1ZXN0LmRlc2NyaXB0aW9ufVxyXG48L0NlbGw+XHJcbjxDZWxsPlxyXG57d2ViMy51dGlscy5mcm9tV2VpKHJlcXVlc3QudmFsdWUsJ2V0aGVyJyl9XHJcbjwvQ2VsbD5cclxuXHJcbjxDZWxsPlxyXG57cmVxdWVzdC5yZWNpcGllbnR9XHJcbjwvQ2VsbD5cclxuXHJcbjxDZWxsPlxyXG57XHJcblx0cmVxdWVzdC5hcHByb3ZhbENvdW50L2FwcHJvdmVyc0NvdW50XHJcbn1cclxuPC9DZWxsPlxyXG48L1Jvdz5cclxuXHJcblx0XHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3ciXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIndlYjMiLCJSZXF1ZXN0Um93IiwicmVuZGVyIiwiUm93IiwiQ2VsbCIsInByb3BzIiwiaWQiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50IiwiYXBwcm92YWxDb3VudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n"));

/***/ })

});