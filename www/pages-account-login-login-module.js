(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-login-login-module"],{

/***/ "./src/app/pages/account/login/login.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/account/login/login.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/account/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/account/login/login.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/account/login/login.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\n    <ion-title>Login</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goBack()\" disabled>\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>\n        Gib deine Login-Daten ein:\n      </ion-card-title>\n    </ion-card-header>\n    \n    <ion-card-content>\n      <form #form=\"ngForm\" (ngSubmit)=\"login(form)\">\n      \n      <ion-item>\n        <ion-label position=\"floating\">Mail-Adresse:</ion-label>\n        <ion-input type=\"email\" name=\"email\" ngModel required></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label position=\"floating\">Passwort:</ion-label>\n        <ion-input type=\"password\" name=\"password\" ngModel required></ion-input>\n      </ion-item>\n      \n      <ion-label color=\"danger\">\n        <p *ngIf=\"validation.invalid\">{{validation.message}}</p>\n      </ion-label>\n      <ion-button type=\"submit\" expand=\"block\" color=\"secondary\">Anmelden</ion-button>\n    </form>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-card-content>\n      <ion-label>Du hast noch keinen Account?</ion-label>\n      <ion-button expand=\"block\" (click)=\"nav.navigateForward('register')\" color=\"secondary\">Weiter zur Registrierung</ion-button>    \n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/account/login/login.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/account/login/login.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvbG9naW4vbG9naW4ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/account/login/login.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/account/login/login.page.ts ***!
  \***************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");




var LoginPage = /** @class */ (function () {
    function LoginPage(nav, backendservice) {
        this.nav = nav;
        this.backendservice = backendservice;
        this.validation = {
            invalid: false,
            message: ""
        };
    }
    LoginPage.prototype.ngOnInit = function () { };
    LoginPage.prototype.login = function (form) {
        var _this = this;
        var result = form.value;
        this.validation = {
            invalid: false,
            message: ""
        };
        if (result.email === '' || result.password === '') {
            this.validation = {
                invalid: true,
                message: "Du musst eine etwas in den Feldern der E-Mail Adresse und des Passwortes angeben."
            };
            return;
        }
        var request = this.backendservice.login(result.email, result.password);
        request.then(function (ret) {
            if (!ret.success) {
                //console.log("Database Feedback: ", ret.error);
                _this.validation = {
                    invalid: true,
                    message: ret.error
                };
            }
            else {
                _this.nav.navigateLeafLogin();
            }
        }, function (err) {
            console.error(err);
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/account/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/account/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-login-login-module.js.map