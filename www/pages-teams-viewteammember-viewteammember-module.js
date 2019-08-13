(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-teams-viewteammember-viewteammember-module"],{

/***/ "./src/app/pages/teams/viewteammember/viewteammember.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/teams/viewteammember/viewteammember.module.ts ***!
  \*********************************************************************/
/*! exports provided: ViewteammemberPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewteammemberPageModule", function() { return ViewteammemberPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewteammember_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewteammember.page */ "./src/app/pages/teams/viewteammember/viewteammember.page.ts");







var routes = [
    {
        path: '',
        component: _viewteammember_page__WEBPACK_IMPORTED_MODULE_6__["ViewteammemberPage"]
    }
];
var ViewteammemberPageModule = /** @class */ (function () {
    function ViewteammemberPageModule() {
    }
    ViewteammemberPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewteammember_page__WEBPACK_IMPORTED_MODULE_6__["ViewteammemberPage"]]
        })
    ], ViewteammemberPageModule);
    return ViewteammemberPageModule;
}());



/***/ }),

/***/ "./src/app/pages/teams/viewteammember/viewteammember.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/teams/viewteammember/viewteammember.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n  \n    <ion-title *ngIf='isLoggedIn'>{{team.name}}: Teammitglieder</ion-title>\n  \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"nav.goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content>\n  <div *ngIf=\"isLoggedIn\">\n    <ion-button (click)=\"nav.navigateForwardParameter('viewteam', team)\" color=\"secondary\" expand=\"block\">Zurück zum Team</ion-button>\n    <ion-card>\n      <ion-card-header color='light'>\n        <ion-card-title>Teammitglieder:</ion-card-title>\n      </ion-card-header>\n      <ion-card-content *ngIf='memberlist.memberlist.length > 0'>\n        <ion-list *ngFor='let member of memberlist.memberlist'>\n          <ion-item>{{member.name}}</ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  \n    <ion-card>\n      <ion-card-header color='light'>\n        <ion-card-title>Lade weitere Personen ein:</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-label>{{invitationMessage}}</ion-label>\n          <form #form=\"ngForm\" (ngSubmit)=\"invite(form)\">\n            <ion-item>\n              <ion-label position=\"floating\">Mail-Adresse:</ion-label>\n              <ion-input type=\"email\" name=\"email\" ngModel required></ion-input>\n            </ion-item>\n            \n            <ion-label color=\"danger\">\n              <p *ngIf=\"validation.invalid\">{{validation.message}}</p>\n            </ion-label>\n            <ion-button type=\"submit\" expand=\"block\" color=\"secondary\">Einladen</ion-button>\n          </form>\n      </ion-card-content>\n    </ion-card>\n    \n    <ion-card>\n      <ion-card-header color='light'>\n        <ion-card-title>Eingeladene Personen:</ion-card-title>\n      </ion-card-header>\n      <ion-card-content *ngIf='memberlist.inviteelist.length > 0'>\n          <ion-list *ngFor='let member of memberlist.inviteelist'>\n            <ion-item>{{member.name}}</ion-item>\n          </ion-list>\n      </ion-card-content>\n    </ion-card>\n  \n  </div>\n\n  <ion-card *ngIf=\"isNotLoggedIn\">\n    <ion-card-header>\n      <ion-card-title>\n        Du bist nicht eingeloggt!\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button (click)=\"openLogin()\" expand='block' color='secondary'>\n        <ion-icon name=\"home\"></ion-icon> Zum Login\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/teams/viewteammember/viewteammember.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/teams/viewteammember/viewteammember.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW1zL3ZpZXd0ZWFtbWVtYmVyL3ZpZXd0ZWFtbWVtYmVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/teams/viewteammember/viewteammember.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/teams/viewteammember/viewteammember.page.ts ***!
  \*******************************************************************/
/*! exports provided: ViewteammemberPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewteammemberPage", function() { return ViewteammemberPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ViewteammemberPage = /** @class */ (function () {
    function ViewteammemberPage(nav, backendservice, toastController) {
        this.nav = nav;
        this.backendservice = backendservice;
        this.toastController = toastController;
        this.invitationMessage = '';
        this.validation = {
            invalid: false,
            message: ""
        };
    }
    ViewteammemberPage.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ViewteammemberPage.prototype, "getParams", {
        get: function () {
            return this.nav.params;
        },
        enumerable: true,
        configurable: true
    });
    ViewteammemberPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.team = this.getParams;
                        _a = this;
                        return [4 /*yield*/, this.backendservice.getTeamMemberlist(this.team._id.toString())];
                    case 1:
                        _a.memberlist = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewteammemberPage.prototype.invite = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, request;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                result = form.value.email;
                this.validation = {
                    invalid: false,
                    message: ""
                };
                if (result === '') {
                    this.validation = {
                        invalid: true,
                        message: "Die Eingabe ist nicht vollständig"
                    };
                    return [2 /*return*/];
                }
                request = this.backendservice.inviteTeammember(this.team.name, result);
                request.then(function (ret) {
                    if (!ret.success) {
                        //console.log("Database Feedback: ", ret.error);
                        _this.validation = {
                            invalid: true,
                            message: ret.error
                        };
                    }
                    else {
                        _this.invitationMessage = result + ' wurde eingeladen.';
                    }
                }, function (err) {
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    ViewteammemberPage.prototype.presentToast = function (email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: '"' + email + '" wurde in ' + this.team.name + ' eingeladen',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ViewteammemberPage.prototype, "isLoggedIn", {
        get: function () {
            return this.backendservice.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewteammemberPage.prototype, "isNotLoggedIn", {
        get: function () {
            return !this.backendservice.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    ViewteammemberPage.prototype.openLogin = function () {
        this.nav.navigateLogin('teamlist');
    };
    ViewteammemberPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewteammember',
            template: __webpack_require__(/*! ./viewteammember.page.html */ "./src/app/pages/teams/viewteammember/viewteammember.page.html"),
            styles: [__webpack_require__(/*! ./viewteammember.page.scss */ "./src/app/pages/teams/viewteammember/viewteammember.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
    ], ViewteammemberPage);
    return ViewteammemberPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-teams-viewteammember-viewteammember-module.js.map