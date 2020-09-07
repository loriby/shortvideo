"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***************************************************************************************************!*\
  !*** /Users/shangmengliang/Documents/workspace/shortVideo/main.js?{"page":"pages%2Fmain%2Fmain"} ***!
  \***************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_main_main_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main/main.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_main_main_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_main_main_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/main/main'\n        _pages_main_main_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_main_main_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEseUVBQUc7QUFDWCxRQUFRLHlFQUFHO0FBQ1gsUUFBUSx5RUFBRztBQUNYLGdCQUFnQix5RUFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9tYWluL21haW4ubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAhUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9tYWluL21haW4nXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************************************************************************!*\
  !*** /Users/shangmengliang/Documents/workspace/shortVideo/main.js?{"type":"appStyle"} ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!****************************************************************************************************!*\
  !*** /Users/shangmengliang/Documents/workspace/shortVideo/App.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/shangmengliang/Documents/workspace/shortVideo/App.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@FONT-FACE": [
    {
      "fontFamily": "uniicons",
      "fontWeight": "normal",
      "fontStyle": "normal",
      "src": "url('./static/uni.ttf') format('truetype')"
    },
    {
      "fontFamily": "uniicons",
      "fontWeight": "normal",
      "fontStyle": "normal",
      "src": "url('https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf?t=1536565627510') format('truetype')"
    }
  ],
  "uni-flex": {
    "display": "flex",
    "flexDirection": "row"
  },
  "uni-flex-item": {
    "flex": 1
  },
  "uni-row": {
    "flexDirection": "row"
  },
  "uni-column": {
    "flexDirection": "column"
  },
  "uni-link": {
    "color": "#576B95",
    "fontSize": "26upx"
  },
  "uni-center": {
    "textAlign": "center"
  },
  "uni-inline-item": {
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "uni-page-head": {
    "paddingTop": "35upx",
    "paddingRight": "35upx",
    "paddingBottom": "35upx",
    "paddingLeft": "35upx",
    "textAlign": "center"
  },
  "uni-page-head-title": {
    "display": "inline-block",
    "paddingTop": 0,
    "paddingRight": "40upx",
    "paddingBottom": 0,
    "paddingLeft": "40upx",
    "fontSize": "30upx",
    "height": "88upx",
    "lineHeight": "88upx",
    "color": "#BEBEBE",
    "boxSizing": "border-box",
    "borderBottom": "2upx solid #D8D8D8"
  },
  "uni-page-body": {
    "width": 100,
    "flexGrow": 1,
    "overflowX": "hidden"
  },
  "uni-padding-wrap": {
    "width": "690upx",
    "paddingTop": 0,
    "paddingRight": "30upx",
    "paddingBottom": 0,
    "paddingLeft": "30upx"
  },
  "uni-word": {
    "textAlign": "center",
    "paddingTop": "200upx",
    "paddingRight": "100upx",
    "paddingBottom": "200upx",
    "paddingLeft": "100upx"
  },
  "uni-title": {
    "fontSize": "30upx",
    "fontWeight": "500",
    "paddingTop": "20upx",
    "paddingRight": 0,
    "paddingBottom": "20upx",
    "paddingLeft": 0,
    "lineHeight": 1.5
  },
  "uni-text": {
    "fontSize": "28upx"
  },
  "uni-text-gray": {
    "color": "#cccccc"
  },
  "uni-text-small": {
    "fontSize": "24upx"
  },
  "uni-common-mb": {
    "marginBottom": "30upx"
  },
  "uni-common-pb": {
    "paddingBottom": "30upx"
  },
  "uni-common-pl": {
    "paddingLeft": "30upx"
  },
  "uni-common-mt": {
    "marginTop": "30upx"
  },
  "uni-bg-red": {
    "background": "#F76260",
    "color": "#FFFFFF"
  },
  "uni-bg-green": {
    "background": "#09BB07",
    "color": "#FFFFFF"
  },
  "uni-bg-blue": {
    "background": "#007AFF",
    "color": "#FFFFFF"
  },
  "uni-h1": {
    "fontSize": "80upx",
    "fontWeight": "700"
  },
  "uni-h2": {
    "fontSize": "60upx",
    "fontWeight": "700"
  },
  "uni-h3": {
    "fontSize": "48upx",
    "fontWeight": "700"
  },
  "uni-h4": {
    "fontSize": "36upx",
    "fontWeight": "700"
  },
  "uni-h5": {
    "fontSize": "28upx",
    "color": "#8f8f94"
  },
  "uni-h6": {
    "fontSize": "24upx",
    "color": "#8f8f94"
  },
  "uni-bold": {
    "fontWeight": "bold"
  },
  "uni-ellipsis": {
    "overflow": "hidden",
    "whiteSpace": "nowrap",
    "textOverflow": "ellipsis"
  },
  "uni-btn-v": {
    "paddingTop": "10upx",
    "paddingRight": 0,
    "paddingBottom": "10upx",
    "paddingLeft": 0
  },
  "uni-form-item": {
    "display": "flex",
    "width": 100,
    "paddingTop": "10upx",
    "paddingRight": 0,
    "paddingBottom": "10upx",
    "paddingLeft": 0
  },
  "uni-label": {
    "width": "210upx",
    "wordWrap": "break-word",
    "wordBreak": "break-all",
    "textIndent": "20upx"
  },
  "uni-input": {
    "height": "50upx",
    "paddingTop": "15upx",
    "paddingRight": "25upx",
    "paddingBottom": "15upx",
    "paddingLeft": "25upx",
    "lineHeight": "50upx",
    "fontSize": "28upx",
    "background": "#FFF",
    "flex": 1
  },
  "uni-loadmore": {
    "height": "80upx",
    "lineHeight": "80upx",
    "textAlign": "center",
    "paddingBottom": "30upx"
  },
  "uni-badge": {
    "fontFamily": "'Helvetica Neue', Helvetica, sans-serif",
    "fontSize": "12",
    "lineHeight": 1,
    "display": "inline-block",
    "paddingTop": "3",
    "paddingRight": "6",
    "paddingBottom": "3",
    "paddingLeft": "6",
    "color": "#333333",
    "borderRadius": "100",
    "backgroundColor": "rgba(0,0,0,0.15)"
  },
  "uni-badge-default": {
    "fontFamily": "'Helvetica Neue', Helvetica, sans-serif",
    "fontSize": "12",
    "lineHeight": 1,
    "display": "inline-block",
    "paddingTop": "3",
    "paddingRight": "6",
    "paddingBottom": "3",
    "paddingLeft": "6",
    "color": "#333333",
    "borderRadius": "100",
    "backgroundColor": "rgba(0,0,0,0.15)"
  },
  "uni-badge-primary": {
    "color": "#ffffff",
    "backgroundColor": "#007aff"
  },
  "uni-badge-green": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964"
  },
  "uni-badge-success": {
    "color": "#ffffff",
    "backgroundColor": "#4cd964"
  },
  "uni-badge-warning": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e"
  },
  "uni-badge-yellow": {
    "color": "#ffffff",
    "backgroundColor": "#f0ad4e"
  },
  "uni-badge-danger": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d"
  },
  "uni-badge-red": {
    "color": "#ffffff",
    "backgroundColor": "#dd524d"
  },
  "uni-badge-purple": {
    "color": "#ffffff",
    "backgroundColor": "#8a6de9"
  },
  "uni-badge-royal": {
    "color": "#ffffff",
    "backgroundColor": "#8a6de9"
  },
  "uni-collapse-content": {
    "height": 0,
    "width": 100,
    "overflow": "hidden"
  },
  "uni-card": {
    "background": "#fff",
    "borderRadius": "8upx",
    "marginTop": "20upx",
    "marginRight": 0,
    "marginBottom": "20upx",
    "marginLeft": 0,
    "position": "relative",
    "boxShadow": "0 2upx 4upx rgba(0, 0, 0, .3)"
  },
  "uni-card-content": {
    "fontSize": "30upx"
  },
  "uni-card-content-inner": {
    "position": "relative",
    "paddingTop": "30upx",
    "paddingRight": "30upx",
    "paddingBottom": "30upx",
    "paddingLeft": "30upx"
  },
  "uni-card-footer": {
    "position": "relative",
    "display": "flex",
    "minHeight": "50upx",
    "paddingTop": "20upx",
    "paddingRight": "30upx",
    "paddingBottom": "20upx",
    "paddingLeft": "30upx",
    "justifyContent": "space-between",
    "alignItems": "center",
    "color": "#6d6d72",
    "position:before": "absolute",
    "top:before": 0,
    "right:before": 0,
    "left:before": 0,
    "height:before": "2upx",
    "content:before": "''",
    "WebkitTransform:before": "scaleY(.5)",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc"
  },
  "uni-card-header": {
    "position": "relative",
    "display": "flex",
    "minHeight": "50upx",
    "paddingTop": "20upx",
    "paddingRight": "30upx",
    "paddingBottom": "20upx",
    "paddingLeft": "30upx",
    "justifyContent": "space-between",
    "alignItems": "center",
    "fontSize": "36upx",
    "position:before:after": "absolute",
    "top:before:after": 0,
    "right:before:after": 0,
    "left:before:after": 0,
    "height:before:after": "2upx",
    "content:before:after": "''",
    "WebkitTransform:before:after": "scaleY(.5)",
    "transform:before:after": "scaleY(.5)",
    "backgroundColor:before:after": "#c8c7cc",
    "bottom:after": 0
  },
  "uni-card-media": {
    "justifyContent": "flex-start"
  },
  "uni-card-media-logo": {
    "height": "84upx",
    "width": "84upx",
    "marginRight": "20upx"
  },
  "uni-card-media-body": {
    "height": "84upx",
    "display": "flex",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start"
  },
  "uni-card-media-text-top": {
    "lineHeight": "36upx",
    "fontSize": "34upx"
  },
  "uni-card-media-text-bottom": {
    "lineHeight": "30upx",
    "fontSize": "28upx",
    "color": "#8f8f94"
  },
  "uni-card-link": {
    "color": "#007AFF"
  },
  "uni-list": {
    "backgroundColor": "#FFFFFF",
    "position": "relative",
    "width": 100,
    "display": "flex",
    "flexDirection": "column",
    "position:after": "absolute",
    "zIndex:after": 10,
    "right:after": 0,
    "bottom:after": 0,
    "left:after": 0,
    "height:after": "1",
    "content:after": "''",
    "WebkitTransform:after": "scaleY(.5)",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc",
    "position::before": "absolute",
    "zIndex::before": 10,
    "right::before": 0,
    "top::before": 0,
    "left::before": 0,
    "height::before": "1",
    "content::before": "''",
    "WebkitTransform::before": "scaleY(.5)",
    "transform::before": "scaleY(.5)",
    "backgroundColor::before": "#c8c7cc"
  },
  "uni-list-cell": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "position::after": "absolute",
    "zIndex::after": 3,
    "right::after": 0,
    "bottom::after": 0,
    "left::after": "30upx",
    "height::after": "1",
    "content::after": "''",
    "WebkitTransform::after": "scaleY(.5)",
    "transform::after": "scaleY(.5)",
    "backgroundColor::after": "#c8c7cc"
  },
  "uni-list-cell-hover": {
    "backgroundColor": "#eeeeee"
  },
  "uni-list-cell-pd": {
    "paddingTop": "22upx",
    "paddingRight": "30upx",
    "paddingBottom": "22upx",
    "paddingLeft": "30upx"
  },
  "uni-list-cell-left": {
    "fontSize": "28upx",
    "paddingTop": 0,
    "paddingRight": "30upx",
    "paddingBottom": 0,
    "paddingLeft": "30upx"
  },
  "uni-list-cell-db": {
    "flex": 1
  },
  "uni-list-cell-right": {
    "flex": 1
  },
  "uni-list-cell-divider": {
    "position": "relative",
    "display": "flex",
    "color": "#999999",
    "backgroundColor": "#f7f7f7",
    "paddingTop": "15upx",
    "paddingRight": "20upx",
    "paddingBottom": "15upx",
    "paddingLeft": "20upx",
    "position::before": "absolute",
    "right::before": 0,
    "top::before": 0,
    "left::before": 0,
    "height::before": "1",
    "content::before": "''",
    "WebkitTransform::before": "scaleY(.5)",
    "transform::before": "scaleY(.5)",
    "backgroundColor::before": "#c8c7cc",
    "position::after": "absolute",
    "right::after": 0,
    "bottom::after": 0,
    "left::after": "0upx",
    "height::after": "1",
    "content::after": "''",
    "WebkitTransform::after": "scaleY(.5)",
    "transform::after": "scaleY(.5)",
    "backgroundColor::after": "#c8c7cc"
  },
  "uni-list-cell-navigate": {
    "fontSize": "30upx",
    "paddingTop": "22upx",
    "paddingRight": "36upx",
    "paddingBottom": "22upx",
    "paddingLeft": "30upx",
    "lineHeight": "48upx",
    "position": "relative",
    "display": "flex",
    "boxSizing": "border-box",
    "width": 100,
    "flex": 1,
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "uni-navigate-badge": {
    "paddingRight": "50upx"
  },
  "uni-triplex-row": {
    "display": "flex",
    "flex": 1,
    "width": 100,
    "boxSizing": "border-box",
    "flexDirection": "row",
    "paddingTop": "22upx",
    "paddingRight": "30upx",
    "paddingBottom": "22upx",
    "paddingLeft": "30upx"
  },
  "uni-triplex-right": {
    "display": "flex",
    "flexDirection": "column",
    "width": 16,
    "textAlign": "right"
  },
  "uni-triplex-left": {
    "display": "flex",
    "flexDirection": "column",
    "width": 84
  },
  "uni-media-list": {
    "paddingTop": "22upx",
    "paddingRight": "30upx",
    "paddingBottom": "22upx",
    "paddingLeft": "30upx",
    "boxSizing": "border-box",
    "display": "flex",
    "width": 100,
    "flexDirection": "row"
  },
  "uni-pull-right": {
    "flexDirection": "row-reverse"
  },
  "uni-media-list-logo": {
    "height": "84upx",
    "width": "84upx",
    "marginRight": "20upx"
  },
  "uni-media-list-body": {
    "height": "84upx",
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "space-between",
    "alignItems": "flex-start",
    "overflow": "hidden"
  },
  "uni-media-list-text-top": {
    "width": 100,
    "lineHeight": "36upx",
    "fontSize": "30upx"
  },
  "uni-media-list-text-bottom": {
    "width": 100,
    "lineHeight": "30upx",
    "fontSize": "26upx",
    "color": "#8f8f94"
  },
  "uni-grid-9": {
    "background": "#f2f2f2",
    "width": "750upx",
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap",
    "borderTop": "2upx solid #eee"
  },
  "uni-grid-9-item": {
    "width": "250upx",
    "height": "200upx",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "borderBottom": "2upx solid",
    "borderRight": "2upx solid",
    "borderColor": "#eeeeee",
    "boxSizing": "border-box"
  },
  "no-border-right": {
    "borderRight": "none"
  },
  "uni-grid-9-image": {
    "width": "100upx",
    "height": "100upx"
  },
  "uni-grid-9-text": {
    "width": "250upx",
    "lineHeight": "4upx",
    "height": "40upx",
    "textAlign": "center",
    "fontSize": "30upx"
  },
  "uni-grid-9-item-hover": {
    "background": "rgba(0, 0, 0, 0.1)"
  },
  "uni-uploader": {
    "flex": 1,
    "flexDirection": "column"
  },
  "uni-uploader-head": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "uni-uploader-info": {
    "color": "#B2B2B2"
  },
  "uni-uploader-body": {
    "marginTop": "16upx"
  },
  "uni-uploader__files": {
    "display": "flex",
    "flexDirection": "row",
    "flexWrap": "wrap"
  },
  "uni-uploader__file": {
    "marginTop": "10upx",
    "marginRight": "10upx",
    "marginBottom": "10upx",
    "marginLeft": "10upx",
    "width": "210upx",
    "height": "210upx"
  },
  "uni-uploader__img": {
    "display": "block",
    "width": "210upx",
    "height": "210upx"
  },
  "uni-uploader__input-box": {
    "position": "relative",
    "marginTop": "10upx",
    "marginRight": "10upx",
    "marginBottom": "10upx",
    "marginLeft": "10upx",
    "width": "208upx",
    "height": "208upx",
    "border": "2upx solid #D9D9D9",
    "content:before": "\" \"",
    "position:before": "absolute",
    "top:before": 50,
    "left:before": 50,
    "WebkitTransform:before": "translate(-50%, -50%)",
    "transform:before": "translate(-50%, -50%)",
    "backgroundColor:before": "#D9D9D9",
    "content:before:after": "\" \"",
    "position:before:after": "absolute",
    "top:before:after": 50,
    "left:before:after": 50,
    "WebkitTransform:before:after": "translate(-50%, -50%)",
    "transform:before:after": "translate(-50%, -50%)",
    "backgroundColor:before:after": "#D9D9D9",
    "width:before": "4upx",
    "height:before": "79upx",
    "width:after": "79upx",
    "height:after": "4upx",
    "borderColor:active": "#999999",
    "backgroundColor:active:before": "#999999",
    "backgroundColor:active:before:active:after": "#999999"
  },
  "uni-uploader__input": {
    "position": "absolute",
    "zIndex": 1,
    "top": 0,
    "left": 0,
    "width": 100,
    "height": 100,
    "opacity": 0
  },
  "feedback-title": {
    "display": "flex",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingTop": "20upx",
    "paddingRight": "20upx",
    "paddingBottom": "20upx",
    "paddingLeft": "20upx",
    "color": "#8f8f94",
    "fontSize": "28upx"
  },
  "feedback-quick": {
    "position": "relative",
    "paddingRight": "40upx",
    "fontFamily:after": "uniicons",
    "fontSize:after": "40upx",
    "content:after": "'\\e581'",
    "position:after": "absolute",
    "right:after": 0,
    "top:after": 50,
    "color:after": "#bbbbbb",
    "WebkitTransform:after": "translateY(-50%)",
    "transform:after": "translateY(-50%)"
  },
  "feedback-body": {
    "background": "#fff"
  },
  "feedback-textare": {
    "height": "200upx",
    "fontSize": "34upx",
    "lineHeight": "50upx",
    "width": 100,
    "boxSizing": "border-box",
    "paddingTop": "20upx",
    "paddingRight": "30upx",
    "paddingBottom": 0,
    "paddingLeft": "30upx"
  },
  "feedback-input": {
    "fontSize": "34upx",
    "height": "50upx",
    "minHeight": "50upx",
    "paddingTop": "15upx",
    "paddingRight": "20upx",
    "paddingBottom": "15upx",
    "paddingLeft": "20upx",
    "lineHeight": "50upx"
  },
  "feedback-uploader": {
    "paddingTop": "22upx",
    "paddingRight": "20upx",
    "paddingBottom": "22upx",
    "paddingLeft": "20upx"
  },
  "feedback-star": {
    "fontFamily": "uniicons",
    "fontSize": "40upx",
    "marginLeft": "6upx",
    "content:after": "'\\e408'"
  },
  "feedback-star-view": {
    "marginLeft": "20upx"
  },
  "feedback-submit": {
    "background": "#007AFF",
    "color": "#FFFFFF",
    "marginTop": "20upx",
    "marginRight": "20upx",
    "marginBottom": "20upx",
    "marginLeft": "20upx"
  },
  "uni-input-group": {
    "position": "relative",
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "border": 0,
    "backgroundColor": "#ffffff",
    "position:before": "absolute",
    "top:before": 0,
    "right:before": 0,
    "left:before": 0,
    "height:before": "2upx",
    "content:before": "''",
    "transform:before": "scaleY(.5)",
    "backgroundColor:before": "#c8c7cc",
    "position:after": "absolute",
    "right:after": 0,
    "bottom:after": 0,
    "left:after": 0,
    "height:after": "2upx",
    "content:after": "''",
    "transform:after": "scaleY(.5)",
    "backgroundColor:after": "#c8c7cc"
  },
  "uni-input-row": {
    "position": "relative",
    "display": "flex",
    "flexDirection": "row",
    "fontSize": "28upx",
    "paddingTop": "22upx",
    "paddingRight": "30upx",
    "paddingBottom": "22upx",
    "paddingLeft": "30upx",
    "justifyContent": "space-between"
  },
  "uni-textarea": {
    "width": 100,
    "background": "#FFF"
  },
  "uni-tab-bar": {
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "overflow": "hidden",
    "height": 100
  },
  "uni-swiper-tab": {
    "width": 100,
    "whiteSpace": "nowrap",
    "lineHeight": "100upx",
    "height": "100upx",
    "borderBottom": "1px solid #c8c7cc"
  },
  "swiper-tab-list": {
    "fontSize": "30upx",
    "width": "150upx",
    "display": "inline-block",
    "textAlign": "center",
    "color": "#555555"
  },
  "uni-tab-bar-loading": {
    "paddingTop": "20upx",
    "paddingRight": 0,
    "paddingBottom": "20upx",
    "paddingLeft": 0
  },
  "uni-comment": {
    "paddingTop": "5rpx",
    "paddingRight": 0,
    "paddingBottom": "5rpx",
    "paddingLeft": 0,
    "display": "flex",
    "flexGrow": 1,
    "flexDirection": "column"
  },
  "uni-comment-list": {
    "flexWrap": "nowrap",
    "paddingTop": "10rpx",
    "paddingRight": 0,
    "paddingBottom": "10rpx",
    "paddingLeft": 0,
    "marginTop": "10rpx",
    "marginRight": 0,
    "marginBottom": "10rpx",
    "marginLeft": 0,
    "width": 100,
    "display": "flex"
  },
  "uni-comment-face": {
    "width": "70upx",
    "height": "70upx",
    "borderRadius": 100,
    "marginRight": "20upx",
    "flexShrink": 0,
    "overflow": "hidden"
  },
  "uni-comment-body": {
    "width": 100
  },
  "uni-comment-top": {
    "lineHeight": 1.5,
    "justifyContent": "space-between"
  },
  "uni-comment-date": {
    "lineHeight": "38upx",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "display": "flex",
    "flexGrow": 1
  },
  "uni-comment-content": {
    "lineHeight": 1.6,
    "fontSize": "28upx",
    "paddingTop": "8rpx",
    "paddingRight": 0,
    "paddingBottom": "8rpx",
    "paddingLeft": 0
  },
  "uni-comment-replay-btn": {
    "background": "#FFF",
    "fontSize": "24upx",
    "lineHeight": "28upx",
    "paddingTop": "5rpx",
    "paddingRight": "20upx",
    "paddingBottom": "5rpx",
    "paddingLeft": "20upx",
    "borderRadius": "30upx",
    "color": "#333333",
    "marginTop": 0,
    "marginRight": "10upx",
    "marginBottom": 0,
    "marginLeft": "10upx"
  },
  "uni-swiper-msg": {
    "width": 100,
    "paddingTop": "12rpx",
    "paddingRight": 0,
    "paddingBottom": "12rpx",
    "paddingLeft": 0,
    "flexWrap": "nowrap",
    "display": "flex"
  },
  "uni-swiper-msg-icon": {
    "width": "50upx",
    "marginRight": "20upx"
  },
  "uni-product-list": {
    "display": "flex",
    "width": 100,
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "uni-product": {
    "paddingTop": "20upx",
    "paddingRight": "20upx",
    "paddingBottom": "20upx",
    "paddingLeft": "20upx",
    "display": "flex",
    "flexDirection": "column"
  },
  "image-view": {
    "height": "330upx",
    "width": "330upx",
    "marginTop": "12upx",
    "marginRight": 0,
    "marginBottom": "12upx",
    "marginLeft": 0
  },
  "uni-product-image": {
    "height": "330upx",
    "width": "330upx"
  },
  "uni-product-title": {
    "width": "300upx",
    "wordBreak": "break-all",
    "display": "-webkit-box",
    "overflow": "hidden",
    "lineHeight": 1.5,
    "textOverflow": "ellipsis",
    "WebkitBoxOrient": "vertical",
    "WebkitLineClamp": 2
  },
  "uni-product-price": {
    "marginTop": "10upx",
    "fontSize": "28upx",
    "lineHeight": 1.5,
    "position": "relative"
  },
  "uni-product-price-original": {
    "color": "#e80080"
  },
  "uni-product-price-favour": {
    "color": "#888888",
    "textDecoration": "line-through",
    "marginLeft": "10upx"
  },
  "uni-product-tip": {
    "position": "absolute",
    "right": "10upx",
    "backgroundColor": "#ff3333",
    "color": "#ffffff",
    "paddingTop": 0,
    "paddingRight": "10upx",
    "paddingBottom": 0,
    "paddingLeft": "10upx",
    "borderRadius": "5upx"
  },
  "uni-timeline": {
    "marginTop": "35upx",
    "marginRight": 0,
    "marginBottom": "35upx",
    "marginLeft": 0,
    "display": "flex",
    "flexDirection": "column",
    "position": "relative"
  },
  "uni-timeline-item": {
    "display": "flex",
    "flexDirection": "row",
    "position": "relative",
    "paddingBottom": "20upx",
    "boxSizing": "border-box",
    "overflow": "hidden"
  },
  "uni-timeline-item-divider": {
    "position::before": "absolute",
    "left::before": "15upx",
    "width::before": "1upx",
    "height::before": 100,
    "content::before": "''",
    "background::before": "inherit",
    "position::before::after": "absolute",
    "left::before::after": "15upx",
    "width::before::after": "1upx",
    "height::before::after": 100,
    "content::before::after": "''",
    "background::before::after": "inherit",
    "bottom::before": 100,
    "top::after": 100
  },
  "uni-icon": {
    "fontFamily": "uniicons",
    "fontSize": "24",
    "fontWeight": "normal",
    "fontStyle": "normal",
    "lineHeight": 1,
    "display": "inline-block",
    "textDecoration": "none",
    "WebkitFontSmoothing": "antialiased"
  },
  "uni-icon-contact": {
    "content:before": "'\\e100'"
  },
  "uni-icon-person": {
    "content:before": "'\\e101'"
  },
  "uni-icon-personadd": {
    "content:before": "'\\e102'"
  },
  "uni-icon-contact-filled": {
    "content:before": "'\\e130'"
  },
  "uni-icon-person-filled": {
    "content:before": "'\\e131'"
  },
  "uni-icon-personadd-filled": {
    "content:before": "'\\e132'"
  },
  "uni-icon-phone": {
    "content:before": "'\\e200'"
  },
  "uni-icon-email": {
    "content:before": "'\\e201'"
  },
  "uni-icon-chatbubble": {
    "content:before": "'\\e202'"
  },
  "uni-icon-chatboxes": {
    "content:before": "'\\e203'"
  },
  "uni-icon-phone-filled": {
    "content:before": "'\\e230'"
  },
  "uni-icon-email-filled": {
    "content:before": "'\\e231'"
  },
  "uni-icon-chatbubble-filled": {
    "content:before": "'\\e232'"
  },
  "uni-icon-chatboxes-filled": {
    "content:before": "'\\e233'"
  },
  "uni-icon-weibo": {
    "content:before": "'\\e260'"
  },
  "uni-icon-weixin": {
    "content:before": "'\\e261'"
  },
  "uni-icon-pengyouquan": {
    "content:before": "'\\e262'"
  },
  "uni-icon-chat": {
    "content:before": "'\\e263'"
  },
  "uni-icon-qq": {
    "content:before": "'\\e264'"
  },
  "uni-icon-videocam": {
    "content:before": "'\\e300'"
  },
  "uni-icon-camera": {
    "content:before": "'\\e301'"
  },
  "uni-icon-mic": {
    "content:before": "'\\e302'"
  },
  "uni-icon-location": {
    "content:before": "'\\e303'"
  },
  "uni-icon-mic-filled": {
    "content:before": "'\\e332'"
  },
  "uni-icon-speech": {
    "content:before:before": "'\\e332'"
  },
  "uni-icon-location-filled": {
    "content:before": "'\\e333'"
  },
  "uni-icon-micoff": {
    "content:before": "'\\e360'"
  },
  "uni-icon-image": {
    "content:before": "'\\e363'"
  },
  "uni-icon-map": {
    "content:before": "'\\e364'"
  },
  "uni-icon-compose": {
    "content:before": "'\\e400'"
  },
  "uni-icon-trash": {
    "content:before": "'\\e401'"
  },
  "uni-icon-upload": {
    "content:before": "'\\e402'"
  },
  "uni-icon-download": {
    "content:before": "'\\e403'"
  },
  "uni-icon-close": {
    "content:before": "'\\e404'"
  },
  "uni-icon-redo": {
    "content:before": "'\\e405'"
  },
  "uni-icon-undo": {
    "content:before": "'\\e406'"
  },
  "uni-icon-refresh": {
    "content:before": "'\\e407'"
  },
  "uni-icon-star": {
    "content:before": "'\\e408'"
  },
  "uni-icon-plus": {
    "content:before": "'\\e409'"
  },
  "uni-icon-minus": {
    "content:before": "'\\e410'"
  },
  "uni-icon-circle": {
    "content:before": "'\\e411'"
  },
  "uni-icon-checkbox": {
    "content:before:before": "'\\e411'"
  },
  "uni-icon-close-filled": {
    "content:before": "'\\e434'"
  },
  "uni-icon-clear": {
    "content:before:before": "'\\e434'"
  },
  "uni-icon-refresh-filled": {
    "content:before": "'\\e437'"
  },
  "uni-icon-star-filled": {
    "content:before": "'\\e438'"
  },
  "uni-icon-plus-filled": {
    "content:before": "'\\e439'"
  },
  "uni-icon-minus-filled": {
    "content:before": "'\\e440'"
  },
  "uni-icon-circle-filled": {
    "content:before": "'\\e441'"
  },
  "uni-icon-checkbox-filled": {
    "content:before": "'\\e442'"
  },
  "uni-icon-closeempty": {
    "content:before": "'\\e460'"
  },
  "uni-icon-refreshempty": {
    "content:before": "'\\e461'"
  },
  "uni-icon-reload": {
    "content:before": "'\\e462'"
  },
  "uni-icon-starhalf": {
    "content:before": "'\\e463'"
  },
  "uni-icon-spinner": {
    "content:before": "'\\e464'"
  },
  "uni-icon-spinner-cycle": {
    "content:before": "'\\e465'"
  },
  "uni-icon-search": {
    "content:before": "'\\e466'"
  },
  "uni-icon-plusempty": {
    "content:before": "'\\e468'"
  },
  "uni-icon-forward": {
    "content:before": "'\\e470'"
  },
  "uni-icon-back": {
    "content:before": "'\\e471'"
  },
  "uni-icon-left-nav": {
    "content:before:before": "'\\e471'"
  },
  "uni-icon-checkmarkempty": {
    "content:before": "'\\e472'"
  },
  "uni-icon-home": {
    "content:before": "'\\e500'"
  },
  "uni-icon-navigate": {
    "content:before": "'\\e501'"
  },
  "uni-icon-gear": {
    "content:before": "'\\e502'"
  },
  "uni-icon-paperplane": {
    "content:before": "'\\e503'"
  },
  "uni-icon-info": {
    "content:before": "'\\e504'"
  },
  "uni-icon-help": {
    "content:before": "'\\e505'"
  },
  "uni-icon-locked": {
    "content:before": "'\\e506'"
  },
  "uni-icon-more": {
    "content:before": "'\\e507'"
  },
  "uni-icon-flag": {
    "content:before": "'\\e508'"
  },
  "uni-icon-home-filled": {
    "content:before": "'\\e530'"
  },
  "uni-icon-gear-filled": {
    "content:before": "'\\e532'"
  },
  "uni-icon-info-filled": {
    "content:before": "'\\e534'"
  },
  "uni-icon-help-filled": {
    "content:before": "'\\e535'"
  },
  "uni-icon-more-filled": {
    "content:before": "'\\e537'"
  },
  "uni-icon-settings": {
    "content:before": "'\\e560'"
  },
  "uni-icon-list": {
    "content:before": "'\\e562'"
  },
  "uni-icon-bars": {
    "content:before": "'\\e563'"
  },
  "uni-icon-loop": {
    "content:before": "'\\e565'"
  },
  "uni-icon-paperclip": {
    "content:before": "'\\e567'"
  },
  "uni-icon-eye": {
    "content:before": "'\\e568'"
  },
  "uni-icon-arrowup": {
    "content:before": "'\\e580'"
  },
  "uni-icon-arrowdown": {
    "content:before": "'\\e581'"
  },
  "uni-icon-arrowleft": {
    "content:before": "'\\e582'"
  },
  "uni-icon-arrowright": {
    "content:before": "'\\e583'"
  },
  "uni-icon-arrowthinup": {
    "content:before": "'\\e584'"
  },
  "uni-icon-arrowthindown": {
    "content:before": "'\\e585'"
  },
  "uni-icon-arrowthinleft": {
    "content:before": "'\\e586'"
  },
  "uni-icon-arrowthinright": {
    "content:before": "'\\e587'"
  },
  "uni-icon-pulldown": {
    "content:before": "'\\e588'"
  },
  "uni-icon-scan": {
    "content:before": "\"\\e612\""
  },
  "uni-divider": {
    "height": "110upx",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "position": "relative"
  },
  "uni-divider__content": {
    "fontSize": "28upx",
    "color": "#999999",
    "paddingTop": 0,
    "paddingRight": "20upx",
    "paddingBottom": 0,
    "paddingLeft": "20upx",
    "position": "relative",
    "zIndex": 101,
    "background": "#F4F5F6"
  },
  "uni-divider__line": {
    "backgroundColor": "#CCCCCC",
    "height": "1",
    "width": 100,
    "position": "absolute",
    "zIndex": 100,
    "top": 50,
    "left": 0,
    "transform": "translateY(50%)"
  },
  "m-icon": {
    "fontFamily": "uniicons",
    "fontSize": "24",
    "fontWeight": "normal",
    "fontStyle": "normal",
    "lineHeight": 1,
    "display": "inline-block",
    "textDecoration": "none",
    "WebkitFontSmoothing": "antialiased"
  },
  "m-icon-contact": {
    "content:before": "'\\e100'"
  },
  "m-icon-person": {
    "content:before": "'\\e101'"
  },
  "m-icon-personadd": {
    "content:before": "'\\e102'"
  },
  "m-icon-contact-filled": {
    "content:before": "'\\e130'"
  },
  "m-icon-person-filled": {
    "content:before": "'\\e131'"
  },
  "m-icon-personadd-filled": {
    "content:before": "'\\e132'"
  },
  "m-icon-phone": {
    "content:before": "'\\e200'"
  },
  "m-icon-email": {
    "content:before": "'\\e201'"
  },
  "m-icon-chatbubble": {
    "content:before": "'\\e202'"
  },
  "m-icon-chatboxes": {
    "content:before": "'\\e203'"
  },
  "m-icon-phone-filled": {
    "content:before": "'\\e230'"
  },
  "m-icon-email-filled": {
    "content:before": "'\\e231'"
  },
  "m-icon-chatbubble-filled": {
    "content:before": "'\\e232'"
  },
  "m-icon-chatboxes-filled": {
    "content:before": "'\\e233'"
  },
  "m-icon-weibo": {
    "content:before": "'\\e260'"
  },
  "m-icon-weixin": {
    "content:before": "'\\e261'"
  },
  "m-icon-pengyouquan": {
    "content:before": "'\\e262'"
  },
  "m-icon-chat": {
    "content:before": "'\\e263'"
  },
  "m-icon-qq": {
    "content:before": "'\\e264'"
  },
  "m-icon-videocam": {
    "content:before": "'\\e300'"
  },
  "m-icon-camera": {
    "content:before": "'\\e301'"
  },
  "m-icon-mic": {
    "content:before": "'\\e302'"
  },
  "m-icon-location": {
    "content:before": "'\\e303'"
  },
  "m-icon-mic-filled": {
    "content:before": "'\\e332'"
  },
  "m-icon-speech": {
    "content:before:before": "'\\e332'"
  },
  "m-icon-location-filled": {
    "content:before": "'\\e333'"
  },
  "m-icon-micoff": {
    "content:before": "'\\e360'"
  },
  "m-icon-image": {
    "content:before": "'\\e363'"
  },
  "m-icon-map": {
    "content:before": "'\\e364'"
  },
  "m-icon-compose": {
    "content:before": "'\\e400'"
  },
  "m-icon-trash": {
    "content:before": "'\\e401'"
  },
  "m-icon-upload": {
    "content:before": "'\\e402'"
  },
  "m-icon-download": {
    "content:before": "'\\e403'"
  },
  "m-icon-close": {
    "content:before": "'\\e404'"
  },
  "m-icon-redo": {
    "content:before": "'\\e405'"
  },
  "m-icon-undo": {
    "content:before": "'\\e406'"
  },
  "m-icon-refresh": {
    "content:before": "'\\e407'"
  },
  "m-icon-star": {
    "content:before": "'\\e408'"
  },
  "m-icon-plus": {
    "content:before": "'\\e409'"
  },
  "m-icon-minus": {
    "content:before": "'\\e410'"
  },
  "m-icon-circle": {
    "content:before": "'\\e411'"
  },
  "m-icon-checkbox": {
    "content:before:before": "'\\e411'"
  },
  "m-icon-close-filled": {
    "content:before": "'\\e434'"
  },
  "m-icon-clear": {
    "content:before:before": "'\\e434'"
  },
  "m-icon-refresh-filled": {
    "content:before": "'\\e437'"
  },
  "m-icon-star-filled": {
    "content:before": "'\\e438'"
  },
  "m-icon-plus-filled": {
    "content:before": "'\\e439'"
  },
  "m-icon-minus-filled": {
    "content:before": "'\\e440'"
  },
  "m-icon-circle-filled": {
    "content:before": "'\\e441'"
  },
  "m-icon-checkbox-filled": {
    "content:before": "'\\e442'"
  },
  "m-icon-closeempty": {
    "content:before": "'\\e460'"
  },
  "m-icon-refreshempty": {
    "content:before": "'\\e461'"
  },
  "m-icon-reload": {
    "content:before": "'\\e462'"
  },
  "m-icon-starhalf": {
    "content:before": "'\\e463'"
  },
  "m-icon-spinner": {
    "content:before": "'\\e464'"
  },
  "m-icon-spinner-cycle": {
    "content:before": "'\\e465'"
  },
  "m-icon-search": {
    "content:before": "'\\e466'"
  },
  "m-icon-plusempty": {
    "content:before": "'\\e468'"
  },
  "m-icon-forward": {
    "content:before": "'\\e470'"
  },
  "m-icon-back": {
    "content:before": "'\\e471'"
  },
  "m-icon-left-nav": {
    "content:before:before": "'\\e471'"
  },
  "m-icon-checkmarkempty": {
    "content:before": "'\\e472'"
  },
  "m-icon-home": {
    "content:before": "'\\e500'"
  },
  "m-icon-navigate": {
    "content:before": "'\\e501'"
  },
  "m-icon-gear": {
    "content:before": "'\\e502'"
  },
  "m-icon-paperplane": {
    "content:before": "'\\e503'"
  },
  "m-icon-info": {
    "content:before": "'\\e504'"
  },
  "m-icon-help": {
    "content:before": "'\\e505'"
  },
  "m-icon-locked": {
    "content:before": "'\\e506'"
  },
  "m-icon-more": {
    "content:before": "'\\e507'"
  },
  "m-icon-flag": {
    "content:before": "'\\e508'"
  },
  "m-icon-home-filled": {
    "content:before": "'\\e530'"
  },
  "m-icon-gear-filled": {
    "content:before": "'\\e532'"
  },
  "m-icon-info-filled": {
    "content:before": "'\\e534'"
  },
  "m-icon-help-filled": {
    "content:before": "'\\e535'"
  },
  "m-icon-more-filled": {
    "content:before": "'\\e537'"
  },
  "m-icon-settings": {
    "content:before": "'\\e560'"
  },
  "m-icon-list": {
    "content:before": "'\\e562'"
  },
  "m-icon-bars": {
    "content:before": "'\\e563'"
  },
  "m-icon-loop": {
    "content:before": "'\\e565'"
  },
  "m-icon-paperclip": {
    "content:before": "'\\e567'"
  },
  "m-icon-eye": {
    "content:before": "'\\e568'"
  },
  "m-icon-arrowup": {
    "content:before": "'\\e580'"
  },
  "m-icon-arrowdown": {
    "content:before": "'\\e581'"
  },
  "m-icon-arrowleft": {
    "content:before": "'\\e582'"
  },
  "m-icon-arrowright": {
    "content:before": "'\\e583'"
  },
  "m-icon-arrowthinup": {
    "content:before": "'\\e584'"
  },
  "m-icon-arrowthindown": {
    "content:before": "'\\e585'"
  },
  "m-icon-arrowthinleft": {
    "content:before": "'\\e586'"
  },
  "m-icon-arrowthinright": {
    "content:before": "'\\e587'"
  },
  "m-icon-pulldown": {
    "content:before": "'\\e588'"
  },
  "m-icon-scan": {
    "content:before": "\"\\e612\""
  },
  "content": {
    "display": "flex",
    "flex": 1,
    "flexDirection": "column",
    "backgroundColor": "#efeff4",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "input-group": {
    "backgroundColor": "#ffffff",
    "marginTop": "20",
    "position": "relative",
    "position::before": "absolute",
    "right::before": 0,
    "top::before": 0,
    "left::before": 0,
    "height::before": "1",
    "content::before": "''",
    "WebkitTransform::before": "scaleY(.5)",
    "transform::before": "scaleY(.5)",
    "backgroundColor::before": "#c8c7cc",
    "position::after": "absolute",
    "right::after": 0,
    "bottom::after": 0,
    "left::after": 0,
    "height::after": "1",
    "content::after": "''",
    "WebkitTransform::after": "scaleY(.5)",
    "transform::after": "scaleY(.5)",
    "backgroundColor::after": "#c8c7cc"
  },
  "input-row": {
    "display": "flex",
    "flexDirection": "row",
    "position": "relative",
    "fontSize": "18",
    "lineHeight": "40"
  },
  "btn-row": {
    "marginTop": "25",
    "paddingTop": "10",
    "paddingRight": "10",
    "paddingBottom": "10",
    "paddingLeft": "10"
  },
  "clear": {
    "clear": "both",
    "display": "block",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  }
}

/***/ }),
/* 4 */
/*!*********************************************************************************************!*\
  !*** /Users/shangmengliang/Documents/workspace/shortVideo/pages/main/main.nvue?mpType=page ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_nvue_vue_type_template_id_279e2088_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.nvue?vue&type=template&id=279e2088&scoped=true&mpType=page */ 5);\n/* harmony import */ var _main_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _main_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _main_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./main.nvue?vue&type=style&index=0&id=279e2088&scoped=true&lang=css&mpType=page */ 11).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./main.nvue?vue&type=style&index=0&id=279e2088&scoped=true&lang=css&mpType=page */ 11).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _main_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _main_nvue_vue_type_template_id_279e2088_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _main_nvue_vue_type_template_id_279e2088_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"279e2088\",\n  \"e5a71b8c\",\n  false,\n  _main_nvue_vue_type_template_id_279e2088_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/main/main.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDtBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLHlGQUFpRjtBQUNySSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMseUZBQWlGO0FBQzFJOztBQUVBOztBQUVBO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9tYWluLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjc5ZTIwODgmc2NvcGVkPXRydWUmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21haW4ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9tYWluLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL21haW4ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI3OWUyMDg4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL21haW4ubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI3OWUyMDg4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjc5ZTIwODhcIixcbiAgXCJlNWE3MWI4Y1wiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9tYWluL21haW4ubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!***************************************************************************************************************************************!*\
  !*** /Users/shangmengliang/Documents/workspace/shortVideo/pages/main/main.nvue?vue&type=template&id=279e2088&scoped=true&mpType=page ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_template_id_279e2088_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./main.nvue?vue&type=template&id=279e2088&scoped=true&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_template_id_279e2088_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_template_id_279e2088_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_template_id_279e2088_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_template_id_279e2088_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/shangmengliang/Documents/workspace/shortVideo/pages/main/main.nvue?vue&type=template&id=279e2088&scoped=true&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["page"] },
        [
          _c(
            "swiper",
            {
              staticClass: ["swiper"],
              attrs: { circular: _vm.circular, vertical: true },
              on: { change: _vm.onSwiperChange }
            },
            _vm._l(_vm.videoList, function(item) {
              return _c(
                "swiper-item",
                { key: item.id },
                [
                  _c("u-video", {
                    ref: item.id,
                    refInFor: true,
                    staticClass: ["video"],
                    attrs: {
                      id: item.id,
                      src: item.src,
                      controls: false,
                      loop: true,
                      showCenterPlayBtn: false
                    }
                  }),
                  _c(
                    "cover-view",
                    { staticClass: ["video_info"] },
                    [
                      _c("cover-image", {
                        staticClass: ["info_tx"],
                        attrs: {
                          src: "../../static/img/main/touxiang.png",
                          mode: "widthFix"
                        },
                        on: { click: _vm.goDetail }
                      }),
                      _c("cover-image", {
                        staticClass: ["info_like"],
                        attrs: {
                          src: "../../static/img/main/like.png",
                          mode: "widthFix"
                        }
                      }),
                      _c("u-text", { staticClass: ["info_count"] }, [
                        _vm._v("21312")
                      ])
                    ],
                    1
                  ),
                  _c("cover-view", { staticClass: ["video-msg"] }, [
                    _c(
                      "u-text",
                      {
                        staticClass: ["msg_header"],
                        on: {
                          click: function($event) {
                            _vm.showAd()
                          }
                        }
                      },
                      [_vm._v("@古风小姐姐")]
                    ),
                    _c("u-text", { staticClass: ["msg_cont"] }, [
                      _vm._v("等哈瞌睡的就啊上课接电话撒到家啊快乐")
                    ])
                  ])
                ],
                1
              )
            }),
            1
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!*********************************************************************************************************************!*\
  !*** /Users/shangmengliang/Documents/workspace/shortVideo/pages/main/main.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./main.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNqQixDQUFnQixna0JBQUcsRUFBQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21haW4ubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFpbi5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/shangmengliang/Documents/workspace/shortVideo/pages/main/main.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _ad = _interopRequireDefault(__webpack_require__(/*! ../../utils/ad.js */ 10));var _methods;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\nvar videoData = [{\n  src: 'https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4' },\n\n{\n  src: 'https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-02.mp4' },\n\n{\n  src: 'https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-03.mp4' },\n\n{\n  src: 'https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-01.mp4' },\n\n{\n  src: 'https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-02.mp4' },\n\n{\n  src: 'https://img-cdn-qiniu.dcloud.net.cn/hello-nvue-swiper-vertical-03.mp4' }];var _default =\n\n\n\n{\n  data: function data() {\n    return {\n      circular: true,\n      videoList: [{\n        id: \"video0\",\n        src: \"\",\n        img: \"\" },\n\n      {\n        id: \"video1\",\n        src: \"\",\n        img: \"\" },\n\n      {\n        id: \"video2\",\n        src: \"\",\n        img: \"\" }],\n\n\n      videoDataList: [],\n      adList: [],\n      adData: {} };\n\n  },\n  onLoad: function onLoad(e) {\n    this.showAd();\n  },\n  onReady: function onReady() {\n    this.init();\n    this.getData();\n\n    for (var i = 0; i < 4; i++) {\n      this.adList.push({\n        id: i,\n        adpid: \"1111111111\" });\n\n    }\n\n\n\n    this._adpid = 1507000689;\n  },\n  methods: (_methods = {\n    getAdData: function getAdData(e) {var _this = this;\n      // 仅APP平台支持\n      plus.ad.getAds({\n        adpid: '1111111111', // 替换为自己申请获取的广告位标识，此广告位标识仅在HBuilderX标准基座中有效，仅用于测试\n        count: 1, // 广告数量，默认 3\n        width: 300 // 根据宽度获取合适的广告(单位px)\n      },\n      function (res) {\n        _this.adData = res.ads[0];\n        __f__(\"log\", _this.adData, \" at pages/main/main.nvue:98\");\n      },\n      function (err) {\n        __f__(\"log\", err, \" at pages/main/main.nvue:101\");\n      });\n\n    },\n    init: function init() {\n      this._videoIndex = 0;\n      this._videoContextList = [];\n      for (var i = 0; i < this.videoList.length; i++) {\n        this._videoContextList.push(uni.createVideoContext('video' + i, this));\n      }\n      this._videoDataIndex = 0;\n    },\n    getData: function getData(e) {var _this2 = this;\n      this.videoDataList = videoData;\n      setTimeout(function () {\n        _this2.updateVideo(true);\n      }, 200);\n    },\n    onSwiperChange: function onSwiperChange(e) {var _this3 = this;\n      var currentIndex = e.detail.current;\n      if (currentIndex === this._videoIndex) {\n        return;\n      }\n\n      var isNext = false;\n      if (currentIndex === 0 && this._videoIndex === this.videoList.length - 1) {\n        isNext = true;\n      } else if (currentIndex === this.videoList.length - 1 && this._videoIndex === 0) {\n        isNext = false;\n      } else if (currentIndex > this._videoIndex) {\n        isNext = true;\n      }\n\n      if (isNext) {\n        this._videoDataIndex++;\n      } else {\n        this._videoDataIndex--;\n      }\n\n      if (this._videoDataIndex < 0) {\n        this._videoDataIndex = this.videoDataList.length - 1;\n      } else if (this._videoDataIndex >= this.videoDataList.length) {\n        this._videoDataIndex = 0;\n      }\n\n      this.circular = this._videoDataIndex != 0;\n\n      if (this._videoIndex >= 0) {\n        this._videoContextList[this._videoIndex].pause();\n        this._videoContextList[this._videoIndex].seek(0);\n      }\n\n      this._videoIndex = currentIndex;\n\n      setTimeout(function () {\n        _this3.updateVideo(isNext);\n      }, 200);\n    },\n    getNextIndex: function getNextIndex(isNext) {\n      var index = this._videoIndex + (isNext ? 1 : -1);\n      if (index < 0) {\n        return this.videoList.length - 1;\n      } else if (index >= this.videoList.length) {\n        return 0;\n      }\n      return index;\n    },\n    getNextDataIndex: function getNextDataIndex(isNext) {\n      var index = this._videoDataIndex + (isNext ? 1 : -1);\n      if (index < 0) {\n        return this.videoDataList.length - 1;\n      } else if (index >= this.videoDataList.length) {\n        return 0;\n      }\n      return index;\n    },\n    updateVideo: function updateVideo(isNext) {var _this4 = this;\n      this.$set(this.videoList[this._videoIndex], 'src', this.videoDataList[this._videoDataIndex].src);\n      this.$set(this.videoList[this.getNextIndex(isNext)], 'src', this.videoDataList[this.getNextDataIndex(isNext)].src);\n      setTimeout(function () {\n        _this4._videoContextList[_this4._videoIndex].play();\n      }, 200);\n      __f__(\"log\", \"v:\" + this._videoIndex + \" d:\" + this._videoDataIndex + \"; next v:\" + this.getNextIndex(\n      isNext) + \" next d:\" + this.getNextDataIndex(isNext), \" at pages/main/main.nvue:183\");\n    } }, _defineProperty(_methods, \"getAdData\",\n\n\n  function getAdData(e) {var _this5 = this;\n    // 仅APP平台支持\n    plus.ad.getAds({\n      adpid: '1111111111', // 替换为自己申请获取的广告位标识，此广告位标识仅在HBuilderX标准基座中有效，仅用于测试\n      count: 1, // 广告数量，默认 3\n      width: 300 // 根据宽度获取合适的广告(单位px)\n    },\n    function (res) {\n      _this5.adData = res.ads[0];\n      __f__(\"log\", _this5.adData, \" at pages/main/main.nvue:197\");\n    },\n    function (err) {\n      __f__(\"log\", err, \" at pages/main/main.nvue:200\");\n    });\n\n  }), _defineProperty(_methods, \"onload\", function onload(\n  e) {\n    __f__(\"log\", \"onload\", \" at pages/main/main.nvue:205\");\n  }), _defineProperty(_methods, \"onclose\", function onclose(\n  e) {\n    __f__(\"log\", \"onclose: \" + e.detail, \" at pages/main/main.nvue:208\");\n  }), _defineProperty(_methods, \"onerror\", function onerror(\n  e) {\n    __f__(\"log\", \"onerror: \" + e.detail.errCode + \" message:: \" + e.detail.errMsg, \" at pages/main/main.nvue:211\");\n  }), _defineProperty(_methods, \"ondownloadchange\", function ondownloadchange(\n  e) {\n    __f__(\"log\", \"downloadchanged: \" + JSON.stringify(e.detail), \" at pages/main/main.nvue:214\");\n  }), _defineProperty(_methods, \"showAd\", function showAd()\n\n  {\n    _ad.default.show(this._adpid, function (res) {\n      __f__(\"log\", \"onclose\", \" at pages/main/main.nvue:219\");\n      __f__(\"log\", res, \" at pages/main/main.nvue:220\");\n\n      // 用户点击了【关闭广告】按钮\n      if (res && res.isEnded) {\n        // 正常播放结束\n        __f__(\"log\", \"onClose \" + res.isEnded, \" at pages/main/main.nvue:225\");\n      } else {\n        // 播放中途退出\n        __f__(\"log\", \"onClose \" + res.isEnded, \" at pages/main/main.nvue:228\");\n      }\n\n      // 可选预加载下一条广告数据，减少加载等待时间，调用此 API 不会显示loading，不影响业务\n      // AD.load(this._adpid)\n    }, function (err) {\n      // 广告无法显示，输出错误信息，可以采集数据上报以便分析\n      __f__(\"log\", err, \" at pages/main/main.nvue:235\"); // {code: code, errMsg: message}\n    });\n  }), _defineProperty(_methods, \"goDetail\", function goDetail()\n\n\n  {\n    uni.navigateTo({\n      url: '../detail/detail' });\n\n  }), _methods),\n\n  onHide: function onHide() {\n    this._videoContextList[this._videoIndex].pause();\n    this._videoContextList[this._videoIndex].seek(0);\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbWFpbi9tYWluLm52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEsbUY7QUFDQTtBQUNBLDhFQURBOztBQUdBO0FBQ0EsOEVBREEsRUFIQTs7QUFNQTtBQUNBLDhFQURBLEVBTkE7O0FBU0E7QUFDQSw4RUFEQSxFQVRBOztBQVlBO0FBQ0EsOEVBREEsRUFaQTs7QUFlQTtBQUNBLDhFQURBLEVBZkEsRTs7OztBQW9CQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUE7QUFDQSxvQkFEQTtBQUVBLGVBRkE7QUFHQSxlQUhBOztBQUtBO0FBQ0Esb0JBREE7QUFFQSxlQUZBO0FBR0EsZUFIQSxFQUxBOztBQVVBO0FBQ0Esb0JBREE7QUFFQSxlQUZBO0FBR0EsZUFIQSxFQVZBLENBRkE7OztBQWtCQSx1QkFsQkE7QUFtQkEsZ0JBbkJBO0FBb0JBLGdCQXBCQTs7QUFzQkEsR0F4QkE7QUF5QkEsUUF6QkEsa0JBeUJBLENBekJBLEVBeUJBO0FBQ0E7QUFDQSxHQTNCQTtBQTRCQSxTQTVCQSxxQkE0QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQURBO0FBRUEsMkJBRkE7O0FBSUE7Ozs7QUFJQTtBQUNBLEdBMUNBO0FBMkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBREEsRUFDQTtBQUNBLGdCQUZBLEVBRUE7QUFDQSxrQkFIQSxDQUdBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQSxPQVJBO0FBU0E7QUFDQTtBQUNBLE9BWEE7O0FBYUEsS0FoQkE7QUFpQkEsUUFqQkEsa0JBaUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F4QkE7QUF5QkEsV0F6QkEsbUJBeUJBLENBekJBLEVBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQUVBLEdBRkE7QUFHQSxLQTlCQTtBQStCQSxrQkEvQkEsMEJBK0JBLENBL0JBLEVBK0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBLEtBdEVBO0FBdUVBLGdCQXZFQSx3QkF1RUEsTUF2RUEsRUF1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQS9FQTtBQWdGQSxvQkFoRkEsNEJBZ0ZBLE1BaEZBLEVBZ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F4RkE7QUF5RkEsZUF6RkEsdUJBeUZBLE1BekZBLEVBeUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsR0FGQTtBQUdBO0FBQ0EsWUFEQSxJQUNBLFVBREEsR0FDQSw2QkFEQTtBQUVBLEtBakdBOzs7QUFvR0E7QUFDQTtBQUNBO0FBQ0EseUJBREEsRUFDQTtBQUNBLGNBRkEsRUFFQTtBQUNBLGdCQUhBLENBR0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBLEtBUkE7QUFTQTtBQUNBO0FBQ0EsS0FYQTs7QUFhQSxHQW5IQTtBQW9IQSxHQXBIQSxFQW9IQTtBQUNBO0FBQ0EsR0F0SEE7QUF1SEEsR0F2SEEsRUF1SEE7QUFDQTtBQUNBLEdBekhBO0FBMEhBLEdBMUhBLEVBMEhBO0FBQ0E7QUFDQSxHQTVIQTtBQTZIQSxHQTdIQSxFQTZIQTtBQUNBO0FBQ0EsR0EvSEE7O0FBaUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQWZBLEVBZUE7QUFDQTtBQUNBLHdEQUZBLENBRUE7QUFDQSxLQWxCQTtBQW1CQSxHQXJKQTs7O0FBd0pBO0FBQ0E7QUFDQSw2QkFEQTs7QUFHQSxHQTVKQSxZQTNDQTs7QUF5TUEsUUF6TUEsb0JBeU1BO0FBQ0E7QUFDQTtBQUNBLEdBNU1BLEUiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInBhZ2VcIj5cclxuXHRcdDxzd2lwZXIgY2xhc3M9XCJzd2lwZXJcIiA6Y2lyY3VsYXI9XCJjaXJjdWxhclwiIDp2ZXJ0aWNhbD1cInRydWVcIiBAY2hhbmdlPVwib25Td2lwZXJDaGFuZ2VcIj5cclxuXHRcdFx0PHN3aXBlci1pdGVtIHYtZm9yPVwiaXRlbSBpbiB2aWRlb0xpc3RcIiA6a2V5PVwiaXRlbS5pZFwiPlxyXG5cdFx0XHRcdDx2aWRlbyBjbGFzcz1cInZpZGVvXCIgOmlkPVwiaXRlbS5pZFwiIDpyZWY9XCJpdGVtLmlkXCIgOnNyYz1cIml0ZW0uc3JjXCIgOmNvbnRyb2xzPVwiZmFsc2VcIiA6bG9vcD1cInRydWVcIlxyXG5cdFx0XHRcdCA6c2hvdy1jZW50ZXItcGxheS1idG49XCJmYWxzZVwiPjwvdmlkZW8+XHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJ2aWRlb19pbmZvXCI+XHJcblx0XHRcdFx0XHQ8Y292ZXItaW1hZ2UgY2xhc3M9XCJpbmZvX3R4XCIgQGNsaWNrPVwiZ29EZXRhaWxcIiBzcmM9XCIuLi8uLi9zdGF0aWMvaW1nL21haW4vdG91eGlhbmcucG5nXCIgbW9kZT1cIndpZHRoRml4XCI+PC9jb3Zlci1pbWFnZT5cclxuXHRcdFx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cImluZm9fbGlrZVwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWcvbWFpbi9saWtlLnBuZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiPjwvY292ZXItaW1hZ2U+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImluZm9fY291bnRcIj4yMTMxMjwvdGV4dD5cclxuXHRcdFx0XHQ8L2NvdmVyLXZpZXc+XHJcblx0XHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJ2aWRlby1tc2dcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibXNnX2hlYWRlclwiIEBjbGljaz1cInNob3dBZCgpXCI+QOWPpOmjjuWwj+WnkOWnkDwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibXNnX2NvbnRcIj7nrYnlk4jnnoznnaHnmoTlsLHllYrkuIror77mjqXnlLXor53mkpLliLDlrrbllYrlv6vkuZA8L3RleHQ+XHJcblx0XHRcdFx0PC9jb3Zlci12aWV3PlxyXG5cdFx0XHRcdDwhLS0gPHZpZXcgY2xhc3M9XCJhZC12aWV3XCI+XHJcblx0XHRcdFx0XHQ8YWQgYWRwaWQ9XCIxMTExMTExMTExXCIgQGxvYWQ9XCJvbmxvYWRcIiB0eXBlPVwidmlkZW9cIiBAY2xvc2U9XCJvbmNsb3NlXCIgQGVycm9yPVwib25lcnJvclwiIEBkb3dubG9hZGNoYW5nZT1cIm9uZG93bmxvYWRjaGFuZ2VcIj48L2FkPlxyXG5cdFx0XHRcdDwvdmlldz4gLS0+XHJcblx0XHRcdDwvc3dpcGVyLWl0ZW0+XHJcblx0XHQ8L3N3aXBlcj5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IEFEIGZyb20gJy4uLy4uL3V0aWxzL2FkLmpzJztcclxuXHRjb25zdCB2aWRlb0RhdGEgPSBbe1xyXG5cdFx0XHRzcmM6ICdodHRwczovL2ltZy1jZG4tcWluaXUuZGNsb3VkLm5ldC5jbi9oZWxsby1udnVlLXN3aXBlci12ZXJ0aWNhbC0wMS5tcDQnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRzcmM6ICdodHRwczovL2ltZy1jZG4tcWluaXUuZGNsb3VkLm5ldC5jbi9oZWxsby1udnVlLXN3aXBlci12ZXJ0aWNhbC0wMi5tcDQnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRzcmM6ICdodHRwczovL2ltZy1jZG4tcWluaXUuZGNsb3VkLm5ldC5jbi9oZWxsby1udnVlLXN3aXBlci12ZXJ0aWNhbC0wMy5tcDQnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRzcmM6ICdodHRwczovL2ltZy1jZG4tcWluaXUuZGNsb3VkLm5ldC5jbi9oZWxsby1udnVlLXN3aXBlci12ZXJ0aWNhbC0wMS5tcDQnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRzcmM6ICdodHRwczovL2ltZy1jZG4tcWluaXUuZGNsb3VkLm5ldC5jbi9oZWxsby1udnVlLXN3aXBlci12ZXJ0aWNhbC0wMi5tcDQnXHJcblx0XHR9LFxyXG5cdFx0e1xyXG5cdFx0XHRzcmM6ICdodHRwczovL2ltZy1jZG4tcWluaXUuZGNsb3VkLm5ldC5jbi9oZWxsby1udnVlLXN3aXBlci12ZXJ0aWNhbC0wMy5tcDQnXHJcblx0XHR9XHJcblx0XTtcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRjaXJjdWxhcjogdHJ1ZSxcclxuXHRcdFx0XHR2aWRlb0xpc3Q6IFt7XHJcblx0XHRcdFx0XHRcdGlkOiBcInZpZGVvMFwiLFxyXG5cdFx0XHRcdFx0XHRzcmM6IFwiXCIsXHJcblx0XHRcdFx0XHRcdGltZzogXCJcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0aWQ6IFwidmlkZW8xXCIsXHJcblx0XHRcdFx0XHRcdHNyYzogXCJcIixcclxuXHRcdFx0XHRcdFx0aW1nOiBcIlwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRpZDogXCJ2aWRlbzJcIixcclxuXHRcdFx0XHRcdFx0c3JjOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHRpbWc6IFwiXCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRdLFxyXG5cdFx0XHRcdHZpZGVvRGF0YUxpc3Q6IFtdLFxyXG5cdFx0XHRcdGFkTGlzdDogW10sXHJcblx0XHRcdFx0YWREYXRhOiB7fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKGUpIHtcclxuXHRcdFx0dGhpcy5zaG93QWQoKVxyXG5cdFx0fSxcclxuXHRcdG9uUmVhZHkoKSB7XHJcblx0XHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0XHR0aGlzLmdldERhdGEoKTtcclxuXHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcblx0XHRcdFx0dGhpcy5hZExpc3QucHVzaCh7XHJcblx0XHRcdFx0XHRpZDogaSxcclxuXHRcdFx0XHRcdGFkcGlkOiBcIjExMTExMTExMTFcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHJcblxyXG5cclxuXHRcdFx0dGhpcy5fYWRwaWQgPSAxNTA3MDAwNjg5XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRnZXRBZERhdGE6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHQvLyDku4VBUFDlubPlj7DmlK/mjIFcclxuXHRcdFx0XHRwbHVzLmFkLmdldEFkcyh7XHJcblx0XHRcdFx0XHRcdGFkcGlkOiAnMTExMTExMTExMScsIC8vIOabv+aNouS4uuiHquW3seeUs+ivt+iOt+WPlueahOW5v+WRiuS9jeagh+ivhu+8jOatpOW5v+WRiuS9jeagh+ivhuS7heWcqEhCdWlsZGVyWOagh+WHhuWfuuW6p+S4reacieaViO+8jOS7heeUqOS6jua1i+ivlVxyXG5cdFx0XHRcdFx0XHRjb3VudDogMSwgLy8g5bm/5ZGK5pWw6YeP77yM6buY6K6kIDNcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDMwMCAvLyDmoLnmja7lrr3luqbojrflj5blkIjpgILnmoTlub/lkYoo5Y2V5L2NcHgpXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0KHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFkRGF0YSA9IHJlcy5hZHNbMF07XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuYWREYXRhKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRpbml0KCkge1xyXG5cdFx0XHRcdHRoaXMuX3ZpZGVvSW5kZXggPSAwO1xyXG5cdFx0XHRcdHRoaXMuX3ZpZGVvQ29udGV4dExpc3QgPSBbXTtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudmlkZW9MaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHR0aGlzLl92aWRlb0NvbnRleHRMaXN0LnB1c2godW5pLmNyZWF0ZVZpZGVvQ29udGV4dCgndmlkZW8nICsgaSwgdGhpcykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLl92aWRlb0RhdGFJbmRleCA9IDA7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldERhdGEoZSkge1xyXG5cdFx0XHRcdHRoaXMudmlkZW9EYXRhTGlzdCA9IHZpZGVvRGF0YTtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMudXBkYXRlVmlkZW8odHJ1ZSk7XHJcblx0XHRcdFx0fSwgMjAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvblN3aXBlckNoYW5nZShlKSB7XHJcblx0XHRcdFx0bGV0IGN1cnJlbnRJbmRleCA9IGUuZGV0YWlsLmN1cnJlbnQ7XHJcblx0XHRcdFx0aWYgKGN1cnJlbnRJbmRleCA9PT0gdGhpcy5fdmlkZW9JbmRleCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0bGV0IGlzTmV4dCA9IGZhbHNlO1xyXG5cdFx0XHRcdGlmIChjdXJyZW50SW5kZXggPT09IDAgJiYgdGhpcy5fdmlkZW9JbmRleCA9PT0gdGhpcy52aWRlb0xpc3QubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdFx0aXNOZXh0ID0gdHJ1ZTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA9PT0gdGhpcy52aWRlb0xpc3QubGVuZ3RoIC0gMSAmJiB0aGlzLl92aWRlb0luZGV4ID09PSAwKSB7XHJcblx0XHRcdFx0XHRpc05leHQgPSBmYWxzZTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGN1cnJlbnRJbmRleCA+IHRoaXMuX3ZpZGVvSW5kZXgpIHtcclxuXHRcdFx0XHRcdGlzTmV4dCA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoaXNOZXh0KSB7XHJcblx0XHRcdFx0XHR0aGlzLl92aWRlb0RhdGFJbmRleCsrO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLl92aWRlb0RhdGFJbmRleC0tO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHRoaXMuX3ZpZGVvRGF0YUluZGV4IDwgMCkge1xyXG5cdFx0XHRcdFx0dGhpcy5fdmlkZW9EYXRhSW5kZXggPSB0aGlzLnZpZGVvRGF0YUxpc3QubGVuZ3RoIC0gMTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuX3ZpZGVvRGF0YUluZGV4ID49IHRoaXMudmlkZW9EYXRhTGlzdC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHRoaXMuX3ZpZGVvRGF0YUluZGV4ID0gMDtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuY2lyY3VsYXIgPSAodGhpcy5fdmlkZW9EYXRhSW5kZXggIT0gMCk7XHJcblxyXG5cdFx0XHRcdGlmICh0aGlzLl92aWRlb0luZGV4ID49IDApIHtcclxuXHRcdFx0XHRcdHRoaXMuX3ZpZGVvQ29udGV4dExpc3RbdGhpcy5fdmlkZW9JbmRleF0ucGF1c2UoKTtcclxuXHRcdFx0XHRcdHRoaXMuX3ZpZGVvQ29udGV4dExpc3RbdGhpcy5fdmlkZW9JbmRleF0uc2VlaygwKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuX3ZpZGVvSW5kZXggPSBjdXJyZW50SW5kZXg7XHJcblxyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy51cGRhdGVWaWRlbyhpc05leHQpO1xyXG5cdFx0XHRcdH0sIDIwMCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldE5leHRJbmRleChpc05leHQpIHtcclxuXHRcdFx0XHRsZXQgaW5kZXggPSB0aGlzLl92aWRlb0luZGV4ICsgKGlzTmV4dCA/IDEgOiAtMSk7XHJcblx0XHRcdFx0aWYgKGluZGV4IDwgMCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmlkZW9MaXN0Lmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbmRleCA+PSB0aGlzLnZpZGVvTGlzdC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gaW5kZXg7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldE5leHREYXRhSW5kZXgoaXNOZXh0KSB7XHJcblx0XHRcdFx0bGV0IGluZGV4ID0gdGhpcy5fdmlkZW9EYXRhSW5kZXggKyAoaXNOZXh0ID8gMSA6IC0xKTtcclxuXHRcdFx0XHRpZiAoaW5kZXggPCAwKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52aWRlb0RhdGFMaXN0Lmxlbmd0aCAtIDE7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChpbmRleCA+PSB0aGlzLnZpZGVvRGF0YUxpc3QubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGluZGV4O1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR1cGRhdGVWaWRlbyhpc05leHQpIHtcclxuXHRcdFx0XHR0aGlzLiRzZXQodGhpcy52aWRlb0xpc3RbdGhpcy5fdmlkZW9JbmRleF0sICdzcmMnLCB0aGlzLnZpZGVvRGF0YUxpc3RbdGhpcy5fdmlkZW9EYXRhSW5kZXhdLnNyYyk7XHJcblx0XHRcdFx0dGhpcy4kc2V0KHRoaXMudmlkZW9MaXN0W3RoaXMuZ2V0TmV4dEluZGV4KGlzTmV4dCldLCAnc3JjJywgdGhpcy52aWRlb0RhdGFMaXN0W3RoaXMuZ2V0TmV4dERhdGFJbmRleChpc05leHQpXS5zcmMpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5fdmlkZW9Db250ZXh0TGlzdFt0aGlzLl92aWRlb0luZGV4XS5wbGF5KCk7XHJcblx0XHRcdFx0fSwgMjAwKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInY6XCIgKyB0aGlzLl92aWRlb0luZGV4ICsgXCIgZDpcIiArIHRoaXMuX3ZpZGVvRGF0YUluZGV4ICsgXCI7IG5leHQgdjpcIiArIHRoaXMuZ2V0TmV4dEluZGV4KFxyXG5cdFx0XHRcdFx0aXNOZXh0KSArIFwiIG5leHQgZDpcIiArIHRoaXMuZ2V0TmV4dERhdGFJbmRleChpc05leHQpKTtcclxuXHRcdFx0fSxcclxuXHJcblxyXG5cdFx0XHRnZXRBZERhdGE6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHQvLyDku4VBUFDlubPlj7DmlK/mjIFcclxuXHRcdFx0XHRwbHVzLmFkLmdldEFkcyh7XHJcblx0XHRcdFx0XHRcdGFkcGlkOiAnMTExMTExMTExMScsIC8vIOabv+aNouS4uuiHquW3seeUs+ivt+iOt+WPlueahOW5v+WRiuS9jeagh+ivhu+8jOatpOW5v+WRiuS9jeagh+ivhuS7heWcqEhCdWlsZGVyWOagh+WHhuWfuuW6p+S4reacieaViO+8jOS7heeUqOS6jua1i+ivlVxyXG5cdFx0XHRcdFx0XHRjb3VudDogMSwgLy8g5bm/5ZGK5pWw6YeP77yM6buY6K6kIDNcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDMwMCAvLyDmoLnmja7lrr3luqbojrflj5blkIjpgILnmoTlub/lkYoo5Y2V5L2NcHgpXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0KHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFkRGF0YSA9IHJlcy5hZHNbMF07XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuYWREYXRhKTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbmxvYWQoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwib25sb2FkXCIpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbmNsb3NlKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIm9uY2xvc2U6IFwiICsgZS5kZXRhaWwpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbmVycm9yKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIm9uZXJyb3I6IFwiICsgZS5kZXRhaWwuZXJyQ29kZSArIFwiIG1lc3NhZ2U6OiBcIiArIGUuZGV0YWlsLmVyck1zZyk7XHJcblx0XHRcdH0sXHJcblx0XHRcdG9uZG93bmxvYWRjaGFuZ2UoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiZG93bmxvYWRjaGFuZ2VkOiBcIiArIEpTT04uc3RyaW5naWZ5KGUuZGV0YWlsKSk7XHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHRzaG93QWQoKSB7XHJcblx0XHRcdFx0QUQuc2hvdyh0aGlzLl9hZHBpZCwgKHJlcykgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCJvbmNsb3NlXCIpXHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblxyXG5cdFx0XHRcdFx0Ly8g55So5oi354K55Ye75LqG44CQ5YWz6Zet5bm/5ZGK44CR5oyJ6ZKuXHJcblx0XHRcdFx0XHRpZiAocmVzICYmIHJlcy5pc0VuZGVkKSB7XHJcblx0XHRcdFx0XHRcdC8vIOato+W4uOaSreaUvue7k+adn1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIm9uQ2xvc2UgXCIgKyByZXMuaXNFbmRlZCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQvLyDmkq3mlL7kuK3pgJTpgIDlh7pcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJvbkNsb3NlIFwiICsgcmVzLmlzRW5kZWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIOWPr+mAiemihOWKoOi9veS4i+S4gOadoeW5v+WRiuaVsOaNru+8jOWHj+WwkeWKoOi9veetieW+heaXtumXtO+8jOiwg+eUqOatpCBBUEkg5LiN5Lya5pi+56S6bG9hZGluZ++8jOS4jeW9seWTjeS4muWKoVxyXG5cdFx0XHRcdFx0Ly8gQUQubG9hZCh0aGlzLl9hZHBpZClcclxuXHRcdFx0XHR9LCAoZXJyKSA9PiB7XHJcblx0XHRcdFx0XHQvLyDlub/lkYrml6Dms5XmmL7npLrvvIzovpPlh7rplJnor6/kv6Hmga/vvIzlj6/ku6Xph4fpm4bmlbDmja7kuIrmiqXku6Xkvr/liIbmnpBcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycikgLy8ge2NvZGU6IGNvZGUsIGVyck1zZzogbWVzc2FnZX1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Ly8g6Lez6L2s5Yiw6K+m57uG6aG1XHJcblx0XHRcdGdvRGV0YWlsKCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogJy4uL2RldGFpbC9kZXRhaWwnXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uSGlkZSgpIHtcclxuXHRcdFx0dGhpcy5fdmlkZW9Db250ZXh0TGlzdFt0aGlzLl92aWRlb0luZGV4XS5wYXVzZSgpO1xyXG5cdFx0XHR0aGlzLl92aWRlb0NvbnRleHRMaXN0W3RoaXMuX3ZpZGVvSW5kZXhdLnNlZWsoMCk7XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LyogI2lmbmRlZiBBUFAtUExVUyAqL1xyXG5cdHBhZ2Uge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtaW4taGVpZ2h0OiAxMDAlO1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblxyXG5cdC5wYWdlIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdH1cclxuXHJcblx0LnN3aXBlciB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHJcblx0LnN3aXBlci1pdGVtIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0fVxyXG5cclxuXHQudmlkZW8ge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblx0fVxyXG5cclxuXHQudW5pLXZpZGVvLWNvbnRhaW5lciB7fVxyXG5cclxuXHQudmlkZW9faW5mbyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDI0NnVweDtcclxuXHRcdHJpZ2h0OiAzMnVweDtcclxuXHRcdHdpZHRoOiA4MHVweDtcclxuXHRcdHotaW5kZXg6IDk5OTk5O1xyXG5cdH1cclxuXHJcblx0LmluZm9fdHgge1xyXG5cdFx0d2lkdGg6IDgwdXB4O1xyXG5cdFx0aGVpZ2h0OiA4MHVweDtcclxuXHRcdGJvcmRlci13aWR0aDogMnB4O1xyXG5cdFx0Ym9yZGVyLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci1jb2xvcjogI2ZmZjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDQwdXB4O1xyXG5cdH1cclxuXHJcblx0LmluZm9fbGlrZSB7XHJcblx0XHR3aWR0aDogNjB1cHg7XHJcblx0XHRoZWlnaHQ6IDYwdXB4O1xyXG5cdFx0bWFyZ2luLXRvcDogNDB1cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDEwdXB4O1xyXG5cdH1cclxuXHJcblx0LmluZm9fY291bnQge1xyXG5cdFx0Zm9udC1zaXplOiAyNnVweDtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXRvcDogNXVweDtcclxuXHR9XHJcblxyXG5cdC52aWRlby1tc2cge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMTB1cHg7XHJcblx0XHRib3R0b206IDMwdXB4O1xyXG5cdH1cclxuXHJcblx0Lm1zZ19oZWFkZXIge1xyXG5cdFx0Zm9udC1zaXplOiAzNnVweDtcclxuXHRcdGNvbG9yOiAjZmZmO1xyXG5cdH1cclxuXHJcblx0Lm1zZ19jb250IHtcclxuXHRcdGZvbnQtc2l6ZTogMjh1cHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdG1hcmdpbi10b3A6IDE2dXB4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!************************************************************************!*\
  !*** /Users/shangmengliang/Documents/workspace/shortVideo/utils/ad.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} // ad.js\nvar AdHelper = /*#__PURE__*/function () {\n\n  function AdHelper() {_classCallCheck(this, AdHelper);\n    this._ads = {};\n  }_createClass(AdHelper, [{ key: \"load\", value: function load(\n\n    adpid, onload, onerror) {\n      if (!adpid || this.isBusy(adpid)) {\n        return;\n      }\n\n      this.get(adpid).load(onload, onerror);\n    } }, { key: \"show\", value: function show(\n\n    adpid, onsuccess, onfail) {\n      if (!adpid || this.isBusy(adpid)) {\n        return;\n      }\n\n      var ad = this.get(adpid);\n\n      uni.showLoading({\n        mask: true });\n\n\n      ad.load(function () {\n        uni.hideLoading();\n        ad.show(function (e) {\n          onsuccess && onsuccess(e);\n          // 关闭视频\n        });\n      }, function (err) {\n        uni.hideLoading();\n        onfail && onfail(err);\n      });\n    } }, { key: \"isBusy\", value: function isBusy(\n\n    adpid) {\n      return this._ads[adpid] && this._ads[adpid].isLoading;\n    } }, { key: \"get\", value: function get(\n\n    adpid) {\n      if (!this._ads[adpid]) {\n        this._ads[adpid] = new RewardedVideo({\n          adpid: adpid });\n\n      }\n\n      return this._ads[adpid];\n    } }]);return AdHelper;}();\n\n\nvar eventNames = [\n'load',\n'close',\n'verify',\n'error'];\n\n\nvar EXPIRED_TIME = 1000 * 60 * 30;\nvar ProviderType = {\n  CSJ: 'csj',\n  GDT: 'gdt' };\n\n\nvar RETRY_COUNT = 1;var\n\nRewardedVideo = /*#__PURE__*/function () {\n  function RewardedVideo() {var _this = this;var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, RewardedVideo);\n    this._isLoad = false;\n    this._isLoading = false;\n    this._lastLoadTime = 0;\n    this._lastError = null;\n    this._retryCount = 0;\n\n    this._loadCallback = null;\n    this._closeCallback = null;\n    this._errorCallback = null;\n\n    var rewardAd = this._rewardAd = plus.ad.createRewardedVideoAd(options);\n    rewardAd.onLoad(function (e) {\n      _this._isLoading = false;\n      _this._isLoad = true;\n      _this._lastLoadTime = Date.now();\n\n      _this.onLoad();\n    });\n    rewardAd.onClose(function (e) {\n      _this._isLoad = false;\n      _this.onClose(e);\n    });\n    rewardAd.onVerify(function (e) {\n      // e.isValid\n    });\n    rewardAd.onError(function (_ref)\n\n\n    {var code = _ref.code,message = _ref.message;\n      _this._isLoading = false;\n      var data = {\n        code: code,\n        errMsg: message };\n\n\n      if (code === -5008) {\n        _this._loadAd();\n        return;\n      }\n\n      if (_this._retryCount < RETRY_COUNT) {\n        _this._retryCount += 1;\n        _this._loadAd();\n        return;\n      }\n\n      _this._lastError = data;\n      _this.onError(data);\n    });\n  }_createClass(RewardedVideo, [{ key: \"getProvider\", value: function getProvider()\n\n\n\n\n\n\n\n\n\n    {\n      return this._rewardAd.getProvider();\n    } }, { key: \"load\", value: function load(\n\n    onload, onerror) {\n      this._loadCallback = onload;\n      this._errorCallback = onerror;\n\n      if (this._isLoading) {\n        return;\n      }\n\n      if (this._isLoad) {\n        this.onLoad();\n        return;\n      }\n\n      this._retryCount = 0;\n\n      this._loadAd();\n    } }, { key: \"show\", value: function show(\n\n    onclose) {\n      this._closeCallback = onclose;\n\n      if (this._isLoading || !this._isLoad) {\n        return;\n      }\n\n      if (this._lastError !== null) {\n        this.onError(this._lastError);\n        return;\n      }\n\n      var provider = this.getProvider();\n      if (provider === ProviderType.CSJ && this.isExpired) {\n        this._loadAd();\n        return;\n      }\n\n      this._rewardAd.show();\n    } }, { key: \"onLoad\", value: function onLoad(\n\n    e) {\n      if (this._loadCallback != null) {\n        this._loadCallback();\n      }\n    } }, { key: \"onClose\", value: function onClose(\n\n    e) {\n      if (this._closeCallback != null) {\n        this._closeCallback({\n          isEnded: e.isEnded });\n\n      }\n    } }, { key: \"onError\", value: function onError(\n\n    e) {\n      if (this._errorCallback != null) {\n        this._errorCallback(e);\n      }\n    } }, { key: \"destroy\", value: function destroy()\n\n    {\n      this._rewardAd.destroy();\n    } }, { key: \"_loadAd\", value: function _loadAd()\n\n    {\n      this._isLoad = false;\n      this._isLoading = true;\n      this._lastError = null;\n      this._rewardAd.load();\n    } }, { key: \"isExpired\", get: function get() {return this._lastLoadTime !== 0 && Math.abs(Date.now() - this._lastLoadTime) > EXPIRED_TIME;} }, { key: \"isLoading\", get: function get() {return this._isLoading;} }]);return RewardedVideo;}();var _default =\n\n\nnew AdHelper();exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbHMvYWQuanMiXSwibmFtZXMiOlsiQWRIZWxwZXIiLCJfYWRzIiwiYWRwaWQiLCJvbmxvYWQiLCJvbmVycm9yIiwiaXNCdXN5IiwiZ2V0IiwibG9hZCIsIm9uc3VjY2VzcyIsIm9uZmFpbCIsImFkIiwidW5pIiwic2hvd0xvYWRpbmciLCJtYXNrIiwiaGlkZUxvYWRpbmciLCJzaG93IiwiZSIsImVyciIsImlzTG9hZGluZyIsIlJld2FyZGVkVmlkZW8iLCJldmVudE5hbWVzIiwiRVhQSVJFRF9USU1FIiwiUHJvdmlkZXJUeXBlIiwiQ1NKIiwiR0RUIiwiUkVUUllfQ09VTlQiLCJvcHRpb25zIiwiX2lzTG9hZCIsIl9pc0xvYWRpbmciLCJfbGFzdExvYWRUaW1lIiwiX2xhc3RFcnJvciIsIl9yZXRyeUNvdW50IiwiX2xvYWRDYWxsYmFjayIsIl9jbG9zZUNhbGxiYWNrIiwiX2Vycm9yQ2FsbGJhY2siLCJyZXdhcmRBZCIsIl9yZXdhcmRBZCIsInBsdXMiLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJvbkxvYWQiLCJEYXRlIiwibm93Iiwib25DbG9zZSIsIm9uVmVyaWZ5Iiwib25FcnJvciIsImNvZGUiLCJtZXNzYWdlIiwiZGF0YSIsImVyck1zZyIsIl9sb2FkQWQiLCJnZXRQcm92aWRlciIsIm9uY2xvc2UiLCJwcm92aWRlciIsImlzRXhwaXJlZCIsImlzRW5kZWQiLCJkZXN0cm95IiwiTWF0aCIsImFicyJdLCJtYXBwaW5ncyI6InF2QkFBQTtJQUNNQSxROztBQUVKLHNCQUFjO0FBQ1osU0FBS0MsSUFBTCxHQUFZLEVBQVo7QUFDRCxHOztBQUVJQyxTLEVBQU9DLE0sRUFBUUMsTyxFQUFTO0FBQzNCLFVBQUksQ0FBQ0YsS0FBRCxJQUFVLEtBQUtHLE1BQUwsQ0FBWUgsS0FBWixDQUFkLEVBQWtDO0FBQ2hDO0FBQ0Q7O0FBRUQsV0FBS0ksR0FBTCxDQUFTSixLQUFULEVBQWdCSyxJQUFoQixDQUFxQkosTUFBckIsRUFBNkJDLE9BQTdCO0FBQ0QsSzs7QUFFSUYsUyxFQUFPTSxTLEVBQVdDLE0sRUFBUTtBQUM3QixVQUFJLENBQUNQLEtBQUQsSUFBVSxLQUFLRyxNQUFMLENBQVlILEtBQVosQ0FBZCxFQUFrQztBQUNoQztBQUNEOztBQUVELFVBQUlRLEVBQUUsR0FBRyxLQUFLSixHQUFMLENBQVNKLEtBQVQsQ0FBVDs7QUFFQVMsU0FBRyxDQUFDQyxXQUFKLENBQWdCO0FBQ2RDLFlBQUksRUFBRSxJQURRLEVBQWhCOzs7QUFJQUgsUUFBRSxDQUFDSCxJQUFILENBQVEsWUFBTTtBQUNaSSxXQUFHLENBQUNHLFdBQUo7QUFDQUosVUFBRSxDQUFDSyxJQUFILENBQVEsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2JSLG1CQUFTLElBQUlBLFNBQVMsQ0FBQ1EsQ0FBRCxDQUF0QjtBQUNBO0FBQ0QsU0FIRDtBQUlELE9BTkQsRUFNRyxVQUFDQyxHQUFELEVBQVM7QUFDVk4sV0FBRyxDQUFDRyxXQUFKO0FBQ0FMLGNBQU0sSUFBSUEsTUFBTSxDQUFDUSxHQUFELENBQWhCO0FBQ0QsT0FURDtBQVVELEs7O0FBRU1mLFMsRUFBTztBQUNaLGFBQVEsS0FBS0QsSUFBTCxDQUFVQyxLQUFWLEtBQW9CLEtBQUtELElBQUwsQ0FBVUMsS0FBVixFQUFpQmdCLFNBQTdDO0FBQ0QsSzs7QUFFR2hCLFMsRUFBTztBQUNULFVBQUksQ0FBQyxLQUFLRCxJQUFMLENBQVVDLEtBQVYsQ0FBTCxFQUF1QjtBQUNyQixhQUFLRCxJQUFMLENBQVVDLEtBQVYsSUFBbUIsSUFBSWlCLGFBQUosQ0FBa0I7QUFDbkNqQixlQUFLLEVBQUVBLEtBRDRCLEVBQWxCLENBQW5COztBQUdEOztBQUVELGFBQU8sS0FBS0QsSUFBTCxDQUFVQyxLQUFWLENBQVA7QUFDRCxLOzs7QUFHSCxJQUFNa0IsVUFBVSxHQUFHO0FBQ2pCLE1BRGlCO0FBRWpCLE9BRmlCO0FBR2pCLFFBSGlCO0FBSWpCLE9BSmlCLENBQW5COzs7QUFPQSxJQUFNQyxZQUFZLEdBQUcsT0FBTyxFQUFQLEdBQVksRUFBakM7QUFDQSxJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLEtBQUcsRUFBRSxLQURjO0FBRW5CQyxLQUFHLEVBQUUsS0FGYyxFQUFyQjs7O0FBS0EsSUFBTUMsV0FBVyxHQUFHLENBQXBCLEM7O0FBRU1OLGE7QUFDSiwyQkFBMEIsc0JBQWRPLE9BQWMsdUVBQUosRUFBSTtBQUN4QixTQUFLQyxPQUFMLEdBQWUsS0FBZjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7O0FBRUEsU0FBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLElBQXRCOztBQUVBLFFBQU1DLFFBQVEsR0FBRyxLQUFLQyxTQUFMLEdBQWlCQyxJQUFJLENBQUMzQixFQUFMLENBQVE0QixxQkFBUixDQUE4QlosT0FBOUIsQ0FBbEM7QUFDQVMsWUFBUSxDQUFDSSxNQUFULENBQWdCLFVBQUN2QixDQUFELEVBQU87QUFDckIsV0FBSSxDQUFDWSxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsV0FBSSxDQUFDRCxPQUFMLEdBQWUsSUFBZjtBQUNBLFdBQUksQ0FBQ0UsYUFBTCxHQUFxQlcsSUFBSSxDQUFDQyxHQUFMLEVBQXJCOztBQUVBLFdBQUksQ0FBQ0YsTUFBTDtBQUNELEtBTkQ7QUFPQUosWUFBUSxDQUFDTyxPQUFULENBQWlCLFVBQUMxQixDQUFELEVBQU87QUFDdEIsV0FBSSxDQUFDVyxPQUFMLEdBQWUsS0FBZjtBQUNBLFdBQUksQ0FBQ2UsT0FBTCxDQUFhMUIsQ0FBYjtBQUNELEtBSEQ7QUFJQW1CLFlBQVEsQ0FBQ1EsUUFBVCxDQUFrQixVQUFDM0IsQ0FBRCxFQUFPO0FBQ3ZCO0FBQ0QsS0FGRDtBQUdBbUIsWUFBUSxDQUFDUyxPQUFULENBQWlCOzs7QUFHWCxTQUZKQyxJQUVJLFFBRkpBLElBRUksQ0FESkMsT0FDSSxRQURKQSxPQUNJO0FBQ0osV0FBSSxDQUFDbEIsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFVBQU1tQixJQUFJLEdBQUc7QUFDWEYsWUFBSSxFQUFFQSxJQURLO0FBRVhHLGNBQU0sRUFBRUYsT0FGRyxFQUFiOzs7QUFLQSxVQUFJRCxJQUFJLEtBQUssQ0FBQyxJQUFkLEVBQW9CO0FBQ2xCLGFBQUksQ0FBQ0ksT0FBTDtBQUNBO0FBQ0Q7O0FBRUQsVUFBSSxLQUFJLENBQUNsQixXQUFMLEdBQW1CTixXQUF2QixFQUFvQztBQUNsQyxhQUFJLENBQUNNLFdBQUwsSUFBb0IsQ0FBcEI7QUFDQSxhQUFJLENBQUNrQixPQUFMO0FBQ0E7QUFDRDs7QUFFRCxXQUFJLENBQUNuQixVQUFMLEdBQWtCaUIsSUFBbEI7QUFDQSxXQUFJLENBQUNILE9BQUwsQ0FBYUcsSUFBYjtBQUNELEtBdkJEO0FBd0JELEc7Ozs7Ozs7Ozs7QUFVYTtBQUNaLGFBQU8sS0FBS1gsU0FBTCxDQUFlYyxXQUFmLEVBQVA7QUFDRCxLOztBQUVJL0MsVSxFQUFRQyxPLEVBQVM7QUFDcEIsV0FBSzRCLGFBQUwsR0FBcUI3QixNQUFyQjtBQUNBLFdBQUsrQixjQUFMLEdBQXNCOUIsT0FBdEI7O0FBRUEsVUFBSSxLQUFLd0IsVUFBVCxFQUFxQjtBQUNuQjtBQUNEOztBQUVELFVBQUksS0FBS0QsT0FBVCxFQUFrQjtBQUNoQixhQUFLWSxNQUFMO0FBQ0E7QUFDRDs7QUFFRCxXQUFLUixXQUFMLEdBQW1CLENBQW5COztBQUVBLFdBQUtrQixPQUFMO0FBQ0QsSzs7QUFFSUUsVyxFQUFTO0FBQ1osV0FBS2xCLGNBQUwsR0FBc0JrQixPQUF0Qjs7QUFFQSxVQUFJLEtBQUt2QixVQUFMLElBQW1CLENBQUMsS0FBS0QsT0FBN0IsRUFBc0M7QUFDcEM7QUFDRDs7QUFFRCxVQUFJLEtBQUtHLFVBQUwsS0FBb0IsSUFBeEIsRUFBOEI7QUFDNUIsYUFBS2MsT0FBTCxDQUFhLEtBQUtkLFVBQWxCO0FBQ0E7QUFDRDs7QUFFRCxVQUFNc0IsUUFBUSxHQUFHLEtBQUtGLFdBQUwsRUFBakI7QUFDQSxVQUFJRSxRQUFRLEtBQUs5QixZQUFZLENBQUNDLEdBQTFCLElBQWlDLEtBQUs4QixTQUExQyxFQUFxRDtBQUNuRCxhQUFLSixPQUFMO0FBQ0E7QUFDRDs7QUFFRCxXQUFLYixTQUFMLENBQWVyQixJQUFmO0FBQ0QsSzs7QUFFTUMsSyxFQUFHO0FBQ1IsVUFBSSxLQUFLZ0IsYUFBTCxJQUFzQixJQUExQixFQUFnQztBQUM5QixhQUFLQSxhQUFMO0FBQ0Q7QUFDRixLOztBQUVPaEIsSyxFQUFHO0FBQ1QsVUFBSSxLQUFLaUIsY0FBTCxJQUF1QixJQUEzQixFQUFpQztBQUMvQixhQUFLQSxjQUFMLENBQW9CO0FBQ2xCcUIsaUJBQU8sRUFBRXRDLENBQUMsQ0FBQ3NDLE9BRE8sRUFBcEI7O0FBR0Q7QUFDRixLOztBQUVPdEMsSyxFQUFHO0FBQ1QsVUFBSSxLQUFLa0IsY0FBTCxJQUF1QixJQUEzQixFQUFpQztBQUMvQixhQUFLQSxjQUFMLENBQW9CbEIsQ0FBcEI7QUFDRDtBQUNGLEs7O0FBRVM7QUFDUixXQUFLb0IsU0FBTCxDQUFlbUIsT0FBZjtBQUNELEs7O0FBRVM7QUFDUixXQUFLNUIsT0FBTCxHQUFlLEtBQWY7QUFDQSxXQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsV0FBS0UsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUtNLFNBQUwsQ0FBZTdCLElBQWY7QUFDRCxLLDRDQWhGZSxDQUNkLE9BQVEsS0FBS3NCLGFBQUwsS0FBdUIsQ0FBdkIsSUFBNkIyQixJQUFJLENBQUNDLEdBQUwsQ0FBU2pCLElBQUksQ0FBQ0MsR0FBTCxLQUFhLEtBQUtaLGFBQTNCLElBQTRDUixZQUFqRixDQUNELEMsNENBRWUsQ0FDZCxPQUFPLEtBQUtPLFVBQVosQ0FDRCxDOzs7QUE2RVksSUFBSTVCLFFBQUosRSIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFkLmpzXG5jbGFzcyBBZEhlbHBlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fYWRzID0ge31cbiAgfVxuXG4gIGxvYWQoYWRwaWQsIG9ubG9hZCwgb25lcnJvcikge1xuICAgIGlmICghYWRwaWQgfHwgdGhpcy5pc0J1c3koYWRwaWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmdldChhZHBpZCkubG9hZChvbmxvYWQsIG9uZXJyb3IpXG4gIH1cblxuICBzaG93KGFkcGlkLCBvbnN1Y2Nlc3MsIG9uZmFpbCkge1xuICAgIGlmICghYWRwaWQgfHwgdGhpcy5pc0J1c3koYWRwaWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB2YXIgYWQgPSB0aGlzLmdldChhZHBpZClcblxuICAgIHVuaS5zaG93TG9hZGluZyh7XG4gICAgICBtYXNrOiB0cnVlXG4gICAgfSlcblxuICAgIGFkLmxvYWQoKCkgPT4ge1xuICAgICAgdW5pLmhpZGVMb2FkaW5nKClcbiAgICAgIGFkLnNob3coKGUpID0+IHtcbiAgICAgICAgb25zdWNjZXNzICYmIG9uc3VjY2VzcyhlKVxuICAgICAgICAvLyDlhbPpl63op4bpopFcbiAgICAgIH0pXG4gICAgfSwgKGVycikgPT4ge1xuICAgICAgdW5pLmhpZGVMb2FkaW5nKClcbiAgICAgIG9uZmFpbCAmJiBvbmZhaWwoZXJyKVxuICAgIH0pXG4gIH1cblxuICBpc0J1c3koYWRwaWQpIHtcbiAgICByZXR1cm4gKHRoaXMuX2Fkc1thZHBpZF0gJiYgdGhpcy5fYWRzW2FkcGlkXS5pc0xvYWRpbmcpXG4gIH1cblxuICBnZXQoYWRwaWQpIHtcbiAgICBpZiAoIXRoaXMuX2Fkc1thZHBpZF0pIHtcbiAgICAgIHRoaXMuX2Fkc1thZHBpZF0gPSBuZXcgUmV3YXJkZWRWaWRlbyh7XG4gICAgICAgIGFkcGlkOiBhZHBpZFxuICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fYWRzW2FkcGlkXVxuICB9XG59XG5cbmNvbnN0IGV2ZW50TmFtZXMgPSBbXG4gICdsb2FkJyxcbiAgJ2Nsb3NlJyxcbiAgJ3ZlcmlmeScsXG4gICdlcnJvcidcbl1cblxuY29uc3QgRVhQSVJFRF9USU1FID0gMTAwMCAqIDYwICogMzBcbmNvbnN0IFByb3ZpZGVyVHlwZSA9IHtcbiAgQ1NKOiAnY3NqJyxcbiAgR0RUOiAnZ2R0J1xufVxuXG5jb25zdCBSRVRSWV9DT1VOVCA9IDFcblxuY2xhc3MgUmV3YXJkZWRWaWRlbyB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuX2lzTG9hZCA9IGZhbHNlXG4gICAgdGhpcy5faXNMb2FkaW5nID0gZmFsc2VcbiAgICB0aGlzLl9sYXN0TG9hZFRpbWUgPSAwXG4gICAgdGhpcy5fbGFzdEVycm9yID0gbnVsbFxuICAgIHRoaXMuX3JldHJ5Q291bnQgPSAwXG5cbiAgICB0aGlzLl9sb2FkQ2FsbGJhY2sgPSBudWxsXG4gICAgdGhpcy5fY2xvc2VDYWxsYmFjayA9IG51bGxcbiAgICB0aGlzLl9lcnJvckNhbGxiYWNrID0gbnVsbFxuXG4gICAgY29uc3QgcmV3YXJkQWQgPSB0aGlzLl9yZXdhcmRBZCA9IHBsdXMuYWQuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKG9wdGlvbnMpXG4gICAgcmV3YXJkQWQub25Mb2FkKChlKSA9PiB7XG4gICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZVxuICAgICAgdGhpcy5faXNMb2FkID0gdHJ1ZVxuICAgICAgdGhpcy5fbGFzdExvYWRUaW1lID0gRGF0ZS5ub3coKVxuXG4gICAgICB0aGlzLm9uTG9hZCgpXG4gICAgfSlcbiAgICByZXdhcmRBZC5vbkNsb3NlKChlKSA9PiB7XG4gICAgICB0aGlzLl9pc0xvYWQgPSBmYWxzZVxuICAgICAgdGhpcy5vbkNsb3NlKGUpXG4gICAgfSlcbiAgICByZXdhcmRBZC5vblZlcmlmeSgoZSkgPT4ge1xuICAgICAgLy8gZS5pc1ZhbGlkXG4gICAgfSlcbiAgICByZXdhcmRBZC5vbkVycm9yKCh7XG4gICAgICBjb2RlLFxuICAgICAgbWVzc2FnZVxuICAgIH0pID0+IHtcbiAgICAgIHRoaXMuX2lzTG9hZGluZyA9IGZhbHNlXG4gICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICBlcnJNc2c6IG1lc3NhZ2VcbiAgICAgIH1cblxuICAgICAgaWYgKGNvZGUgPT09IC01MDA4KSB7XG4gICAgICAgIHRoaXMuX2xvYWRBZCgpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fcmV0cnlDb3VudCA8IFJFVFJZX0NPVU5UKSB7XG4gICAgICAgIHRoaXMuX3JldHJ5Q291bnQgKz0gMVxuICAgICAgICB0aGlzLl9sb2FkQWQoKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgdGhpcy5fbGFzdEVycm9yID0gZGF0YVxuICAgICAgdGhpcy5vbkVycm9yKGRhdGEpXG4gICAgfSlcbiAgfVxuXG4gIGdldCBpc0V4cGlyZWQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9sYXN0TG9hZFRpbWUgIT09IDAgJiYgKE1hdGguYWJzKERhdGUubm93KCkgLSB0aGlzLl9sYXN0TG9hZFRpbWUpID4gRVhQSVJFRF9USU1FKSlcbiAgfVxuXG4gIGdldCBpc0xvYWRpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzTG9hZGluZ1xuICB9XG5cbiAgZ2V0UHJvdmlkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jld2FyZEFkLmdldFByb3ZpZGVyKClcbiAgfVxuXG4gIGxvYWQob25sb2FkLCBvbmVycm9yKSB7XG4gICAgdGhpcy5fbG9hZENhbGxiYWNrID0gb25sb2FkXG4gICAgdGhpcy5fZXJyb3JDYWxsYmFjayA9IG9uZXJyb3JcblxuICAgIGlmICh0aGlzLl9pc0xvYWRpbmcpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc0xvYWQpIHtcbiAgICAgIHRoaXMub25Mb2FkKClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuX3JldHJ5Q291bnQgPSAwXG5cbiAgICB0aGlzLl9sb2FkQWQoKVxuICB9XG5cbiAgc2hvdyhvbmNsb3NlKSB7XG4gICAgdGhpcy5fY2xvc2VDYWxsYmFjayA9IG9uY2xvc2VcblxuICAgIGlmICh0aGlzLl9pc0xvYWRpbmcgfHwgIXRoaXMuX2lzTG9hZCkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2xhc3RFcnJvciAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkVycm9yKHRoaXMuX2xhc3RFcnJvcilcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5nZXRQcm92aWRlcigpXG4gICAgaWYgKHByb3ZpZGVyID09PSBQcm92aWRlclR5cGUuQ1NKICYmIHRoaXMuaXNFeHBpcmVkKSB7XG4gICAgICB0aGlzLl9sb2FkQWQoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5fcmV3YXJkQWQuc2hvdygpXG4gIH1cblxuICBvbkxvYWQoZSkge1xuICAgIGlmICh0aGlzLl9sb2FkQ2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgdGhpcy5fbG9hZENhbGxiYWNrKClcbiAgICB9XG4gIH1cblxuICBvbkNsb3NlKGUpIHtcbiAgICBpZiAodGhpcy5fY2xvc2VDYWxsYmFjayAhPSBudWxsKSB7XG4gICAgICB0aGlzLl9jbG9zZUNhbGxiYWNrKHtcbiAgICAgICAgaXNFbmRlZDogZS5pc0VuZGVkXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG9uRXJyb3IoZSkge1xuICAgIGlmICh0aGlzLl9lcnJvckNhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgIHRoaXMuX2Vycm9yQ2FsbGJhY2soZSlcbiAgICB9XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMuX3Jld2FyZEFkLmRlc3Ryb3koKVxuICB9XG5cbiAgX2xvYWRBZCgpIHtcbiAgICB0aGlzLl9pc0xvYWQgPSBmYWxzZVxuICAgIHRoaXMuX2lzTG9hZGluZyA9IHRydWVcbiAgICB0aGlzLl9sYXN0RXJyb3IgPSBudWxsXG4gICAgdGhpcy5fcmV3YXJkQWQubG9hZCgpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IEFkSGVscGVyKClcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/shangmengliang/Documents/workspace/shortVideo/pages/main/main.nvue?vue&type=style&index=0&id=279e2088&scoped=true&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_style_index_0_id_279e2088_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./main.nvue?vue&type=style&index=0&id=279e2088&scoped=true&lang=css&mpType=page */ 12);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_style_index_0_id_279e2088_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_style_index_0_id_279e2088_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_style_index_0_id_279e2088_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_style_index_0_id_279e2088_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_main_nvue_vue_type_style_index_0_id_279e2088_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/shangmengliang/Documents/workspace/shortVideo/pages/main/main.nvue?vue&type=style&index=0&id=279e2088&scoped=true&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "page": {
    "flex": 1,
    "width": "750rpx",
    "flexDirection": "column",
    "alignItems": "stretch",
    "position": "relative"
  },
  "swiper": {
    "flex": 1
  },
  "swiper-item": {
    "flex": 1,
    "position": "relative"
  },
  "video": {
    "flex": 1,
    "width": "750rpx",
    "height": 100
  },
  "video_info": {
    "position": "absolute",
    "bottom": "246upx",
    "right": "32upx",
    "width": "80upx",
    "zIndex": 99999
  },
  "info_tx": {
    "width": "80upx",
    "height": "80upx",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#ffffff",
    "borderRadius": "40upx"
  },
  "info_like": {
    "width": "60upx",
    "height": "60upx",
    "marginTop": "40upx",
    "marginBottom": 0,
    "marginLeft": "10upx"
  },
  "info_count": {
    "fontSize": "26upx",
    "color": "#ffffff",
    "textAlign": "center",
    "marginTop": "5upx"
  },
  "video-msg": {
    "position": "absolute",
    "left": "10upx",
    "bottom": "30upx"
  },
  "msg_header": {
    "fontSize": "36upx",
    "color": "#ffffff"
  },
  "msg_cont": {
    "fontSize": "28upx",
    "color": "#ffffff",
    "marginTop": "16upx"
  }
}

/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);