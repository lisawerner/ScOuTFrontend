(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-createeventchooser-createeventchooser-module"],{

/***/ "./src/app/pages/events/createeventchooser/createeventchooser.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/events/createeventchooser/createeventchooser.module.ts ***!
  \******************************************************************************/
/*! exports provided: CreateeventchooserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateeventchooserPageModule", function() { return CreateeventchooserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _createeventchooser_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createeventchooser.page */ "./src/app/pages/events/createeventchooser/createeventchooser.page.ts");







var routes = [
    {
        path: '',
        component: _createeventchooser_page__WEBPACK_IMPORTED_MODULE_6__["CreateeventchooserPage"]
    }
];
var CreateeventchooserPageModule = /** @class */ (function () {
    function CreateeventchooserPageModule() {
    }
    CreateeventchooserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_createeventchooser_page__WEBPACK_IMPORTED_MODULE_6__["CreateeventchooserPage"]]
        })
    ], CreateeventchooserPageModule);
    return CreateeventchooserPageModule;
}());



/***/ }),

/***/ "./src/app/pages/events/createeventchooser/createeventchooser.page.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/events/createeventchooser/createeventchooser.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-title>Event erzeugen</ion-title>\n  \n      <ion-buttons slot=\"end\">\n        <ion-button (click)=\"nav.goBack()\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n        </ion-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  <div *ngIf=\"isLoggedIn\">\n\n    <ion-card>\n      <ion-card-header color='light'>\n        <ion-card-title>Erstelle ein neues Event:</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-button (click)=\"nav.navigateForward('createevent')\" color='secondary' expand='block'>\n          <ion-icon name=\"calendar\"></ion-icon><ion-icon name=\"add\"></ion-icon>Event erstellen\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header color='light'>\n        <ion-card-title>Erstelle ein Event aus den Templates deiner Teams:</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list *ngFor='let template of templates'>\n          <ion-item (click)=\"nav.navigateForwardParameter('createevent', template)\" detail>{{template.template.name}} ({{template.team}})</ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n\n  <ion-card *ngIf=\"isNotLoggedIn\">\n    <ion-card-header>\n      <ion-card-title>\n        Du bist nicht eingeloggt!\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button (click)=\"openLogin()\" expand='block' color='secondary'>\n        <ion-icon name=\"home\"></ion-icon> Zum Login\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/events/createeventchooser/createeventchooser.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/events/createeventchooser/createeventchooser.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy9jcmVhdGVldmVudGNob29zZXIvY3JlYXRlZXZlbnRjaG9vc2VyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/events/createeventchooser/createeventchooser.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/events/createeventchooser/createeventchooser.page.ts ***!
  \****************************************************************************/
/*! exports provided: CreateeventchooserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateeventchooserPage", function() { return CreateeventchooserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");




var CreateeventchooserPage = /** @class */ (function () {
    function CreateeventchooserPage(nav, backendService) {
        this.nav = nav;
        this.backendService = backendService;
        this.templates = [];
    }
    CreateeventchooserPage.prototype.ngOnInit = function () {
    };
    CreateeventchooserPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, allTemplates, _i, allTemplates_1, temp, teamSSSSSS, team;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.templates = [];
                        if (!this.isLoggedIn) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.backendService.getTemplates('', '')];
                    case 1:
                        result = _a.sent();
                        allTemplates = result.data;
                        if (allTemplates.length === 0) {
                            this.nav.navigateForward('createevent');
                        }
                        _i = 0, allTemplates_1 = allTemplates;
                        _a.label = 2;
                    case 2:
                        if (!(_i < allTemplates_1.length)) return [3 /*break*/, 5];
                        temp = allTemplates_1[_i];
                        return [4 /*yield*/, this.backendService.getTeams(temp.teamref, '', true)];
                    case 3:
                        teamSSSSSS = _a.sent();
                        team = teamSSSSSS[0];
                        this.templates.push({ template: temp, team: team.name });
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CreateeventchooserPage.prototype, "isLoggedIn", {
        get: function () {
            return this.backendService.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateeventchooserPage.prototype, "isNotLoggedIn", {
        get: function () {
            return !this.backendService.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    CreateeventchooserPage.prototype.openLogin = function () {
        this.nav.navigateLogin('eventlist');
    };
    CreateeventchooserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createeventchooser',
            template: __webpack_require__(/*! ./createeventchooser.page.html */ "./src/app/pages/events/createeventchooser/createeventchooser.page.html"),
            styles: [__webpack_require__(/*! ./createeventchooser.page.scss */ "./src/app/pages/events/createeventchooser/createeventchooser.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], CreateeventchooserPage);
    return CreateeventchooserPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-events-createeventchooser-createeventchooser-module.js.map