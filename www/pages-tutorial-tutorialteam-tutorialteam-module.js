(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorial-tutorialteam-tutorialteam-module"],{

/***/ "./src/app/pages/tutorial/tutorialteam/tutorialteam.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tutorial/tutorialteam/tutorialteam.module.ts ***!
  \********************************************************************/
/*! exports provided: TutorialteamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialteamPageModule", function() { return TutorialteamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorialteam_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorialteam.page */ "./src/app/pages/tutorial/tutorialteam/tutorialteam.page.ts");







var routes = [
    {
        path: '',
        component: _tutorialteam_page__WEBPACK_IMPORTED_MODULE_6__["TutorialteamPage"]
    }
];
var TutorialteamPageModule = /** @class */ (function () {
    function TutorialteamPageModule() {
    }
    TutorialteamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tutorialteam_page__WEBPACK_IMPORTED_MODULE_6__["TutorialteamPage"]]
        })
    ], TutorialteamPageModule);
    return TutorialteamPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/tutorialteam/tutorialteam.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/tutorial/tutorialteam/tutorialteam.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Starttutorial: Teams (2 von 4)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button color='secondary' (click)='nav.navigateForward(\"tutorialmenu\")' expand='block'>\n    Einen Schritt zurück!\n  </ion-button>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Was sind Teams?</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-label>\n          <p>Teams =</p>\n          <p text-wrap>Gruppen, Vereine oder andere Zusammesnchlüsse von Personen</p>\n        </ion-label>\n      </ion-item>\n      <ion-item lines='none'>\n        <ion-card-subtitle>Beispiele: 'Familiengruppe', 'Pfadfinder', 'Chor', 'Arbeit'</ion-card-subtitle>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Wofür braucht man Teams?</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label color='danger'>Ohne Teams kannst du keine Events erstellen!</ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Wie erstellt man Teams?</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>\n        <ul>\n          <li>Erstelle deine Teams, indem du die Teamliste unten in dem Menü öffnest und dann auf 'Team erstellen' gehst</li>\n          <li>Das Symbol für Teams sieht so aus: <ion-icon name=\"contacts\"></ion-icon></li>\n        </ul>\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-button color='secondary' (click)='nav.navigateForward(\"tutorialevent\")' expand='block'>\n    Verstanden! Weiter\n  </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorialteam/tutorialteam.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/tutorial/tutorialteam/tutorialteam.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL3R1dG9yaWFsdGVhbS90dXRvcmlhbHRlYW0ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tutorial/tutorialteam/tutorialteam.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/tutorial/tutorialteam/tutorialteam.page.ts ***!
  \******************************************************************/
/*! exports provided: TutorialteamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialteamPage", function() { return TutorialteamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");



var TutorialteamPage = /** @class */ (function () {
    function TutorialteamPage(nav) {
        this.nav = nav;
    }
    TutorialteamPage.prototype.ngOnInit = function () {
    };
    TutorialteamPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorialteam',
            template: __webpack_require__(/*! ./tutorialteam.page.html */ "./src/app/pages/tutorial/tutorialteam/tutorialteam.page.html"),
            styles: [__webpack_require__(/*! ./tutorialteam.page.scss */ "./src/app/pages/tutorial/tutorialteam/tutorialteam.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"]])
    ], TutorialteamPage);
    return TutorialteamPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tutorial-tutorialteam-tutorialteam-module.js.map