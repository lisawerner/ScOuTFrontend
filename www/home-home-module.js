(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title text-center>\n      Startseite - ScOuT\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf='!back.isLoggedIn'>\n    <ion-card>\n      <ion-card-header color='light'>\n        <ion-card-title>\n            Willkommen bei ScOuT,\n        </ion-card-title>\n        <ion-card-subtitle>\n            dem Organisations-Tool für Vereine und Events.\n        </ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <h1>So einfach gehts:</h1>\n        <p text-center>Registrieren &rarr; Team für deinen Verein anlegen  <br>&rarr; Und los geht's mit der Eventplanung!</p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Du bist nicht eingeloggt</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-button (click)=\"nav.navigateLogin('home')\" color='secondary' expand=\"block\">Weiter zum Login</ion-button>\n        <ion-item></ion-item>\n        <ion-label>Noch kein Account?</ion-label>\n        <ion-button (click)=\"nav.navigateForward('register')\" color='secondary' expand=\"block\">Dann registrier dich!</ion-button>\n        <ion-item>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n  <div *ngIf='back.isLoggedIn'>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Hallo {{username.name}}!</ion-card-title>\n        <ion-card-subtitle>Hier ist deine Übersicht:</ion-card-subtitle>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list>\n\n          <div *ngIf='tasksTODO !== undefined && tasksFUTURE !== undefined'>\n            <ion-item detail (click)=\"nav.navigateTasklist()\" *ngIf='tasksFUTURE.length > 0 || tasksTODO.length > 0'>\n              <ion-button *ngIf='tasksTODO.length > 0' color='danger' size='small'>\n                <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n              </ion-button>\n              <ion-button  *ngIf='tasksTODO.length == 0' color='secondary'>\n                <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n              </ion-button>\n              <ion-label>Du hast {{tasksTODO.length}} dringende Tasks</ion-label>\n            </ion-item>\n\n            <ion-item *ngIf='tasksFUTURE.length > 0' detail (click)=\"nav.navigateTasklist()\">\n              <ion-button color='secondary'>\n                <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n              </ion-button>\n              <ion-label>Du hast {{tasksFUTURE.length}} offene Tasks</ion-label>\n            </ion-item>\n            \n            <div *ngIf='teams !== undefined'>\n              <div *ngIf='events !== undefined'>\n\n                <ion-item *ngIf='tasksFUTURE.length == 0 && tasksTODO.length == 0'>\n                  <ion-grid>\n                    <ion-row>\n                      Du hast keine anstehenden Tasks\n                    </ion-row>\n                    <ion-row center *ngIf='events.length > 0'>\n                      <ion-button color='secondary' expand='block' (click)=\"nav.navigateForward('createtask')\">\n                        <ion-icon name=\"checkmark\"></ion-icon><ion-icon name=\"add\"></ion-icon>Task erstellen\n                      </ion-button>\n                    </ion-row>\n                    <ion-row *ngIf='events.length == 0 && teams.length > 0'>\n                      Erstelle zuerst ein Event!\n                    </ion-row>\n                    <ion-row *ngIf='teams.length == 0'>\n                      Erstelle zuerst ein Team!\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n\n                <ion-item detail (click)='nav.navigateEventlist()' *ngIf='events.length > 0'>\n                  <ion-button color='secondary'>\n                    <ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon>\n                  </ion-button>\n                  <ion-label>Du organisierts {{events.length}} Events</ion-label>\n                </ion-item>\n                <ion-item *ngIf='events.length == 0'>\n                  <ion-grid>\n                    <ion-row>\n                      Du planst noch keine Events\n                    </ion-row>\n                    <ion-row center *ngIf='teams.length > 0'>\n                      <ion-button color='secondary' expand='block' (click)=\"nav.navigateForward('createeventchooser')\">\n                        <ion-icon name=\"calendar\"></ion-icon><ion-icon name=\"add\"></ion-icon>Event erstellen\n                      </ion-button>\n                    </ion-row>\n                    <ion-row *ngIf='teams.length == 0'>\n                      Erstelle zuerst ein Team!\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n              </div>\n              \n              <ion-item detail (click)='nav.navigateTeamlist()' *ngIf='teams.length > 0'>\n                <ion-button color='secondary'>\n                  <ion-icon slot=\"icon-only\" name=\"contacts\"></ion-icon>\n                </ion-button>\n                <ion-label>Du bist Mitglied von {{teams.length}} Teams</ion-label>\n              </ion-item>\n            </div>\n            <div *ngIf='teamInvitations != undefined'>\n              <ion-item detail (click)='nav.navigateTeamlist()' *ngIf='teamInvitations.length > 0'>\n                <ion-button color='secondary'>\n                  <ion-icon slot=\"icon-only\" name=\"contacts\"></ion-icon>\n                </ion-button>\n                <ion-label>Du hast {{teamInvitations.length}} offene Team-Einladungen</ion-label>\n              </ion-item>\n            </div>\n            <div *ngIf='teams != undefined'>\n              <ion-item *ngIf='teams.length == 0'>\n                <ion-grid>\n                  <ion-row>\n                    Du bist noch nicht Mitglied eines Teams\n                  </ion-row>\n                  <ion-row center>\n                    <ion-button color='secondary' expand='block' (click)=\"nav.navigateForward('createteam')\">\n                      <ion-icon name=\"contacts\"></ion-icon><ion-icon name=\"add\"></ion-icon>Team erstellen\n                    </ion-button>\n                  </ion-row>\n                </ion-grid>\n              </ion-item>\n            </div>\n          </div>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var _services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var _services_reminder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/reminder.service */ "./src/app/services/reminder.service.ts");





var HomePage = /** @class */ (function () {
    function HomePage(nav, back, reminder) {
        this.nav = nav;
        this.back = back;
        this.reminder = reminder;
        this.username = '';
    }
    HomePage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, allEvents, _i, allEvents_1, event_1, allTasks, _b, allTasks_1, task, _c, _d;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!this.back.isLoggedIn) return [3 /*break*/, 9];
                        _a = this;
                        return [4 /*yield*/, this.back.getAccount()];
                    case 1:
                        _a.username = _e.sent();
                        this.tasksTODO = [];
                        this.tasksFUTURE = [];
                        return [4 /*yield*/, this.back.getEvents('', '', false)];
                    case 2:
                        allEvents = _e.sent();
                        this.events = [];
                        _i = 0, allEvents_1 = allEvents;
                        _e.label = 3;
                    case 3:
                        if (!(_i < allEvents_1.length)) return [3 /*break*/, 6];
                        event_1 = allEvents_1[_i];
                        this.events.push(event_1);
                        return [4 /*yield*/, this.back.getTasks(event_1._id.toString(), '')];
                    case 4:
                        allTasks = _e.sent();
                        for (_b = 0, allTasks_1 = allTasks; _b < allTasks_1.length; _b++) {
                            task = allTasks_1[_b];
                            if (!task.done) {
                                if (this.reminder.isActive(event_1, task)) {
                                    this.tasksTODO.push(task);
                                }
                                else {
                                    this.tasksFUTURE.push(task);
                                }
                            }
                        }
                        _e.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        _c = this;
                        return [4 /*yield*/, this.back.getTeams('', '', true)];
                    case 7:
                        _c.teams = _e.sent();
                        _d = this;
                        return [4 /*yield*/, this.back.getTeams('', '', false)];
                    case 8:
                        _d.teamInvitations = _e.sent();
                        _e.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"], _services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], _services_reminder_service__WEBPACK_IMPORTED_MODULE_4__["ReminderService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map