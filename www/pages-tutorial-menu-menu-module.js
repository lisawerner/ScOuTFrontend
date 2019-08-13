(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorial-menu-menu-module"],{

/***/ "./src/app/pages/tutorial/menu/menu.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/tutorial/menu/menu.module.ts ***!
  \****************************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/tutorial/menu/menu.page.ts");







var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tutorial/menu/menu.page.html":
/*!****************************************************!*\
  !*** ./src/app/pages/tutorial/menu/menu.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Starttutorial: Menu (1 von 4)</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Das Menü</ion-card-title>\n      <ion-card-subtitle>Siehe ganz unten</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>\n        <ul>\n          <li>Die Startseite erreichst du über: <ion-icon name=\"home\"></ion-icon></li>\n          <li>Die Task-Übersicht erreichst du über: <ion-icon name=\"checkmark\"></ion-icon></li>\n          <li>Die Event-Übersicht erreichst du über: <ion-icon name=\"calendar\"></ion-icon></li>\n          <li>Die Team-Übersicht erreichst du über: <ion-icon name=\"contacts\"></ion-icon></li>\n        </ul>\n      </ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Das weiterführende Menü</ion-card-title>\n      <ion-card-subtitle>Siehe ganz unten rechts</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-label>\n        Das weiterführende Menu erreichst du über: <ion-icon name=\"more\"></ion-icon>\n      </ion-label>\n      <ion-label color='danger'>Hier ist auch die Hilfe-Funktion, wo du jeder Zeit das ganze Tutorial erneut machen kannst!</ion-label>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-button color='secondary' (click)='nav.navigateForward(\"tutorialteam\")' expand='block'>\n    Verstanden! Weiter\n  </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/tutorial/menu/menu.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/tutorial/menu/menu.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3R1dG9yaWFsL21lbnUvbWVudS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tutorial/menu/menu.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/tutorial/menu/menu.page.ts ***!
  \**************************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");



var MenuPage = /** @class */ (function () {
    function MenuPage(nav) {
        this.nav = nav;
    }
    MenuPage.prototype.ngOnInit = function () {
    };
    MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.page.html */ "./src/app/pages/tutorial/menu/menu.page.html"),
            styles: [__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/tutorial/menu/menu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tutorial-menu-menu-module.js.map