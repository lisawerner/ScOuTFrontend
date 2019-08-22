(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-help-starttutorial-starttutorial-module"],{

/***/ "./src/app/pages/help/starttutorial/starttutorial.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/help/starttutorial/starttutorial.module.ts ***!
  \******************************************************************/
/*! exports provided: StarttutorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarttutorialPageModule", function() { return StarttutorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _starttutorial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./starttutorial.page */ "./src/app/pages/help/starttutorial/starttutorial.page.ts");







var routes = [
    {
        path: '',
        component: _starttutorial_page__WEBPACK_IMPORTED_MODULE_6__["StarttutorialPage"]
    }
];
var StarttutorialPageModule = /** @class */ (function () {
    function StarttutorialPageModule() {
    }
    StarttutorialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_starttutorial_page__WEBPACK_IMPORTED_MODULE_6__["StarttutorialPage"]]
        })
    ], StarttutorialPageModule);
    return StarttutorialPageModule;
}());



/***/ }),

/***/ "./src/app/pages/help/starttutorial/starttutorial.page.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/help/starttutorial/starttutorial.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n<ion-toolbar color=\"primary\">\n  <ion-title>Hilfe: Starttutorial</ion-title>\n  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"nav.goBack()\">\n      <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n    </ion-button>\n  </ion-buttons>\n</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Zusammenfassung vom gesamten Starttutorial</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item (click)='nav.navigateForward(\"tutorialmenu\")' detail>\n        Klicke hier, wenn du das Tutorial noch Mal Schritt für Schritt wiederholen willst!\n      </ion-item>\n      <ion-label>Oder schau dir die unten stehende Zusammenfassung an.</ion-label>\n    </ion-card-content>\n  </ion-card>\n  \n  <ion-title>So funktioniert's:</ion-title>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>1. Lege dir Teams an:</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>\n        <ul>\n          <li>Ohne Teams kannst du keine Events erstellen</li>\n          <li>Beispiele für Teams: 'Familiengruppe', 'Pfadfinder', 'Chor', 'Arbeit'</li>\n          <li>Das Symbol für Teams sieht so aus: <ion-icon name=\"contacts\"></ion-icon></li>\n          <li>Erstelle deine Teams, indem du die Teamliste unten in dem Menü öffnest und dann auf 'Team erstellen' gehst</li>\n        </ul>\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>2. Lege dir Events an:</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>\n        <ul>\n          <li>Ohne Events kannst du keine Tasks erstellen</li>\n          <li>Beispiele für Teams: 'Familientreffen', 'Lager', 'Auftritt', 'Präsentation'</li>\n          <li>Das Symbol für Events sieht so aus: <ion-icon name=\"calendar\"></ion-icon></li>\n          <li>Erstelle deine Events, indem du die Eventliste unten in der Toolbar öffnest und dann auf 'Event erstellen' gehst</li>\n          <li>Besonderheit: Man kann Aus Events Templates erstellen, mit welchen man Kopien der Events anlegen kann</li>\n        </ul>\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>3. Lege dir Tasks an:</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>\n        <ul>\n          <li>Tasks sind Aufgaben, an welche du von dieser App erinnert wirst</li>\n          <li>Beispiele für Task: 'Einladung versenden', 'Küche planen', 'Beitrag zahlen', 'Folien erstellen'</li>\n          <li>Das Symbol für Tasks sieht so aus: <ion-icon name=\"checkmark\"></ion-icon></li>\n          <li>Task, welche du dringend erledigen solltest, werden rot hervorgehoben!</li>\n          <li>Erstelle deine Tasks, indem du die Taskliste unten in der Toolbar öffnest und dann auf 'Task erstellen' gehst.</li>\n          <li>Besonderheit: Reminder-Einstellung unterteilt Task in \"dringend\" und \"offen\"</li>\n        </ul>\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n\n\n</ion-content>\n\n<ion-footer color=\"secondary\">\n  <!-- Help-Footer-->\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons>\n      <ion-button (click)=\"nav.navigateForward('starttutorial')\">\n        <ion-icon name=\"play-circle\"></ion-icon> Tutorial\n      </ion-button>\n      <ion-button (click)=\"nav.navigateForward('sitemap')\">\n        <ion-icon name=\"compass\"></ion-icon> Sitemap\n      </ion-button>\n      <ion-button (click)=\"nav.navigateForward('lexikon')\">\n        <ion-icon name=\"book\"></ion-icon> Begriffe\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/help/starttutorial/starttutorial.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/help/starttutorial/starttutorial.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlbHAvc3RhcnR0dXRvcmlhbC9zdGFydHR1dG9yaWFsLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/help/starttutorial/starttutorial.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/help/starttutorial/starttutorial.page.ts ***!
  \****************************************************************/
/*! exports provided: StarttutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarttutorialPage", function() { return StarttutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");



var StarttutorialPage = /** @class */ (function () {
    function StarttutorialPage(nav) {
        this.nav = nav;
    }
    StarttutorialPage.prototype.ngOnInit = function () {
    };
    StarttutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-starttutorial',
            template: __webpack_require__(/*! ./starttutorial.page.html */ "./src/app/pages/help/starttutorial/starttutorial.page.html"),
            styles: [__webpack_require__(/*! ./starttutorial.page.scss */ "./src/app/pages/help/starttutorial/starttutorial.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"]])
    ], StarttutorialPage);
    return StarttutorialPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-help-starttutorial-starttutorial-module.js.map