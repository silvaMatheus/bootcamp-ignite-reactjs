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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fauna */ \"./src/services/fauna.ts\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    //Pega o cookie daquela requisição \n    const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.getSession)({\n      req\n    });\n    const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(session.user.email))));\n    let customerId = user.data.stripe_customer_id;\n\n    if (!customerId) {\n      const stripeCustomer = await _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.customers.create({\n        email: session.user.email\n      });\n      await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Collection('users'), user.ref.id), {\n        data: {\n          stripe_customer_id: stripeCustomer.id\n        }\n      }));\n      customerId = stripeCustomer.id;\n    }\n\n    const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.checkout.sessions.create({\n      customer: customerId,\n      //id do stripe e nao do fauna \n      payment_method_types: ['card'],\n      billing_address_collection: 'required',\n      line_items: [{\n        price: 'price_1IlhuDHtkJ5nuPyTh7EgTvds',\n        quantity: 1\n      }],\n      mode: 'subscription',\n      allow_promotion_codes: true,\n      success_url: process.env.STRIPE_SUCCESS_URL,\n      cancel_url: process.env.STRIPE_CANCEL_URL\n    });\n    return res.status(200).json({\n      sessionId: stripeCheckoutSession.id\n    }); //ok\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method not allowed');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cz81NWE1Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsIm1ldGhvZCIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwidXNlciIsImZhdW5hIiwicSIsImVtYWlsIiwiY3VzdG9tZXJJZCIsImRhdGEiLCJzdHJpcGVfY3VzdG9tZXJfaWQiLCJzdHJpcGVDdXN0b21lciIsInN0cmlwZSIsInJlZiIsImlkIiwic3RyaXBlQ2hlY2tvdXRTZXNzaW9uIiwiY3VzdG9tZXIiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uIiwibGluZV9pdGVtcyIsInByaWNlIiwicXVhbnRpdHkiLCJtb2RlIiwiYWxsb3dfcHJvbW90aW9uX2NvZGVzIiwic3VjY2Vzc191cmwiLCJwcm9jZXNzIiwiZW52IiwiU1RSSVBFX1NVQ0NFU1NfVVJMIiwiY2FuY2VsX3VybCIsIlNUUklQRV9DQU5DRUxfVVJMIiwic3RhdHVzIiwianNvbiIsInNlc3Npb25JZCIsInNldEhlYWRlciIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBV0EsK0RBQWUsT0FBTUEsR0FBTixFQUEyQkMsR0FBM0IsS0FBb0Q7QUFDL0QsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsTUFBbkIsRUFBMEI7QUFFdEI7QUFDQSxVQUFNQyxPQUFPLEdBQUcsTUFBTUMsNERBQVUsQ0FBQztBQUFDSjtBQUFELEtBQUQsQ0FBaEM7QUFFQSxVQUFNSyxJQUFJLEdBQUcsTUFBTUMsd0RBQUEsQ0FDakJDLDhDQUFBLENBQ0VBLGdEQUFBLENBQ0VBLGdEQUFBLENBQVEsZUFBUixDQURGLEVBRUVBLG1EQUFBLENBQVdKLE9BQU8sQ0FBQ0UsSUFBUixDQUFhRyxLQUF4QixDQUZGLENBREYsQ0FEaUIsQ0FBbkI7QUFTQSxRQUFJQyxVQUFVLEdBQUdKLElBQUksQ0FBQ0ssSUFBTCxDQUFVQyxrQkFBM0I7O0FBRUEsUUFBRyxDQUFDRixVQUFKLEVBQWU7QUFFZixZQUFNRyxjQUFjLEdBQUcsTUFBTUMscUVBQUEsQ0FBd0I7QUFDbkRMLGFBQUssRUFBQ0wsT0FBTyxDQUFDRSxJQUFSLENBQWFHO0FBRGdDLE9BQXhCLENBQTdCO0FBSUEsWUFBTUYsd0RBQUEsQ0FDSkMsaURBQUEsQ0FDRUEsOENBQUEsQ0FBTUEscURBQUEsQ0FBYSxPQUFiLENBQU4sRUFBNkJGLElBQUksQ0FBQ1MsR0FBTCxDQUFTQyxFQUF0QyxDQURGLEVBRUU7QUFDRUwsWUFBSSxFQUFDO0FBQ0hDLDRCQUFrQixFQUFFQyxjQUFjLENBQUNHO0FBRGhDO0FBRFAsT0FGRixDQURJLENBQU47QUFVQU4sZ0JBQVUsR0FBR0csY0FBYyxDQUFDRyxFQUE1QjtBQUNEOztBQUNDLFVBQU1DLHFCQUFxQixHQUFHLE1BQU1ILDZFQUFBLENBQWdDO0FBQ2xFSSxjQUFRLEVBQUVSLFVBRHdEO0FBQzdDO0FBQ3JCUywwQkFBb0IsRUFBQyxDQUFDLE1BQUQsQ0FGNkM7QUFHbEVDLGdDQUEwQixFQUFFLFVBSHNDO0FBSWxFQyxnQkFBVSxFQUFFLENBQ1Y7QUFBQ0MsYUFBSyxFQUFDLGdDQUFQO0FBQXlDQyxnQkFBUSxFQUFDO0FBQWxELE9BRFUsQ0FKc0Q7QUFPbEVDLFVBQUksRUFBRSxjQVA0RDtBQVFsRUMsMkJBQXFCLEVBQUUsSUFSMkM7QUFTbEVDLGlCQUFXLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxrQkFUeUM7QUFVbEVDLGdCQUFVLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRztBQVYwQyxLQUFoQyxDQUFwQztBQWFBLFdBQU83QixHQUFHLENBQUM4QixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBc0I7QUFBQ0MsZUFBUyxFQUFFakIscUJBQXFCLENBQUNEO0FBQWxDLEtBQXRCLENBQVAsQ0EvQ3NCLENBK0M4QztBQUN2RSxHQWhERCxNQWdETztBQUNMZCxPQUFHLENBQUNpQyxTQUFKLENBQWMsT0FBZCxFQUF1QixNQUF2QjtBQUNBakMsT0FBRyxDQUFDOEIsTUFBSixDQUFXLEdBQVgsRUFBZ0JJLEdBQWhCLENBQW9CLG9CQUFwQjtBQUNEO0FBRUosQ0F0REQiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHtzdHJpcGV9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3N0cmlwZSc7XG5pbXBvcnQge2dldFNlc3Npb259IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xuaW1wb3J0IHsgcXVlcnkgYXMgcSB9IGZyb20gJ2ZhdW5hZGInO1xuaW1wb3J0IHtmYXVuYX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmF1bmEnO1xuXG50eXBlIFVzZXIgPSB7XG4gIHJlZjp7XG4gICAgaWQ6c3RyaW5nO1xuICB9XG4gIGRhdGE6IHtcbiAgICBzdHJpcGVfY3VzdG9tZXJfaWQ6c3RyaW5nO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJyl7XG4gICAgICAgXG4gICAgICAgIC8vUGVnYSBvIGNvb2tpZSBkYXF1ZWxhIHJlcXVpc2nDp8OjbyBcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oe3JlcX0pO1xuXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmYXVuYS5xdWVyeTxVc2VyPihcbiAgICAgICAgICBxLkdldChcbiAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgIHEuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSxcbiAgICAgICAgICAgICAgcS5DYXNlZm9sZChzZXNzaW9uLnVzZXIuZW1haWwpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG5cbiAgICAgICAgbGV0IGN1c3RvbWVySWQgPSB1c2VyLmRhdGEuc3RyaXBlX2N1c3RvbWVyX2lkO1xuXG4gICAgICAgIGlmKCFjdXN0b21lcklkKXtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHN0cmlwZUN1c3RvbWVyID0gYXdhaXQgc3RyaXBlLmN1c3RvbWVycy5jcmVhdGUoe1xuICAgICAgICAgIGVtYWlsOnNlc3Npb24udXNlci5lbWFpbCxcbiAgICAgICAgfSlcblxuICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgICBxLlVwZGF0ZShcbiAgICAgICAgICAgIHEuUmVmKHEuQ29sbGVjdGlvbigndXNlcnMnKSwgdXNlci5yZWYuaWQpLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgICBzdHJpcGVfY3VzdG9tZXJfaWQ6IHN0cmlwZUN1c3RvbWVyLmlkLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIGN1c3RvbWVySWQgPSBzdHJpcGVDdXN0b21lci5pZDtcbiAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RyaXBlQ2hlY2tvdXRTZXNzaW9uID0gYXdhaXQgc3RyaXBlLmNoZWNrb3V0LnNlc3Npb25zLmNyZWF0ZSh7XG4gICAgICAgICAgY3VzdG9tZXI6IGN1c3RvbWVySWQsLy9pZCBkbyBzdHJpcGUgZSBuYW8gZG8gZmF1bmEgXG4gICAgICAgICAgcGF5bWVudF9tZXRob2RfdHlwZXM6WydjYXJkJ10sXG4gICAgICAgICAgYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb246ICdyZXF1aXJlZCcsXG4gICAgICAgICAgbGluZV9pdGVtczogW1xuICAgICAgICAgICAge3ByaWNlOidwcmljZV8xSWxodURIdGtKNW51UHlUaDdFZ1R2ZHMnLCBxdWFudGl0eToxfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgbW9kZTogJ3N1YnNjcmlwdGlvbicsXG4gICAgICAgICAgYWxsb3dfcHJvbW90aW9uX2NvZGVzOiB0cnVlLFxuICAgICAgICAgIHN1Y2Nlc3NfdXJsOiBwcm9jZXNzLmVudi5TVFJJUEVfU1VDQ0VTU19VUkwsXG4gICAgICAgICAgY2FuY2VsX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX0NBTkNFTF9VUkxcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oIHtzZXNzaW9uSWQ6IHN0cmlwZUNoZWNrb3V0U2Vzc2lvbi5pZH0pOy8vb2tcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpO1xuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWV0aG9kIG5vdCBhbGxvd2VkJyk7XG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/subscribe.ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": function() { return /* binding */ fauna; }\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n  secret: process.env.FAUNADB_KEY\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHM/OGY0ZCJdLCJuYW1lcyI6WyJmYXVuYSIsIkNsaWVudCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX0tFWSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxLQUFLLEdBQUcsSUFBSUMsMkNBQUosQ0FBVztBQUM5QkMsUUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFEVSxDQUFYLENBQWQiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NsaWVudH0gZnJvbSAnZmF1bmFkYic7XG5cbmV4cG9ydCBjb25zdCBmYXVuYSA9IG5ldyBDbGllbnQoe1xuICBzZWNyZXQ6IHByb2Nlc3MuZW52LkZBVU5BREJfS0VZLFxufSkgXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": function() { return /* binding */ stripe; }\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_API_KEY, {\n  apiVersion: '2020-08-27',\n  appInfo: {\n    name: 'ignews',\n    version: _package_json__WEBPACK_IMPORTED_MODULE_1__.version\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2Q5NjgiXSwibmFtZXMiOlsic3RyaXBlIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9BUElfS0VZIiwiYXBpVmVyc2lvbiIsImFwcEluZm8iLCJuYW1lIiwidmVyc2lvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxNQUFNQSxNQUFNLEdBQUcsSUFBSUMsK0NBQUosQ0FDcEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxjQURRLEVBRXBCO0FBQ0VDLFlBQVUsRUFBRSxZQURkO0FBRUVDLFNBQU8sRUFBQztBQUNOQyxRQUFJLEVBQUMsUUFEQztBQUVOQyxXQUFPQTtBQUZEO0FBRlYsQ0FGb0IsQ0FBZiIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9zdHJpcGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XG5pbXBvcnQge3ZlcnNpb259IGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbic7XG5cbmV4cG9ydCBjb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKFxuICBwcm9jZXNzLmVudi5TVFJJUEVfQVBJX0tFWSxcbiAge1xuICAgIGFwaVZlcnNpb246ICcyMDIwLTA4LTI3JyxcbiAgICBhcHBJbmZvOntcbiAgICAgIG5hbWU6J2lnbmV3cycsXG4gICAgICB2ZXJzaW9uXG4gICAgfVxuICB9XG4pXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"kill -9 $(lsof -t -i:3000)  &  next dev","build":"next build","start":"kill -9 $(lsof -t -i:3000)  &  next start"},"dependencies":{"@prismicio/client":"^4.0.0","@stripe/stripe-js":"^1.14.0","@types/next-auth":"^3.15.0","@types/node":"^15.0.1","@types/react":"^17.0.4","axios":"^0.21.1","faunadb":"^4.2.0","next":"10.2.0","next-auth":"^3.19.8","prismic-dom":"^2.2.5","react":"17.0.2","react-dom":"17.0.2","react-icons":"^4.2.0","sass":"^1.32.12","stripe":"^8.145.0","typescript":"^4.2.4"},"devDependencies":{"@types/prismic-dom":"^2.1.1","@typescript-eslint/eslint-plugin":"^4.22.0","@typescript-eslint/parser":"^4.22.0","eslint":"^7.25.0","eslint-config-airbnb":"^18.2.1","eslint-plugin-import":"^2.22.1","eslint-plugin-jsx-a11y":"^6.4.1","eslint-plugin-react":"^7.23.2","eslint-plugin-react-hooks":"^4.2.0"}}');

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("faunadb");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();