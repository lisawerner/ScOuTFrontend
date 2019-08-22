(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorial-tutorialtask-tutorialtask-module"],{

/***/ "./src/app/pages/tutorial/tutorialtask/tutorialtask.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tutorial/tutorialtask/tutorialtask.module.ts ***!
  \********************************************************************/
/*! exports provided: TutorialtaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialtaskPageModule", function() { return TutorialtaskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorialtask_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorialtask.page */ "./src/app/pages/tutorial/tutorialtask/tutorialtask.page.ts");







var routes = [
    {
        path: '',
        component: _tutorialtask_page__WEBPACK_IMPORTED_MODULE_6__["TutorialtaskPage"]
    }
];
var TutorialtaskPageModule = /** @class */ (function () {
    function TutorialtaskPageModule() {
    }
    TutorialtaskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tutorialtask_page__WEBPACK_IMPORTED_MODULE_6__["TutorialtaskPage"]]
        })
    ], TutorialtaskPageModule);
    return TutorialtaskPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/tutorialtask/tutorialtask.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/tutorial/tutorialtask/tutorialtask.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Starttutorial: Task (4 von 4)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button color='secondary' (click)='nav.navigateForward(\"tutorialevent\")' expand='block'>\n    Einen Schritt zurück!\n  </ion-button>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Was sind Tasks?</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label>\n          <p>Task =</p>\n          <p text-wrap>Aufgaben, Planungsschritte, ToDos, welche es zur Planung eines Events zu erledigen gilt</p>\n        </ion-label>\n      </ion-item>\n      <ion-item lines='none'>\n        <ion-card-subtitle>Beispiele: 'Einladung versenden', 'Küche planen', 'Beitrag zahlen', 'Folien erstellen'</ion-card-subtitle>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Wie erstellt man Tasks?</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>\n        <ul>\n          <li>Erstelle deine Tasks, indem du die Taskliste unten in der Toolbar öffnest und dann auf 'Task erstellen' gehst.</li>\n          <li>Das Symbol für Tasks sieht so aus: <ion-icon name=\"checkmark\"></ion-icon></li>\n        </ul>\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Besonderheiten: Reminder</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>\n        <ul>\n          <li>Anstehende Tasks werden in \"dringend\" und \"offen\" unterteilt</li>\n          <li>Ein Task wird \"dringend\", wenn der Reminder aktiv ist</li>\n          <li>Den Reminder gibt man beim Erstellen des Task an (z.B. x Tage vor Eventbegin)</li>\n          <li>Der Reminder wird immer relativ zum Event angegeben, so dass er für die Templates wiederverwendet werden kann!</li>\n        </ul>\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-button color='secondary' (click)='nav.navigateForward(\"\")' expand='block'>\n    Ich bin bereit die App zu nutzen!\n  </ion-button>\n</ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/tutorial/tutorialtask/tutorialtask.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/tutorial/tutorialtask/tutorialtask.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL3R1dG9yaWFsdGFzay90dXRvcmlhbHRhc2sucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorialtask/tutorialtask.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/tutorial/tutorialtask/tutorialtask.page.ts ***!
  \******************************************************************/
/*! exports provided: TutorialtaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialtaskPage", function() { return TutorialtaskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");



var TutorialtaskPage = /** @class */ (function () {
    function TutorialtaskPage(nav) {
        this.nav = nav;
    }
    TutorialtaskPage.prototype.ngOnInit = function () {
    };
    TutorialtaskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorialtask',
            template: __webpack_require__(/*! ./tutorialtask.page.html */ "./src/app/pages/tutorial/tutorialtask/tutorialtask.page.html"),
            styles: [__webpack_require__(/*! ./tutorialtask.page.scss */ "./src/app/pages/tutorial/tutorialtask/tutorialtask.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"]])
    ], TutorialtaskPage);
    return TutorialtaskPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tutorial-tutorialtask-tutorialtask-module.js.map