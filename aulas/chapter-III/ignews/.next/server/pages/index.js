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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": function() { return /* binding */ SubscribeButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe-js */ \"./src/services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/m.silva.pereira/Desktop/Dev/Rocketseat/bootcamp-ignite-react/aulas/chapter-III/ignews/src/components/SubscribeButton/index.tsx\";\n\n\n\n\nfunction SubscribeButton({\n  priceId\n}) {\n  const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n\n  async function handleSubscribe() {\n    if (!session) {\n      (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.signIn)('github');\n      return;\n    } //criação da checkout session\n\n\n    try {\n      const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.post('/subscribe');\n      const {\n        sessionId\n      } = response.data;\n      const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_3__.getSripeJs)();\n      await stripe.redirectToCheckout({\n        sessionId\n      });\n    } catch (err) {\n      alert(err.message);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n    type: \"button\",\n    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subscribeButton),\n    onClick: handleSubscribe,\n    children: \"Subscribe now\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4P2VmMWQiXSwibmFtZXMiOlsiU3Vic2NyaWJlQnV0dG9uIiwicHJpY2VJZCIsInNlc3Npb24iLCJ1c2VTZXNzaW9uIiwiaGFuZGxlU3Vic2NyaWJlIiwic2lnbkluIiwicmVzcG9uc2UiLCJhcGkiLCJzZXNzaW9uSWQiLCJkYXRhIiwic3RyaXBlIiwiZ2V0U3JpcGVKcyIsInJlZGlyZWN0VG9DaGVja291dCIsImVyciIsImFsZXJ0IiwibWVzc2FnZSIsInN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1PLFNBQVNBLGVBQVQsQ0FBeUI7QUFBQ0M7QUFBRCxDQUF6QixFQUEwRDtBQUMvRCxRQUFNLENBQUNDLE9BQUQsSUFBWUMsNERBQVUsRUFBNUI7O0FBRUEsaUJBQWVDLGVBQWYsR0FBZ0M7QUFDOUIsUUFBRyxDQUFDRixPQUFKLEVBQVk7QUFDVkcsOERBQU0sQ0FBQyxRQUFELENBQU47QUFDQTtBQUNELEtBSjZCLENBTTlCOzs7QUFDQSxRQUFJO0FBQ0YsWUFBTUMsUUFBUSxHQUFHLE1BQU1DLG1EQUFBLENBQVMsWUFBVCxDQUF2QjtBQUVBLFlBQU07QUFBQ0M7QUFBRCxVQUFjRixRQUFRLENBQUNHLElBQTdCO0FBRUEsWUFBTUMsTUFBTSxHQUFHLE1BQU1DLCtEQUFVLEVBQS9CO0FBRUEsWUFBTUQsTUFBTSxDQUFDRSxrQkFBUCxDQUEwQjtBQUFDSjtBQUFELE9BQTFCLENBQU47QUFFRCxLQVRELENBU0MsT0FBTUssR0FBTixFQUFVO0FBQ1RDLFdBQUssQ0FBQ0QsR0FBRyxDQUFDRSxPQUFMLENBQUw7QUFDRDtBQUNGOztBQUVELHNCQUNFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxhQUFTLEVBQUVDLDRFQUZiO0FBR0UsV0FBTyxFQUFFWixlQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduSW4sIHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSc7XG5pbXBvcnQgeyBnZXRTcmlwZUpzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RyaXBlLWpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgU3Vic2NyaWJlQnV0dG9uUHJvcHN7XG4gIHByaWNlSWQ6c3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3Vic2NyaWJlQnV0dG9uKHtwcmljZUlkfTogU3Vic2NyaWJlQnV0dG9uUHJvcHMpIHtcbiAgY29uc3QgW3Nlc3Npb25dID0gdXNlU2Vzc2lvbigpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1YnNjcmliZSgpe1xuICAgIGlmKCFzZXNzaW9uKXtcbiAgICAgIHNpZ25JbignZ2l0aHViJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9jcmlhw6fDo28gZGEgY2hlY2tvdXQgc2Vzc2lvblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvc3Vic2NyaWJlJylcbiAgICAgIFxuICAgICAgY29uc3Qge3Nlc3Npb25JZH0gPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBnZXRTcmlwZUpzKCk7XG5cbiAgICAgIGF3YWl0IHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoe3Nlc3Npb25JZH0pO1xuXG4gICAgfWNhdGNoKGVycil7XG4gICAgICBhbGVydChlcnIubWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN1YnNjcmliZUJ1dHRvbn1cbiAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1YnNjcmliZX1cbiAgICA+XG4gICAgICBTdWJzY3JpYmUgbm93XG4gICAgPC9idXR0b24+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/m.silva.pereira/Desktop/Dev/Rocketseat/bootcamp-ignite-react/aulas/chapter-III/ignews/src/pages/index.tsx\";\n\n\n\n\nfunction Home({\n  product\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \" Home | ig.news \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: \" \\uD83D\\uDC4F  Hey, welcome\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: [\" New about the \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"React\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 30\n          }, this), \" world. \"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"Get acess to all the publications\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 46\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: [\"for \", product.amount, \" month\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_3__.SubscribeButton, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"/images/avatar.svg\",\n        alt: \"Girl coding\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst getStaticProps = async () => {\n  const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.prices.retrieve('price_1IlhuDHtkJ5nuPyTh7EgTvds');\n  const product = {\n    priceId: price.id,\n    amount: new Intl.NumberFormat('en-US', {\n      style: 'currency',\n      currency: 'USD'\n    }).format(price.unit_amount / 100)\n  };\n  return {\n    props: {\n      product\n    },\n    revalidate: 60 * 60 * 24 // 24 horas \n\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsInByb2R1Y3QiLCJzdHlsZXMiLCJhbW91bnQiLCJnZXRTdGF0aWNQcm9wcyIsInByaWNlIiwic3RyaXBlIiwicHJpY2VJZCIsImlkIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJ1bml0X2Ftb3VudCIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBU2UsU0FBU0EsSUFBVCxDQUFjO0FBQUNDO0FBQUQsQ0FBZCxFQUFtQztBQUNoRCxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFNLGVBQVMsRUFBRUMsMkVBQWpCO0FBQUEsOEJBQ0U7QUFBUyxpQkFBUyxFQUFFQSwrREFBcEI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEscURBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFBLHVFQUNtQztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURuQyxlQUVFO0FBQUEsK0JBQVdELE9BQU8sQ0FBQ0UsTUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQU9FLDhEQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFVRTtBQUFLLFdBQUcsRUFBQyxvQkFBVDtBQUE4QixXQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUEsa0JBREY7QUFtQkQ7QUFFTSxNQUFNQyxjQUE4QixHQUFHLFlBQVc7QUFFdkQsUUFBTUMsS0FBSyxHQUFHLE1BQU1DLG9FQUFBLENBQXVCLGdDQUF2QixDQUFwQjtBQUVBLFFBQU1MLE9BQU8sR0FBRztBQUNkTSxXQUFPLEVBQUVGLEtBQUssQ0FBQ0csRUFERDtBQUVkTCxVQUFNLEVBQUUsSUFBSU0sSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQThCO0FBQ3BDQyxXQUFLLEVBQUMsVUFEOEI7QUFFcENDLGNBQVEsRUFBQztBQUYyQixLQUE5QixFQUdMQyxNQUhLLENBR0VSLEtBQUssQ0FBQ1MsV0FBTixHQUFrQixHQUhwQjtBQUZNLEdBQWhCO0FBT0EsU0FBTztBQUNMQyxTQUFLLEVBQUM7QUFDSmQ7QUFESSxLQUREO0FBSUxlLGNBQVUsRUFBRSxLQUFLLEVBQUwsR0FBVSxFQUpqQixDQUlxQjs7QUFKckIsR0FBUDtBQU1ELENBakJNIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQge3N0cmlwZX0gZnJvbSAnLi4vc2VydmljZXMvc3RyaXBlJztcbmltcG9ydCB7R2V0U3RhdGljUHJvcHN9IGZyb20gJ25leHQnO1xuICAgICAgICBcbmltcG9ydCB7IFN1YnNjcmliZUJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvU3Vic2NyaWJlQnV0dG9uJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZS5zY3NzJztcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHByb2R1Y3Q6e1xuICAgIHByaWNlSWQ6c3RyaW5nO1xuICAgIGFtb3VudDpudW1iZXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7cHJvZHVjdH06SG9tZVByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+IEhvbWUgfCBpZy5uZXdzIDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q29udGFpbmVyfT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgICAgPHNwYW4+IPCfkY8gIEhleSwgd2VsY29tZTwvc3Bhbj5cbiAgICAgICAgICA8aDE+IE5ldyBhYm91dCB0aGUgPHNwYW4+UmVhY3Q8L3NwYW4+IHdvcmxkLiA8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgR2V0IGFjZXNzIHRvIGFsbCB0aGUgcHVibGljYXRpb25zPGJyLz5cbiAgICAgICAgICAgIDxzcGFuPmZvciB7cHJvZHVjdC5hbW91bnR9IG1vbnRoPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8U3Vic2NyaWJlQnV0dG9uICAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9hdmF0YXIuc3ZnXCIgYWx0PVwiR2lybCBjb2RpbmdcIiAvPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT57XG5cbiAgY29uc3QgcHJpY2UgPSBhd2FpdCBzdHJpcGUucHJpY2VzLnJldHJpZXZlKCdwcmljZV8xSWxodURIdGtKNW51UHlUaDdFZ1R2ZHMnKTtcblxuICBjb25zdCBwcm9kdWN0ID0ge1xuICAgIHByaWNlSWQ6IHByaWNlLmlkLFxuICAgIGFtb3VudDogbmV3IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycse1xuICAgICAgc3R5bGU6J2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OidVU0QnXG4gICAgfSkuZm9ybWF0KHByaWNlLnVuaXRfYW1vdW50LzEwMCksXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwcm9wczp7XG4gICAgICBwcm9kdWN0LFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogNjAgKiA2MCAqIDI0LCAvLyAyNCBob3JhcyBcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": function() { return /* binding */ api; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: '/api'\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvYXBpLnRzPzBlOWQiXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJiYXNlVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVPLE1BQU1BLEdBQUcsR0FBR0MsbURBQUEsQ0FBYTtBQUM5QkMsU0FBTyxFQUFFO0FBRHFCLENBQWIsQ0FBWiIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9hcGkudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJy9hcGknXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/stripe-js.ts":
/*!***********************************!*\
  !*** ./src/services/stripe-js.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSripeJs\": function() { return /* binding */ getSripeJs; }\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getSripeJs() {\n  const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_51IlhqoHtkJ5nuPyTYeLRYFa6PvwgBs4aShNKWTgG79ibL0A43dtA5uwTPtPc6sQw2gOAQ4caK72woXljNCIYFPjb00LyXqvZiH\");\n  return stripeJs;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzP2Q4YWMiXSwibmFtZXMiOlsiZ2V0U3JpcGVKcyIsInN0cmlwZUpzIiwibG9hZFN0cmlwZSIsInByb2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRU8sZUFBZUEsVUFBZixHQUEyQjtBQUNoQyxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsNkRBQVUsQ0FBQ0MsNkdBQUQsQ0FBakM7QUFDQSxTQUFPRixRQUFQO0FBQ0QiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3JpcGVKcygpe1xuICBjb25zdCBzdHJpcGVKcyA9IGF3YWl0IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX1BVQkxJQ19LRVkpO1xuICByZXR1cm4gc3RyaXBlSnM7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe-js.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": function() { return /* binding */ stripe; }\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n  apiVersion: '2020-08-27',\n  appInfo: {\n    name: 'ignews',\n    version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2Q5NjgiXSwibmFtZXMiOlsic3RyaXBlIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsK0NBQUosQ0FDcEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxjQURRLEVBRXBCO0FBQ0VDLFlBQVUsRUFBRSxZQURkO0FBRUVDLFNBQU8sRUFBQztBQUNOQyxRQUFJLEVBQUMsUUFEQztBQUVOQyxXQUFPQTtBQUZEO0FBRlYsQ0FGb0IsQ0FBZiIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9zdHJpcGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XG5pbXBvcnQge3ZlcnNpb259IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbic7XG5cbmV4cG9ydCBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKFxuICBwcm9jZXNzLmVudi5TVFJJUEVfQVBJX0tFWSxcbiAge1xuICAgIGFwaVZlcnNpb246ICcyMDIwLTA4LTI3JyxcbiAgICBhcHBJbmZvOntcbiAgICAgIG5hbWU6J2lnbmV3cycsXG4gICAgICB2ZXJzaW9uXG4gICAgfVxuICB9XG4pXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__1uQAs\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzPzQ0YTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3Vic2NyaWJlQnV0dG9uXCI6IFwic3R5bGVzX3N1YnNjcmliZUJ1dHRvbl9fMXVRQXNcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__21EWl\",\n\t\"hero\": \"home_hero__3Za5I\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcz81YWQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRDb250YWluZXJcIjogXCJob21lX2NvbnRlbnRDb250YWluZXJfXzIxRVdsXCIsXG5cdFwiaGVyb1wiOiBcImhvbWVfaGVyb19fM1phNUlcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"kill -9 $(lsof -t -i:3000)  &  next dev","build":"next build","start":"kill -9 $(lsof -t -i:3000)  &  next start"},"dependencies":{"@stripe/stripe-js":"^1.14.0","@types/next-auth":"^3.15.0","@types/node":"^15.0.1","@types/react":"^17.0.4","axios":"^0.21.1","faunadb":"^4.2.0","next":"10.2.0","next-auth":"^3.19.8","react":"17.0.2","react-dom":"17.0.2","react-icons":"^4.2.0","sass":"^1.32.12","stripe":"^8.145.0","typescript":"^4.2.4"},"devDependencies":{"@typescript-eslint/eslint-plugin":"^4.22.0","@typescript-eslint/parser":"^4.22.0","eslint":"^7.25.0","eslint-config-airbnb":"^18.2.1","eslint-plugin-import":"^2.22.1","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-react":"^7.23.2","eslint-plugin-react-hooks":"^4.2.0"}}');

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/stripe-js");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();