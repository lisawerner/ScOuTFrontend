(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-accountsettings-accountsettings-module"],{

/***/ "./src/app/pages/account/accountsettings/accountsettings.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/accountsettings/accountsettings.module.ts ***!
  \*************************************************************************/
/*! exports provided: AccountsettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsettingsPageModule", function() { return AccountsettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _accountsettings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accountsettings.page */ "./src/app/pages/account/accountsettings/accountsettings.page.ts");







var routes = [
    {
        path: '',
        component: _accountsettings_page__WEBPACK_IMPORTED_MODULE_6__["AccountsettingsPage"]
    }
];
var AccountsettingsPageModule = /** @class */ (function () {
    function AccountsettingsPageModule() {
    }
    AccountsettingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_accountsettings_page__WEBPACK_IMPORTED_MODULE_6__["AccountsettingsPage"]]
        })
    ], AccountsettingsPageModule);
    return AccountsettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/account/accountsettings/accountsettings.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/accountsettings/accountsettings.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Deine Account</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"nav.goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card *ngIf='isLoggedIn'>\n    <ion-card-header>\n      <ion-card-title>Du bist eingeloggt als:</ion-card-title>\n    </ion-card-header>\n    <ion-card-content *ngIf='user !== undefined'>\n      <ion-label>\n        <p>Loginname: {{user.mail}}</p>\n        <p>Anzeigename: {{user.name}}</p>\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"isNotLoggedIn\">\n    <ion-card-header>\n      <ion-card-title>\n        Du bist nicht eingeloggt!\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button (click)=\"nav.navigateLogin('accountsettings')\" expand='block' color='secondary'>\n        <ion-icon name=\"home\"></ion-icon> Zum Login\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/account/accountsettings/accountsettings.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/account/accountsettings/accountsettings.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY291bnQvYWNjb3VudHNldHRpbmdzL2FjY291bnRzZXR0aW5ncy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/account/accountsettings/accountsettings.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/account/accountsettings/accountsettings.page.ts ***!
  \***********************************************************************/
/*! exports provided: AccountsettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsettingsPage", function() { return AccountsettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");




var AccountsettingsPage = /** @class */ (function () {
    function AccountsettingsPage(nav, back) {
        this.nav = nav;
        this.back = back;
    }
    AccountsettingsPage.prototype.ngOnInit = function () {
    };
    AccountsettingsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.isLoggedIn) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.back.getAccount()];
                    case 1:
                        _a.user = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(AccountsettingsPage.prototype, "isNotLoggedIn", {
        get: function () {
            return !this.back.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AccountsettingsPage.prototype, "isLoggedIn", {
        get: function () {
            return this.back.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    AccountsettingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accountsettings',
            template: __webpack_require__(/*! ./accountsettings.page.html */ "./src/app/pages/account/accountsettings/accountsettings.page.html"),
            styles: [__webpack_require__(/*! ./accountsettings.page.scss */ "./src/app/pages/account/accountsettings/accountsettings.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], AccountsettingsPage);
    return AccountsettingsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-account-accountsettings-accountsettings-module.js.map