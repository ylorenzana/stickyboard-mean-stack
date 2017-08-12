webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_user__ = __webpack_require__("../../../../../src/app/auth/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stickies_sticky__ = __webpack_require__("../../../../../src/app/stickies/sticky.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var API_URL = __WEBPACK_IMPORTED_MODULE_6_environments_environment__["a" /* environment */].apiUrl;
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (error) {
        console.error('ApiService::handleError', error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    ApiService.prototype.registerUser = function (user) {
        return this.http.post(API_URL + '/users', user)
            .map(function (response) {
            var user = response.json();
            localStorage.setItem('x-auth', user.tokens[0].token);
            return new __WEBPACK_IMPORTED_MODULE_7__auth_user__["a" /* User */](user);
        }).catch(this.handleError);
    };
    ApiService.prototype.loginUser = function (user) {
        return this.http.post(API_URL + '/users/login', user)
            .map(function (response) {
            var user = response.json();
            localStorage.setItem('x-auth', user.tokens[0].token);
            return new __WEBPACK_IMPORTED_MODULE_7__auth_user__["a" /* User */](user);
        }).catch(this.handleError);
    };
    ApiService.prototype.logoutUser = function () {
        var authToken = localStorage.getItem('x-auth');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('x-auth', authToken);
        return this.http.delete(API_URL + '/users/me/token', { headers: headers })
            .map(function (response) { return localStorage.removeItem('x-auth'); })
            .catch(this.handleError);
    };
    ApiService.prototype.getStickies = function () {
        var authToken = localStorage.getItem('x-auth');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('x-auth', authToken);
        return this.http.get(API_URL + '/stickies', { headers: headers })
            .map(function (response) {
            var stickies = response.json().stickies;
            return stickies.map(function (sticky) { return new __WEBPACK_IMPORTED_MODULE_8__stickies_sticky__["a" /* Sticky */](sticky); });
        }).catch(this.handleError);
    };
    ApiService.prototype.createSticky = function (sticky) {
        var authToken = localStorage.getItem('x-auth');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('x-auth', authToken);
        return this.http.post(API_URL + '/stickies', sticky, { headers: headers })
            .map(function (response) {
            return new __WEBPACK_IMPORTED_MODULE_8__stickies_sticky__["a" /* Sticky */](response.json());
        }).catch(this.handleError);
    };
    ApiService.prototype.updateSticky = function (sticky) {
        var authToken = localStorage.getItem('x-auth');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('x-auth', authToken);
        return this.http.patch(API_URL + '/stickies/' + sticky._id, sticky, { headers: headers })
            .map(function (response) {
            return new __WEBPACK_IMPORTED_MODULE_8__stickies_sticky__["a" /* Sticky */](response.json());
        }).catch(this.handleError);
    };
    ApiService.prototype.deleteStickyById = function (stickyId) {
        var authToken = localStorage.getItem('x-auth');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('x-auth', authToken);
        return this.http.delete(API_URL + '/stickies/' + stickyId, { headers: headers })
            .map(function (response) { return null; })
            .catch(this.handleError);
    };
    ApiService.prototype.deleteAllStickies = function () {
        var authToken = localStorage.getItem('x-auth');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('x-auth', authToken);
        return this.http.delete(API_URL + '/stickies', { headers: headers })
            .map(function (response) { return null; })
            .catch(this.handleError);
    };
    return ApiService;
}());
ApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'sb-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__stickies_sticky_service__ = __webpack_require__("../../../../../src/app/stickies/sticky.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_user_service__ = __webpack_require__("../../../../../src/app/auth/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stickies_sticky_header_component__ = __webpack_require__("../../../../../src/app/stickies/sticky-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stickies_sticky_list_component__ = __webpack_require__("../../../../../src/app/stickies/sticky-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stickies_sticky_list_item_component__ = __webpack_require__("../../../../../src/app/stickies/sticky-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_user_registration_component__ = __webpack_require__("../../../../../src/app/auth/user-registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__stickies_sticky_component__ = __webpack_require__("../../../../../src/app/stickies/sticky.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__auth_user_login_component__ = __webpack_require__("../../../../../src/app/auth/user-login.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_14__stickies_sticky_component__["a" /* StickyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__auth_auth_guard__["a" /* AuthGuard */]] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__auth_user_registration_component__["a" /* UserRegistrationComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_15__auth_user_login_component__["a" /* UserLoginComponent */] },
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__stickies_sticky_header_component__["a" /* StickyHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__stickies_sticky_list_component__["a" /* StickyListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__stickies_sticky_list_item_component__["a" /* StickyListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_13__auth_user_registration_component__["a" /* UserRegistrationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__stickies_sticky_component__["a" /* StickyComponent */],
            __WEBPACK_IMPORTED_MODULE_15__auth_user_login_component__["a" /* UserLoginComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__stickies_sticky_service__["a" /* StickyService */], __WEBPACK_IMPORTED_MODULE_7__auth_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_12__api_service__["a" /* ApiService */], __WEBPACK_IMPORTED_MODULE_8__auth_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('x-auth')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/auth/user-login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".floated-label-wrapper {\r\n  position: relative;\r\n}\r\n\r\n.floated-label-wrapper label {\r\n  background: #fefefe;\r\n  color: #1779ba;\r\n  font-size: 0.75rem;\r\n  font-weight: 600;\r\n  left: 0.75rem;\r\n  opacity: 0;\r\n  padding: 0 0.25rem;\r\n  position: absolute;\r\n  top: 2rem;\r\n  transition: all 0.15s ease-in;\r\n  z-index: -1;\r\n}\r\n\r\n.floated-label-wrapper label input[type=text],\r\n.floated-label-wrapper label input[type=email],\r\n.floated-label-wrapper label input[type=password] {\r\n  border-radius: 4px;\r\n  font-size: 1.75em;\r\n  padding: 0.5em;\r\n}\r\n\r\n.floated-label-wrapper label.show {\r\n  opacity: 1;\r\n  top: -0.85rem;\r\n  z-index: 1;\r\n  transition: all 0.15s ease-in;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\">\n  <div class=\"column text-center\">\n    <form class=\"callout text-center\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n      <h1>Login</h1>\n      <div class=\"floated-label-wrapper\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" id=\"email\" class =\"form-control\" formControlName=\"email\" placeholder=\"Email\">\n      </div>\n      <div class=\"floated-label-wrapper\">\n        <label for=\"pass\">Password</label>\n        <input type=\"password\" id=\"pass\" class =\"form-control\" formControlName=\"password\" placeholder=\"Password\">\n      </div>\n      <input class=\"button expanded\" type=\"submit\" [disabled]=\"!loginForm.valid\" value=\"Login\">\n      <span><a [routerLink]=\"['/register']\">No account? Register here.</a></span>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/auth/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/auth/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserLoginComponent = (function () {
    function UserLoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('x-auth');
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
        });
    };
    UserLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]({ email: this.loginForm.value.email, password: this.loginForm.value.password });
        this.userService.loginUser(user)
            .subscribe(function (user) {
            if (user.email) {
                _this.router.navigate(['']);
            }
        });
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'sb-user-login',
        template: __webpack_require__("../../../../../src/app/auth/user-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/auth/user-login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserLoginComponent);

var _a, _b;
//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/user-registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".floated-label-wrapper {\r\n  position: relative;\r\n}\r\n\r\n.floated-label-wrapper label {\r\n  background: #fefefe;\r\n  color: #1779ba;\r\n  font-size: 0.75rem;\r\n  font-weight: 600;\r\n  left: 0.75rem;\r\n  opacity: 0;\r\n  padding: 0 0.25rem;\r\n  position: absolute;\r\n  top: 2rem;\r\n  transition: all 0.15s ease-in;\r\n  z-index: -1;\r\n}\r\n\r\n.floated-label-wrapper label input[type=text],\r\n.floated-label-wrapper label input[type=email],\r\n.floated-label-wrapper label input[type=password] {\r\n  border-radius: 4px;\r\n  font-size: 1.75em;\r\n  padding: 0.5em;\r\n}\r\n\r\n.floated-label-wrapper label.show {\r\n  opacity: 1;\r\n  top: -0.85rem;\r\n  z-index: 1;\r\n  transition: all 0.15s ease-in;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/user-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row header\">\n  <div class=\"column text-center\">\n    <form class=\"callout text-center\" [formGroup]=\"registrationForm\" (ngSubmit)=\"onSubmit()\">\n      <h1>Sign Up</h1>\n      <div class=\"floated-label-wrapper\">\n        <label for=\"email\">Email</label>\n        <input type=\"email\" id=\"email\" class =\"form-control\" formControlName=\"email\" placeholder=\"Email\">\n      </div>\n      <div class=\"floated-label-wrapper\">\n        <label for=\"pass\">Password</label>\n        <input type=\"password\" id=\"pass\" class =\"form-control\" formControlName=\"password\" placeholder=\"Password\">\n      </div>\n      <input class=\"button expanded\" type=\"submit\" [disabled]=\"!registrationForm.valid\" value=\"Sign Up\">\n      <span><a [routerLink]=\"['/login']\">Already have an account? Login here.</a></span>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/user-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/auth/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/auth/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserRegistrationComponent = (function () {
    function UserRegistrationComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('x-auth');
        this.registrationForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
        });
    };
    UserRegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        var user = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]({ email: this.registrationForm.value.email, password: this.registrationForm.value.password });
        this.userService.registerUser(user)
            .subscribe(function (user) {
            if (user.email) {
                _this.router.navigate(['']);
            }
        });
    };
    return UserRegistrationComponent;
}());
UserRegistrationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'sb-user-registration',
        template: __webpack_require__("../../../../../src/app/auth/user-registration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css"), __webpack_require__("../../../../../src/app/auth/user-registration.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserRegistrationComponent);

var _a, _b;
//# sourceMappingURL=user-registration.component.js.map

/***/ }),

/***/ "../../../../../src/app/auth/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(api) {
        this.api = api;
    }
    UserService.prototype.registerUser = function (user) {
        return this.api.registerUser(user);
    };
    UserService.prototype.loginUser = function (user) {
        return this.api.loginUser(user);
    };
    UserService.prototype.setAuthToken = function (user) {
        localStorage.setItem('x-auth', user.tokens[0].token);
        console.log(this.getToken());
    };
    UserService.prototype.getToken = function () {
        return localStorage.getItem('x-auth');
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/auth/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/foundation-icons/foundation-icons.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* \n * Foundation Icons v 3.0\n * Made by ZURB 2013 http://zurb.com/playground/foundation-icon-fonts-3\n * MIT License\n */\n\n@font-face {\n  font-family: \"foundation-icons\";\n  src: url(" + __webpack_require__("../../../../../src/app/foundation-icons/foundation-icons.eot") + ");\n  src: url(" + __webpack_require__("../../../../../src/app/foundation-icons/foundation-icons.eot") + "?#iefix) format(\"embedded-opentype\"),\n       url(" + __webpack_require__("../../../../../src/app/foundation-icons/foundation-icons.woff") + ") format(\"woff\"),\n       url(" + __webpack_require__("../../../../../src/app/foundation-icons/foundation-icons.ttf") + ") format(\"truetype\"),\n       url(" + __webpack_require__("../../../../../src/app/foundation-icons/foundation-icons.svg") + "#fontcustom) format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n\n.fi-address-book:before,\n.fi-alert:before,\n.fi-align-center:before,\n.fi-align-justify:before,\n.fi-align-left:before,\n.fi-align-right:before,\n.fi-anchor:before,\n.fi-annotate:before,\n.fi-archive:before,\n.fi-arrow-down:before,\n.fi-arrow-left:before,\n.fi-arrow-right:before,\n.fi-arrow-up:before,\n.fi-arrows-compress:before,\n.fi-arrows-expand:before,\n.fi-arrows-in:before,\n.fi-arrows-out:before,\n.fi-asl:before,\n.fi-asterisk:before,\n.fi-at-sign:before,\n.fi-background-color:before,\n.fi-battery-empty:before,\n.fi-battery-full:before,\n.fi-battery-half:before,\n.fi-bitcoin-circle:before,\n.fi-bitcoin:before,\n.fi-blind:before,\n.fi-bluetooth:before,\n.fi-bold:before,\n.fi-book-bookmark:before,\n.fi-book:before,\n.fi-bookmark:before,\n.fi-braille:before,\n.fi-burst-new:before,\n.fi-burst-sale:before,\n.fi-burst:before,\n.fi-calendar:before,\n.fi-camera:before,\n.fi-check:before,\n.fi-checkbox:before,\n.fi-clipboard-notes:before,\n.fi-clipboard-pencil:before,\n.fi-clipboard:before,\n.fi-clock:before,\n.fi-closed-caption:before,\n.fi-cloud:before,\n.fi-comment-minus:before,\n.fi-comment-quotes:before,\n.fi-comment-video:before,\n.fi-comment:before,\n.fi-comments:before,\n.fi-compass:before,\n.fi-contrast:before,\n.fi-credit-card:before,\n.fi-crop:before,\n.fi-crown:before,\n.fi-css3:before,\n.fi-database:before,\n.fi-die-five:before,\n.fi-die-four:before,\n.fi-die-one:before,\n.fi-die-six:before,\n.fi-die-three:before,\n.fi-die-two:before,\n.fi-dislike:before,\n.fi-dollar-bill:before,\n.fi-dollar:before,\n.fi-download:before,\n.fi-eject:before,\n.fi-elevator:before,\n.fi-euro:before,\n.fi-eye:before,\n.fi-fast-forward:before,\n.fi-female-symbol:before,\n.fi-female:before,\n.fi-filter:before,\n.fi-first-aid:before,\n.fi-flag:before,\n.fi-folder-add:before,\n.fi-folder-lock:before,\n.fi-folder:before,\n.fi-foot:before,\n.fi-foundation:before,\n.fi-graph-bar:before,\n.fi-graph-horizontal:before,\n.fi-graph-pie:before,\n.fi-graph-trend:before,\n.fi-guide-dog:before,\n.fi-hearing-aid:before,\n.fi-heart:before,\n.fi-home:before,\n.fi-html5:before,\n.fi-indent-less:before,\n.fi-indent-more:before,\n.fi-info:before,\n.fi-italic:before,\n.fi-key:before,\n.fi-laptop:before,\n.fi-layout:before,\n.fi-lightbulb:before,\n.fi-like:before,\n.fi-link:before,\n.fi-list-bullet:before,\n.fi-list-number:before,\n.fi-list-thumbnails:before,\n.fi-list:before,\n.fi-lock:before,\n.fi-loop:before,\n.fi-magnifying-glass:before,\n.fi-mail:before,\n.fi-male-female:before,\n.fi-male-symbol:before,\n.fi-male:before,\n.fi-map:before,\n.fi-marker:before,\n.fi-megaphone:before,\n.fi-microphone:before,\n.fi-minus-circle:before,\n.fi-minus:before,\n.fi-mobile-signal:before,\n.fi-mobile:before,\n.fi-monitor:before,\n.fi-mountains:before,\n.fi-music:before,\n.fi-next:before,\n.fi-no-dogs:before,\n.fi-no-smoking:before,\n.fi-page-add:before,\n.fi-page-copy:before,\n.fi-page-csv:before,\n.fi-page-delete:before,\n.fi-page-doc:before,\n.fi-page-edit:before,\n.fi-page-export-csv:before,\n.fi-page-export-doc:before,\n.fi-page-export-pdf:before,\n.fi-page-export:before,\n.fi-page-filled:before,\n.fi-page-multiple:before,\n.fi-page-pdf:before,\n.fi-page-remove:before,\n.fi-page-search:before,\n.fi-page:before,\n.fi-paint-bucket:before,\n.fi-paperclip:before,\n.fi-pause:before,\n.fi-paw:before,\n.fi-paypal:before,\n.fi-pencil:before,\n.fi-photo:before,\n.fi-play-circle:before,\n.fi-play-video:before,\n.fi-play:before,\n.fi-plus:before,\n.fi-pound:before,\n.fi-power:before,\n.fi-previous:before,\n.fi-price-tag:before,\n.fi-pricetag-multiple:before,\n.fi-print:before,\n.fi-prohibited:before,\n.fi-projection-screen:before,\n.fi-puzzle:before,\n.fi-quote:before,\n.fi-record:before,\n.fi-refresh:before,\n.fi-results-demographics:before,\n.fi-results:before,\n.fi-rewind-ten:before,\n.fi-rewind:before,\n.fi-rss:before,\n.fi-safety-cone:before,\n.fi-save:before,\n.fi-share:before,\n.fi-sheriff-badge:before,\n.fi-shield:before,\n.fi-shopping-bag:before,\n.fi-shopping-cart:before,\n.fi-shuffle:before,\n.fi-skull:before,\n.fi-social-500px:before,\n.fi-social-adobe:before,\n.fi-social-amazon:before,\n.fi-social-android:before,\n.fi-social-apple:before,\n.fi-social-behance:before,\n.fi-social-bing:before,\n.fi-social-blogger:before,\n.fi-social-delicious:before,\n.fi-social-designer-news:before,\n.fi-social-deviant-art:before,\n.fi-social-digg:before,\n.fi-social-dribbble:before,\n.fi-social-drive:before,\n.fi-social-dropbox:before,\n.fi-social-evernote:before,\n.fi-social-facebook:before,\n.fi-social-flickr:before,\n.fi-social-forrst:before,\n.fi-social-foursquare:before,\n.fi-social-game-center:before,\n.fi-social-github:before,\n.fi-social-google-plus:before,\n.fi-social-hacker-news:before,\n.fi-social-hi5:before,\n.fi-social-instagram:before,\n.fi-social-joomla:before,\n.fi-social-lastfm:before,\n.fi-social-linkedin:before,\n.fi-social-medium:before,\n.fi-social-myspace:before,\n.fi-social-orkut:before,\n.fi-social-path:before,\n.fi-social-picasa:before,\n.fi-social-pinterest:before,\n.fi-social-rdio:before,\n.fi-social-reddit:before,\n.fi-social-skillshare:before,\n.fi-social-skype:before,\n.fi-social-smashing-mag:before,\n.fi-social-snapchat:before,\n.fi-social-spotify:before,\n.fi-social-squidoo:before,\n.fi-social-stack-overflow:before,\n.fi-social-steam:before,\n.fi-social-stumbleupon:before,\n.fi-social-treehouse:before,\n.fi-social-tumblr:before,\n.fi-social-twitter:before,\n.fi-social-vimeo:before,\n.fi-social-windows:before,\n.fi-social-xbox:before,\n.fi-social-yahoo:before,\n.fi-social-yelp:before,\n.fi-social-youtube:before,\n.fi-social-zerply:before,\n.fi-social-zurb:before,\n.fi-sound:before,\n.fi-star:before,\n.fi-stop:before,\n.fi-strikethrough:before,\n.fi-subscript:before,\n.fi-superscript:before,\n.fi-tablet-landscape:before,\n.fi-tablet-portrait:before,\n.fi-target-two:before,\n.fi-target:before,\n.fi-telephone-accessible:before,\n.fi-telephone:before,\n.fi-text-color:before,\n.fi-thumbnails:before,\n.fi-ticket:before,\n.fi-torso-business:before,\n.fi-torso-female:before,\n.fi-torso:before,\n.fi-torsos-all-female:before,\n.fi-torsos-all:before,\n.fi-torsos-female-male:before,\n.fi-torsos-male-female:before,\n.fi-torsos:before,\n.fi-trash:before,\n.fi-trees:before,\n.fi-trophy:before,\n.fi-underline:before,\n.fi-universal-access:before,\n.fi-unlink:before,\n.fi-unlock:before,\n.fi-upload-cloud:before,\n.fi-upload:before,\n.fi-usb:before,\n.fi-video:before,\n.fi-volume-none:before,\n.fi-volume-strike:before,\n.fi-volume:before,\n.fi-web:before,\n.fi-wheelchair:before,\n.fi-widget:before,\n.fi-wrench:before,\n.fi-x-circle:before,\n.fi-x:before,\n.fi-yen:before,\n.fi-zoom-in:before,\n.fi-zoom-out:before {\n  font-family: \"foundation-icons\";\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  text-decoration: inherit;\n}\n\n.fi-address-book:before { content: \"\\F100\"; }\n.fi-alert:before { content: \"\\F101\"; }\n.fi-align-center:before { content: \"\\F102\"; }\n.fi-align-justify:before { content: \"\\F103\"; }\n.fi-align-left:before { content: \"\\F104\"; }\n.fi-align-right:before { content: \"\\F105\"; }\n.fi-anchor:before { content: \"\\F106\"; }\n.fi-annotate:before { content: \"\\F107\"; }\n.fi-archive:before { content: \"\\F108\"; }\n.fi-arrow-down:before { content: \"\\F109\"; }\n.fi-arrow-left:before { content: \"\\F10A\"; }\n.fi-arrow-right:before { content: \"\\F10B\"; }\n.fi-arrow-up:before { content: \"\\F10C\"; }\n.fi-arrows-compress:before { content: \"\\F10D\"; }\n.fi-arrows-expand:before { content: \"\\F10E\"; }\n.fi-arrows-in:before { content: \"\\F10F\"; }\n.fi-arrows-out:before { content: \"\\F110\"; }\n.fi-asl:before { content: \"\\F111\"; }\n.fi-asterisk:before { content: \"\\F112\"; }\n.fi-at-sign:before { content: \"\\F113\"; }\n.fi-background-color:before { content: \"\\F114\"; }\n.fi-battery-empty:before { content: \"\\F115\"; }\n.fi-battery-full:before { content: \"\\F116\"; }\n.fi-battery-half:before { content: \"\\F117\"; }\n.fi-bitcoin-circle:before { content: \"\\F118\"; }\n.fi-bitcoin:before { content: \"\\F119\"; }\n.fi-blind:before { content: \"\\F11A\"; }\n.fi-bluetooth:before { content: \"\\F11B\"; }\n.fi-bold:before { content: \"\\F11C\"; }\n.fi-book-bookmark:before { content: \"\\F11D\"; }\n.fi-book:before { content: \"\\F11E\"; }\n.fi-bookmark:before { content: \"\\F11F\"; }\n.fi-braille:before { content: \"\\F120\"; }\n.fi-burst-new:before { content: \"\\F121\"; }\n.fi-burst-sale:before { content: \"\\F122\"; }\n.fi-burst:before { content: \"\\F123\"; }\n.fi-calendar:before { content: \"\\F124\"; }\n.fi-camera:before { content: \"\\F125\"; }\n.fi-check:before { content: \"\\F126\"; }\n.fi-checkbox:before { content: \"\\F127\"; }\n.fi-clipboard-notes:before { content: \"\\F128\"; }\n.fi-clipboard-pencil:before { content: \"\\F129\"; }\n.fi-clipboard:before { content: \"\\F12A\"; }\n.fi-clock:before { content: \"\\F12B\"; }\n.fi-closed-caption:before { content: \"\\F12C\"; }\n.fi-cloud:before { content: \"\\F12D\"; }\n.fi-comment-minus:before { content: \"\\F12E\"; }\n.fi-comment-quotes:before { content: \"\\F12F\"; }\n.fi-comment-video:before { content: \"\\F130\"; }\n.fi-comment:before { content: \"\\F131\"; }\n.fi-comments:before { content: \"\\F132\"; }\n.fi-compass:before { content: \"\\F133\"; }\n.fi-contrast:before { content: \"\\F134\"; }\n.fi-credit-card:before { content: \"\\F135\"; }\n.fi-crop:before { content: \"\\F136\"; }\n.fi-crown:before { content: \"\\F137\"; }\n.fi-css3:before { content: \"\\F138\"; }\n.fi-database:before { content: \"\\F139\"; }\n.fi-die-five:before { content: \"\\F13A\"; }\n.fi-die-four:before { content: \"\\F13B\"; }\n.fi-die-one:before { content: \"\\F13C\"; }\n.fi-die-six:before { content: \"\\F13D\"; }\n.fi-die-three:before { content: \"\\F13E\"; }\n.fi-die-two:before { content: \"\\F13F\"; }\n.fi-dislike:before { content: \"\\F140\"; }\n.fi-dollar-bill:before { content: \"\\F141\"; }\n.fi-dollar:before { content: \"\\F142\"; }\n.fi-download:before { content: \"\\F143\"; }\n.fi-eject:before { content: \"\\F144\"; }\n.fi-elevator:before { content: \"\\F145\"; }\n.fi-euro:before { content: \"\\F146\"; }\n.fi-eye:before { content: \"\\F147\"; }\n.fi-fast-forward:before { content: \"\\F148\"; }\n.fi-female-symbol:before { content: \"\\F149\"; }\n.fi-female:before { content: \"\\F14A\"; }\n.fi-filter:before { content: \"\\F14B\"; }\n.fi-first-aid:before { content: \"\\F14C\"; }\n.fi-flag:before { content: \"\\F14D\"; }\n.fi-folder-add:before { content: \"\\F14E\"; }\n.fi-folder-lock:before { content: \"\\F14F\"; }\n.fi-folder:before { content: \"\\F150\"; }\n.fi-foot:before { content: \"\\F151\"; }\n.fi-foundation:before { content: \"\\F152\"; }\n.fi-graph-bar:before { content: \"\\F153\"; }\n.fi-graph-horizontal:before { content: \"\\F154\"; }\n.fi-graph-pie:before { content: \"\\F155\"; }\n.fi-graph-trend:before { content: \"\\F156\"; }\n.fi-guide-dog:before { content: \"\\F157\"; }\n.fi-hearing-aid:before { content: \"\\F158\"; }\n.fi-heart:before { content: \"\\F159\"; }\n.fi-home:before { content: \"\\F15A\"; }\n.fi-html5:before { content: \"\\F15B\"; }\n.fi-indent-less:before { content: \"\\F15C\"; }\n.fi-indent-more:before { content: \"\\F15D\"; }\n.fi-info:before { content: \"\\F15E\"; }\n.fi-italic:before { content: \"\\F15F\"; }\n.fi-key:before { content: \"\\F160\"; }\n.fi-laptop:before { content: \"\\F161\"; }\n.fi-layout:before { content: \"\\F162\"; }\n.fi-lightbulb:before { content: \"\\F163\"; }\n.fi-like:before { content: \"\\F164\"; }\n.fi-link:before { content: \"\\F165\"; }\n.fi-list-bullet:before { content: \"\\F166\"; }\n.fi-list-number:before { content: \"\\F167\"; }\n.fi-list-thumbnails:before { content: \"\\F168\"; }\n.fi-list:before { content: \"\\F169\"; }\n.fi-lock:before { content: \"\\F16A\"; }\n.fi-loop:before { content: \"\\F16B\"; }\n.fi-magnifying-glass:before { content: \"\\F16C\"; }\n.fi-mail:before { content: \"\\F16D\"; }\n.fi-male-female:before { content: \"\\F16E\"; }\n.fi-male-symbol:before { content: \"\\F16F\"; }\n.fi-male:before { content: \"\\F170\"; }\n.fi-map:before { content: \"\\F171\"; }\n.fi-marker:before { content: \"\\F172\"; }\n.fi-megaphone:before { content: \"\\F173\"; }\n.fi-microphone:before { content: \"\\F174\"; }\n.fi-minus-circle:before { content: \"\\F175\"; }\n.fi-minus:before { content: \"\\F176\"; }\n.fi-mobile-signal:before { content: \"\\F177\"; }\n.fi-mobile:before { content: \"\\F178\"; }\n.fi-monitor:before { content: \"\\F179\"; }\n.fi-mountains:before { content: \"\\F17A\"; }\n.fi-music:before { content: \"\\F17B\"; }\n.fi-next:before { content: \"\\F17C\"; }\n.fi-no-dogs:before { content: \"\\F17D\"; }\n.fi-no-smoking:before { content: \"\\F17E\"; }\n.fi-page-add:before { content: \"\\F17F\"; }\n.fi-page-copy:before { content: \"\\F180\"; }\n.fi-page-csv:before { content: \"\\F181\"; }\n.fi-page-delete:before { content: \"\\F182\"; }\n.fi-page-doc:before { content: \"\\F183\"; }\n.fi-page-edit:before { content: \"\\F184\"; }\n.fi-page-export-csv:before { content: \"\\F185\"; }\n.fi-page-export-doc:before { content: \"\\F186\"; }\n.fi-page-export-pdf:before { content: \"\\F187\"; }\n.fi-page-export:before { content: \"\\F188\"; }\n.fi-page-filled:before { content: \"\\F189\"; }\n.fi-page-multiple:before { content: \"\\F18A\"; }\n.fi-page-pdf:before { content: \"\\F18B\"; }\n.fi-page-remove:before { content: \"\\F18C\"; }\n.fi-page-search:before { content: \"\\F18D\"; }\n.fi-page:before { content: \"\\F18E\"; }\n.fi-paint-bucket:before { content: \"\\F18F\"; }\n.fi-paperclip:before { content: \"\\F190\"; }\n.fi-pause:before { content: \"\\F191\"; }\n.fi-paw:before { content: \"\\F192\"; }\n.fi-paypal:before { content: \"\\F193\"; }\n.fi-pencil:before { content: \"\\F194\"; }\n.fi-photo:before { content: \"\\F195\"; }\n.fi-play-circle:before { content: \"\\F196\"; }\n.fi-play-video:before { content: \"\\F197\"; }\n.fi-play:before { content: \"\\F198\"; }\n.fi-plus:before { content: \"\\F199\"; }\n.fi-pound:before { content: \"\\F19A\"; }\n.fi-power:before { content: \"\\F19B\"; }\n.fi-previous:before { content: \"\\F19C\"; }\n.fi-price-tag:before { content: \"\\F19D\"; }\n.fi-pricetag-multiple:before { content: \"\\F19E\"; }\n.fi-print:before { content: \"\\F19F\"; }\n.fi-prohibited:before { content: \"\\F1A0\"; }\n.fi-projection-screen:before { content: \"\\F1A1\"; }\n.fi-puzzle:before { content: \"\\F1A2\"; }\n.fi-quote:before { content: \"\\F1A3\"; }\n.fi-record:before { content: \"\\F1A4\"; }\n.fi-refresh:before { content: \"\\F1A5\"; }\n.fi-results-demographics:before { content: \"\\F1A6\"; }\n.fi-results:before { content: \"\\F1A7\"; }\n.fi-rewind-ten:before { content: \"\\F1A8\"; }\n.fi-rewind:before { content: \"\\F1A9\"; }\n.fi-rss:before { content: \"\\F1AA\"; }\n.fi-safety-cone:before { content: \"\\F1AB\"; }\n.fi-save:before { content: \"\\F1AC\"; }\n.fi-share:before { content: \"\\F1AD\"; }\n.fi-sheriff-badge:before { content: \"\\F1AE\"; }\n.fi-shield:before { content: \"\\F1AF\"; }\n.fi-shopping-bag:before { content: \"\\F1B0\"; }\n.fi-shopping-cart:before { content: \"\\F1B1\"; }\n.fi-shuffle:before { content: \"\\F1B2\"; }\n.fi-skull:before { content: \"\\F1B3\"; }\n.fi-social-500px:before { content: \"\\F1B4\"; }\n.fi-social-adobe:before { content: \"\\F1B5\"; }\n.fi-social-amazon:before { content: \"\\F1B6\"; }\n.fi-social-android:before { content: \"\\F1B7\"; }\n.fi-social-apple:before { content: \"\\F1B8\"; }\n.fi-social-behance:before { content: \"\\F1B9\"; }\n.fi-social-bing:before { content: \"\\F1BA\"; }\n.fi-social-blogger:before { content: \"\\F1BB\"; }\n.fi-social-delicious:before { content: \"\\F1BC\"; }\n.fi-social-designer-news:before { content: \"\\F1BD\"; }\n.fi-social-deviant-art:before { content: \"\\F1BE\"; }\n.fi-social-digg:before { content: \"\\F1BF\"; }\n.fi-social-dribbble:before { content: \"\\F1C0\"; }\n.fi-social-drive:before { content: \"\\F1C1\"; }\n.fi-social-dropbox:before { content: \"\\F1C2\"; }\n.fi-social-evernote:before { content: \"\\F1C3\"; }\n.fi-social-facebook:before { content: \"\\F1C4\"; }\n.fi-social-flickr:before { content: \"\\F1C5\"; }\n.fi-social-forrst:before { content: \"\\F1C6\"; }\n.fi-social-foursquare:before { content: \"\\F1C7\"; }\n.fi-social-game-center:before { content: \"\\F1C8\"; }\n.fi-social-github:before { content: \"\\F1C9\"; }\n.fi-social-google-plus:before { content: \"\\F1CA\"; }\n.fi-social-hacker-news:before { content: \"\\F1CB\"; }\n.fi-social-hi5:before { content: \"\\F1CC\"; }\n.fi-social-instagram:before { content: \"\\F1CD\"; }\n.fi-social-joomla:before { content: \"\\F1CE\"; }\n.fi-social-lastfm:before { content: \"\\F1CF\"; }\n.fi-social-linkedin:before { content: \"\\F1D0\"; }\n.fi-social-medium:before { content: \"\\F1D1\"; }\n.fi-social-myspace:before { content: \"\\F1D2\"; }\n.fi-social-orkut:before { content: \"\\F1D3\"; }\n.fi-social-path:before { content: \"\\F1D4\"; }\n.fi-social-picasa:before { content: \"\\F1D5\"; }\n.fi-social-pinterest:before { content: \"\\F1D6\"; }\n.fi-social-rdio:before { content: \"\\F1D7\"; }\n.fi-social-reddit:before { content: \"\\F1D8\"; }\n.fi-social-skillshare:before { content: \"\\F1D9\"; }\n.fi-social-skype:before { content: \"\\F1DA\"; }\n.fi-social-smashing-mag:before { content: \"\\F1DB\"; }\n.fi-social-snapchat:before { content: \"\\F1DC\"; }\n.fi-social-spotify:before { content: \"\\F1DD\"; }\n.fi-social-squidoo:before { content: \"\\F1DE\"; }\n.fi-social-stack-overflow:before { content: \"\\F1DF\"; }\n.fi-social-steam:before { content: \"\\F1E0\"; }\n.fi-social-stumbleupon:before { content: \"\\F1E1\"; }\n.fi-social-treehouse:before { content: \"\\F1E2\"; }\n.fi-social-tumblr:before { content: \"\\F1E3\"; }\n.fi-social-twitter:before { content: \"\\F1E4\"; }\n.fi-social-vimeo:before { content: \"\\F1E5\"; }\n.fi-social-windows:before { content: \"\\F1E6\"; }\n.fi-social-xbox:before { content: \"\\F1E7\"; }\n.fi-social-yahoo:before { content: \"\\F1E8\"; }\n.fi-social-yelp:before { content: \"\\F1E9\"; }\n.fi-social-youtube:before { content: \"\\F1EA\"; }\n.fi-social-zerply:before { content: \"\\F1EB\"; }\n.fi-social-zurb:before { content: \"\\F1EC\"; }\n.fi-sound:before { content: \"\\F1ED\"; }\n.fi-star:before { content: \"\\F1EE\"; }\n.fi-stop:before { content: \"\\F1EF\"; }\n.fi-strikethrough:before { content: \"\\F1F0\"; }\n.fi-subscript:before { content: \"\\F1F1\"; }\n.fi-superscript:before { content: \"\\F1F2\"; }\n.fi-tablet-landscape:before { content: \"\\F1F3\"; }\n.fi-tablet-portrait:before { content: \"\\F1F4\"; }\n.fi-target-two:before { content: \"\\F1F5\"; }\n.fi-target:before { content: \"\\F1F6\"; }\n.fi-telephone-accessible:before { content: \"\\F1F7\"; }\n.fi-telephone:before { content: \"\\F1F8\"; }\n.fi-text-color:before { content: \"\\F1F9\"; }\n.fi-thumbnails:before { content: \"\\F1FA\"; }\n.fi-ticket:before { content: \"\\F1FB\"; }\n.fi-torso-business:before { content: \"\\F1FC\"; }\n.fi-torso-female:before { content: \"\\F1FD\"; }\n.fi-torso:before { content: \"\\F1FE\"; }\n.fi-torsos-all-female:before { content: \"\\F1FF\"; }\n.fi-torsos-all:before { content: \"\\F200\"; }\n.fi-torsos-female-male:before { content: \"\\F201\"; }\n.fi-torsos-male-female:before { content: \"\\F202\"; }\n.fi-torsos:before { content: \"\\F203\"; }\n.fi-trash:before { content: \"\\F204\"; }\n.fi-trees:before { content: \"\\F205\"; }\n.fi-trophy:before { content: \"\\F206\"; }\n.fi-underline:before { content: \"\\F207\"; }\n.fi-universal-access:before { content: \"\\F208\"; }\n.fi-unlink:before { content: \"\\F209\"; }\n.fi-unlock:before { content: \"\\F20A\"; }\n.fi-upload-cloud:before { content: \"\\F20B\"; }\n.fi-upload:before { content: \"\\F20C\"; }\n.fi-usb:before { content: \"\\F20D\"; }\n.fi-video:before { content: \"\\F20E\"; }\n.fi-volume-none:before { content: \"\\F20F\"; }\n.fi-volume-strike:before { content: \"\\F210\"; }\n.fi-volume:before { content: \"\\F211\"; }\n.fi-web:before { content: \"\\F212\"; }\n.fi-wheelchair:before { content: \"\\F213\"; }\n.fi-widget:before { content: \"\\F214\"; }\n.fi-wrench:before { content: \"\\F215\"; }\n.fi-x-circle:before { content: \"\\F216\"; }\n.fi-x:before { content: \"\\F217\"; }\n.fi-yen:before { content: \"\\F218\"; }\n.fi-zoom-in:before { content: \"\\F219\"; }\n.fi-zoom-out:before { content: \"\\F21A\"; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/foundation-icons/foundation-icons.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "foundation-icons.92827f088b9eda87169b.eot";

/***/ }),

/***/ "../../../../../src/app/foundation-icons/foundation-icons.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "foundation-icons.17cb1ed2e8467b51bb26.svg";

/***/ }),

/***/ "../../../../../src/app/foundation-icons/foundation-icons.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "foundation-icons.e20945d7c929279ef7a6.ttf";

/***/ }),

/***/ "../../../../../src/app/foundation-icons/foundation-icons.woff":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "foundation-icons.a188c2f768ce5033d3f5.woff";

/***/ }),

/***/ "../../../../../src/app/stickies/sticky-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#clear {\r\n  font-size:25px;\r\n  color: #8a8a8a;\r\n}\r\n\r\n#clear:hover {\r\n  color: #0a0a0a;\r\n}\r\n\r\n#sticky-input{\r\n  font-family: \"myriad-pro\", sans-serif;\r\n  font-weight: 300;\r\n}\r\n\r\n.close-button a { \r\n  color: #e22626;\r\n}\r\n\r\n#logo {\r\n  width: 500px;\r\n  margin-bottom: 1rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stickies/sticky-header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"row header\">\n  <div class=\"column text-center\">\n    <img id=\"logo\" title=\"Special thanks to Gabriel Alvarez for the logo\" src=\"assets/stickyboard-logo.png\">\n    <span class=\"clear-button-alert small close-button\"><a [routerLink]=\"['login']\" (click)=\"logoutUser()\">logout</a></span>\n    <div class=\"input-group\">\n      <span id=\"clear\" class=\"input-group-label\" title=\"Delete all\" (click)=\"removeAllStickies()\"><i class=\"fi-trash\"></i></span>\n      <input id=\"sticky-input\" class=\"input-group-field\" type=\"text\" placeholder=\"What is your main focus for today?\" autofocus=\"\" [(ngModel)]=\"newSticky.text\" (keyup.enter)=\"addSticky()\"/>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "../../../../../src/app/stickies/sticky-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sticky__ = __webpack_require__("../../../../../src/app/stickies/sticky.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickyHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StickyHeaderComponent = (function () {
    function StickyHeaderComponent() {
        this.title = 'stickyboard';
        this.newSticky = new __WEBPACK_IMPORTED_MODULE_1__sticky__["a" /* Sticky */]();
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.removeAll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.logout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    StickyHeaderComponent.prototype.addSticky = function () {
        if (!this.newSticky.text) {
            return;
        }
        this.add.emit(this.newSticky);
        this.newSticky = new __WEBPACK_IMPORTED_MODULE_1__sticky__["a" /* Sticky */]();
    };
    StickyHeaderComponent.prototype.removeAllStickies = function () {
        this.removeAll.emit();
    };
    StickyHeaderComponent.prototype.logoutUser = function () {
        this.logout.emit();
    };
    StickyHeaderComponent.prototype.ngOnInit = function () {
    };
    return StickyHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], StickyHeaderComponent.prototype, "add", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], StickyHeaderComponent.prototype, "removeAll", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _c || Object)
], StickyHeaderComponent.prototype, "logout", void 0);
StickyHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'sb-sticky-header',
        template: __webpack_require__("../../../../../src/app/stickies/sticky-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/foundation-icons/foundation-icons.css"), __webpack_require__("../../../../../src/app/stickies/sticky-header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StickyHeaderComponent);

var _a, _b, _c;
//# sourceMappingURL=sticky-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/stickies/sticky-list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sticky {\r\n  background-color:#FFFFA5;\r\n  text-align: center;\r\n  font-family: \"myriad-pro\", sans-serif;\r\n  font-weight: 600;\r\n  font-size: 1.3rem;\r\n  line-height: 50px;\r\n  margin-bottom: .9375rem;\r\n  margin-top: .9375rem;\r\n  box-sizing: content-box;\r\n  box-shadow: 9px 9px 9px -9px rgba(41,37,41,0.57);\r\n  word-wrap: break-word;\r\n}\r\n\r\n#trash {\r\n  font-size: 17px;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 3.5px;\r\n}\r\n\r\n#check {\r\n  color: #8a8a8a;\r\n  font-size: 17px;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 16.5px;\r\n  margin: 3.5px;\r\n}\r\n\r\n#check:hover {\r\n  color: #0a0a0a;\r\n}\r\n\r\n.checked {\r\n  color: #0a0a0a;\r\n}\r\n\r\n.completed {\r\n  background-color: rgba(206, 206, 206,0.4);\r\n  color: rgb(170, 170, 170);\r\n  box-shadow: none;\r\n}\r\n\r\n.completed span {\r\n   text-decoration: line-through;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stickies/sticky-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"callout sticky\" [class.completed]=\"sticky.isCompleted\">\n  <span>{{sticky.text}}</span>\n  <button class=\"close-button\" id=\"trash\" (click)=\"removeSticky(sticky)\"><i class=\"fi-trash\"></i></button>\n  <button class=\"close-button\" id=\"check\" [class.checked]=\"sticky.isCompleted\" (click)=\"toggleComplete(sticky)\"><i class=\"fi-check\"></i></button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/stickies/sticky-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sticky__ = __webpack_require__("../../../../../src/app/stickies/sticky.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickyListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StickyListItemComponent = (function () {
    function StickyListItemComponent() {
        this.toggleStickyComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    StickyListItemComponent.prototype.ngOnInit = function () {
    };
    StickyListItemComponent.prototype.toggleComplete = function (sticky) {
        this.toggleStickyComplete.emit(sticky);
    };
    StickyListItemComponent.prototype.removeSticky = function (sticky) {
        this.remove.emit(sticky);
    };
    return StickyListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__sticky__["a" /* Sticky */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__sticky__["a" /* Sticky */]) === "function" && _a || Object)
], StickyListItemComponent.prototype, "sticky", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], StickyListItemComponent.prototype, "toggleStickyComplete", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _c || Object)
], StickyListItemComponent.prototype, "remove", void 0);
StickyListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'sb-sticky-list-item',
        template: __webpack_require__("../../../../../src/app/stickies/sticky-list-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/foundation-icons/foundation-icons.css"), __webpack_require__("../../../../../src/app/stickies/sticky-list-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StickyListItemComponent);

var _a, _b, _c;
//# sourceMappingURL=sticky-list-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/stickies/sticky-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row small-up-1 medium-up-5 large-up-6\" *ngIf='stickies.length > 0'>\n  <div class=\"column\" *ngFor = \"let sticky of stickies\" [class.completed]=\"sticky.isCompleted\">\n    <sb-sticky-list-item [sticky]=\"sticky\" (toggleStickyComplete)=\"onToggleComplete($event)\" (remove)=\"onRemoveSticky($event)\"></sb-sticky-list-item>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/stickies/sticky-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickyListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StickyListComponent = (function () {
    function StickyListComponent() {
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.toggleComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    StickyListComponent.prototype.ngOnInit = function () {
    };
    StickyListComponent.prototype.onToggleComplete = function (sticky) {
        this.toggleComplete.emit(sticky);
    };
    StickyListComponent.prototype.onRemoveSticky = function (sticky) {
        this.remove.emit(sticky);
    };
    return StickyListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], StickyListComponent.prototype, "stickies", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], StickyListComponent.prototype, "remove", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], StickyListComponent.prototype, "toggleComplete", void 0);
StickyListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'sb-sticky-list',
        template: __webpack_require__("../../../../../src/app/stickies/sticky-list.component.html"),
    }),
    __metadata("design:paramtypes", [])
], StickyListComponent);

var _a, _b;
//# sourceMappingURL=sticky-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/stickies/sticky.component.html":
/***/ (function(module, exports) {

module.exports = "<sb-sticky-header (add)=\"onAddSticky($event)\" (removeAll)=\"onRemoveAllStickies()\" (logout)=\"onLogout()\"></sb-sticky-header>\n<sb-sticky-list [stickies]=\"stickies\" (toggleComplete)=\"onToggleComplete($event)\" (remove)=\"onRemoveSticky($event)\"></sb-sticky-list>"

/***/ }),

/***/ "../../../../../src/app/stickies/sticky.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sticky_service__ = __webpack_require__("../../../../../src/app/stickies/sticky.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StickyComponent = (function () {
    function StickyComponent(stickyService, router) {
        this.stickyService = stickyService;
        this.router = router;
        this.stickies = [];
    }
    StickyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stickyService.getStickies()
            .subscribe(function (stickies) {
            _this.stickies = stickies;
        });
    };
    StickyComponent.prototype.onAddSticky = function (sticky) {
        var _this = this;
        this.stickyService.addSticky(sticky)
            .subscribe(function (newSticky) {
            _this.stickies = _this.stickies.concat(newSticky);
        });
    };
    StickyComponent.prototype.onToggleComplete = function (sticky) {
        this.stickyService.toggleComplete(sticky)
            .subscribe(function (updatedSticky) {
            sticky = updatedSticky;
        });
    };
    StickyComponent.prototype.onRemoveSticky = function (sticky) {
        var _this = this;
        this.stickyService.removeSticky(sticky._id)
            .subscribe(function () {
            _this.stickies = _this.stickies.filter(function (s) { return s._id !== sticky._id; });
        });
    };
    StickyComponent.prototype.onRemoveAllStickies = function () {
        var _this = this;
        this.stickyService.removeAllStickies()
            .subscribe(function () { return _this.stickies.length = 0; });
    };
    StickyComponent.prototype.onLogout = function () {
        this.stickyService.logoutUser()
            .subscribe();
    };
    return StickyComponent;
}());
StickyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'sb-sticky',
        template: __webpack_require__("../../../../../src/app/stickies/sticky.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__sticky_service__["a" /* StickyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__sticky_service__["a" /* StickyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], StickyComponent);

var _a, _b;
//# sourceMappingURL=sticky.component.js.map

/***/ }),

/***/ "../../../../../src/app/stickies/sticky.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/api.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StickyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StickyService = (function () {
    function StickyService(api) {
        this.api = api;
    }
    StickyService.prototype.getStickies = function () {
        return this.api.getStickies();
    };
    StickyService.prototype.addSticky = function (sticky) {
        if (!sticky) {
            return null;
        }
        return this.api.createSticky(sticky);
    };
    StickyService.prototype.removeSticky = function (stickyId) {
        return this.api.deleteStickyById(stickyId);
    };
    StickyService.prototype.removeAllStickies = function () {
        return this.api.deleteAllStickies();
    };
    StickyService.prototype.updateSticky = function (sticky) {
        return this.api.updateSticky(sticky);
    };
    StickyService.prototype.toggleComplete = function (sticky) {
        sticky.isCompleted = !sticky.isCompleted;
        return this.api.updateSticky(sticky);
    };
    StickyService.prototype.logoutUser = function () {
        return this.api.logoutUser();
    };
    return StickyService;
}());
StickyService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], StickyService);

var _a;
//# sourceMappingURL=sticky.service.js.map

/***/ }),

/***/ "../../../../../src/app/stickies/sticky.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sticky; });
var Sticky = (function () {
    function Sticky(values) {
        if (values === void 0) { values = {}; }
        this.text = '';
        this.isCompleted = false;
        Object.assign(this, values);
    }
    return Sticky;
}());

//# sourceMappingURL=sticky.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiUrl: 'http://localhost:1337'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map