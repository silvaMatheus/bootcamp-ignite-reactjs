/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/posts/[slug]";
exports.ids = ["pages/posts/[slug]"];
exports.modules = {

/***/ "./src/pages/posts/[slug].tsx":
/*!************************************!*\
  !*** ./src/pages/posts/[slug].tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prismic-dom */ \"prismic-dom\");\n/* harmony import */ var prismic_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prismic_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_prismic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/prismic */ \"./src/services/prismic.ts\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post.module.scss */ \"./src/pages/posts/post.module.scss\");\n/* harmony import */ var _post_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_post_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/m.silva.pereira/Desktop/Dev/Rocketseat/bootcamp-ignite-react/aulas/chapter-III/ignews/src/pages/posts/[slug].tsx\";\n\n\n\n\n\nfunction Post({\n  post\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: [post.title, \" | Ignews\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().post),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: post.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 15\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n          children: [\" \", post.updatedAt, \" \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 15\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_post_module_scss__WEBPACK_IMPORTED_MODULE_5___default().postContent),\n          dangerouslySetInnerHTML: {\n            __html: post.content\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 15\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }, this)]\n  }, void 0, true);\n}\nconst getServerSideProps = async ({\n  req,\n  params\n}) => {\n  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n    req\n  });\n  const {\n    slug\n  } = params;\n  const prismic = (0,_services_prismic__WEBPACK_IMPORTED_MODULE_4__.getPrismicClient)(req);\n  const response = await prismic.getByUID('publication', String(slug), {});\n  const post = {\n    slug,\n    title: prismic_dom__WEBPACK_IMPORTED_MODULE_3__.RichText.asText(response.data.title),\n    content: prismic_dom__WEBPACK_IMPORTED_MODULE_3__.RichText.asHtml(response.data.content),\n    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {\n      day: '2-digit',\n      month: 'long',\n      year: 'numeric'\n    })\n  }; // if(session){\n  // }\n\n  return {\n    props: {\n      post\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvW3NsdWddLnRzeD9kMDUzIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJzdHlsZXMiLCJ1cGRhdGVkQXQiLCJfX2h0bWwiLCJjb250ZW50IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwicGFyYW1zIiwic2Vzc2lvbiIsImdldFNlc3Npb24iLCJzbHVnIiwicHJpc21pYyIsImdldFByaXNtaWNDbGllbnQiLCJyZXNwb25zZSIsImdldEJ5VUlEIiwiU3RyaW5nIiwiUmljaFRleHQiLCJkYXRhIiwiRGF0ZSIsImxhc3RfcHVibGljYXRpb25fZGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImRheSIsIm1vbnRoIiwieWVhciIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdlLFNBQVNBLElBQVQsQ0FBYztBQUFDQztBQUFELENBQWQsRUFBZ0M7QUFDN0Msc0JBQ0k7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUEsbUJBQVFBLElBQUksQ0FBQ0MsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJSTtBQUFNLGVBQVMsRUFBRUMsb0VBQWpCO0FBQUEsNkJBQ0U7QUFBUyxpQkFBUyxFQUFFQSwrREFBcEI7QUFBQSxnQ0FDRTtBQUFBLG9CQUFLRixJQUFJLENBQUNDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsMEJBQVFELElBQUksQ0FBQ0csU0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFJRTtBQUNBLG1CQUFTLEVBQUVELHNFQURYO0FBRUEsaUNBQXVCLEVBQUU7QUFBQ0Usa0JBQU0sRUFBQ0osSUFBSSxDQUFDSztBQUFiO0FBRnpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUEsa0JBREo7QUFtQkQ7QUFHTSxNQUFNQyxrQkFBcUMsR0FBRyxPQUFNO0FBQUNDLEtBQUQ7QUFBTUM7QUFBTixDQUFOLEtBQXVCO0FBRTFFLFFBQU1DLE9BQU8sR0FBRyxNQUFNQyw0REFBVSxDQUFDO0FBQUNIO0FBQUQsR0FBRCxDQUFoQztBQUNBLFFBQU07QUFBQ0k7QUFBRCxNQUFTSCxNQUFmO0FBRUEsUUFBTUksT0FBTyxHQUFHQyxtRUFBZ0IsQ0FBQ04sR0FBRCxDQUFoQztBQUVBLFFBQU1PLFFBQVEsR0FBRyxNQUFNRixPQUFPLENBQUNHLFFBQVIsQ0FBaUIsYUFBakIsRUFBZ0NDLE1BQU0sQ0FBQ0wsSUFBRCxDQUF0QyxFQUE4QyxFQUE5QyxDQUF2QjtBQUVBLFFBQU1YLElBQUksR0FBRztBQUNYVyxRQURXO0FBRVhWLFNBQUssRUFBRWdCLHdEQUFBLENBQWdCSCxRQUFRLENBQUNJLElBQVQsQ0FBY2pCLEtBQTlCLENBRkk7QUFHWEksV0FBTyxFQUFFWSx3REFBQSxDQUFnQkgsUUFBUSxDQUFDSSxJQUFULENBQWNiLE9BQTlCLENBSEU7QUFJWEYsYUFBUyxFQUFFLElBQUlnQixJQUFKLENBQVNMLFFBQVEsQ0FBQ00scUJBQWxCLEVBQXlDQyxrQkFBekMsQ0FBNEQsT0FBNUQsRUFBcUU7QUFDOUVDLFNBQUcsRUFBRSxTQUR5RTtBQUU5RUMsV0FBSyxFQUFFLE1BRnVFO0FBRzlFQyxVQUFJLEVBQUU7QUFId0UsS0FBckU7QUFKQSxHQUFiLENBVDBFLENBbUJ4RTtBQUVGOztBQUNBLFNBQU07QUFDSkMsU0FBSyxFQUFDO0FBQUN6QjtBQUFEO0FBREYsR0FBTjtBQUlELENBMUJNIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3Bvc3RzL1tzbHVnXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dldFNlcnZlclNpZGVQcm9wc30gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgUmljaFRleHQgfSBmcm9tICdwcmlzbWljLWRvbSc7XG5pbXBvcnQgeyBnZXRQcmlzbWljQ2xpZW50IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJpc21pYyc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vcG9zdC5tb2R1bGUuc2NzcydcblxuaW50ZXJmYWNlIFBvc3RQcm9wcyB7XG4gIHBvc3Q6e1xuICAgIHNsdWc6c3RyaW5nO1xuICAgIHRpdGxlOnN0cmluZztcbiAgICBjb250ZW50OnN0cmluZztcbiAgICB1cGRhdGVkQXQ6IHN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHtwb3N0fTogUG9zdFByb3BzKXtcbiAgcmV0dXJuKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPntwb3N0LnRpdGxlfSB8IElnbmV3czwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0+XG4gICAgICAgICAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgICAgICAgICAgICA8dGltZT4ge3Bvc3QudXBkYXRlZEF0fSA8L3RpbWU+XG5cbiAgICAgICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucG9zdENvbnRlbnR9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOnBvc3QuY29udGVudH19Lz5cblxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIDwvbWFpbj5cblxuICAgICAgPC8+XG4gIClcbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOkdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jKHtyZXEsIHBhcmFtc30pID0+e1xuXG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKHtyZXF9KTtcbiAgY29uc3Qge3NsdWd9ID0gcGFyYW1zO1xuXG4gIGNvbnN0IHByaXNtaWMgPSBnZXRQcmlzbWljQ2xpZW50KHJlcSk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBwcmlzbWljLmdldEJ5VUlEKCdwdWJsaWNhdGlvbicsIFN0cmluZyhzbHVnKSwge30pO1xuXG4gIGNvbnN0IHBvc3QgPSB7XG4gICAgc2x1ZyxcbiAgICB0aXRsZTogUmljaFRleHQuYXNUZXh0KHJlc3BvbnNlLmRhdGEudGl0bGUpLFxuICAgIGNvbnRlbnQ6IFJpY2hUZXh0LmFzSHRtbChyZXNwb25zZS5kYXRhLmNvbnRlbnQpLFxuICAgIHVwZGF0ZWRBdDogbmV3IERhdGUocmVzcG9uc2UubGFzdF9wdWJsaWNhdGlvbl9kYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoJ3B0LUJSJywge1xuICAgICAgZGF5OiAnMi1kaWdpdCcsXG4gICAgICBtb250aDogJ2xvbmcnLFxuICAgICAgeWVhcjogJ251bWVyaWMnXG4gIH0pXG4gfVxuICAgIC8vIGlmKHNlc3Npb24pe1xuICAgIFxuICAvLyB9XG4gIHJldHVybntcbiAgICBwcm9wczp7cG9zdCxcbiAgICB9XG4gIH1cbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/[slug].tsx\n");

/***/ }),

/***/ "./src/services/prismic.ts":
/*!*********************************!*\
  !*** ./src/services/prismic.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPrismicClient\": function() { return /* binding */ getPrismicClient; }\n/* harmony export */ });\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prismicio/client */ \"@prismicio/client\");\n/* harmony import */ var _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prismicio_client__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getPrismicClient(req) {\n  const prismic = _prismicio_client__WEBPACK_IMPORTED_MODULE_0___default().client(process.env.PRISMIC_ENDPOINT, {\n    req,\n    accessToken: process.env.PRISMIC_ACCESS_TOKEN\n  });\n  return prismic;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvcHJpc21pYy50cz84YzUwIl0sIm5hbWVzIjpbImdldFByaXNtaWNDbGllbnQiLCJyZXEiLCJwcmlzbWljIiwiUHJpc21pYyIsInByb2Nlc3MiLCJlbnYiLCJQUklTTUlDX0VORFBPSU5UIiwiYWNjZXNzVG9rZW4iLCJQUklTTUlDX0FDQ0VTU19UT0tFTiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxTQUFTQSxnQkFBVCxDQUEwQkMsR0FBMUIsRUFBdUM7QUFDNUMsUUFBTUMsT0FBTyxHQUFHQywrREFBQSxDQUNkQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsZ0JBREUsRUFFZDtBQUNFTCxPQURGO0FBRUVNLGVBQVcsRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHO0FBRjNCLEdBRmMsQ0FBaEI7QUFPQSxTQUFPTixPQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcHJpc21pYy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcmlzbWljIGZyb20gJ0BwcmlzbWljaW8vY2xpZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByaXNtaWNDbGllbnQocmVxPzp1bmtub3duKXtcbiAgY29uc3QgcHJpc21pYyA9IFByaXNtaWMuY2xpZW50KFxuICAgIHByb2Nlc3MuZW52LlBSSVNNSUNfRU5EUE9JTlQsXG4gICAge1xuICAgICAgcmVxLFxuICAgICAgYWNjZXNzVG9rZW46IHByb2Nlc3MuZW52LlBSSVNNSUNfQUNDRVNTX1RPS0VOXG4gICAgfVxuICApXG4gIHJldHVybiBwcmlzbWljO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/prismic.ts\n");

/***/ }),

/***/ "./src/pages/posts/post.module.scss":
/*!******************************************!*\
  !*** ./src/pages/posts/post.module.scss ***!
  \******************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"post_container__2m5md\",\n\t\"post\": \"post_post__3quL2\",\n\t\"postContent\": \"post_postContent__B7qN9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvcG9zdHMvcG9zdC5tb2R1bGUuc2Nzcz9mODg3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb3N0cy9wb3N0Lm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwicG9zdF9jb250YWluZXJfXzJtNW1kXCIsXG5cdFwicG9zdFwiOiBcInBvc3RfcG9zdF9fM3F1TDJcIixcblx0XCJwb3N0Q29udGVudFwiOiBcInBvc3RfcG9zdENvbnRlbnRfX0I3cU45XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/posts/post.module.scss\n");

/***/ }),

/***/ "@prismicio/client":
/*!************************************!*\
  !*** external "@prismicio/client" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prismicio/client");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prismic-dom":
/*!******************************!*\
  !*** external "prismic-dom" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("prismic-dom");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/[slug].tsx"));
module.exports = __webpack_exports__;

})();