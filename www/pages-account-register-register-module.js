(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-register-register-module"],{

/***/ "./src/app/pages/account/register/register.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/account/register/register.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/account/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/account/register/register.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/account/register/register.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"openSidemenu()\" disabled>\n        <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>Registrierung</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"goBack()\" disabled>\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    \n    <ion-card-content>\n      <form #form=\"ngForm\" (ngSubmit)=\"register(form)\">\n      <ion-item>\n        <ion-label position=\"floating\">Anzeigename:</ion-label>\n        <ion-input name=\"name\" ngModel required placeholder='Wird anderen Nutzern angezeigt' maxlength='32' type='text'></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label position=\"floating\">Mail-Adresse:</ion-label>\n        <ion-input type=\"email\" name=\"email\" ngModel required placeholder='Login-Kennung'></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label position=\"stacked\">Passwort:</ion-label>\n        <ion-input type=\"password\" name=\"password\" ngModel required></ion-input>\n      </ion-item>\n      \n      <ion-item>\n        <ion-label position=\"stacked\">Passwort wiederholen:</ion-label>\n        <ion-input type=\"password\" name=\"confirm\" ngModel required></ion-input>\n      </ion-item>\n      \n      <!-- TODO:\n        Hier muss noch ein Captcha hin! :D\n        Hier muss noch ein Zustimmen der Datenschutzerklärung hin! :D\n        Hier muss ein Bestätigen der AGB hin! :D -->\n      <ion-label color=\"danger\">\n        <p *ngIf=\"validation.invalid\">{{validation.message}}</p>\n      </ion-label>\n        <ion-button type=\"submit\" expand=\"block\" color=\"secondary\">Registrieren</ion-button>\n    </form>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-card>\n    <ion-card-content>\n      <ion-label>Du hast bereits einen Account?</ion-label>\n      <ion-button expand=\"block\" (click)=\"nav.navigateLogin('home')\" color=\"secondary\">Weiter zum Login</ion-button>    \n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/account/register/register.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/account/register/register.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/account/register/register.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/account/register/register.page.ts ***!
  \*********************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");




var RegisterPage = /** @class */ (function () {
    function RegisterPage(nav, backendService) {
        this.nav = nav;
        this.backendService = backendService;
        this.validation = {
            invalid: false,
            message: ""
        };
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage.prototype.register = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, request;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                result = form.value;
                this.validation = {
                    invalid: false,
                    message: ""
                };
                if (result.password === '' || result.confirm === '' || result.name === '' || result.email === '') {
                    this.validation = {
                        invalid: true,
                        message: "Deine Eingabe ist nicht vollständig"
                    };
                }
                else {
                    if (result.password !== result.confirm) {
                        this.validation = {
                            invalid: true,
                            message: "Die Passworteingabe stimmt nicht überein"
                        };
                    }
                    else {
                        request = this.backendService.register(result.name, result.email, result.password, result.confirm);
                        request.then(function (ret) {
                            if (!ret.success) {
                                console.log("Database Feedback: ", ret.error);
                                _this.validation = {
                                    invalid: true,
                                    message: ret.error
                                };
                            }
                            else {
                                _this.nav.navigateForward('tutorialmenu');
                            }
                        }, function (err) {
                            console.error(err);
                        });
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/account/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/account/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-register-register-module.js.map