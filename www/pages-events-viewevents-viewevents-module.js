(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-viewevents-viewevents-module"],{

/***/ "./src/app/pages/events/viewevents/viewevents.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/events/viewevents/viewevents.module.ts ***!
  \**************************************************************/
/*! exports provided: VieweventsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VieweventsPageModule", function() { return VieweventsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewevents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewevents.page */ "./src/app/pages/events/viewevents/viewevents.page.ts");







var routes = [
    {
        path: '',
        component: _viewevents_page__WEBPACK_IMPORTED_MODULE_6__["VieweventsPage"]
    }
];
var VieweventsPageModule = /** @class */ (function () {
    function VieweventsPageModule() {
    }
    VieweventsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewevents_page__WEBPACK_IMPORTED_MODULE_6__["VieweventsPage"]]
        })
    ], VieweventsPageModule);
    return VieweventsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/events/viewevents/viewevents.page.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/events/viewevents/viewevents.page.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title *ngIf='isLoggedIn && event != undefined && team != undefined'>Event: {{event.name}}</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"nav.goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div *ngIf=\"isLoggedIn\">\n      <ion-card *ngIf='event != undefined'>\n        <ion-card-header color='light'>\n          <ion-card-title>Von: {{event.begindate}} {{event.begintime}} Uhr</ion-card-title>\n          <ion-card-title>Bis: {{event.enddate}} {{event.endtime}} Uhr</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-card-subtitle>Beschreibung: {{event.description}}</ion-card-subtitle>\n\n\n          <ion-button (click)=\"nav.navigateForwardParameter('viewteam', team)\" expand='block' color='secondary' *ngIf='team != undefined'><ion-icon name=\"contacts\"></ion-icon> {{team.name}}</ion-button>\n          <ion-button (click)=\"nav.navigateForwardParameter('orgateam', event)\" expand='block' color='secondary'>Zum Orgateam</ion-button>\n        </ion-card-content>\n      </ion-card>\n    \n      <ion-card>\n        <ion-card-header color='light'>\n            <ion-card-title>Event Tasks:</ion-card-title>\n        </ion-card-header>\n        <ion-card-content *ngIf='tasksTODO != undefined'>\n\n          <ion-label *ngIf='tasksTODO.length === 0'>\n            Aktuell gibt es keine dringenden Tasks!\n          </ion-label>\n\n          <div *ngIf='tasksTODO.length > 0'>\n            <ion-label color='danger'>Dringende Tasks:</ion-label>\n            <ion-label><p>Diese Task solltest du möglichst bald erledigen!</p></ion-label>\n            <ion-list *ngFor='let task of tasksTODO'>\n              <ion-item *ngIf='!task.done' (click)=\"nav.navigateForwardParameter('viewtask', task)\" detail  lines='none'>\n                <ion-icon name=\"checkmark\" color='danger'></ion-icon> {{task.name}}\n              </ion-item>\n            </ion-list>\n          </div>\n\n          <div *ngIf='tasksTODO.length === 0 && tasksFUTURE.length > 0'>\n            <ion-label>Offene Tasks:</ion-label>\n            <ion-list *ngFor='let task of tasksFUTURE'>\n              <ion-item *ngIf='!task.done' (click)=\"nav.navigateForwardParameter('viewtask', task)\" detail  lines='none'>\n                <ion-icon name=\"checkmark\"></ion-icon> {{task.name}}\n              </ion-item>\n            </ion-list>\n          </div>\n          \n          <ion-button (click)=\"nav.navigateForwardParameter('eventtasks', event)\" expand='block' color='secondary'>\n            <ion-icon name='checkmark-circle'></ion-icon>Alle Event Tasks\n          </ion-button>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card>\n        <ion-card-header color='light'>\n          <ion-card-title>Erstelle ein Template...</ion-card-title>\n          <ion-card-subtitle>... welches Struktur und Task wiederverwendbar macht!</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n          <!--TODO: Wenn es bereits ein Tempalte für das Event gibt, dann sollte man es nicht mehr erstellen,\n            sondern höchstens bearbeiten können!\n            Damit man Prüfen kann, ob es schon ein Template gibt:\n              Muss irgendeine ID/Referenz zwischen dem Template und seinen Ablegern erstellt werden-->\n          <form #form=\"ngForm\" (ngSubmit)=\"createTemplate(form)\">\n            \n            <ion-item>\n              <ion-label position=\"floating\">Template-Name:</ion-label>\n              <ion-input name=\"templatename\" ngModel required></ion-input>\n            </ion-item>\n            <ion-label color=\"danger\">\n              <p *ngIf=\"templateValidation.invalid\">{{templateValidation.message}}</p>\n            </ion-label>\n            <ion-label *ngIf=\"success\">Das Template wurde erfolreich angelegt.</ion-label>\n            <ion-button type=\"submit\" expand=\"block\" color=\"secondary\">Template erstellen</ion-button>\n\n          </form>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <ion-card *ngIf=\"isNotLoggedIn\">\n      <ion-card-header>\n        <ion-card-title>\n          Du bist nicht eingeloggt!\n        </ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-button (click)=\"openLogin()\" expand='block' color='secondary'>\n          <ion-icon name=\"home\"></ion-icon> Zum Login\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/events/viewevents/viewevents.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/events/viewevents/viewevents.page.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy92aWV3ZXZlbnRzL3ZpZXdldmVudHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/events/viewevents/viewevents.page.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/events/viewevents/viewevents.page.ts ***!
  \************************************************************/
/*! exports provided: VieweventsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VieweventsPage", function() { return VieweventsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/reminder.service */ "./src/app/services/reminder.service.ts");





var VieweventsPage = /** @class */ (function () {
    function VieweventsPage(nav, backendservice, reminder) {
        this.nav = nav;
        this.backendservice = backendservice;
        this.reminder = reminder;
        this.success = false;
        this.templateValidation = {
            invalid: false,
            message: ""
        };
    }
    VieweventsPage.prototype.ngOnInit = function () {
    };
    Object.defineProperty(VieweventsPage.prototype, "getParams", {
        get: function () {
            return this.nav.params;
        },
        enumerable: true,
        configurable: true
    });
    VieweventsPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var eventID, teamssss, allTasks, _i, allTasks_1, task;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isLoggedIn) return [3 /*break*/, 3];
                        //console.log("Enter params of event:", this.getParams)
                        this.event = this.getParams;
                        eventID = this.event._id.toString();
                        return [4 /*yield*/, this.backendservice.getTeams('', eventID, true)];
                    case 1:
                        teamssss = _a.sent();
                        this.team = teamssss[0];
                        return [4 /*yield*/, this.backendservice.getTasks(eventID, '')];
                    case 2:
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
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    VieweventsPage.prototype.changeDone = function (task) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        //console.log("Change Done to: 'true'");
                        task.done = true;
                        return [4 /*yield*/, this.backendservice.changeTask(task._id, true, task.notice)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(VieweventsPage.prototype, "isLoggedIn", {
        get: function () {
            return this.backendservice.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VieweventsPage.prototype, "isNotLoggedIn", {
        get: function () {
            return !this.backendservice.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    VieweventsPage.prototype.openLogin = function () {
        this.nav.navigateLogin('eventlist');
    };
    VieweventsPage.prototype.createTemplate = function (form) {
        var _this = this;
        this.templateValidation = {
            invalid: false,
            message: ""
        };
        var templatename = form.value.templatename;
        console.log(templatename);
        var request = this.backendservice.createTemplate(templatename, this.event._id, this.event.teamref);
        request.then(function (ret) {
            if (!ret.success) {
                //console.log("Database Feedback: ", ret.error);
                _this.templateValidation = {
                    invalid: true,
                    message: ret.error
                };
            }
            else {
                _this.success = true;
            }
        }, function (err) {
            console.error(err);
        });
    };
    VieweventsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewevents',
            template: __webpack_require__(/*! ./viewevents.page.html */ "./src/app/pages/events/viewevents/viewevents.page.html"),
            styles: [__webpack_require__(/*! ./viewevents.page.scss */ "./src/app/pages/events/viewevents/viewevents.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"], src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_4__["ReminderService"]])
    ], VieweventsPage);
    return VieweventsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-events-viewevents-viewevents-module.js.map