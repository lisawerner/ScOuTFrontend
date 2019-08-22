(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorial-tutorialevent-tutorialevent-module"],{

/***/ "./src/app/pages/tutorial/tutorialevent/tutorialevent.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tutorial/tutorialevent/tutorialevent.module.ts ***!
  \**********************************************************************/
/*! exports provided: TutorialeventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialeventPageModule", function() { return TutorialeventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorialevent_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorialevent.page */ "./src/app/pages/tutorial/tutorialevent/tutorialevent.page.ts");







var routes = [
    {
        path: '',
        component: _tutorialevent_page__WEBPACK_IMPORTED_MODULE_6__["TutorialeventPage"]
    }
];
var TutorialeventPageModule = /** @class */ (function () {
    function TutorialeventPageModule() {
    }
    TutorialeventPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tutorialevent_page__WEBPACK_IMPORTED_MODULE_6__["TutorialeventPage"]]
        })
    ], TutorialeventPageModule);
    return TutorialeventPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/tutorialevent/tutorialevent.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tutorial/tutorialevent/tutorialevent.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Starttutorial: Event (3 von 4)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button color='secondary' (click)='nav.navigateForward(\"tutorialteam\")' expand='block'>\n    Einen Schritt zurück!\n  </ion-button>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Was sind Events?</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label>\n          <p>Event =</p>\n          <p text-wrap>Aktionen, Veranstaltungen oder andere Termine, welche du in einer Gruppe planst</p>\n        </ion-label>\n      </ion-item>\n      <ion-item lines='none'>\n        <ion-card-subtitle>Beispiele: 'Familientreffen', 'Lager', 'Auftritt', 'Präsentation'</ion-card-subtitle>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Wofür braucht man Events?</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label color='danger'>Ohne Events kannst du keine Tasks erstellen!</ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Wie erstellt man Events?</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>\n        <ul>\n          <li>Erstelle deine Events, indem du die Eventliste unten in dem Menü öffnest und dann auf 'Event erstellen' gehst</li>\n          <li>Das Symbol für Events sieht so aus: <ion-icon name=\"calendar\"></ion-icon></li>\n        </ul>\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Besonderheit: Template</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>\n        <ul>\n          <li>Man kann aus Events Templates erstellen</li>\n          <li>Templates speichern die Struktur des Events + alle Tasks</li>\n          <li>Will man ein ähnliches Event erstellen, kann man sich Arbeit unt Zeit sparen und das Event auf Grundlage des Templates erstellen</li>\n        </ul>\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-button color='secondary' (click)='nav.navigateForward(\"tutorialtask\")' expand='block'>\n    Verstanden! Weiter\n  </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorialevent/tutorialevent.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tutorial/tutorialevent/tutorialevent.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL3R1dG9yaWFsZXZlbnQvdHV0b3JpYWxldmVudC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorialevent/tutorialevent.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tutorial/tutorialevent/tutorialevent.page.ts ***!
  \********************************************************************/
/*! exports provided: TutorialeventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialeventPage", function() { return TutorialeventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");



var TutorialeventPage = /** @class */ (function () {
    function TutorialeventPage(nav) {
        this.nav = nav;
    }
    TutorialeventPage.prototype.ngOnInit = function () {
    };
    TutorialeventPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorialevent',
            template: __webpack_require__(/*! ./tutorialevent.page.html */ "./src/app/pages/tutorial/tutorialevent/tutorialevent.page.html"),
            styles: [__webpack_require__(/*! ./tutorialevent.page.scss */ "./src/app/pages/tutorial/tutorialevent/tutorialevent.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"]])
    ], TutorialeventPage);
    return TutorialeventPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tutorial-tutorialevent-tutorialevent-module.js.map