(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-eventlist-eventlist-module"],{

/***/ "./src/app/pages/events/eventlist/eventlist.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/events/eventlist/eventlist.module.ts ***!
  \************************************************************/
/*! exports provided: EventlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventlistPageModule", function() { return EventlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _eventlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventlist.page */ "./src/app/pages/events/eventlist/eventlist.page.ts");







var routes = [
    {
        path: '',
        component: _eventlist_page__WEBPACK_IMPORTED_MODULE_6__["EventlistPage"]
    }
];
var EventlistPageModule = /** @class */ (function () {
    function EventlistPageModule() {
    }
    EventlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_eventlist_page__WEBPACK_IMPORTED_MODULE_6__["EventlistPage"]]
        })
    ], EventlistPageModule);
    return EventlistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/events/eventlist/eventlist.page.html":
/*!************************************************************!*\
  !*** ./src/app/pages/events/eventlist/eventlist.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Deine Events</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"nav.goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n  \n<ion-content>\n  <div *ngIf=\"isLoggedIn && events !== undefined\">\n\n    <ion-card *ngIf='filteredByTeam'>\n      <ion-card-header color='light'>\n        <ion-card-title>Eventliste gefiltert nach:</ion-card-title>\n        <ion-card-subtitle>Team: {{teamname}}</ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card *ngIf='events.length > 0'>\n      <ion-card-header color='light'>\n        <ion-card-title>Anstehende Events:</ion-card-title>\n      </ion-card-header>\n      <ion-list *ngFor='let event of events'>\n        <ion-item>\n          <ion-item (click)=\"nav.navigateForwardParameter('viewevent', event.event)\" detail  lines='none'>\n            <ion-label><h2>{{event.event.name}}</h2>\n              <ion-grid>\n                <ion-row>\n                  <ion-col>\n                    <p *ngIf='event.begindate == event.enddate'>{{event.event.begindate}}</p>\n                    <p *ngIf='event.begindate != event.enddate'>{{event.event.begindate}} bis {{event.event.enddate}}</p>\n                    <p>Team: {{event.team.name}}</p>\n                  </ion-col>\n                  <ion-col>\n                    <p><ion-icon name=\"checkmark\" color=\"danger\"></ion-icon>{{event.tasks.length}} Tasks</p>\n                    <p><ion-icon name=\"checkmark\" color=\"medium\"></ion-icon>{{event.futureTasks.length}} Tasks</p>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-label>\n          </ion-item>\n        </ion-item>\n      </ion-list>\n    </ion-card>\n\n    <ion-card *ngIf='events.length == 0'>\n      <ion-card-header>\n        <ion-card-title>Du hast aktuell keine Events</ion-card-title>\n      </ion-card-header>\n    </ion-card>\n  </div>\n\n  <ion-card *ngIf=\"isNotLoggedIn\">\n    <ion-card-header>\n      <ion-card-title>\n        Du bist nicht eingeloggt!\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button (click)=\"openLogin()\" expand='block' color='secondary'>\n        <ion-icon name=\"home\"></ion-icon> Zum Login\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n  \n<ion-footer *ngIf=\"isLoggedIn\">\n  <ion-toolbar color=\"secondary\">\n    <div (click)=\"nav.navigateForward('createeventchooser')\" color='secondary' *ngIf='hasTeams' text-center>\n      <ion-icon name=\"calendar\"></ion-icon><ion-icon name=\"add\"></ion-icon>Event erstellen\n    </div>\n    <div *ngIf='!hasTeams' (click)=\"nav.navigateForward('createteam')\" color='secondary' text-center>\n        <ion-icon name=\"contacts\"></ion-icon><ion-icon name=\"add\"></ion-icon> Erstelle vorher ein Team\n    </div>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/events/eventlist/eventlist.page.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/events/eventlist/eventlist.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy9ldmVudGxpc3QvZXZlbnRsaXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/events/eventlist/eventlist.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/events/eventlist/eventlist.page.ts ***!
  \**********************************************************/
/*! exports provided: EventlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventlistPage", function() { return EventlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/reminder.service */ "./src/app/services/reminder.service.ts");





var EventlistPage = /** @class */ (function () {
    function EventlistPage(nav, backendservice, reminder) {
        this.nav = nav;
        this.backendservice = backendservice;
        this.reminder = reminder;
        this.hasTeams = false;
        this.filteredByTeam = false;
    }
    EventlistPage.prototype.ngOnInit = function () {
    };
    Object.defineProperty(EventlistPage.prototype, "getParams", {
        get: function () {
            return this.nav.params;
        },
        enumerable: true,
        configurable: true
    });
    EventlistPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var resultEvents, teamID, allTeams, _i, resultEvents_1, ev, eventID, teameventArray, teamevent, allTasks, activeTasks, futureTasks, _a, allTasks_1, task;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.isLoggedIn) return [3 /*break*/, 11];
                        this.filteredByTeam = false;
                        resultEvents = null;
                        if (!(this.getParams !== null)) return [3 /*break*/, 2];
                        teamID = this.getParams._id.toString();
                        this.teamname = this.getParams.name;
                        return [4 /*yield*/, this.backendservice.getEvents(teamID, '', true)];
                    case 1:
                        resultEvents = _b.sent();
                        this.filteredByTeam = true;
                        this.hasTeams = true;
                        return [3 /*break*/, 5];
                    case 2: return [4 /*yield*/, this.backendservice.getEvents('', '', true)];
                    case 3:
                        resultEvents = _b.sent();
                        return [4 /*yield*/, this.backendservice.getTeams('', '', true)];
                    case 4:
                        allTeams = _b.sent();
                        this.hasTeams = allTeams.length > 0;
                        _b.label = 5;
                    case 5:
                        this.events = [];
                        this.pastEvents = [];
                        _i = 0, resultEvents_1 = resultEvents;
                        _b.label = 6;
                    case 6:
                        if (!(_i < resultEvents_1.length)) return [3 /*break*/, 11];
                        ev = resultEvents_1[_i];
                        if (!!this.reminder.isPast(ev)) return [3 /*break*/, 9];
                        eventID = ev._id.toString();
                        return [4 /*yield*/, this.backendservice.getTeams('', eventID, true)];
                    case 7:
                        teameventArray = _b.sent();
                        teamevent = teameventArray[0];
                        return [4 /*yield*/, this.backendservice.getTasks(eventID, '')];
                    case 8:
                        allTasks = _b.sent();
                        activeTasks = [];
                        futureTasks = [];
                        for (_a = 0, allTasks_1 = allTasks; _a < allTasks_1.length; _a++) {
                            task = allTasks_1[_a];
                            if (!task.done) {
                                if (this.reminder.isActive(ev, task)) {
                                    activeTasks.push(task);
                                }
                                else {
                                    futureTasks.push(task);
                                }
                            }
                        }
                        this.events.push({ event: ev, team: teamevent, tasks: activeTasks, futureTasks: futureTasks });
                        return [3 /*break*/, 10];
                    case 9:
                        this.pastEvents.push(ev);
                        _b.label = 10;
                    case 10:
                        _i++;
                        return [3 /*break*/, 6];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(EventlistPage.prototype, "isLoggedIn", {
        get: function () {
            return this.backendservice.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventlistPage.prototype, "isNotLoggedIn", {
        get: function () {
            return !this.backendservice.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    EventlistPage.prototype.openLogin = function () {
        this.nav.navigateLogin('eventlist');
    };
    EventlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eventlist',
            template: __webpack_require__(/*! ./eventlist.page.html */ "./src/app/pages/events/eventlist/eventlist.page.html"),
            styles: [__webpack_require__(/*! ./eventlist.page.scss */ "./src/app/pages/events/eventlist/eventlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_4__["ReminderService"]])
    ], EventlistPage);
    return EventlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-events-eventlist-eventlist-module.js.map