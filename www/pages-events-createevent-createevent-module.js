(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-events-createevent-createevent-module"],{

/***/ "./src/app/pages/events/createevent/createevent.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/events/createevent/createevent.module.ts ***!
  \****************************************************************/
/*! exports provided: CreateeventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateeventPageModule", function() { return CreateeventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _createevent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./createevent.page */ "./src/app/pages/events/createevent/createevent.page.ts");







var routes = [
    {
        path: '',
        component: _createevent_page__WEBPACK_IMPORTED_MODULE_6__["CreateeventPage"]
    }
];
var CreateeventPageModule = /** @class */ (function () {
    function CreateeventPageModule() {
    }
    CreateeventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_createevent_page__WEBPACK_IMPORTED_MODULE_6__["CreateeventPage"]]
        })
    ], CreateeventPageModule);
    return CreateeventPageModule;
}());



/***/ }),

/***/ "./src/app/pages/events/createevent/createevent.page.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/events/createevent/createevent.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Event erzeugen</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"nav.goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"isLoggedIn\">\n    <ion-card>\n      <ion-card-header *ngIf='template != null && template != undefined'>\n        <ion-card-title>{{template.name}}</ion-card-title>\n        <ion-card-subtitle>Erstelle ein Event auf Grundlage dieses Templates. Das Template übernimmt Informationen, wie das Team, die Beschreibung und Tasks.</ion-card-subtitle>\n      </ion-card-header>\n      <form #form=\"ngForm\" (ngSubmit)=\"saveNewEvent(form)\">\n        <ion-item>\n          <ion-label position=\"floating\">Event-Name:</ion-label>\n          <ion-input name=\"eventname\" ngModel></ion-input>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>Team:</ion-label>\n          <ion-select name=\"teamname\" ngModel *ngIf='template == null || template == undefined'>\n            <ion-select-option *ngFor=\"let team of teams\">{{team.name}}</ion-select-option>\n          </ion-select>\n          <ion-label *ngIf='template != null && template != undefined'>{{teamname}}</ion-label>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>Start:</ion-label>\n          <ion-datetime displayFormat=\"DD MMM YYYY HH:mm\"  [min]=\"minDate\" [max]=\"maxDate\" placeholder=\"DD MMM YYYY HH:MM\" name=\"eventbegin\" ngModel></ion-datetime>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label>Ende:</ion-label>\n          <ion-datetime displayFormat=\"DD MMM YYYY HH:mm\" [min]=\"minDate\" [max]=\"maxDate\" placeholder=\"DD MMM YYYY HH:MM\" name=\"eventend\" ngModel></ion-datetime>\n        </ion-item>\n    \n        <ion-item>\n          <ion-label position=\"floating\">Event Beschreibung (optional):</ion-label>\n          <ion-textarea name=\"eventdescription\" [(ngModel)]=\"templateDescription\"></ion-textarea>\n        </ion-item>\n  \n        <ion-label color=\"danger\">\n          <p *ngIf=\"validation.invalid\">{{validation.message}}</p>\n        </ion-label>\n        <ion-button type=\"submit\" expand=\"block\" color=\"secondary\">Speichern</ion-button>\n      </form>\n    </ion-card>\n  </div>\n\n  <ion-card *ngIf=\"isNotLoggedIn\">\n    <ion-card-header>\n      <ion-card-title>\n        Du bist nicht eingeloggt!\n      </ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button (click)=\"openLogin()\" expand='block' color='secondary'>\n        <ion-icon name=\"home\"></ion-icon> Zum Login\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/events/createevent/createevent.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/events/createevent/createevent.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V2ZW50cy9jcmVhdGVldmVudC9jcmVhdGVldmVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/events/createevent/createevent.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/events/createevent/createevent.page.ts ***!
  \**************************************************************/
/*! exports provided: CreateeventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateeventPage", function() { return CreateeventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");
/* harmony import */ var src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/backend.service */ "./src/app/services/backend.service.ts");




var CreateeventPage = /** @class */ (function () {
    function CreateeventPage(nav, back) {
        this.nav = nav;
        this.back = back;
        this.validation = {
            invalid: false,
            message: ""
        };
    }
    CreateeventPage.prototype.ngOnInit = function () {
    };
    Object.defineProperty(CreateeventPage.prototype, "getParams", {
        get: function () {
            return this.nav.params;
        },
        enumerable: true,
        configurable: true
    });
    CreateeventPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var today, dd, mm, yyyy, maxyyyy, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.templateDescription = "";
                        today = new Date();
                        dd = today.getDate();
                        mm = today.getMonth() + 1;
                        yyyy = today.getFullYear();
                        maxyyyy = yyyy + 10;
                        this.minDate = yyyy + "-";
                        this.maxDate = maxyyyy + "-12-28";
                        if (mm < 10) {
                            this.minDate += '0' + mm + "-";
                        }
                        else {
                            this.minDate += mm + "-";
                        }
                        if (dd < 10) {
                            this.minDate += '0' + dd;
                        }
                        else {
                            this.minDate += dd;
                        }
                        console.log(this.minDate);
                        this.teams = [];
                        if (!this.isLoggedIn) return [3 /*break*/, 3];
                        console.log("Diese Parameter kommen an: ", this.getParams);
                        if (!(this.getParams === null || this.getParams === undefined)) return [3 /*break*/, 2];
                        console.log("Erstelle Event ohne Templte");
                        _a = this;
                        return [4 /*yield*/, this.back.getTeams('', '', true)];
                    case 1:
                        _a.teams = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        console.log("Erstelle Event aufgrund eines Templates");
                        this.template = this.getParams.template;
                        this.teamname = this.getParams.team;
                        this.templateDescription = this.getParams.template.description;
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(CreateeventPage.prototype, "isLoggedIn", {
        get: function () {
            return this.back.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CreateeventPage.prototype, "isNotLoggedIn", {
        get: function () {
            return !this.back.isLoggedIn;
        },
        enumerable: true,
        configurable: true
    });
    CreateeventPage.prototype.openLogin = function () {
        this.nav.navigateLogin('eventlist');
    };
    CreateeventPage.prototype.saveNewEvent = function (form) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, eventname, teamname, tasklist, begindate, begintime, enddate, endtime, request;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.validation = {
                    invalid: false,
                    message: ""
                };
                result = form.value;
                eventname = result.eventname;
                if (eventname === '') {
                    this.validation = {
                        invalid: true,
                        message: "Du musst einen Namen für das Event eingeben!"
                    };
                    return [2 /*return*/];
                }
                teamname = result.teamname;
                tasklist = [];
                if (this.template !== undefined && this.template !== null) {
                    teamname = this.teamname;
                    tasklist = this.template.tasks;
                }
                if (teamname === '') {
                    this.validation = {
                        invalid: true,
                        message: "Du musst ein Team auswählen!"
                    };
                    return [2 /*return*/];
                }
                begindate = result.eventbegin.substring(0, 10);
                begintime = result.eventbegin.substring(11, 16);
                if (begindate === '') {
                    this.validation = {
                        invalid: true,
                        message: "Die Eingabe vom Beginn des Events fehlt!"
                    };
                    return [2 /*return*/];
                }
                enddate = result.eventend.substring(0, 10);
                endtime = result.eventend.substring(11, 16);
                if (enddate === '') {
                    this.validation = {
                        invalid: true,
                        message: "Die Eingabe vom Ende des Events fehlt!"
                    };
                    return [2 /*return*/];
                }
                request = this.back.createEvent(eventname, teamname, result.eventdescription, begindate, begintime, enddate, endtime, tasklist);
                request.then(function (ret) {
                    if (!ret.success) {
                        //console.log("Database Feedback: ", ret.error);
                        _this.validation = {
                            invalid: true,
                            message: ret.error
                        };
                    }
                    else {
                        //console.log(ret.data)
                        _this.nav.navigateForwardParameter('viewevent', ret.data);
                    }
                }, function (err) {
                    console.error(err);
                });
                return [2 /*return*/];
            });
        });
    };
    CreateeventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createevent',
            template: __webpack_require__(/*! ./createevent.page.html */ "./src/app/pages/events/createevent/createevent.page.html"),
            styles: [__webpack_require__(/*! ./createevent.page.scss */ "./src/app/pages/events/createevent/createevent.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"], src_app_services_backend_service__WEBPACK_IMPORTED_MODULE_3__["BackendService"]])
    ], CreateeventPage);
    return CreateeventPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-events-createevent-createevent-module.js.map