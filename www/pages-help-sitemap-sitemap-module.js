(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-help-sitemap-sitemap-module"],{

/***/ "./src/app/pages/help/sitemap/sitemap.module.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/help/sitemap/sitemap.module.ts ***!
  \******************************************************/
/*! exports provided: SitemapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitemapPageModule", function() { return SitemapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sitemap_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sitemap.page */ "./src/app/pages/help/sitemap/sitemap.page.ts");







var routes = [
    {
        path: '',
        component: _sitemap_page__WEBPACK_IMPORTED_MODULE_6__["SitemapPage"]
    }
];
var SitemapPageModule = /** @class */ (function () {
    function SitemapPageModule() {
    }
    SitemapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sitemap_page__WEBPACK_IMPORTED_MODULE_6__["SitemapPage"]]
        })
    ], SitemapPageModule);
    return SitemapPageModule;
}());



/***/ }),

/***/ "./src/app/pages/help/sitemap/sitemap.page.html":
/*!******************************************************!*\
  !*** ./src/app/pages/help/sitemap/sitemap.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>Hilfe: Sitemap</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"nav.goBack()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-round-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>App-Seiten: Team</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item (click)=\"nav.navigateForward('teamlist')\" detail>\n          <ion-label>Übersicht: Teams</ion-label>\n        </ion-item>\n        <ion-item (click)=\"nav.navigateForward('createteam')\" detail>\n          <ion-label>Team erstellen</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-label>Teamseite</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-card-subtitle>\n                Öffne ein Team, indem du z.B. auf die Teamliste gehst und dort ein konkretes Team auswählst\n              </ion-card-subtitle>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-label>Teammitglieder</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-card-subtitle>\n                Öffne die Teamseite ein konkretes Team und gehe von dort in die Mitgliederliste\n              </ion-card-subtitle>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>App-Seiten: Event</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item (click)=\"nav.navigateForward('eventlist')\" detail>\n          <ion-label>Übersicht: Events</ion-label>\n        </ion-item>\n        <ion-item (click)=\"nav.navigateForward('createeventchooser')\" detail>\n          <ion-label>Event erstellen</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-label>Eventseite</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-card-subtitle>\n                Öffne ein Event, indem du z.B. auf die Eventliste gehst und dort ein konkretes Events auswählst\n              </ion-card-subtitle>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-label>Orgateam</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-card-subtitle>\n                Öffne ein die Eventseite eines konkreten Event und von dort aus das Orgateam\n              </ion-card-subtitle>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>App-Seiten: Task</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item (click)=\"nav.navigateForward('tasklist')\" detail>\n          <ion-label>Taskliste</ion-label>\n        </ion-item>\n        <ion-item (click)=\"nav.navigateForward('createtask')\" detail>\n          <ion-label>Task erstellen</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-label>Taskseite</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-card-subtitle>\n                Öffne ein Task, indem du z.B. auf die Taskliste gehst und einen konkreten Task auswählst\n              </ion-card-subtitle>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header color='light'>\n      <ion-card-title>Weitere App-Seiten</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item (click)=\"nav.navigateForward('home')\" detail>\n          <ion-label>Startseite</ion-label>\n        </ion-item>\n        <ion-item (click)=\"nav.navigateForward('login')\" detail>\n          <ion-label>Login</ion-label>\n        </ion-item>\n        <ion-item (click)=\"nav.navigateForward('register')\" detail>\n          <ion-label>Registrierung</ion-label>\n        </ion-item>\n        <ion-item (click)=\"nav.navigateForward('starttutorial')\" detail>\n          <ion-label>Hilfe: Starttutorial</ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-label>Hilfe: Sitemap</ion-label>\n            </ion-row>\n            <ion-row>\n              <ion-card-subtitle>\n                Hier befindest du dich gerade.\n              </ion-card-subtitle>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <ion-item (click)=\"nav.navigateForward('starttutorial')\" detail>\n          <ion-label>Hilfe: Begriffe</ion-label>\n        </ion-item>\n        <ion-item (click)=\"nav.navigateForward('accountsettings')\" detail>\n          <ion-label>Settings: Account</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n\n<ion-footer color=\"secondary\">\n  <!-- Help-Footer-->\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons>\n      <ion-button (click)=\"nav.navigateForward('starttutorial')\">\n        <ion-icon name=\"play-circle\"></ion-icon> Tutorial\n      </ion-button>\n      <ion-button (click)=\"nav.navigateForward('sitemap')\">\n        <ion-icon name=\"compass\"></ion-icon> Sitemap\n      </ion-button>\n      <ion-button (click)=\"nav.navigateForward('lexikon')\">\n        <ion-icon name=\"book\"></ion-icon> Begriffe\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/help/sitemap/sitemap.page.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/help/sitemap/sitemap.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlbHAvc2l0ZW1hcC9zaXRlbWFwLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/help/sitemap/sitemap.page.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/help/sitemap/sitemap.page.ts ***!
  \****************************************************/
/*! exports provided: SitemapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SitemapPage", function() { return SitemapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/navigator.service */ "./src/app/services/navigator.service.ts");



var SitemapPage = /** @class */ (function () {
    function SitemapPage(nav) {
        this.nav = nav;
    }
    SitemapPage.prototype.ngOnInit = function () {
    };
    SitemapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sitemap',
            template: __webpack_require__(/*! ./sitemap.page.html */ "./src/app/pages/help/sitemap/sitemap.page.html"),
            styles: [__webpack_require__(/*! ./sitemap.page.scss */ "./src/app/pages/help/sitemap/sitemap.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_navigator_service__WEBPACK_IMPORTED_MODULE_2__["NavigatorService"]])
    ], SitemapPage);
    return SitemapPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-help-sitemap-sitemap-module.js.map