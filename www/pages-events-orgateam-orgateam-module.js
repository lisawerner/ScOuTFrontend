(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-orgateam-orgateam-module"],{

/***/ "./src/app/pages/events/orgateam/orgateam.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/events/orgateam/orgateam.module.ts ***!
  \**********************************************************/
/*! exports provided: OrgateamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgateamPageModule", function() { return OrgateamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _orgateam_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orgateam.page */ "./src/app/pages/events/orgateam/orgateam.page.ts");







var routes = [
    {
        path: '',
        component: _orgateam_page__WEBPACK_IMPORTED_MODULE_6__["OrgateamPage"]
    }
];
var OrgateamPageModule = /** @class */ (function () {
    function OrgateamPageModule() {
    }
    OrgateamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_orgateam_page__WEBPACK_IMPORTED_MODULE_6__["OrgateamPage"]]
        })
    ], OrgateamPageModule);
    return OrgateamPageModule;
}());



/***/ }),

/***/ "./src/app/pages/events/orgateam/orgateam.page.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/events/orgateam/orgateam.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title *ngIf='isLoggedIn && event != undefined'>Event: {{event.name}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"nav.goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"isLoggedIn\">\n\n    <ion-button (click)=\"nav.navigateForwardParameter('viewevent', this.event)\" expand='block' color='secondary'>\n      <ion-icon name=\"calendar\"></ion-icon> Zurück zum Event\n    </ion-button>\n\n    <ion-card>\n      <ion-card-header color='light'>\n        <ion-card-title>Orgateam Mitglieder:</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <!--\n          <ion-list *ngFor='let member of orgamembers'>\n            <ion-item><ion-label>{{member.name}}</ion-label></ion-item>\n          </ion-list>\n        -->\n        <ion-label>{{orgateamPrettyPrint()}}</ion-label>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header color='light'>\n        <ion-card-title>Lade weitere Teammitglieder ein:</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <form #form=\"ngForm\" (ngSubmit)=\"inviteToOrgateam(form)\">\n          <ion-item lines='none'>\n            <ion-label>Person:</ion-label>\n            <ion-select name=\"invitee\" ngModel required>\n              <ion-select-option *ngFor=\"let member of teammember\" value='{{member._id}}'>{{member.name}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-label color=\"danger\" *ngIf=\"invitationValidation.invalid\">{{invitationValidation.message}}</ion-label>\n          <ion-label *ngIf=\"successMessage.success\">{{successMessage.message}}</ion-label>\n          <ion-button type=\"submit\" expand=\"block\" color=\"secondary\">Einladen</ion-button>\n        </form>\n      </ion-card-content>\n    </ion-card>\n\n    <!--TODO: <ion-button expand=\"block\" color=\"secondary\">Orgateam verlassen</ion-button>-->\n\n  </div>\n\n  <ion-card *ngIf=\"isNotLoggedIn\">\n    <ion-card-header>\n      <ion-card-title>\n        Du bist nicht eingeloggt!\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button (click)=\"openLogin()\" expand='block' color='secondary'>\n        <ion-icon name=\"home\"></ion-icon> Zum Login\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/events/orgateam/orgateam.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/events/orgateam/orgateam.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy9vcmdhdGVhbS9vcmdhdGVhbS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/events/orgateam/orgateam.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/events/orgateam/orgateam.page.ts ***!
  \********************************************************/
/*! exports provided: OrgateamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgateamPage", function() { return OrgateamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");




var OrgateamPage = /** @class */ (function () {
    function OrgateamPage(nav, backendservice) {
        this.nav = nav;
        this.backendservice = backendservice;
        this.invitationValidation = {
            invalid: false,
            message: ""
        };
        this.successMessage = {
            success: false,
            message: ""
        };
    }
    OrgateamPage.prototype.ngOnInit = function () {
    };
    Object.defineProperty(OrgateamPage.prototype, "getParams", {
        get: function () {
            return this.nav.params;
        },
        enumerable: true,
        configurable: true
    });
    OrgateamPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var eventID, _a, teamssss, team, completeMemberlist, _i, _b, member;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.isLoggedIn) return [3 /*break*/, 4];
                        this.event = this.getParams;
                        eventID = this.event._id.toString();
                        _a = this;
                        return [4 /*yield*/, this.backendservice.getEventOrgateam(eventID)];
                    case 1:
                        _a.orgamembers = _c.sent();
                        return [4 /*yield*/, this.backendservice.getTeams('', eventID, true)];
                    case 2:
                        teamssss = _c.sent();
                        team = teamssss[0];
                        return [4 /*yield*/, this.backendservice.getTeamMemberlist(team._id)];
                    case 3:
                        completeMemberlist = _c.sent();
                        this.teammember = [];
                        for (_i = 0, _b = completeMemberlist.memberlist; _i < _b.length; _i++) {
                            member = _b[_i];
                            if (this.event.members.indexOf(member._id) < 0) {
                                this.teammember.push(member);
                            }
                        }
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(OrgateamPage.prototype, "isLoggedIn", {
        get: function () {
            return this.backendservice.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrgateamPage.prototype, "isNotLoggedIn", {
        get: function () {
            return !this.backendservice.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    OrgateamPage.prototype.orgateamPrettyPrint = function () {
        if (this.orgamembers !== undefined) {
            var prettyPrint = '';
            for (var _i = 0, _a = this.orgamembers; _i < _a.length; _i++) {
                var member = _a[_i];
                prettyPrint += member.name + ', ';
            }
            prettyPrint = prettyPrint.substring(0, prettyPrint.length - 2);
            //console.log(prettyPrint);
            return prettyPrint;
        }
        else {
            return '';
        }
    };
    OrgateamPage.prototype.openLogin = function () {
        this.nav.navigateLogin('eventlist');
    };
    OrgateamPage.prototype.inviteToOrgateam = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, request;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                result = form.value;
                console.log(result);
                this.invitationValidation = {
                    invalid: false,
                    message: ''
                };
                request = this.backendservice.inviteOrgateam(this.event._id, this.event.teamref, result.invitee);
                request.then(function (ret) {
                    if (!ret.success) {
                        _this.invitationValidation = {
                            invalid: false,
                            message: ret.error
                        };
                    }
                    else {
                        console.log('Request successfull');
                        var newSelection = [];
                        for (var _i = 0, _a = _this.teammember; _i < _a.length; _i++) {
                            var member = _a[_i];
                            if (member.name !== ret.data) {
                                newSelection.push(member);
                            }
                        }
                        _this.teammember = newSelection;
                        _this.successMessage = {
                            success: true,
                            message: ret.data + " wurde eingeladen."
                        };
                    }
                }, function (err) {
                    console.log("Hier die Fehlermeldung angeben?");
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    OrgateamPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-orgateam',
            template: __webpack_require__(/*! ./orgateam.page.html */ "./src/app/pages/events/orgateam/orgateam.page.html"),
            styles: [__webpack_require__(/*! ./orgateam.page.scss */ "./src/app/pages/events/orgateam/orgateam.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], OrgateamPage);
    return OrgateamPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-events-orgateam-orgateam-module.js.map