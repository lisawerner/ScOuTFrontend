(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tasks-viewtask-viewtask-module"],{

/***/ "./src/app/pages/tasks/viewtask/viewtask.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/tasks/viewtask/viewtask.module.ts ***!
  \*********************************************************/
/*! exports provided: ViewtaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtaskPageModule", function() { return ViewtaskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _viewtask_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewtask.page */ "./src/app/pages/tasks/viewtask/viewtask.page.ts");







var routes = [
    {
        path: '',
        component: _viewtask_page__WEBPACK_IMPORTED_MODULE_6__["ViewtaskPage"]
    }
];
var ViewtaskPageModule = /** @class */ (function () {
    function ViewtaskPageModule() {
    }
    ViewtaskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_viewtask_page__WEBPACK_IMPORTED_MODULE_6__["ViewtaskPage"]]
        })
    ], ViewtaskPageModule);
    return ViewtaskPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tasks/viewtask/viewtask.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/tasks/viewtask/viewtask.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title *ngIf='isLoggedIn && task != undefined'>Task: {{task.name}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"nav.goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf='isLoggedIn && task != undefined'>\n    <ion-card>\n      <ion-card-header color='light'>\n        <ion-card-title background-color='light'>Erledigungsstatus:</ion-card-title>\n        \n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label *ngIf='task.done'>Erledigt</ion-label>\n          <ion-label *ngIf='!task.done'>Unerledigt</ion-label>\n          <ion-toggle [(ngModel)]=\"toggleDoneValue\" (ionChange)='changeDone()' checked=\"{{task.done == true}}\"></ion-toggle>\n          <ion-card-subtitle *ngIf='statusChanged' color='danger'>{{statusChangedMessage}}</ion-card-subtitle>\n        </ion-item>\n        <ion-label *ngIf='!active && !task.done'>\n          <h2>Reminder: startet ca. {{reminderToString}} vor dem Eventbegin</h2>\n        </ion-label>\n        <ion-label *ngIf='active && !task.done' color=\"danger\">\n          <h2>Reminder: Du solltest das jetzt erledigen!</h2>\n        </ion-label>\n        <ion-label *ngIf='task.done'>\n          <h2>Reminder: Dieser Task ist bereits erledigt!</h2>\n        </ion-label>\n      </ion-card-content>\n    </ion-card>\n    \n    <ion-card *ngIf='myTeam !== undefined && myEvent !== undefined'>\n      <ion-card-header color='light'>\n        <ion-card-title>Infos zu dem Task:</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-item>\n          <ion-label text-wrap>\n            <h2>Beschreibung:</h2>\n            <p>{{task.description}}</p>\n            <p *ngIf='task.description == \"\"'> ---</p>     \n          </ion-label>\n        </ion-item>\n        <ion-item (click)=\"nav.navigateForwardParameter('viewteam', myTeam)\" detail>\n          Team: {{myTeam.name}}\n        </ion-item>\n        <ion-item (click)=\"nav.navigateForwardParameter('viewevent', myEvent)\" detail>\n          <ion-label>\n            <h2>Event: {{myEvent.name}}</h2>\n            <p>startet am {{myEvent.begindate}}</p>\n          </ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n    \n    <ion-card>\n      <ion-card-header color='light'>\n        <ion-card-title>Notizfeld:</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <form #form=\"ngForm\" (ngSubmit)=\"changeTask(form)\">\n          <ion-textarea name=\"noticefield\" [(ngModel)]=\"task.notice\">\n            \n          </ion-textarea>\n          <ion-label color='danger' *ngIf='saveNotes'>Deine Notizen wurden gespeichert!</ion-label>\n          <ion-button type=\"submit\" expand=\"block\" color=\"secondary\">Notizen Speichern</ion-button>\n        </form>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  \n  <ion-card *ngIf=\"isNotLoggedIn\">\n    <ion-card-header>\n      <ion-card-title>\n        Du bist nicht eingeloggt!\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button (click)=\"openLogin()\" expand='block' color='secondary'>\n        <ion-icon name=\"home\"></ion-icon> Zum Login\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n<!--\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"nav.navigateForwardParameter('viewteam', myTeam)\"><ion-icon slot=\"icon-only\" name=\"contacts\"></ion-icon></ion-button>\n      <ion-button (click)=\"nav.navigateForwardParameter('viewevent', myEvent)\"><ion-icon slot=\"icon-only\" name=\"calendar\"></ion-icon></ion-button>\n      <ion-button (click)=\"showConfirmAlert()\"><ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n-->"

/***/ }),

/***/ "./src/app/pages/tasks/viewtask/viewtask.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/tasks/viewtask/viewtask.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2tzL3ZpZXd0YXNrL3ZpZXd0YXNrLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/tasks/viewtask/viewtask.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/tasks/viewtask/viewtask.page.ts ***!
  \*******************************************************/
/*! exports provided: ViewtaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewtaskPage", function() { return ViewtaskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/reminder.service */ "./src/app/services/reminder.service.ts");






var ViewtaskPage = /** @class */ (function () {
    function ViewtaskPage(atrCtrl, nav, backendService, reminderservice) {
        this.atrCtrl = atrCtrl;
        this.nav = nav;
        this.backendService = backendService;
        this.reminderservice = reminderservice;
        this.reminderToString = '';
        this.statusChanged = false;
        this.statusChangedMessage = '';
        this.saveNotes = false;
    }
    Object.defineProperty(ViewtaskPage.prototype, "getParams", {
        get: function () {
            return this.nav.params;
        },
        enumerable: true,
        configurable: true
    });
    ViewtaskPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var e, t;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isLoggedIn) return [3 /*break*/, 3];
                        this.statusChanged = false;
                        this.saveNotes = false;
                        this.task = this.getParams;
                        this.toggleDoneValue = this.task.done;
                        return [4 /*yield*/, this.backendService.getEvents('', this.task.eventref, true)];
                    case 1:
                        e = _a.sent();
                        this.myEvent = e[0];
                        return [4 /*yield*/, this.backendService.getTeams('', this.task.eventref, true)];
                    case 2:
                        t = _a.sent();
                        this.myTeam = t[0];
                        this.active = this.reminderservice.isActive(this.myEvent, this.task);
                        this.reminderToString = '';
                        if (this.task.distancemonths > 0) {
                            if (this.task.distancemonths === 1) {
                                this.reminderToString = ' einen ' + this.task.distancemonths + ' Monat';
                            }
                            else {
                                this.reminderToString = '' + this.task.distancemonths + ' Monaten';
                            }
                        }
                        else if (this.task.distanceweeks > 0) {
                            if (this.task.distanceweeks === 1) {
                                this.reminderToString = ' eine ' + this.task.distanceweeks + ' Woche';
                            }
                            else {
                                this.reminderToString = '' + this.task.distanceweeks + ' Wochen';
                            }
                        }
                        else {
                            if (this.task.distancedays === 1) {
                                this.reminderToString = ' einen ' + this.task.distancedays + ' Tag';
                            }
                            else {
                                this.reminderToString = '' + this.task.distancedays + ' Tagen';
                            }
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(ViewtaskPage.prototype, "isNotLoggedIn", {
        get: function () {
            return !this.backendService.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ViewtaskPage.prototype, "isLoggedIn", {
        get: function () {
            return this.backendService.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    ViewtaskPage.prototype.openLogin = function () {
        this.nav.navigateLogin('tasklist');
    };
    ViewtaskPage.prototype.ngOnInit = function () {
    };
    ViewtaskPage.prototype.changeDone = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //console.log("Change Done to: ", this.toggleDoneValue);
                    return [4 /*yield*/, this.backendService.changeTask(this.task._id, this.toggleDoneValue, this.task.notice)];
                    case 1:
                        //console.log("Change Done to: ", this.toggleDoneValue);
                        _a.sent();
                        this.task.done = this.toggleDoneValue;
                        this.statusChanged = true;
                        if (this.task.done) {
                            this.statusChangedMessage = 'Der Task wurde jetzt als "erledigt" gespeichert.';
                        }
                        else {
                            this.statusChangedMessage = 'Der Task wurde gerade als "unerledigt" gespeichert!';
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewtaskPage.prototype.changeTask = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var notice;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        notice = form.value.noticefield;
                        //console.log('Change notice to: ', notice);
                        return [4 /*yield*/, this.backendService.changeTask(this.task._id, this.task.done, notice)];
                    case 1:
                        //console.log('Change notice to: ', notice);
                        _a.sent();
                        this.task.notice = notice;
                        this.saveNotes = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewtaskPage.prototype.showConfirmAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertConfirm;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atrCtrl.create({
                            header: 'ToDo löschen',
                            message: 'Bist du sicher, dass du diese Aufgabe löschen willst?',
                            buttons: [
                                {
                                    text: 'Nein',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('No clicked');
                                    }
                                },
                                {
                                    text: 'Ja',
                                    handler: function () {
                                        console.log('Yes clicked');
                                        //TODO: Delete Task in database!
                                        _this.nav.navigateTasklist();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alertConfirm = _a.sent();
                        return [4 /*yield*/, alertConfirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewtaskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewtask',
            template: __webpack_require__(/*! ./viewtask.page.html */ "./src/app/pages/tasks/viewtask/viewtask.page.html"),
            styles: [__webpack_require__(/*! ./viewtask.page.scss */ "./src/app/pages/tasks/viewtask/viewtask.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_4__["BackendService"],
            src_app_services_reminder_service__WEBPACK_IMPORTED_MODULE_5__["ReminderService"]])
    ], ViewtaskPage);
    return ViewtaskPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tasks-viewtask-viewtask-module.js.map