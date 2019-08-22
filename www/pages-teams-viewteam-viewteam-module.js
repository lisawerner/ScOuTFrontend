(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-teams-viewteam-viewteam-module"],{

/***/ "./src/app/pages/teams/viewteam/viewteam.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/teams/viewteam/viewteam.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewteamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewteamPageModule", function() { return ViewteamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewteam_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewteam.page */ "./src/app/pages/teams/viewteam/viewteam.page.ts");







var routes = [
    {
        path: '',
        component: _viewteam_page__WEBPACK_IMPORTED_MODULE_6__["ViewteamPage"]
    }
];
var ViewteamPageModule = /** @class */ (function () {
    function ViewteamPageModule() {
    }
    ViewteamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewteam_page__WEBPACK_IMPORTED_MODULE_6__["ViewteamPage"]]
        })
    ], ViewteamPageModule);
    return ViewteamPageModule;
}());



/***/ }),

/***/ "./src/app/pages/teams/viewteam/viewteam.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/teams/viewteam/viewteam.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">  \n    <ion-title *ngIf='isLoggedIn'>Team: {{team.name}}</ion-title>\n  \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"nav.goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content>\n\n  <div *ngIf=\"isLoggedIn\">\n    <ion-card *ngIf='team != undefined && myEvents != undefined'>\n      <ion-card-header color='light'>\n        <ion-card-title>Team-Infos:</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item (click)=\"nav.navigateForwardParameter('viewteammember', team)\" detail>\n          <ion-button  expand=\"block\" color=\"secondary\">\n            <ion-icon name=\"contacts\"></ion-icon>{{team.members.length}} Teammitglieder\n          </ion-button>\n        </ion-item>\n        <ion-item (click)=\"nav.navigateForwardParameter('eventlist', team)\" detail>\n          <ion-button  expand=\"block\" color=\"secondary\">\n            <ion-icon name=\"calendar\"></ion-icon>{{myEvents.length}} Events\n          </ion-button>\n        </ion-item>\n        <ion-item (click)=\"nav.navigateForwardParameter('tasklist', {team: team, event: null})\" detail *ngIf='myTasksLength != undefined'>\n          <ion-button  expand=\"block\" color=\"danger\" *ngIf='myTasksLength > 0'>\n            <ion-icon name=\"checkmark\"></ion-icon>{{myTasksLength}} dringende Tasks</ion-button>\n          <ion-button  expand=\"block\" color=\"secondary\" *ngIf='myTasksLength == 0'>\n            <ion-icon name=\"checkmark\"></ion-icon>{{myTasksLength}} dringende Task</ion-button>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  \n    <div *ngIf='myEvents != undefined'>\n      <ion-card>\n        <ion-card-header color='light'>\n          <ion-card-title>Team-Events:</ion-card-title>\n          <ion-card-subtitle *ngIf='myEvents.length > 0'>Hier bist du ein Orgamitglied!</ion-card-subtitle>\n          <ion-card-subtitle *ngIf='myEvents.length == 0'>Du bist aktuell nirgends ein Orgamitglied!</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list *ngFor=\"let event of myEvents\">\n            <ion-item (click)=\"nav.navigateForwardParameter('viewevent', event.event)\" detail>\n              <ion-label>\n                {{event.event.name}}\n                <p *ngIf='event.tasksLength > 0'>\n                  <ion-icon name=\"checkmark\" color='danger'></ion-icon> {{event.tasksLength}} dringende Tasks\n                </p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div *ngIf='myPastEvents != undefined'>\n      <ion-card *ngIf='myPastEvents.length > 0'>\n        <ion-card-header color='light'>\n          <ion-card-title>Vergangene Team-Events:</ion-card-title>\n          <ion-card-subtitle>Du hattest in deinem Team schon folgende Events plant:\n            <p>(Tipp: Erstelle aus den Events Templates, dann kannst du sie bedenkenlos löschen.)</p>\n          </ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list *ngFor=\"let event of myPastEvents\">\n            <ion-item (click)=\"nav.navigateForwardParameter('viewevent', event)\" lines='none' detail>\n              <ion-label>{{event.name}}</ion-label>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n  \n  <ion-card *ngIf=\"isNotLoggedIn\">\n    <ion-card-header>\n      <ion-card-title>\n        Du bist nicht eingeloggt!\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button (click)=\"openLogin()\" expand='block' color='secondary'>\n        <ion-icon name=\"home\"></ion-icon> Zum Login\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/teams/viewteam/viewteam.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/teams/viewteam/viewteam.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlYW1zL3ZpZXd0ZWFtL3ZpZXd0ZWFtLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/teams/viewteam/viewteam.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/teams/viewteam/viewteam.page.ts ***!
  \*******************************************************/
/*! exports provided: ViewteamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewteamPage", function() { return ViewteamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/reminder.service */ "./src/app/services/reminder.service.ts");





var ViewteamPage = /** @class */ (function () {
    function ViewteamPage(nav, back, reminder) {
        this.nav = nav;
        this.back = back;
        this.reminder = reminder;
        this.team = [];
        this.myEvents = [];
    }
    ViewteamPage.prototype.ngOnInit = function () { };
    Object.defineProperty(ViewteamPage.prototype, "getParams", {
        get: function () {
            return this.nav.params;
        },
        enumerable: true,
        configurable: true
    });
    ViewteamPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var events, _i, events_1, event_1, allTasks, activeLength, _a, allTasks_1, task;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.isLoggedIn) return [3 /*break*/, 6];
                        this.team = this.getParams;
                        this.myEvents = [];
                        this.myPastEvents = [];
                        return [4 /*yield*/, this.back.getEvents(this.team._id, '', true)];
                    case 1:
                        events = _b.sent();
                        this.myTasksLength = 0;
                        _i = 0, events_1 = events;
                        _b.label = 2;
                    case 2:
                        if (!(_i < events_1.length)) return [3 /*break*/, 6];
                        event_1 = events_1[_i];
                        if (!this.reminder.isPast(event_1)) return [3 /*break*/, 3];
                        this.myPastEvents.push(event_1);
                        return [3 /*break*/, 5];
                    case 3:
                        if (!event_1.members.includes(this.back.myID)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.back.getTasks(event_1._id, '')];
                    case 4:
                        allTasks = _b.sent();
                        activeLength = 0;
                        for (_a = 0, allTasks_1 = allTasks; _a < allTasks_1.length; _a++) {
                            task = allTasks_1[_a];
                            if (!task.done) {
                                if (this.reminder.isActive(event_1, task)) {
                                    activeLength++;
                                }
                            }
                        }
                        this.myTasksLength = this.myTasksLength + activeLength;
                        this.myEvents.push({ event: event_1, tasksLength: activeLength });
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 2];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ViewteamPage.prototype, "isNotLoggedIn", {
        get: function () {
            return !this.back.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewteamPage.prototype, "isLoggedIn", {
        get: function () {
            return this.back.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    ViewteamPage.prototype.openLogin = function () {
        this.nav.navigateLogin('teamlist');
    };
    ViewteamPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewteam',
            template: __webpack_require__(/*! ./viewteam.page.html */ "./src/app/pages/teams/viewteam/viewteam.page.html"),
            styles: [__webpack_require__(/*! ./viewteam.page.scss */ "./src/app/pages/teams/viewteam/viewteam.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_4__["ReminderService"]])
    ], ViewteamPage);
    return ViewteamPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-teams-viewteam-viewteam-module.js.map