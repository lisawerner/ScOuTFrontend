(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-eventtasks-eventtasks-module"],{

/***/ "./src/app/pages/events/eventtasks/eventtasks.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/events/eventtasks/eventtasks.module.ts ***!
  \**************************************************************/
/*! exports provided: EventtasksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventtasksPageModule", function() { return EventtasksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _eventtasks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventtasks.page */ "./src/app/pages/events/eventtasks/eventtasks.page.ts");







var routes = [
    {
        path: '',
        component: _eventtasks_page__WEBPACK_IMPORTED_MODULE_6__["EventtasksPage"]
    }
];
var EventtasksPageModule = /** @class */ (function () {
    function EventtasksPageModule() {
    }
    EventtasksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_eventtasks_page__WEBPACK_IMPORTED_MODULE_6__["EventtasksPage"]]
        })
    ], EventtasksPageModule);
    return EventtasksPageModule;
}());



/***/ }),

/***/ "./src/app/pages/events/eventtasks/eventtasks.page.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/events/eventtasks/eventtasks.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title *ngIf='isLoggedIn && event != undefined'>Event: {{event.name}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"nav.goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"isLoggedIn\">\n\n    <ion-button (click)=\"nav.navigateForwardParameter('viewevent', event)\" expand='block' color='secondary'>\n      <ion-icon name='calendar'></ion-icon>Zurück zum Event\n    </ion-button>\n\n    <div *ngIf='tasksTODO !== undefined && tasksFUTURE !== undefined && tasksDONE !== undefined'>\n\n      <div *ngIf='tasksTODO.length > 0 || tasksFUTURE.length > 0 || tasksDONE.length > 0'>\n        <ion-card>\n          <ion-card-header color='light'>\n            <ion-card-title>Dringende Tasks:</ion-card-title>\n            <ion-card-subtitle>Diese Task solltest du möglichst bald erledigen!</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-card-subtitle *ngIf='tasksTODO.length === 0'>---</ion-card-subtitle>\n            <ion-list *ngFor='let task of tasksTODO'>\n              <ion-item (click)=\"nav.navigateForwardParameter('viewtask', task)\" detail *ngIf='!task.done' lines='none'>\n                {{task.name}}\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      \n        <ion-card>\n          <ion-card-header color='light'>\n            <ion-card-title>Offene Tasks:</ion-card-title>\n            <ion-card-subtitle>Diese Tasks kannst du jetzt schon erledigen, sind jedoch noch nicht dringend.</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-card-subtitle *ngIf='tasksFUTURE.length === 0'>---</ion-card-subtitle>\n            <ion-list *ngFor='let task of tasksFUTURE'>\n              <ion-item (click)=\"nav.navigateForwardParameter('viewtask', task)\" detail  lines='none'>\n                {{task.name}}\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n  \n        <ion-card>\n          <ion-card-header color='light'>\n            <ion-card-title>Erledigte Tasks:</ion-card-title>\n            <ion-card-subtitle>Diese Tasks sind bereits erledigt.</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-card-subtitle *ngIf='tasksDONE.length === 0'>---</ion-card-subtitle>\n            <ion-list *ngFor='let task of tasksDONE'>\n              <ion-item (click)=\"nav.navigateForwardParameter('viewtask', task)\" detail  lines='none'>\n                {{task.name}}\n              </ion-item>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    \n      <div *ngIf='tasksTODO.length === 0 && tasksFUTURE.length === 0 && tasksDONE.length === 0'>\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title>Dieses Event hat noch keine Tasks</ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </div>\n    </div>\n\n  </div>\n  \n  \n  <ion-card *ngIf=\"isNotLoggedIn\">\n    <ion-card-header>\n      <ion-card-title>\n        Du bist nicht eingeloggt!\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button (click)=\"nav.navigateLogin('tasklist')\" expand='block' color='secondary'>\n        <ion-icon name=\"home\"></ion-icon> Zum Login\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n\n<ion-footer *ngIf=\"isLoggedIn\">\n  <ion-toolbar color=\"secondary\">\n    <div (click)=\"nav.navigateForwardParameter('createtask', filterNavParameter)\" color='secondary' text-center>\n      <ion-icon name=\"checkmark\"></ion-icon><ion-icon name=\"add\"></ion-icon>Task erstellen\n    </div>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/events/eventtasks/eventtasks.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/events/eventtasks/eventtasks.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy9ldmVudHRhc2tzL2V2ZW50dGFza3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/events/eventtasks/eventtasks.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/events/eventtasks/eventtasks.page.ts ***!
  \************************************************************/
/*! exports provided: EventtasksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventtasksPage", function() { return EventtasksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/reminder.service */ "./src/app/services/reminder.service.ts");





var EventtasksPage = /** @class */ (function () {
    function EventtasksPage(nav, backendservice, reminder) {
        this.nav = nav;
        this.backendservice = backendservice;
        this.reminder = reminder;
    }
    EventtasksPage.prototype.ngOnInit = function () {
    };
    EventtasksPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var allTasks, _i, allTasks_1, task;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isLoggedIn) return [3 /*break*/, 2];
                        this.event = this.getParams;
                        this.filterNavParameter = { team: null, event: this.event };
                        return [4 /*yield*/, this.backendservice.getTasks(this.event._id, '')];
                    case 1:
                        allTasks = _a.sent();
                        this.tasksTODO = [];
                        this.tasksFUTURE = [];
                        this.tasksDONE = [];
                        for (_i = 0, allTasks_1 = allTasks; _i < allTasks_1.length; _i++) {
                            task = allTasks_1[_i];
                            if (!task.done) {
                                if (this.reminder.isActive(this.event, task)) {
                                    this.tasksTODO.push(task);
                                }
                                else {
                                    this.tasksFUTURE.push(task);
                                }
                            }
                            else {
                                this.tasksDONE.push(task);
                            }
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(EventtasksPage.prototype, "getParams", {
        get: function () {
            return this.nav.params;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventtasksPage.prototype, "isLoggedIn", {
        get: function () {
            return this.backendservice.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EventtasksPage.prototype, "isNotLoggedIn", {
        get: function () {
            return !this.backendservice.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    EventtasksPage.prototype.openLogin = function () {
        this.nav.navigateLogin('eventtasks');
    };
    EventtasksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eventtasks',
            template: __webpack_require__(/*! ./eventtasks.page.html */ "./src/app/pages/events/eventtasks/eventtasks.page.html"),
            styles: [__webpack_require__(/*! ./eventtasks.page.scss */ "./src/app/pages/events/eventtasks/eventtasks.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_4__["ReminderService"]])
    ], EventtasksPage);
    return EventtasksPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-events-eventtasks-eventtasks-module.js.map