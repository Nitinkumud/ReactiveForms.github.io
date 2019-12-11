(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <app-customer></app-customer>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\">\n  <div class=\"card-header\">\n    Sign Up!\n  </div>\n\n  <div class=\"card-body\">\n    <form novalidate\n          (ngSubmit)=\"save()\"\n          [formGroup]=\"customerForm\">\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"firstNameId\">First Name</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"firstNameId\"\n                 type=\"text\"\n                 placeholder=\"First Name (required)\"\n                 formControlName=\"firstName\"\n                 [ngClass]=\"{'is-invalid': (customerForm.get('firstName').touched ||\n                                            customerForm.get('firstName').dirty) &&\n                                            !customerForm.get('firstName').valid }\" />\n          <span class=\"invalid-feedback\">\n            <span *ngIf=\"customerForm.get('firstName').errors?.required\">\n              Please enter your first name.\n            </span>\n            <span *ngIf=\"customerForm.get('firstName').errors?.minlength\">\n              The first name must be longer than 3 characters.\n            </span>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"lastNameId\">Last Name</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"lastNameId\"\n                 type=\"text\"\n                 placeholder=\"Last Name (required)\"\n                 formControlName=\"lastName\"\n                 [ngClass]=\"{'is-invalid': (customerForm.get('lastName').touched ||\n                                            customerForm.get('lastName').dirty) &&\n                                            !customerForm.get('lastName').valid }\" />\n          <span class=\"invalid-feedback\">\n            <span *ngIf=\"customerForm.get('lastName').errors?.required\">\n              Please enter your last name.\n            </span>\n            <span *ngIf=\"customerForm.get('lastName').errors?.maxlength\">\n              The last name must be less than 50 characters.\n            </span>\n          </span>\n        </div>\n      </div>\n\n      <div formGroupName=\"emailGroup\">\n        <div class=\"form-group row mb-2\">\n          <label class=\"col-md-2 col-form-label\"\n                 for=\"emailId\">Email</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\"\n                   id=\"emailId\"\n                   type=\"email\"\n                   placeholder=\"Email (required)\"\n                   formControlName=\"email\"\n                   [ngClass]=\"{'is-invalid': emailMessage }\" />\n            <span class=\"invalid-feedback\">\n              {{ emailMessage }}\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group row mb-2\">\n          <label class=\"col-md-2 col-form-label\"\n                 for=\"confirmEmailId\">Confirm Email</label>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\"\n                   id=\"confirmEmailId\"\n                   type=\"email\"\n                   placeholder=\"Confirm Email (required)\"\n                   formControlName=\"confirmEmail\"\n                   [ngClass]=\"{'is-invalid': customerForm.get('emailGroup').errors ||\n                                             ((customerForm.get('emailGroup.confirmEmail').touched || \n                                              customerForm.get('emailGroup.confirmEmail').dirty) && \n                                              !customerForm.get('emailGroup.confirmEmail').valid) }\" />\n            <span class=\"invalid-feedback\">\n              <span *ngIf=\"customerForm.get('emailGroup.confirmEmail').errors?.required\">\n                Please confirm your email address.\n              </span>\n              <span *ngIf=\"customerForm.get('emailGroup').errors?.match\">\n                The confirmation does not match the email address.\n              </span>\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"phoneId\">Phone</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"phoneId\"\n                 type=\"tel\"\n                 placeholder=\"Phone\"\n                 formControlName=\"phone\"\n                 [ngClass]=\"{'is-invalid': !customerForm.get('phone').valid }\" />\n          <span class=\"invalid-feedback\">\n            <span *ngIf=\"customerForm.get('phone').errors?.required\">\n              Please enter your phone number.\n            </span>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label pt-0\">Send Notifications</label>\n        <div class=\"col-md-8\">\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\"\n                     type=\"radio\"\n                     value=\"email\"\n                     formControlName=\"notification\">Email\n            </label>\n          </div>\n          <div class=\"form-check form-check-inline\">\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\"\n                     type=\"radio\"\n                     value=\"text\"\n                     formControlName=\"notification\">Text\n            </label>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <label class=\"col-md-2 col-form-label\"\n               for=\"ratingId\">Rating</label>\n        <div class=\"col-md-8\">\n          <input class=\"form-control\"\n                 id=\"ratingId\"\n                 type=\"number\"\n                 formControlName=\"rating\"\n                 [ngClass]=\"{'is-invalid': (customerForm.get('rating').touched || \n                                             customerForm.get('rating').dirty) && \n                                             !customerForm.get('rating').valid }\" />\n          <span class=\"invalid-feedback\">\n            <span *ngIf=\"customerForm.get('rating').errors?.range\">\n              Please rate your experience from 1 to 5.\n            </span>\n          </span>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <div class=\"col-md-8\">\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input class=\"form-check-input\"\n                     id=\"sendCatalogId\"\n                     type=\"checkbox\"\n                     formControlName=\"sendCatalog\">Send me your catalog\n            </label>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"customerForm.get('sendCatalog').value\">\n        <div formArrayName=\"addresses\">\n\n          <div [formGroupName]=\"i\"\n               *ngFor=\"let address of addresses.controls; let i=index\">\n            <div class=\"form-group row mb-2\">\n              <label class=\"col-md-2 col-form-label pt-0\">Address Type</label>\n              <div class=\"col-md-8\">\n                <div class=\"form-check form-check-inline\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\"\n                           id=\"addressType1Id\"\n                           type=\"radio\"\n                           value=\"home\"\n                           formControlName=\"addressType\"> Home\n                  </label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\"\n                           id=\"addressType1Id\"\n                           type=\"radio\"\n                           value=\"work\"\n                           formControlName=\"addressType\"> Work\n                  </label>\n                </div>\n                <div class=\"form-check form-check-inline\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\"\n                           id=\"addressType1Id\"\n                           type=\"radio\"\n                           value=\"other\"\n                           formControlName=\"addressType\"> Other\n                  </label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row mb-2\">\n              <label class=\"col-md-2 col-form-label\"\n                     attr.for=\"{{'street1Id' + i}}\">Street Address 1</label>\n              <div class=\"col-md-8\">\n                <input class=\"form-control\"\n                       id=\"{{ 'street1Id' + i }}\"\n                       type=\"text\"\n                       placeholder=\"Street address (required)\"\n                       formControlName=\"street1\"\n                       [ngClass]=\"{'is-invalid': (address.controls.street1.touched || \n                                                  address.controls.street1.dirty) && \n                                                  !address.controls.street1.valid }\">\n                <span class=\"invalid-feedback\">\n                  <span *ngIf=\"address.controls.street1.errors?.required\">\n                    Please enter your street address.\n                  </span>\n                </span>\n              </div>\n            </div>\n\n            <div class=\"form-group row mb-2\">\n              <label class=\"col-md-2 col-form-label\"\n                     attr.for=\"{{'street2Id' + i}}\">Street Address 2</label>\n              <div class=\"col-md-8\">\n                <input class=\"form-control\"\n                       id=\"{{'street2Id' + i}}\"\n                       type=\"text\"\n                       placeholder=\"Street address (second line)\"\n                       formControlName=\"street2\">\n              </div>\n            </div>\n\n            <div class=\"form-group row mb-2\">\n              <label class=\"col-md-2 col-form-label\"\n                     attr.for=\"{{'cityId' + i}}\">City, State, Zip Code</label>\n              <div class=\"col-md-3\">\n                <input class=\"form-control\"\n                       id=\"{{'cityId' + i}}\"\n                       type=\"text\"\n                       placeholder=\"City\"\n                       formControlName=\"city\">\n              </div>\n              <div class=\"col-md-3\">\n                <select class=\"form-control\"\n                        id=\"{{'stateId' + i}}\"\n                        formControlName=\"state\">\n                  <option value=\"\"\n                          disabled\n                          selected\n                          hidden>Select a State...</option>\n                  <option value=\"AL\">Alabama</option>\n                  <option value=\"AK\">Alaska</option>\n                  <option value=\"AZ\">Arizona</option>\n                  <option value=\"AR\">Arkansas</option>\n                  <option value=\"CA\">California</option>\n                  <option value=\"CO\">Colorado</option>\n                  <option value=\"WI\">Wisconsin</option>\n                  <option value=\"WY\">Wyoming</option>\n                </select>\n              </div>\n              <div class=\"col-md-2\">\n                <input class=\"form-control\"\n                       id=\"{{'zipId' + i}}\"\n                       type=\"number\"\n                       placeholder=\"Zip Code\"\n                       formControlName=\"zip\">\n              </div>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"form-group row mb-2\">\n          <div class=\"col-md-4\">\n            <button class=\"btn btn-outline-primary\"\n                    type=\"button\"\n                    [title]=\"addresses.valid ? 'Add another mailing address' : 'Disabled until the existing address data is valid'\"\n                    [disabled]=\"!addresses.valid\"\n                    (click)=\"addAddress()\">\n              Add Another Address\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group row mb-2\">\n        <div class=\"offset-md-2 col-md-4\">\n          <button class=\"btn btn-primary mr-3\"\n                  type=\"submit\"\n                  style=\"width:80px\"\n                  [title]=\"customerForm.valid ? 'Save your entered data' : 'Disabled until the form data is valid'\"\n                  [disabled]=\"!customerForm.valid\">\n            Save\n          </button>\n          <button class=\"btn btn-outline-secondary\"\n                  type=\"button\"\n                  (click)=\"populateTestData()\">\n            Test Data\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<br>Dirty: {{ customerForm.dirty }}\n<br>Touched: {{ customerForm.touched }}\n<br>Valid: {{ customerForm.valid }}\n<br>Value: {{ customerForm.value | json }}\n<br>Street: {{ addresses.get('0.street1')?.value }}\n<br>&nbsp;");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Demo';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _customers_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers/customer.component */ "./src/app/customers/customer.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _customers_customer_component__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/customers/customer.component.css": 
        /*!**************************************************!*\
          !*** ./src/app/customers/customer.component.css ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/customers/customer.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/customers/customer.component.ts ***!
          \*************************************************/
        /*! exports provided: CustomerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function () { return CustomerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _customer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer */ "./src/app/customers/customer.ts");
            function emailMatcher(c) {
                var emailControl = c.get('email');
                var confirmControl = c.get('confirmEmail');
                if (emailControl.pristine || confirmControl.pristine) {
                    return null;
                }
                if (emailControl.value === confirmControl.value) {
                    return null;
                }
                return { match: true };
            }
            function ratingRange(min, max) {
                return function (c) {
                    if (c.value !== null && (isNaN(c.value) || c.value < min || c.value > max)) {
                        return { range: true };
                    }
                    return null;
                };
            }
            var CustomerComponent = /** @class */ (function () {
                function CustomerComponent(fb) {
                    this.fb = fb;
                    this.customer = new _customer__WEBPACK_IMPORTED_MODULE_4__["Customer"]();
                    this.validationMessages = {
                        required: 'Please enter your email address.',
                        email: 'Please enter a valid email address.'
                    };
                }
                Object.defineProperty(CustomerComponent.prototype, "addresses", {
                    get: function () {
                        return this.customerForm.get('addresses');
                    },
                    enumerable: true,
                    configurable: true
                });
                CustomerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.customerForm = this.fb.group({
                        firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
                        lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
                        emailGroup: this.fb.group({
                            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
                            confirmEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        }, { validator: emailMatcher }),
                        phone: '',
                        notification: 'email',
                        rating: [null, ratingRange(1, 5)],
                        sendCatalog: true,
                        addresses: this.fb.array([this.buildAddress()])
                    });
                    this.customerForm.get('notification').valueChanges.subscribe(function (value) { return _this.setNotification(value); });
                    var emailControl = this.customerForm.get('emailGroup.email');
                    emailControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(1000)).subscribe(function (value) { return _this.setMessage(emailControl); });
                };
                CustomerComponent.prototype.addAddress = function () {
                    this.addresses.push(this.buildAddress());
                };
                CustomerComponent.prototype.buildAddress = function () {
                    return this.fb.group({
                        addressType: 'home',
                        street1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                        street2: '',
                        city: '',
                        state: '',
                        zip: ''
                    });
                };
                CustomerComponent.prototype.populateTestData = function () {
                    this.customerForm.patchValue({
                        firstName: 'Jack',
                        lastName: 'Harkness',
                        emailGroup: { email: 'jack@torchwood.com', confirmEmail: 'jack@torchwood.com' }
                    });
                    var addressGroup = this.fb.group({
                        addressType: 'work',
                        street1: 'Mermaid Quay',
                        street2: '',
                        city: 'Cardiff Bay',
                        state: 'CA',
                        zip: ''
                    });
                    this.customerForm.setControl('addresses', this.fb.array([addressGroup]));
                };
                CustomerComponent.prototype.save = function () {
                    console.log(this.customerForm);
                    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
                };
                CustomerComponent.prototype.setMessage = function (c) {
                    var _this = this;
                    this.emailMessage = '';
                    if ((c.touched || c.dirty) && c.errors) {
                        this.emailMessage = Object.keys(c.errors).map(function (key) { return _this.validationMessages[key]; }).join(' ');
                    }
                };
                CustomerComponent.prototype.setNotification = function (notifyVia) {
                    var phoneControl = this.customerForm.get('phone');
                    if (notifyVia === 'text') {
                        phoneControl.setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                    }
                    else {
                        phoneControl.clearValidators();
                    }
                    phoneControl.updateValueAndValidity();
                };
                return CustomerComponent;
            }());
            CustomerComponent.ctorParameters = function () { return [
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
            ]; };
            CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-customer',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customers/customer.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./customer.component.css */ "./src/app/customers/customer.component.css")).default]
                })
            ], CustomerComponent);
            /***/ 
        }),
        /***/ "./src/app/customers/customer.ts": 
        /*!***************************************!*\
          !*** ./src/app/customers/customer.ts ***!
          \***************************************/
        /*! exports provided: Customer */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function () { return Customer; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Customer = /** @class */ (function () {
                function Customer(firstName, lastName, email, sendCatalog, addressType, street1, street2, city, state, zip) {
                    if (firstName === void 0) { firstName = ''; }
                    if (lastName === void 0) { lastName = ''; }
                    if (email === void 0) { email = ''; }
                    if (sendCatalog === void 0) { sendCatalog = false; }
                    if (addressType === void 0) { addressType = 'home'; }
                    if (state === void 0) { state = ''; }
                    this.firstName = firstName;
                    this.lastName = lastName;
                    this.email = email;
                    this.sendCatalog = sendCatalog;
                    this.addressType = addressType;
                    this.street1 = street1;
                    this.street2 = street2;
                    this.city = city;
                    this.state = state;
                    this.zip = zip;
                }
                return Customer;
            }());
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Angular ReactiveForms\Angular-ReactiveForms-master\Demo-Final\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map