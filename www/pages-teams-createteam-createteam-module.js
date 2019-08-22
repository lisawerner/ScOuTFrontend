(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-teams-createteam-createteam-module"],{

/***/ "./src/app/pages/teams/createteam/createteam.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/teams/createteam/createteam.module.ts ***!
  \*************************************************************/
/*! exports provided: CreateteamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateteamPageModule", function() { return CreateteamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _createteam_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createteam.page */ "./src/app/pages/teams/createteam/createteam.page.ts");







var routes = [
    {
        path: '',
        component: _createteam_page__WEBPACK_IMPORTED_MODULE_6__["CreateteamPage"]
    }
];
var CreateteamPageModule = /** @class */ (function () {
    function CreateteamPageModule() {
    }
    CreateteamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_createteam_page__WEBPACK_IMPORTED_MODULE_6__["CreateteamPage"]]
        })
    ], CreateteamPageModule);
    return CreateteamPageModule;
}());



/***/ }),

/***/ "./src/app/pages/teams/createteam/createteam.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/teams/createteam/createteam.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Erstelle ein Team</ion-title>\n  \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"nav.goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  </ion-header>\n    \n  <ion-content>\n    \n    <ion-card *ngIf=\"isLoggedIn\">\n      <ion-card-header color='light'>\n        <ion-card-title>Gib einen Teamnamen ein:</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n          <form #form=\"ngForm\" (ngSubmit)=\"createTeam(form)\">\n            <ion-item>\n              <ion-label position=\"floating\">Teamname:</ion-label>\n              <ion-input name=\"teamname\" ngModel required></ion-input>\n            </ion-item>\n\n            <ion-label color=\"danger\">\n              <p *ngIf=\"validation.invalid\">{{validation.message}}</p>\n            </ion-label>\n            <ion-button type=\"submit\" expand=\"block\" color=\"secondary\">Team erstellen</ion-button>\n          </form>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card *ngIf=\"isNotLoggedIn\">\n      <ion-card-header>\n        <ion-card-title>\n          Du bist nicht eingeloggt!\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-button (click)=\"openLogin()\" expand='block' color='secondary'>\n          <ion-icon name=\"home\"></ion-icon> Zum Login\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>\n\n  "

/***/ }),

/***/ "./src/app/pages/teams/createteam/createteam.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/teams/createteam/createteam.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW1zL2NyZWF0ZXRlYW0vY3JlYXRldGVhbS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/teams/createteam/createteam.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/teams/createteam/createteam.page.ts ***!
  \***********************************************************/
/*! exports provided: CreateteamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateteamPage", function() { return CreateteamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");




var CreateteamPage = /** @class */ (function () {
    function CreateteamPage(nav, backendservice) {
        this.nav = nav;
        this.backendservice = backendservice;
        this.validation = {
            invalid: false,
            message: ""
        };
    }
    CreateteamPage.prototype.ngOnInit = function () {
    };
    CreateteamPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    CreateteamPage.prototype.createTeam = function (form) {
        var _this = this;
        var result = form.value.teamname;
        this.validation = {
            invalid: false,
            message: ""
        };
        if (result === '') {
            this.validation = {
                invalid: true,
                message: "Die Eingabe ist nicht vollständig"
            };
            return;
        }
        var request = this.backendservice.createTeam(result);
        request.then(function (ret) {
            if (!ret.success) {
                //console.log("Database Feedback: ", ret.error);
                _this.validation = {
                    invalid: true,
                    message: ret.error
                };
            }
            else {
                _this.nav.navigateForwardParameter('viewteam', ret.data);
            }
        }, function (err) {
            console.error(err);
        });
    };
    Object.defineProperty(CreateteamPage.prototype, "isLoggedIn", {
        get: function () {
            return this.backendservice.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateteamPage.prototype, "isNotLoggedIn", {
        get: function () {
            return !this.backendservice.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    CreateteamPage.prototype.openLogin = function () {
        this.nav.navigateLogin('createteam');
    };
    CreateteamPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createteam',
            template: __webpack_require__(/*! ./createteam.page.html */ "./src/app/pages/teams/createteam/createteam.page.html"),
            styles: [__webpack_require__(/*! ./createteam.page.scss */ "./src/app/pages/teams/createteam/createteam.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], CreateteamPage);
    return CreateteamPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-teams-createteam-createteam-module.js.map