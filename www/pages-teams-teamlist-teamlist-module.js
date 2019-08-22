(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-teams-teamlist-teamlist-module"],{

/***/ "./src/app/pages/teams/teamlist/teamlist.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/teams/teamlist/teamlist.module.ts ***!
  \*********************************************************/
/*! exports provided: TeamlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamlistPageModule", function() { return TeamlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _teamlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./teamlist.page */ "./src/app/pages/teams/teamlist/teamlist.page.ts");







var routes = [
    {
        path: '',
        component: _teamlist_page__WEBPACK_IMPORTED_MODULE_6__["TeamlistPage"]
    }
];
var TeamlistPageModule = /** @class */ (function () {
    function TeamlistPageModule() {
    }
    TeamlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_teamlist_page__WEBPACK_IMPORTED_MODULE_6__["TeamlistPage"]]
        })
    ], TeamlistPageModule);
    return TeamlistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/teams/teamlist/teamlist.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/teams/teamlist/teamlist.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n<ion-toolbar color=\"primary\">\n  <ion-title>Deine Teams</ion-title>\n\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"nav.goBack()\">\n      <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n</ion-header>\n  \n<ion-content>\n  <div *ngIf='isLoggedIn'>\n    <div *ngIf='invitationTeams !== undefined && teams !== undefined'>\n      <ion-card *ngIf='invitationTeams.length > 0'>\n        <ion-card-header color='light'>\n          <ion-card-title>Ausstehende Team-Einladungen:</ion-card-title>\n          <ion-label>\n            Annahmen mit: <ion-icon name=\"person-add\" slot='icon-only'></ion-icon> //\n            Ablehnen mit: <ion-icon slot='icon-only' name=\"trash\"></ion-icon>\n            <p>(Ablehnen wurde für die Umfrage deaktiviert)</p>\n          </ion-label>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list *ngFor='let invteam of invitationTeams'>\n            <ion-item>\n                <ion-button (click)=\"acceptInvitation(invteam)\" color=\"secondary\"><ion-icon name=\"person-add\" slot='icon-only'></ion-icon></ion-button>\n                <ion-button (click)=\"declineInvitation(invteam)\" color=\"secondary\" disabled><ion-icon slot='icon-only' name=\"trash\"></ion-icon></ion-button>\n                {{invteam.name}}\n            </ion-item>\n          </ion-list>\n\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf='teams.length > 0'>\n        <ion-card-content>\n          <ion-list *ngFor=\"let team of teams\">\n            <ion-item (click)=\"nav.navigateForwardParameter('viewteam', team.team)\" detail>\n              <ion-label>\n                {{team.team.name}} (<ion-icon name=\"calendar\"></ion-icon> {{team.events}} Events)\n                <p *ngIf='team.tasksTODO > 0'>\n                  <ion-icon name=\"checkmark\" color='danger'></ion-icon> {{team.tasksTODO}} dringende Tasks\n                </p>\n            </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf='teams.length == 0'>\n        <ion-card-header>\n          <ion-card-title>Du hast aktuell noch keine Teams</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n\n      <ion-card *ngIf='invitationTeams.length == 0'>\n          <ion-card-header color='light'>\n            <ion-card-title>Ausstehende Team-Einladungen:</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-label>Aktuell keine!</ion-label>\n          </ion-card-content>\n        </ion-card>\n    </div>\n  </div>\n\n  <ion-card *ngIf=\"isNotLoggedIn\">\n    <ion-card-header>\n      <ion-card-title>\n        Du bist nicht eingeloggt!\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button (click)=\"openLogin()\" expand='block' color='secondary'>\n        <ion-icon name=\"home\"></ion-icon> Zum Login\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer *ngIf=\"isLoggedIn\">\n  <ion-toolbar color=\"secondary\">\n    <div (click)=\"nav.navigateForward('createteam')\" color='secondary' text-center>\n        <ion-icon name=\"contacts\"></ion-icon><ion-icon name=\"add\"></ion-icon> Team erstellen\n    </div>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/teams/teamlist/teamlist.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/teams/teamlist/teamlist.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW1zL3RlYW1saXN0L3RlYW1saXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/teams/teamlist/teamlist.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/teams/teamlist/teamlist.page.ts ***!
  \*******************************************************/
/*! exports provided: TeamlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamlistPage", function() { return TeamlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/reminder.service */ "./src/app/services/reminder.service.ts");





var TeamlistPage = /** @class */ (function () {
    function TeamlistPage(nav, back, reminder) {
        this.nav = nav;
        this.back = back;
        this.reminder = reminder;
        this.teams = [];
        this.invitationTeams = [];
    }
    TeamlistPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    TeamlistPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var onlyTeams, unsortedTeams, _i, onlyTeams_1, t, eventslength, activeTaskLength, allEvents, _a, allEvents_1, ev, allTasks, _b, allTasks_1, task, _c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!this.isLoggedIn) return [3 /*break*/, 11];
                        return [4 /*yield*/, this.back.getTeams('', '', true)];
                    case 1:
                        onlyTeams = _d.sent();
                        unsortedTeams = [];
                        _i = 0, onlyTeams_1 = onlyTeams;
                        _d.label = 2;
                    case 2:
                        if (!(_i < onlyTeams_1.length)) return [3 /*break*/, 9];
                        t = onlyTeams_1[_i];
                        eventslength = 0;
                        activeTaskLength = 0;
                        return [4 /*yield*/, this.back.getEvents(t._id.toString(), '', false)];
                    case 3:
                        allEvents = _d.sent();
                        _a = 0, allEvents_1 = allEvents;
                        _d.label = 4;
                    case 4:
                        if (!(_a < allEvents_1.length)) return [3 /*break*/, 7];
                        ev = allEvents_1[_a];
                        eventslength++;
                        return [4 /*yield*/, this.back.getTasks(ev._id.toString(), '')];
                    case 5:
                        allTasks = _d.sent();
                        for (_b = 0, allTasks_1 = allTasks; _b < allTasks_1.length; _b++) {
                            task = allTasks_1[_b];
                            if (!task.done) {
                                if (this.reminder.isActive(ev, task)) {
                                    activeTaskLength++;
                                }
                            }
                        }
                        _d.label = 6;
                    case 6:
                        _a++;
                        return [3 /*break*/, 4];
                    case 7:
                        unsortedTeams.push({ team: t, events: eventslength, tasksTODO: activeTaskLength });
                        _d.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 2];
                    case 9:
                        //Sort Teams
                        this.teams = unsortedTeams;
                        //TODO: First all Teams, with dringend Tasks
                        //TODO: Then all other Teams
                        //TODO: Both Lists sorted itself alphabetically
                        //console.log('My Teams: ', this.teams);
                        this.invitationTeams = [];
                        _c = this;
                        return [4 /*yield*/, this.back.getTeams('', '', false)];
                    case 10:
                        _c.invitationTeams = _d.sent();
                        _d.label = 11;
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(TeamlistPage.prototype, "isLoggedIn", {
        get: function () {
            return this.back.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TeamlistPage.prototype, "isNotLoggedIn", {
        get: function () {
            return !this.back.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    TeamlistPage.prototype.openLogin = function () {
        this.nav.navigateLogin('teamlist');
    };
    TeamlistPage.prototype.acceptInvitation = function (team) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var newTeam;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.back.acceptTeaminvitation(team._id.toString())];
                    case 1:
                        newTeam = _a.sent();
                        this.nav.navigateForwardParameter('viewteam', newTeam);
                        return [2 /*return*/];
                }
            });
        });
    };
    TeamlistPage.prototype.declineInvitation = function (team) {
    };
    TeamlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teamlist',
            template: __webpack_require__(/*! ./teamlist.page.html */ "./src/app/pages/teams/teamlist/teamlist.page.html"),
            styles: [__webpack_require__(/*! ./teamlist.page.scss */ "./src/app/pages/teams/teamlist/teamlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_4__["ReminderService"]])
    ], TeamlistPage);
    return TeamlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-teams-teamlist-teamlist-module.js.map