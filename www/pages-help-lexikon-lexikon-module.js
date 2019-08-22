(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-help-lexikon-lexikon-module"],{

/***/ "./src/app/pages/help/lexikon/lexikon.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/help/lexikon/lexikon.module.ts ***!
  \******************************************************/
/*! exports provided: LexikonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexikonPageModule", function() { return LexikonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lexikon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lexikon.page */ "./src/app/pages/help/lexikon/lexikon.page.ts");







var routes = [
    {
        path: '',
        component: _lexikon_page__WEBPACK_IMPORTED_MODULE_6__["LexikonPage"]
    }
];
var LexikonPageModule = /** @class */ (function () {
    function LexikonPageModule() {
    }
    LexikonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_lexikon_page__WEBPACK_IMPORTED_MODULE_6__["LexikonPage"]]
        })
    ], LexikonPageModule);
    return LexikonPageModule;
}());



/***/ }),

/***/ "./src/app/pages/help/lexikon/lexikon.page.html":
/*!******************************************************!*\
  !*** ./src/app/pages/help/lexikon/lexikon.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Hilfe: Lexikon (Begriffe)</ion-title>\n  \n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"nav.goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Task</ion-card-title>\n      <ion-card-subtitle>\n        Ein Task ist eine Aufgabe, Planungsschritt, ToDo, welche du erledigen musst um ein Event zu planen.\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>\n        <p>Beispiel: \"Einkauf erledigen\"</p>\n        <p>Unerledigte Tasks werden eingteilt in: \"dringend\" (Reminder ist aktiv) und \"offen\" (Reminder ist noch inaktiv)</p>\n      </ion-label>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Reminder</ion-card-title>\n          <ion-card-subtitle>\n            Ein Reminder ist eine Erinnerung, ab wann der Task dringend erledigt werden sollte.\n            Du kannst den Reminder beim Erstellen des Tasks relativ zum Eventbeginn angeben.\n          </ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Event</ion-card-title>\n      <ion-card-subtitle>\n        Ein Event ist eine Aktion, Veranstaltung oder sonstiger Termin, welches dein Team vorbereitet.\n        Das Event kann mit Hilfe von Tasks geplant und vorbereitet werden.\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-card>\n        <ion-card-header>\n          <ion-card-title>Template</ion-card-title>\n          <ion-card-subtitle>\n            Aus Events können Templates (Vorlagen) erstellt werden. Um ähnliche Events zu erstellen, kann man diese aus dem Template generieren und sich so die Arbeit sparen alle Tasks wieder einzeln anzulegen.\n          </ion-card-subtitle>\n        </ion-card-header>\n      </ion-card>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Team</ion-card-title>\n      <ion-card-subtitle>\n        Ein Team ist eine Gruppe, ein Verein oder ein anderer Zusammenschluss von Personen, welches gemeinsam Events plant.\n      </ion-card-subtitle>\n    </ion-card-header>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer color=\"secondary\">\n  <!-- Help-Footer-->\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons>\n      <ion-button (click)=\"nav.navigateForward('starttutorial')\">\n        <ion-icon name=\"play-circle\"></ion-icon> Tutorial\n      </ion-button>\n      <ion-button (click)=\"nav.navigateForward('sitemap')\">\n        <ion-icon name=\"compass\"></ion-icon> Sitemap\n      </ion-button>\n      <ion-button (click)=\"nav.navigateForward('lexikon')\">\n        <ion-icon name=\"book\"></ion-icon> Begriffe\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/help/lexikon/lexikon.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/help/lexikon/lexikon.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlbHAvbGV4aWtvbi9sZXhpa29uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/help/lexikon/lexikon.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/help/lexikon/lexikon.page.ts ***!
  \****************************************************/
/*! exports provided: LexikonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LexikonPage", function() { return LexikonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");



var LexikonPage = /** @class */ (function () {
    function LexikonPage(nav) {
        this.nav = nav;
    }
    LexikonPage.prototype.ngOnInit = function () {
    };
    LexikonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lexikon',
            template: __webpack_require__(/*! ./lexikon.page.html */ "./src/app/pages/help/lexikon/lexikon.page.html"),
            styles: [__webpack_require__(/*! ./lexikon.page.scss */ "./src/app/pages/help/lexikon/lexikon.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"]])
    ], LexikonPage);
    return LexikonPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-help-lexikon-lexikon-module.js.map