(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tasks-tasklist-tasklist-module"],{

/***/ "./src/app/pages/tasks/tasklist/tasklist.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/tasks/tasklist/tasklist.module.ts ***!
  \*********************************************************/
/*! exports provided: TasklistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklistPageModule", function() { return TasklistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tasklist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasklist.page */ "./src/app/pages/tasks/tasklist/tasklist.page.ts");







var routes = [
    {
        path: '',
        component: _tasklist_page__WEBPACK_IMPORTED_MODULE_6__["TasklistPage"]
    },
];
var TasklistPageModule = /** @class */ (function () {
    function TasklistPageModule() {
    }
    TasklistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tasklist_page__WEBPACK_IMPORTED_MODULE_6__["TasklistPage"]]
        })
    ], TasklistPageModule);
    return TasklistPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tasks/tasklist/tasklist.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/tasks/tasklist/tasklist.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n<ion-toolbar color=\"primary\">\n  <ion-title>Deine Tasks</ion-title>\n\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"nav.goBack()\">\n      <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"isLoggedIn\">\n    <ion-card *ngIf='filterByTeam || filterByEvent'>\n      <ion-card-header color='light'>\n        <ion-card-title>Taskliste gefiltert nach:</ion-card-title>\n        <ion-card-subtitle *ngIf='filterByTeam'>Team: {{teamFilter.name}}</ion-card-subtitle>\n        <ion-card-subtitle *ngIf='filterByEvent'>Event: ???</ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n\n    <div *ngIf='tasksTODO.length > 0 || tasksFUTURE.length > 0'>\n      <ion-card *ngIf='tasksTODO.length > 0'>\n        <ion-card-header color='danger'>\n            <ion-card-title>Dringende Tasks:</ion-card-title>\n            <ion-card-subtitle>Diese Task solltest du möglichst bald erledigen!</ion-card-subtitle>\n        </ion-card-header>\n        <ion-list *ngFor='let task of tasksTODO'>\n          <ion-item (click)=\"nav.navigateForwardParameter('viewtask', task.task)\" detail *ngIf='!task.task.done'>\n            <ion-grid>\n              <ion-row>\n                <ion-label color='danger'><h2><ion-icon name=\"checkmark\" color='danger'></ion-icon> {{task.task.name}}</h2></ion-label>\n              </ion-row>\n              <ion-row>\n                <ion-card-subtitle>{{task.team.name}} &rarr; {{task.event.name}}</ion-card-subtitle>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n  \n      <ion-card>\n        <ion-card-header color='light'>\n            <ion-card-title>Offene Tasks:</ion-card-title>\n            <ion-card-subtitle>Diese Tasks kannst du jetzt schon erledigen, sind jedoch noch nicht dringend.</ion-card-subtitle>\n        </ion-card-header>\n        <ion-list *ngFor='let task of tasksFUTURE'>\n          <ion-item (click)=\"nav.navigateForwardParameter('viewtask', task.task)\" detail>\n            <ion-grid>\n              <ion-row>\n                  <ion-label><h2><ion-icon name=\"checkmark\"></ion-icon> {{task.task.name}}</h2></ion-label>\n              </ion-row>\n              <ion-row>\n                <ion-card-subtitle>{{task.team.name}} &rarr; {{task.event.name}}</ion-card-subtitle>\n              </ion-row>\n            </ion-grid>\n          </ion-item>\n        </ion-list>\n      </ion-card>\n    </div>\n\n    <div *ngIf='tasksTODO.length == 0 && tasksFUTURE.length == 0'>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Du hast aktuell keine anstehenden Tasks</ion-card-title>\n        </ion-card-header>\n      </ion-card>\n    </div>\n  </div>\n\n\n  <ion-card *ngIf=\"isNotLoggedIn\">\n    <ion-card-header>\n      <ion-card-title>\n        Du bist nicht eingeloggt!\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button (click)=\"nav.navigateLogin('tasklist')\" expand='block' color='secondary'>\n        <ion-icon name=\"home\"></ion-icon> Zum Login\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer *ngIf=\"isLoggedIn\">\n  <ion-toolbar color=\"secondary\">\n    <div (click)=\"nav.navigateForwardParameter('createtask', filterNavParameter)\" color='secondary' *ngIf='hasEvents && hasTeams' text-center>\n      <ion-icon name=\"checkmark\"></ion-icon><ion-icon name=\"add\"></ion-icon>Task erstellen\n    </div>\n    <div *ngIf='!hasTeams' (click)=\"nav.navigateForward('createteam')\" color='secondary' text-center>\n        <ion-icon name=\"contacts\"></ion-icon><ion-icon name=\"add\"></ion-icon> Erstelle vorher ein Team\n    </div>\n    <div *ngIf='!hasEvents && hasTeams' (click)=\"nav.navigateForward('createeventchooser')\" color='secondary' text-center>\n        <ion-icon name=\"calendar\"></ion-icon><ion-icon name=\"add\"></ion-icon> Erstelle vorher ein Event\n    </div>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/tasks/tasklist/tasklist.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/tasks/tasklist/tasklist.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2tzL3Rhc2tsaXN0L3Rhc2tsaXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tasks/tasklist/tasklist.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/tasks/tasklist/tasklist.page.ts ***!
  \*******************************************************/
/*! exports provided: TasklistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasklistPage", function() { return TasklistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/reminder.service */ "./src/app/services/reminder.service.ts");





var TasklistPage = /** @class */ (function () {
    function TasklistPage(nav, backendService, reminderService) {
        this.nav = nav;
        this.backendService = backendService;
        this.reminderService = reminderService;
        this.hasEvents = false;
        this.hasTeams = false;
    }
    TasklistPage.prototype.ngOnInit = function () {
    };
    Object.defineProperty(TasklistPage.prototype, "getParams", {
        get: function () {
            return this.nav.params;
        },
        enumerable: true,
        configurable: true
    });
    TasklistPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var currentTasks, filterEvent, events, teams, _i, currentTasks_1, task, eventsss, event_1, teamsss, team;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isLoggedIn) return [3 /*break*/, 16];
                        this.tasksTODO = [];
                        this.tasksFUTURE = [];
                        currentTasks = [];
                        if (!(this.getParams !== null && this.getParams !== undefined)) return [3 /*break*/, 7];
                        console.log("PARAMS: ", this.getParams);
                        this.teamFilter = this.getParams.team;
                        filterEvent = this.getParams.event;
                        if (!(this.getParams.event !== null)) return [3 /*break*/, 2];
                        console.log("EVENT: ", filterEvent);
                        return [4 /*yield*/, this.backendService.getTasks(filterEvent._id, '')];
                    case 1:
                        currentTasks = _a.sent();
                        this.filterByEvent = true;
                        this.filterByTeam = false;
                        return [3 /*break*/, 6];
                    case 2:
                        if (!(this.getParams.team !== null)) return [3 /*break*/, 4];
                        console.log("TEAM: ", this.teamFilter);
                        return [4 /*yield*/, this.backendService.getTasks('', this.teamFilter._id)];
                    case 3:
                        currentTasks = _a.sent();
                        this.filterByTeam = true;
                        this.filterByEvent = false;
                        this.filterNavParameter = { team: this.teamFilter, event: null };
                        return [3 /*break*/, 6];
                    case 4:
                        this.filterByTeam = false;
                        this.filterByEvent = false;
                        return [4 /*yield*/, this.backendService.getTasks('', '')];
                    case 5:
                        currentTasks = _a.sent();
                        _a.label = 6;
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        this.filterByTeam = false;
                        this.filterByEvent = false;
                        return [4 /*yield*/, this.backendService.getTasks('', '')];
                    case 8:
                        currentTasks = _a.sent();
                        _a.label = 9;
                    case 9: return [4 /*yield*/, this.backendService.getEvents('', '', false)];
                    case 10:
                        events = _a.sent();
                        this.hasEvents = events.length > 0;
                        return [4 /*yield*/, this.backendService.getTeams('', '', true)];
                    case 11:
                        teams = _a.sent();
                        this.hasTeams = teams.length > 0;
                        _i = 0, currentTasks_1 = currentTasks;
                        _a.label = 12;
                    case 12:
                        if (!(_i < currentTasks_1.length)) return [3 /*break*/, 16];
                        task = currentTasks_1[_i];
                        return [4 /*yield*/, this.backendService.getEvents('', task.eventref, false)];
                    case 13:
                        eventsss = _a.sent();
                        if (!(eventsss.length > 0)) return [3 /*break*/, 15];
                        event_1 = eventsss[0];
                        return [4 /*yield*/, this.backendService.getTeams('', task.eventref, true)];
                    case 14:
                        teamsss = _a.sent();
                        team = teamsss[0];
                        if (!task.done) {
                            if (this.reminderService.isActive(event_1, task)) {
                                this.tasksTODO.push({ task: task, team: team, event: event_1 });
                            }
                            else {
                                this.tasksFUTURE.push({ task: task, team: team, event: event_1 });
                            }
                        }
                        _a.label = 15;
                    case 15:
                        _i++;
                        return [3 /*break*/, 12];
                    case 16: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(TasklistPage.prototype, "isNotLoggedIn", {
        get: function () {
            return !this.backendService.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TasklistPage.prototype, "isLoggedIn", {
        get: function () {
            return this.backendService.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    TasklistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tasklist',
            template: __webpack_require__(/*! ./tasklist.page.html */ "./src/app/pages/tasks/tasklist/tasklist.page.html"),
            styles: [__webpack_require__(/*! ./tasklist.page.scss */ "./src/app/pages/tasks/tasklist/tasklist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_4__["ReminderService"]])
    ], TasklistPage);
    return TasklistPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tasks-tasklist-tasklist-module.js.map