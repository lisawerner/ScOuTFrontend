(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tasks-createtask-createtask-module"],{

/***/ "./src/app/pages/tasks/createtask/createtask.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/tasks/createtask/createtask.module.ts ***!
  \*************************************************************/
/*! exports provided: CreatetaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatetaskPageModule", function() { return CreatetaskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _createtask_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createtask.page */ "./src/app/pages/tasks/createtask/createtask.page.ts");







var routes = [
    {
        path: '',
        component: _createtask_page__WEBPACK_IMPORTED_MODULE_6__["CreatetaskPage"]
    }
];
var CreatetaskPageModule = /** @class */ (function () {
    function CreatetaskPageModule() {
    }
    CreatetaskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_createtask_page__WEBPACK_IMPORTED_MODULE_6__["CreatetaskPage"]]
        })
    ], CreatetaskPageModule);
    return CreatetaskPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tasks/createtask/createtask.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/tasks/createtask/createtask.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Task erzeugen:</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"nav.goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"isLoggedIn\">\n    <form #form=\"ngForm\" (ngSubmit)=\"saveNewTask(form)\">\n      <ion-card>\n        <ion-card-header color='light'>\n          <ion-card-title>Notwendige Angaben:</ion-card-title>\n        </ion-card-header>\n    \n        <ion-card-content>\n\n          <ion-item>\n            <ion-label position=\"floating\">Task-Name:</ion-label>\n            <ion-input name=\"taskname\" ngModel></ion-input>\n          </ion-item>\n      \n          <ion-item>\n            <ion-label>Team:</ion-label>\n            <ion-select *ngIf='choosedTeam === null' name=\"teamID\" ngModel placeholder=\"Wähle\" (ionChange)='rememberTeam(form.value.teamID)'>\n              <ion-select-option *ngFor=\"let team of teams\" value='{{team._id}}'>{{team.name}}</ion-select-option>\n            </ion-select>\n            <ion-label *ngIf='choosedTeam !== null'>{{choosedTeam.name}}</ion-label>\n          </ion-item>\n      \n          <ion-item [disabled]=\"teamevents == null\">\n            <ion-label>Event:</ion-label>\n            <ion-select *ngIf='choosedEvent === null' name=\"eventID\" ngModel placeholder=\"Wähle\" >\n              <ion-select-option *ngFor=\"let event of teamevents\" value=\"{{event._id}}\">{{event.name}}</ion-select-option>\n            </ion-select>\n            <ion-label *ngIf='choosedEvent !== null'>{{choosedEvent.name}}</ion-label>\n          </ion-item>\n      \n\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title *ngIf=\"validation.invalid\" color=\"danger\">Reminder:</ion-card-title>\n              <ion-card-title *ngIf=\"!validation.invalid\">Reminder:</ion-card-title>\n              <ion-card-subtitle>Wie lange vor dem Event soll dieser Task den Status \"dringend erledigen\" bekommen, sodass du stärker von der App daran erinnerst wirst ihn zu erledigen:</ion-card-subtitle>\n            </ion-card-header>\n    \n            <ion-card-content>\n              <ion-item>\n                <ion-label>Tage:</ion-label>\n                <ion-input type=\"number\" name=\"dayreminder\" ngModel></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label>Wochen:</ion-label>\n                <ion-input type=\"number\" name=\"weekreminder\" ngModel></ion-input>\n              </ion-item>\n              <ion-item>\n                <ion-label>Monate:</ion-label>\n                <ion-input type=\"number\" name=\"monthreminder\" ngModel></ion-input>\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n          \n          <ion-item>\n            <ion-label position=\"floating\">Task Beschreibung (optional):</ion-label>\n            <ion-textarea name=\"description\" ngModel ></ion-textarea>\n          </ion-item>\n\n          <ion-label color=\"danger\">\n            <p *ngIf=\"validation.invalid\">{{validation.message}}</p>\n          </ion-label>\n          <ion-button type=\"submit\" expand=\"block\" color=\"secondary\">Speichern</ion-button>\n        </ion-card-content>\n    \n      </ion-card>\n    </form>\n  </div>\n\n  <ion-card *ngIf=\"isNotLoggedIn\">\n    <ion-card-header>\n      <ion-card-title>\n        Du bist nicht eingeloggt!\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button (click)=\"openLogin()\" expand='block' color='secondary'>\n        <ion-icon name=\"home\"></ion-icon> Zum Login\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tasks/createtask/createtask.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/tasks/createtask/createtask.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2tzL2NyZWF0ZXRhc2svY3JlYXRldGFzay5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tasks/createtask/createtask.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/tasks/createtask/createtask.page.ts ***!
  \***********************************************************/
/*! exports provided: CreatetaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatetaskPage", function() { return CreatetaskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");




var CreatetaskPage = /** @class */ (function () {
    function CreatetaskPage(nav, backendService) {
        this.nav = nav;
        this.backendService = backendService;
        this.teams = [];
    }
    Object.defineProperty(CreatetaskPage.prototype, "getParams", {
        get: function () {
            return this.nav.params;
        },
        enumerable: true,
        configurable: true
    });
    CreatetaskPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, teamssss;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.validation = {
                            invalid: false,
                            message: ""
                        };
                        if (!this.isLoggedIn) return [3 /*break*/, 5];
                        this.choosedTeam = null;
                        this.choosedEvent = null;
                        if (!(this.getParams === null || this.getParams === undefined)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, this.backendService.getTeams('', '', true)];
                    case 1:
                        _a.teams = _b.sent();
                        this.team = null;
                        this.teamevents = null;
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(this.getParams.team !== null)) return [3 /*break*/, 3];
                        this.choosedTeam = this.getParams.team;
                        this.rememberTeam(this.choosedTeam._id);
                        return [3 /*break*/, 5];
                    case 3:
                        if (!(this.getParams.event !== null)) return [3 /*break*/, 5];
                        this.choosedEvent = this.getParams.event;
                        this.teamevents = this.choosedEvent;
                        return [4 /*yield*/, this.backendService.getTeams(this.choosedEvent.teamref, '', true)];
                    case 4:
                        teamssss = _b.sent();
                        this.choosedTeam = teamssss[0];
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CreatetaskPage.prototype.ngOnInit = function () {
    };
    Object.defineProperty(CreatetaskPage.prototype, "isLoggedIn", {
        get: function () {
            return this.backendService.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreatetaskPage.prototype, "isNotLoggedIn", {
        get: function () {
            return !this.backendService.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    CreatetaskPage.prototype.openLogin = function () {
        this.nav.navigateLogin('tasklist');
    };
    CreatetaskPage.prototype.rememberTeam = function (teamID) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.team = teamID;
                        console.log(this.team);
                        _a = this;
                        return [4 /*yield*/, this.backendService.getEvents(this.team, '', false)];
                    case 1:
                        _a.teamevents = _b.sent();
                        console.log("Get Events: ", this.teamevents);
                        return [2 /*return*/];
                }
            });
        });
    };
    CreatetaskPage.prototype.saveNewTask = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, teamID, eventID, sum, request;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.validation = {
                    invalid: false,
                    message: ""
                };
                result = form.value;
                //Check Name!
                if (result.taskname === '') {
                    this.validation = {
                        invalid: true,
                        message: "Du musst einen Namen für den Task angeben!"
                    };
                    return [2 /*return*/];
                }
                teamID = result.teamID;
                if (this.choosedTeam !== null) {
                    teamID = this.choosedTeam._id;
                }
                if (teamID === '') {
                    this.validation = {
                        invalid: true,
                        message: "Du musst ein Team (und danach ein Event) auswählen!"
                    };
                    return [2 /*return*/];
                }
                eventID = result.eventID;
                if (this.choosedEvent !== null) {
                    eventID = this.choosedEvent._id;
                }
                if (eventID === '') {
                    this.validation = {
                        invalid: true,
                        message: "Du musst ein Event auswählen!"
                    };
                    return [2 /*return*/];
                }
                //Check Reminder
                if (result.dayreminder === null) {
                    result.dayreminder = '';
                }
                if (result.weekreminder === null) {
                    result.weekreminder = '';
                }
                if (result.monthreminder === null) {
                    result.monthreminder = '';
                }
                sum = result.dayreminder + result.weekreminder + result.monthreminder;
                if (sum <= 0) {
                    this.validation = {
                        invalid: true,
                        message: "Die Summe vom Reminder muss > 0"
                    };
                    return [2 /*return*/];
                }
                request = this.backendService.createTask(result.taskname, teamID, eventID, result.description, result.dayreminder, result.weekreminder, result.monthreminder);
                request.then(function (ret) {
                    if (!ret.success) {
                        //console.log("Database Feedback: ", ret.error);
                        _this.validation = {
                            invalid: true,
                            message: ret.error
                        };
                    }
                    else {
                        _this.nav.navigateForwardParameter('viewtask', ret.data);
                    }
                }, function (err) {
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    CreatetaskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createtask',
            template: __webpack_require__(/*! ./createtask.page.html */ "./src/app/pages/tasks/createtask/createtask.page.html"),
            styles: [__webpack_require__(/*! ./createtask.page.scss */ "./src/app/pages/tasks/createtask/createtask.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_3__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_2__["BackendService"]])
    ], CreatetaskPage);
    return CreatetaskPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tasks-createtask-createtask-module.js.map