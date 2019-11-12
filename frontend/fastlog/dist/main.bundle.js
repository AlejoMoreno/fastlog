webpackJsonp([1,4],{

/***/ 126:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 126;


/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(145);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(215),
        styles: [__webpack_require__(199)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_login_service_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_gps_service__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__index_index_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sidebar_sidebar_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__registrogps_registrogps_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__remisionesasignadas_remisionesasignadas_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__seguimientoruta_seguimientoruta_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__asignacionruta_asignacionruta_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__cargarproducto_cargarproducto_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__generarremision_generarremision_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__reporteconsultor_reporteconsultor_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__reportetransportador_reportetransportador_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__reporteruteador_reporteruteador_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__reportebodeguero_reportebodeguero_component__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__index_index_component__["a" /* IndexComponent */],
            __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__registrogps_registrogps_component__["a" /* RegistrogpsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__remisionesasignadas_remisionesasignadas_component__["a" /* RemisionesasignadasComponent */],
            __WEBPACK_IMPORTED_MODULE_17__seguimientoruta_seguimientoruta_component__["a" /* SeguimientorutaComponent */],
            __WEBPACK_IMPORTED_MODULE_18__asignacionruta_asignacionruta_component__["a" /* AsignacionrutaComponent */],
            __WEBPACK_IMPORTED_MODULE_19__cargarproducto_cargarproducto_component__["a" /* CargarproductoComponent */],
            __WEBPACK_IMPORTED_MODULE_20__generarremision_generarremision_component__["a" /* GenerarremisionComponent */],
            __WEBPACK_IMPORTED_MODULE_21__reporteconsultor_reporteconsultor_component__["a" /* ReporteconsultorComponent */],
            __WEBPACK_IMPORTED_MODULE_22__reportetransportador_reportetransportador_component__["a" /* ReportetransportadorComponent */],
            __WEBPACK_IMPORTED_MODULE_23__reporteruteador_reporteruteador_component__["a" /* ReporteruteadorComponent */],
            __WEBPACK_IMPORTED_MODULE_24__reportebodeguero_reportebodeguero_component__["a" /* ReportebodegueroComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyClFwD-Pj_AYduEsEi0wThkz_Lhpn5D1fU'
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__services_login_service_service__["a" /* LoginServiceService */],
            __WEBPACK_IMPORTED_MODULE_9__services_gps_service__["a" /* GpsService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index_index_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__asignacionruta_asignacionruta_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cargarproducto_cargarproducto_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__generarremision_generarremision_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__registrogps_registrogps_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__remisionesasignadas_remisionesasignadas_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reportebodeguero_reportebodeguero_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reporteconsultor_reporteconsultor_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__reporteruteador_reporteruteador_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reportetransportador_reportetransportador_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__seguimientoruta_seguimientoruta_component__ = __webpack_require__(94);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var APP_ROUTES = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'index', component: __WEBPACK_IMPORTED_MODULE_3__index_index_component__["a" /* IndexComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'registroGps', component: __WEBPACK_IMPORTED_MODULE_8__registrogps_registrogps_component__["a" /* RegistrogpsComponent */] },
    { path: 'asignacionRuta', component: __WEBPACK_IMPORTED_MODULE_5__asignacionruta_asignacionruta_component__["a" /* AsignacionrutaComponent */] },
    { path: 'cargarProducto', component: __WEBPACK_IMPORTED_MODULE_6__cargarproducto_cargarproducto_component__["a" /* CargarproductoComponent */] },
    { path: 'generarRemision', component: __WEBPACK_IMPORTED_MODULE_7__generarremision_generarremision_component__["a" /* GenerarremisionComponent */] },
    { path: 'remisionesAsignadas', component: __WEBPACK_IMPORTED_MODULE_9__remisionesasignadas_remisionesasignadas_component__["a" /* RemisionesasignadasComponent */] },
    { path: 'reporteBodeguero', component: __WEBPACK_IMPORTED_MODULE_10__reportebodeguero_reportebodeguero_component__["a" /* ReportebodegueroComponent */] },
    { path: 'reporteConsultor', component: __WEBPACK_IMPORTED_MODULE_11__reporteconsultor_reporteconsultor_component__["a" /* ReporteconsultorComponent */] },
    { path: 'reporteRuteador', component: __WEBPACK_IMPORTED_MODULE_12__reporteruteador_reporteruteador_component__["a" /* ReporteruteadorComponent */] },
    { path: 'ReporteTransportador', component: __WEBPACK_IMPORTED_MODULE_13__reportetransportador_reportetransportador_component__["a" /* ReportetransportadorComponent */] },
    { path: 'seguimientoRuta', component: __WEBPACK_IMPORTED_MODULE_14__seguimientoruta_seguimientoruta_component__["a" /* SeguimientorutaComponent */] },
    { path: 'salir', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__index_index_component__["a" /* IndexComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__(219),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__(230),
        styles: [__webpack_require__(214)]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 215:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  asignacionruta works!\r\n</p>\r\n"

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  cargarproducto works!\r\n</p>\r\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports) {

module.exports = "<style>\r\nagm-map {\r\n  height: 500px;\r\n  width: 100%;\r\n}\r\n</style>\r\n\r\n<!-- Page Wrapper -->\r\n<div id=\"wrapper\">\r\n\r\n    <!-- start of Sidebar -->\r\n    <app-sidebar></app-sidebar>\r\n    <!-- End of Sidebar -->\r\n  \r\n    <!-- Content Wrapper -->\r\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n  \r\n      <!-- Main Content -->\r\n      <div id=\"content\">\r\n  \r\n        <!-- Topbar -->\r\n        <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\r\n  \r\n          <!-- Sidebar Toggle (Topbar) -->\r\n          <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\r\n            <i class=\"fa fa-bars\"></i>\r\n          </button>\r\n  \r\n          <!-- Topbar Navbar -->\r\n          <ul class=\"navbar-nav ml-auto\">\r\n  \r\n            <div class=\"topbar-divider d-none d-sm-block\"></div>\r\n  \r\n            <!-- Nav Item - User Information -->\r\n            <li class=\"nav-item dropdown no-arrow\">\r\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Valerie Luna</span>\r\n                <img class=\"img-profile rounded-circle\" src=\"https://source.unsplash.com/QAB-WJcbgJk/60x60\">\r\n              </a>\r\n              <!-- Dropdown - User Information -->\r\n              <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\r\n                <a class=\"dropdown-item\" href=\"/perfil\">\r\n                  <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\r\n                  Perfil\r\n                </a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\" href=\"/salir\" data-toggle=\"modal\" data-target=\"#logoutModal\">\r\n                  <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\r\n                  Logout\r\n                </a>\r\n              </div>\r\n            </li>\r\n  \r\n          </ul>\r\n  \r\n        </nav>\r\n        <!-- End of Topbar -->\r\n  \r\n        <!-- Begin Page Content -->\r\n        <div class=\"container-fluid\">\r\n  \r\n\r\n          <!-- this creates a google map on the page with the given lat/lng from -->\r\n          <!-- the component as the initial center of the map: -->\r\n          <agm-map \r\n            [latitude]=\"lat\"\r\n            [longitude]=\"lng\"\r\n            [zoom]=\"zoom\"\r\n            [disableDefaultUI]=\"false\"\r\n            [zoomControl]=\"false\"\r\n            (mapClick)=\"mapClicked($event)\">\r\n\r\n            <agm-marker \r\n                *ngFor=\"let m of markers; let i = index\"\r\n                (markerClick)=\"clickedMarker(m.label, i)\"\r\n                [latitude]=\"m.lat\"\r\n                [longitude]=\"m.lng\"\r\n                [label]=\"m.label\"\r\n                [markerDraggable]=\"m.draggable\"\r\n                (dragEnd)=\"markerDragEnd(m, $event)\">\r\n                \r\n              <agm-info-window>\r\n                <strong>InfoWindow content</strong>\r\n              </agm-info-window>\r\n              \r\n            </agm-marker>\r\n            \r\n            <!--<agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" \r\n                [radius]=\"5000\"\r\n                [fillColor]=\"'red'\"\r\n                [circleDraggable]=\"true\"\r\n                [editable]=\"true\">\r\n            </agm-circle>-->\r\n\r\n          </agm-map>\r\n          \r\n  \r\n        </div>\r\n        <!-- /.container-fluid -->\r\n  \r\n      </div>\r\n      <!-- End of Main Content -->\r\n  \r\n      <!-- Footer -->\r\n      <app-footer></app-footer>\r\n      <!-- End of Footer -->\r\n  \r\n    </div>\r\n    <!-- End of Content Wrapper -->\r\n  \r\n  </div>\r\n  <!-- End of Page Wrapper -->\r\n  "

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

module.exports = "<footer class=\"sticky-footer bg-white\">\r\n    <div class=\"container my-auto\">\r\n      <div class=\"copyright text-center my-auto\">\r\n        <span>Copyright &copy; fastlogapp 2019</span>\r\n      </div>\r\n    </div>\r\n  </footer>\r\n"

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  generarremision works!\r\n</p>\r\n"

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\r\n<div id=\"wrapper\">\r\n\r\n    \r\n    <!-- Content Wrapper -->\r\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n  \r\n      <!-- Main Content -->\r\n      <div id=\"content\">\r\n  \r\n        <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\" >\r\n          <div style=\"text-align: center;width: 100%;\">\r\n              <h2>FastLog App</h2>\r\n          </div>\r\n        </nav>\r\n        <!-- End of Topbar -->\r\n  \r\n        <!-- Begin Page Content -->\r\n        <div class=\"container-fluid\">\r\n          \r\n          <div class=\"row\">\r\n  \r\n            <!-- login -->\r\n            <div class=\" col-md-6 \" id=\"login\">\r\n              <div class=\"card border-left-primary shadow h-100 py-2\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\" style=\"text-align: center;\">\r\n                      <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Inicio Sesión</div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \"> \r\n                        <input type=\"email\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Email\" required=\"true\">\r\n                      </div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \">\r\n                        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Contraseña\" required=\"true\">\r\n                      </div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \">\r\n                        <div class=\"btn btn-primary\" (click)=\"ngOnInicioSesion()\">Ingresar</div>\r\n                      </div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \">\r\n                        <p style=\"font-size: 9px;cursor: copy;\" (click)=\"ngOnOlvido()\">¿Olvidaste tu contraseña?</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- imagen -->\r\n            <div class=\"col-md-6\" >\r\n              <div class=\"card border-left-primary shadow h-100 \">\r\n                <div class=\"card-body\" style=\"background-image: url(https://d500.epimg.net/cincodias/imagenes/2017/03/08/lifestyle/1488974611_491051_1488974927_noticia_normal.jpg);\">\r\n                  <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\" style=\"text-align: center;\">\r\n                      <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\"></div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \"> \r\n                        <br>\r\n                      </div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \">\r\n                        <br>\r\n                      </div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \">\r\n                        <br>\r\n                      </div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \">\r\n                        <br>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n            <!-- Olvido contraseña-->\r\n            <div class=\"col-md-6 \" id=\"olvido\">\r\n              <div class=\"card border-left-success shadow h-100 py-2\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\" style=\"text-align: center;\">\r\n                        <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Olvido de contraseña</div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \"> \r\n                          <input type=\"email\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" required=\"true\">\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \">\r\n                          <input type=\"number\" [(ngModel)]=\"telefono\" name=\"telefono\" class=\"form-control\" placeholder=\"telefono\" required=\"true\">\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \">\r\n                          <div class=\"btn btn-success\">recordar contraseña</div>\r\n                        </div>\r\n                        <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \">\r\n                          <p style=\"font-size: 9px;cursor: copy;\" (click)=\"ngOnInit()\">Entrar</p>\r\n                        </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>  \r\n            \r\n          </div>\r\n\r\n\r\n          <div id=\"respuesta\"></div>\r\n  \r\n          \r\n  \r\n        </div>\r\n        <!-- /.container-fluid -->\r\n  \r\n      </div>\r\n      <!-- End of Main Content -->\r\n  \r\n      <!-- Footer -->\r\n      <app-footer></app-footer>\r\n      <!-- End of Footer -->\r\n  \r\n    </div>\r\n    <!-- End of Content Wrapper -->\r\n  \r\n  </div>\r\n  <!-- End of Page Wrapper -->\r\n  \r\n  "

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

module.exports = "<!-- Page Wrapper -->\r\n<div id=\"wrapper\">\r\n\r\n    <!-- Sidebar -->\r\n    <ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\r\n  \r\n      <!-- Sidebar - Brand -->\r\n      <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"index.html\">\r\n        <div class=\"sidebar-brand-icon rotate-n-15\">\r\n          <i class=\"fas fa-laugh-wink\"></i>\r\n        </div>\r\n        <div class=\"sidebar-brand-text mx-3\">SB Admin <sup>2</sup></div>\r\n      </a>\r\n  \r\n      <!-- Divider -->\r\n      <hr class=\"sidebar-divider my-0\">\r\n  \r\n      <!-- Nav Item - Dashboard -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"index.html\">\r\n          <i class=\"fas fa-fw fa-tachometer-alt\"></i>\r\n          <span>Dashboard</span></a>\r\n      </li>\r\n  \r\n      <!-- Divider -->\r\n      <hr class=\"sidebar-divider\">\r\n  \r\n      <!-- Heading -->\r\n      <div class=\"sidebar-heading\">\r\n        Interface\r\n      </div>\r\n  \r\n      <!-- Nav Item - Pages Collapse Menu -->\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n          <i class=\"fas fa-fw fa-cog\"></i>\r\n          <span>Components</span>\r\n        </a>\r\n        <div id=\"collapseTwo\" class=\"collapse show\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <h6 class=\"collapse-header\">Custom Components:</h6>\r\n            <a class=\"collapse-item\" href=\"buttons.html\">Buttons</a>\r\n            <a class=\"collapse-item active\" href=\"cards.html\">Cards</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n  \r\n      <!-- Nav Item - Utilities Collapse Menu -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseUtilities\" aria-expanded=\"true\" aria-controls=\"collapseUtilities\">\r\n          <i class=\"fas fa-fw fa-wrench\"></i>\r\n          <span>Utilities</span>\r\n        </a>\r\n        <div id=\"collapseUtilities\" class=\"collapse\" aria-labelledby=\"headingUtilities\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <h6 class=\"collapse-header\">Custom Utilities:</h6>\r\n            <a class=\"collapse-item\" href=\"utilities-color.html\">Colors</a>\r\n            <a class=\"collapse-item\" href=\"utilities-border.html\">Borders</a>\r\n            <a class=\"collapse-item\" href=\"utilities-animation.html\">Animations</a>\r\n            <a class=\"collapse-item\" href=\"utilities-other.html\">Other</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n  \r\n      <!-- Divider -->\r\n      <hr class=\"sidebar-divider\">\r\n  \r\n      <!-- Heading -->\r\n      <div class=\"sidebar-heading\">\r\n        Addons\r\n      </div>\r\n  \r\n      <!-- Nav Item - Pages Collapse Menu -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link collapsed\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapsePages\" aria-expanded=\"true\" aria-controls=\"collapsePages\">\r\n          <i class=\"fas fa-fw fa-folder\"></i>\r\n          <span>Pages</span>\r\n        </a>\r\n        <div id=\"collapsePages\" class=\"collapse\" aria-labelledby=\"headingPages\" data-parent=\"#accordionSidebar\">\r\n          <div class=\"bg-white py-2 collapse-inner rounded\">\r\n            <h6 class=\"collapse-header\">Login Screens:</h6>\r\n            <a class=\"collapse-item\" href=\"login.html\">Login</a>\r\n            <a class=\"collapse-item\" href=\"register.html\">Register</a>\r\n            <a class=\"collapse-item\" href=\"forgot-password.html\">Forgot Password</a>\r\n            <div class=\"collapse-divider\"></div>\r\n            <h6 class=\"collapse-header\">Other Pages:</h6>\r\n            <a class=\"collapse-item\" href=\"404.html\">404 Page</a>\r\n            <a class=\"collapse-item\" href=\"blank.html\">Blank Page</a>\r\n          </div>\r\n        </div>\r\n      </li>\r\n  \r\n      <!-- Nav Item - Charts -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"charts.html\">\r\n          <i class=\"fas fa-fw fa-chart-area\"></i>\r\n          <span>Charts</span></a>\r\n      </li>\r\n  \r\n      <!-- Nav Item - Tables -->\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"tables.html\">\r\n          <i class=\"fas fa-fw fa-table\"></i>\r\n          <span>Tables</span></a>\r\n      </li>\r\n  \r\n      <!-- Divider -->\r\n      <hr class=\"sidebar-divider d-none d-md-block\">\r\n  \r\n      <!-- Sidebar Toggler (Sidebar) -->\r\n      <div class=\"text-center d-none d-md-inline\">\r\n        <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\r\n      </div>\r\n  \r\n    </ul>\r\n    <!-- End of Sidebar -->\r\n  \r\n    <!-- Content Wrapper -->\r\n    <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n  \r\n      <!-- Main Content -->\r\n      <div id=\"content\">\r\n  \r\n        <!-- Topbar -->\r\n        <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\r\n  \r\n          <!-- Sidebar Toggle (Topbar) -->\r\n          <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\r\n            <i class=\"fa fa-bars\"></i>\r\n          </button>\r\n  \r\n          <!-- Topbar Search -->\r\n          <form class=\"d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\r\n              <div class=\"input-group-append\">\r\n                <button class=\"btn btn-primary\" type=\"button\">\r\n                  <i class=\"fas fa-search fa-sm\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n  \r\n          <!-- Topbar Navbar -->\r\n          <ul class=\"navbar-nav ml-auto\">\r\n  \r\n            <!-- Nav Item - Search Dropdown (Visible Only XS) -->\r\n            <li class=\"nav-item dropdown no-arrow d-sm-none\">\r\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"searchDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"fas fa-search fa-fw\"></i>\r\n              </a>\r\n              <!-- Dropdown - Messages -->\r\n              <div class=\"dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in\" aria-labelledby=\"searchDropdown\">\r\n                <form class=\"form-inline mr-auto w-100 navbar-search\">\r\n                  <div class=\"input-group\">\r\n                    <input type=\"text\" class=\"form-control bg-light border-0 small\" placeholder=\"Search for...\" aria-label=\"Search\" aria-describedby=\"basic-addon2\">\r\n                    <div class=\"input-group-append\">\r\n                      <button class=\"btn btn-primary\" type=\"button\">\r\n                        <i class=\"fas fa-search fa-sm\"></i>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </li>\r\n  \r\n            <!-- Nav Item - Alerts -->\r\n            <li class=\"nav-item dropdown no-arrow mx-1\">\r\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"alertsDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"fas fa-bell fa-fw\"></i>\r\n                <!-- Counter - Alerts -->\r\n                <span class=\"badge badge-danger badge-counter\">3+</span>\r\n              </a>\r\n              <!-- Dropdown - Alerts -->\r\n              <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"alertsDropdown\">\r\n                <h6 class=\"dropdown-header\">\r\n                  Alerts Center\r\n                </h6>\r\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\r\n                  <div class=\"mr-3\">\r\n                    <div class=\"icon-circle bg-primary\">\r\n                      <i class=\"fas fa-file-alt text-white\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <div class=\"small text-gray-500\">December 12, 2019</div>\r\n                    <span class=\"font-weight-bold\">A new monthly report is ready to download!</span>\r\n                  </div>\r\n                </a>\r\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\r\n                  <div class=\"mr-3\">\r\n                    <div class=\"icon-circle bg-success\">\r\n                      <i class=\"fas fa-donate text-white\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <div class=\"small text-gray-500\">December 7, 2019</div>\r\n                    $290.29 has been deposited into your account!\r\n                  </div>\r\n                </a>\r\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\r\n                  <div class=\"mr-3\">\r\n                    <div class=\"icon-circle bg-warning\">\r\n                      <i class=\"fas fa-exclamation-triangle text-white\"></i>\r\n                    </div>\r\n                  </div>\r\n                  <div>\r\n                    <div class=\"small text-gray-500\">December 2, 2019</div>\r\n                    Spending Alert: We've noticed unusually high spending for your account.\r\n                  </div>\r\n                </a>\r\n                <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Show All Alerts</a>\r\n              </div>\r\n            </li>\r\n  \r\n            <!-- Nav Item - Messages -->\r\n            <li class=\"nav-item dropdown no-arrow mx-1\">\r\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"messagesDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"fas fa-envelope fa-fw\"></i>\r\n                <!-- Counter - Messages -->\r\n                <span class=\"badge badge-danger badge-counter\">7</span>\r\n              </a>\r\n              <!-- Dropdown - Messages -->\r\n              <div class=\"dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"messagesDropdown\">\r\n                <h6 class=\"dropdown-header\">\r\n                  Message Center\r\n                </h6>\r\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\r\n                  <div class=\"dropdown-list-image mr-3\">\r\n                    <img class=\"rounded-circle\" src=\"https://source.unsplash.com/fn_BT9fwg_E/60x60\" alt=\"\">\r\n                    <div class=\"status-indicator bg-success\"></div>\r\n                  </div>\r\n                  <div class=\"font-weight-bold\">\r\n                    <div class=\"text-truncate\">Hi there! I am wondering if you can help me with a problem I've been having.</div>\r\n                    <div class=\"small text-gray-500\">Emily Fowler · 58m</div>\r\n                  </div>\r\n                </a>\r\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\r\n                  <div class=\"dropdown-list-image mr-3\">\r\n                    <img class=\"rounded-circle\" src=\"https://source.unsplash.com/AU4VPcFN4LE/60x60\" alt=\"\">\r\n                    <div class=\"status-indicator\"></div>\r\n                  </div>\r\n                  <div>\r\n                    <div class=\"text-truncate\">I have the photos that you ordered last month, how would you like them sent to you?</div>\r\n                    <div class=\"small text-gray-500\">Jae Chun · 1d</div>\r\n                  </div>\r\n                </a>\r\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\r\n                  <div class=\"dropdown-list-image mr-3\">\r\n                    <img class=\"rounded-circle\" src=\"https://source.unsplash.com/CS2uCrpNzJY/60x60\" alt=\"\">\r\n                    <div class=\"status-indicator bg-warning\"></div>\r\n                  </div>\r\n                  <div>\r\n                    <div class=\"text-truncate\">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>\r\n                    <div class=\"small text-gray-500\">Morgan Alvarez · 2d</div>\r\n                  </div>\r\n                </a>\r\n                <a class=\"dropdown-item d-flex align-items-center\" href=\"#\">\r\n                  <div class=\"dropdown-list-image mr-3\">\r\n                    <img class=\"rounded-circle\" src=\"https://source.unsplash.com/Mv9hjnEUHR4/60x60\" alt=\"\">\r\n                    <div class=\"status-indicator bg-success\"></div>\r\n                  </div>\r\n                  <div>\r\n                    <div class=\"text-truncate\">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>\r\n                    <div class=\"small text-gray-500\">Chicken the Dog · 2w</div>\r\n                  </div>\r\n                </a>\r\n                <a class=\"dropdown-item text-center small text-gray-500\" href=\"#\">Read More Messages</a>\r\n              </div>\r\n            </li>\r\n  \r\n            <div class=\"topbar-divider d-none d-sm-block\"></div>\r\n  \r\n            <!-- Nav Item - User Information -->\r\n            <li class=\"nav-item dropdown no-arrow\">\r\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Valerie Luna</span>\r\n                <img class=\"img-profile rounded-circle\" src=\"https://source.unsplash.com/QAB-WJcbgJk/60x60\">\r\n              </a>\r\n              <!-- Dropdown - User Information -->\r\n              <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\r\n                <a class=\"dropdown-item\" href=\"#\">\r\n                  <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\r\n                  Profile\r\n                </a>\r\n                <a class=\"dropdown-item\" href=\"#\">\r\n                  <i class=\"fas fa-cogs fa-sm fa-fw mr-2 text-gray-400\"></i>\r\n                  Settings\r\n                </a>\r\n                <a class=\"dropdown-item\" href=\"#\">\r\n                  <i class=\"fas fa-list fa-sm fa-fw mr-2 text-gray-400\"></i>\r\n                  Activity Log\r\n                </a>\r\n                <div class=\"dropdown-divider\"></div>\r\n                <a class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#logoutModal\">\r\n                  <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\r\n                  Logout\r\n                </a>\r\n              </div>\r\n            </li>\r\n  \r\n          </ul>\r\n  \r\n        </nav>\r\n        <!-- End of Topbar -->\r\n  \r\n        <!-- Begin Page Content -->\r\n        <div class=\"container-fluid\">\r\n  \r\n          <!-- Page Heading -->\r\n          <div class=\"d-sm-flex align-items-center justify-content-between mb-4\">\r\n            <h1 class=\"h3 mb-0 text-gray-800\">Cards</h1>\r\n          </div>\r\n  \r\n          <div class=\"row\">\r\n  \r\n            <!-- Earnings (Monthly) Card Example -->\r\n            <div class=\"col-xl-3 col-md-6 mb-4\">\r\n              <div class=\"card border-left-primary shadow h-100 py-2\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                      <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\">Earnings (Monthly)</div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800\">$40,000</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                      <i class=\"fas fa-calendar fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n            <!-- Earnings (Monthly) Card Example -->\r\n            <div class=\"col-xl-3 col-md-6 mb-4\">\r\n              <div class=\"card border-left-success shadow h-100 py-2\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                      <div class=\"text-xs font-weight-bold text-success text-uppercase mb-1\">Earnings (Annual)</div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800\">$215,000</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                      <i class=\"fas fa-dollar-sign fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n            <!-- Earnings (Monthly) Card Example -->\r\n            <div class=\"col-xl-3 col-md-6 mb-4\">\r\n              <div class=\"card border-left-info shadow h-100 py-2\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                      <div class=\"text-xs font-weight-bold text-info text-uppercase mb-1\">Tasks</div>\r\n                      <div class=\"row no-gutters align-items-center\">\r\n                        <div class=\"col-auto\">\r\n                          <div class=\"h5 mb-0 mr-3 font-weight-bold text-gray-800\">50%</div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                          <div class=\"progress progress-sm mr-2\">\r\n                            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                      <i class=\"fas fa-clipboard-list fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n  \r\n            <!-- Pending Requests Card Example -->\r\n            <div class=\"col-xl-3 col-md-6 mb-4\">\r\n              <div class=\"card border-left-warning shadow h-100 py-2\">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\">\r\n                      <div class=\"text-xs font-weight-bold text-warning text-uppercase mb-1\">Pending Requests</div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800\">18</div>\r\n                    </div>\r\n                    <div class=\"col-auto\">\r\n                      <i class=\"fas fa-comments fa-2x text-gray-300\"></i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n  \r\n          <div class=\"row\">\r\n  \r\n            <div class=\"col-lg-6\">\r\n  \r\n              <!-- Default Card Example -->\r\n              <div class=\"card mb-4\">\r\n                <div class=\"card-header\">\r\n                  Default Card Example\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  This card uses Bootstrap's default styling with no utility classes added. Global styles are the only things modifying the look and feel of this default card example.\r\n                </div>\r\n              </div>\r\n  \r\n              <!-- Basic Card Example -->\r\n              <div class=\"card shadow mb-4\">\r\n                <div class=\"card-header py-3\">\r\n                  <h6 class=\"m-0 font-weight-bold text-primary\">Basic Card Example</h6>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  The styling for this basic card example is created by using default Bootstrap utility classes. By using utility classes, the style of the card component can be easily modified with no need for any custom CSS!\r\n                </div>\r\n              </div>\r\n  \r\n            </div>\r\n  \r\n            <div class=\"col-lg-6\">\r\n  \r\n              <!-- Dropdown Card Example -->\r\n              <div class=\"card shadow mb-4\">\r\n                <!-- Card Header - Dropdown -->\r\n                <div class=\"card-header py-3 d-flex flex-row align-items-center justify-content-between\">\r\n                  <h6 class=\"m-0 font-weight-bold text-primary\">Dropdown Card Example</h6>\r\n                  <div class=\"dropdown no-arrow\">\r\n                    <a class=\"dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                      <i class=\"fas fa-ellipsis-v fa-sm fa-fw text-gray-400\"></i>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-menu-right shadow animated--fade-in\" aria-labelledby=\"dropdownMenuLink\">\r\n                      <div class=\"dropdown-header\">Dropdown Header:</div>\r\n                      <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                      <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                      <div class=\"dropdown-divider\"></div>\r\n                      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!-- Card Body -->\r\n                <div class=\"card-body\">\r\n                  Dropdown menus can be placed in the card header in order to extend the functionality of a basic card. In this dropdown card example, the Font Awesome vertical ellipsis icon in the card header can be clicked on in order to toggle a dropdown menu.\r\n                </div>\r\n              </div>\r\n  \r\n              <!-- Collapsable Card Example -->\r\n              <div class=\"card shadow mb-4\">\r\n                <!-- Card Header - Accordion -->\r\n                <a href=\"#collapseCardExample\" class=\"d-block card-header py-3\" data-toggle=\"collapse\" role=\"button\" aria-expanded=\"true\" aria-controls=\"collapseCardExample\">\r\n                  <h6 class=\"m-0 font-weight-bold text-primary\">Collapsable Card Example</h6>\r\n                </a>\r\n                <!-- Card Content - Collapse -->\r\n                <div class=\"collapse show\" id=\"collapseCardExample\">\r\n                  <div class=\"card-body\">\r\n                    This is a collapsable card example using Bootstrap's built in collapse functionality. <strong>Click on the card header</strong> to see the card body collapse and expand!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n  \r\n            </div>\r\n  \r\n          </div>\r\n  \r\n        </div>\r\n        <!-- /.container-fluid -->\r\n  \r\n      </div>\r\n      <!-- End of Main Content -->\r\n  \r\n      <!-- Footer -->\r\n      <footer class=\"sticky-footer bg-white\">\r\n        <div class=\"container my-auto\">\r\n          <div class=\"copyright text-center my-auto\">\r\n            <span>Copyright &copy; Your Website 2019</span>\r\n          </div>\r\n        </div>\r\n      </footer>\r\n      <!-- End of Footer -->\r\n  \r\n    </div>\r\n    <!-- End of Content Wrapper -->\r\n  \r\n  </div>\r\n  <!-- End of Page Wrapper -->\r\n  \r\n  <!-- Scroll to Top Button-->\r\n  <a class=\"scroll-to-top rounded\" href=\"#page-top\">\r\n    <i class=\"fas fa-angle-up\"></i>\r\n  </a>\r\n  \r\n  <!-- Logout Modal-->\r\n  <div class=\"modal fade\" id=\"logoutModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ready to Leave?</h5>\r\n          <button class=\"close\" type=\"button\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">×</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">Select \"Logout\" below if you are ready to end your current session.</div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-secondary\" type=\"button\" data-dismiss=\"modal\">Cancel</button>\r\n          <a class=\"btn btn-primary\" href=\"login.html\">Logout</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<style>\r\n  agm-map {\r\n    height: 500px;\r\n    width: 100%;\r\n  }\r\n  </style>\r\n  \r\n  <!-- Page Wrapper -->\r\n  <div id=\"wrapper\">\r\n  \r\n      <!-- start of Sidebar -->\r\n      <app-sidebar></app-sidebar>\r\n      <!-- End of Sidebar -->\r\n    \r\n      <!-- Content Wrapper -->\r\n      <div id=\"content-wrapper\" class=\"d-flex flex-column\">\r\n    \r\n        <!-- Main Content -->\r\n        <div id=\"content\">\r\n    \r\n          <!-- Topbar -->\r\n          <nav class=\"navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow\">\r\n    \r\n            <!-- Sidebar Toggle (Topbar) -->\r\n            <button id=\"sidebarToggleTop\" class=\"btn btn-link d-md-none rounded-circle mr-3\">\r\n              <i class=\"fa fa-bars\"></i>\r\n            </button>\r\n    \r\n            <!-- Topbar Navbar -->\r\n            <ul class=\"navbar-nav ml-auto\">\r\n    \r\n              <div class=\"topbar-divider d-none d-sm-block\"></div>\r\n    \r\n              <!-- Nav Item - User Information -->\r\n              <li class=\"nav-item dropdown no-arrow\">\r\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"userDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                  <span class=\"mr-2 d-none d-lg-inline text-gray-600 small\">Valerie Luna</span>\r\n                  <img class=\"img-profile rounded-circle\" src=\"https://source.unsplash.com/QAB-WJcbgJk/60x60\">\r\n                </a>\r\n                <!-- Dropdown - User Information -->\r\n                <div class=\"dropdown-menu dropdown-menu-right shadow animated--grow-in\" aria-labelledby=\"userDropdown\">\r\n                  <a class=\"dropdown-item\" href=\"/perfil\">\r\n                    <i class=\"fas fa-user fa-sm fa-fw mr-2 text-gray-400\"></i>\r\n                    Perfil\r\n                  </a>\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a class=\"dropdown-item\" href=\"/salir\" data-toggle=\"modal\" data-target=\"#logoutModal\">\r\n                    <i class=\"fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400\"></i>\r\n                    Logout\r\n                  </a>\r\n                </div>\r\n              </li>\r\n    \r\n            </ul>\r\n    \r\n          </nav>\r\n          <!-- End of Topbar -->\r\n    \r\n          <!-- Begin Page Content -->\r\n          <div class=\"container-fluid\">\r\n    \r\n  \r\n            <div class=\"col-md-12\" >\r\n              <div class=\"card border-left-primary shadow h-100 \">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\" style=\"text-align: center;\">\r\n                      <div class=\"text-xs font-weight-bold text-primary text-uppercase mb-1\"></div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \"> \r\n                          <input type=\"hidden\" class=\"form-control\" [(ngModel)]=\"id\" name=\"id\" id=\"id\" placeholder=\"Código Barras\">\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"codigo_barras\" name=\"codigo_barras\" id=\"codigo_barras\" placeholder=\"Código Barras\">\r\n                      </div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \"> \r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"identificador\" name=\"identificador\" id=\"identificador\" placeholder=\"Identificador\">\r\n                      </div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \"> \r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"proveedor\" name=\"proveedor\" id=\"proveedor\" placeholder=\"Nombre Proveedor\">\r\n                      </div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \"> \r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"celular_proveedor\" name=\"celular_proveedor\" id=\"celular_proveedor\" placeholder=\"Celular Proveedor\">\r\n                      </div>\r\n                      <div class=\"h5 mb-0 font-weight-bold text-gray-800 mb-4 \"> \r\n                        <div class=\"btn btn-success\" (click)=\"ngOnGuardar()\">Guardar</div>\r\n                        <div class=\"btn btn-warning\" (click)=\"ngOnActualizar()\">Actualizar</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n<br>\r\n            <div class=\"col-md-12\" >\r\n              <div class=\"card border-left-primary shadow h-100 \">\r\n                <div class=\"card-body\">\r\n                  <div class=\"row no-gutters align-items-center\">\r\n                    <div class=\"col mr-2\" style=\"text-align: center;\">\r\n                      <table class=\"table\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th>Codigo Barras</th>\r\n                            <th>Identificador</th>\r\n                            <th>Nombre Proveedor</th>\r\n                            <th>Celular Proveedor</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr ng-repeat=\"gps in gpss\">\r\n                            <td>{{ gps }}</td>\r\n                            <td>{{ gps }}</td>\r\n                            <td>{{ gps }}</td>\r\n                            <td>{{ gps }}</td>\r\n                            <td><div class=\"btn btn-warning\" (click)=\"ngOnUpdate()\">></div></td>\r\n                            <td><div class=\"btn btn-danger\" (click)=\"ngOnDelete()\">X</div></td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n    \r\n          </div>\r\n          <!-- /.container-fluid -->\r\n    \r\n        </div>\r\n        <!-- End of Main Content -->\r\n    \r\n        <!-- Footer -->\r\n        <app-footer></app-footer>\r\n        <!-- End of Footer -->\r\n    \r\n      </div>\r\n      <!-- End of Content Wrapper -->\r\n    \r\n    </div>\r\n    <!-- End of Page Wrapper -->\r\n    "

/***/ }),

/***/ 224:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  remisionesasignadas works!\r\n</p>\r\n"

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  reportebodeguero works!\r\n</p>\r\n"

/***/ }),

/***/ 226:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  reporteconsultor works!\r\n</p>\r\n"

/***/ }),

/***/ 227:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  reporteruteador works!\r\n</p>\r\n"

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  reportetransportador works!\r\n</p>\r\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  seguimientoruta works!\r\n</p>\r\n"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar -->\r\n<ul class=\"navbar-nav bg-gradient-primary sidebar sidebar-dark accordion\" id=\"accordionSidebar\">\r\n  \r\n  <!-- Sidebar - Brand -->\r\n  <a class=\"sidebar-brand d-flex align-items-center justify-content-center\" href=\"/dashboard\">\r\n    <div class=\"sidebar-brand-text mx-3\">FastlogApp</div>\r\n  </a>\r\n\r\n  <!-- Divider -->\r\n  <hr class=\"sidebar-divider my-0\">\r\n\r\n  <!-- Nav Item - Dashboard -->\r\n  <li class=\"nav-item active\">\r\n    <a class=\"nav-link\" href=\"/dashboard\">\r\n      <i class=\"fas fa-fw fa-tachometer-alt\"></i>\r\n      <span>Tablero GPS</span></a>\r\n  </li>\r\n\r\n  <!-- Divider -->\r\n  <hr class=\"sidebar-divider\">\r\n\r\n  <!-- Nav Item - Pages Collapse Menu -->\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" href=\"#\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"true\" aria-controls=\"collapseTwo\">\r\n      <i class=\"fas fa-fw fa-cog\"></i>\r\n      <span>Reportes</span>\r\n    </a>\r\n    <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionSidebar\">\r\n      <div class=\"bg-white py-2 collapse-inner rounded\">\r\n        <h6 class=\"collapse-header\">Tipos de reportes:</h6>\r\n        <a class=\"collapse-item\" href=\"/reporteBodeguero\">Bodeguero </a>\r\n        <a class=\"collapse-item active\" href=\"/reporteRuteador\">Ruterador</a>\r\n        <a class=\"collapse-item \" href=\"/reporteTransportador\">Transportador</a>\r\n        <a class=\"collapse-item \" href=\"/reporteConsultor\">Consultor</a>\r\n      </div>\r\n    </div>\r\n  </li>\r\n\r\n  <!-- Divider -->\r\n  <hr class=\"sidebar-divider\">\r\n\r\n  <!-- Nav Item -->\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" href=\"/generarRemision\">\r\n      <i class=\"fas fa-fw fa-chart-area\"></i>\r\n      <span>Generar Remision</span></a>\r\n  </li>\r\n\r\n  <!-- Nav Item -->\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" href=\"/cargarProducto\">\r\n      <i class=\"fas fa-fw fa-table\"></i>\r\n      <span>Cargar Producto</span></a>\r\n  </li>\r\n\r\n  <!-- Divider -->\r\n  <hr class=\"sidebar-divider\">\r\n\r\n  <!-- Nav Item -->\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" href=\"/asignarRuta\">\r\n      <i class=\"fas fa-fw fa-table\"></i>\r\n      <span>Asignar Ruta</span></a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" href=\"/seguimientoRuta\">\r\n      <i class=\"fas fa-fw fa-table\"></i>\r\n      <span>Seguimiento Ruta</span></a>\r\n  </li>\r\n\r\n  <!-- Divider -->\r\n  <hr class=\"sidebar-divider\">\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" href=\"/remisionesAsignadas\">\r\n      <i class=\"fas fa-fw fa-table\"></i>\r\n      <span>Remisiones Asignadas</span></a>\r\n  </li>\r\n\r\n  <!-- Divider -->\r\n  <hr class=\"sidebar-divider\">\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" href=\"/registroGps\">\r\n      <i class=\"fas fa-fw fa-table\"></i>\r\n      <span>Registrar GPS</span></a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" href=\"/registroUsuario\">\r\n      <i class=\"fas fa-fw fa-table\"></i>\r\n      <span>Registrar Usuario</span></a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" href=\"/registroClinica\">\r\n      <i class=\"fas fa-fw fa-table\"></i>\r\n      <span>Registrar Clinica</span></a>\r\n  </li>\r\n\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" href=\"/registroCasaComercial\">\r\n      <i class=\"fas fa-fw fa-table\"></i>\r\n      <span>Registrar Casa Comercial</span></a>\r\n  </li>\r\n\r\n  <!-- Divider -->\r\n  <hr class=\"sidebar-divider d-none d-md-block\">\r\n\r\n  <!-- Sidebar Toggler (Sidebar) -->\r\n  <div class=\"text-center d-none d-md-inline\">\r\n    <button class=\"rounded-circle border-0\" id=\"sidebarToggle\"></button>\r\n  </div>\r\n\r\n</ul>\r\n"

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(127);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_configuration_service__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginServiceService = (function () {
    function LoginServiceService(http) {
        this.http = http;
    }
    LoginServiceService.prototype.login = function (username, password) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__services_configuration_service__["a" /* ConfigurationService */].url + 'login', {
            email: username,
            password: password,
        });
    };
    LoginServiceService.prototype.olvido = function (email, telefono) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__services_configuration_service__["a" /* ConfigurationService */].url + 'olvido', {
            email: email,
            telefono: telefono,
        });
    };
    return LoginServiceService;
}());
LoginServiceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], LoginServiceService);

var _a;
//# sourceMappingURL=login-service.service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsignacionrutaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsignacionrutaComponent = (function () {
    function AsignacionrutaComponent() {
    }
    AsignacionrutaComponent.prototype.ngOnInit = function () {
    };
    return AsignacionrutaComponent;
}());
AsignacionrutaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-asignacionruta',
        template: __webpack_require__(216),
        styles: [__webpack_require__(200)]
    }),
    __metadata("design:paramtypes", [])
], AsignacionrutaComponent);

//# sourceMappingURL=asignacionruta.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CargarproductoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CargarproductoComponent = (function () {
    function CargarproductoComponent() {
    }
    CargarproductoComponent.prototype.ngOnInit = function () {
    };
    return CargarproductoComponent;
}());
CargarproductoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-cargarproducto',
        template: __webpack_require__(217),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [])
], CargarproductoComponent);

//# sourceMappingURL=cargarproducto.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
        // google maps zoom level
        this.zoom = 15;
        // initial center position for the map
        this.lat = 4.6259377;
        this.lng = -74.122047;
        /*markerDragEnd(m: marker, $event: MouseEvent) {
          console.log('dragEnd', m, $event);
        }*/
        this.markers = [
            {
                lat: 4.6259377,
                lng: -74.122047,
                label: '',
                draggable: true
            }
        ];
    }
    DashboardComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    DashboardComponent.prototype.mapClicked = function ($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(218),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerarremisionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GenerarremisionComponent = (function () {
    function GenerarremisionComponent() {
    }
    GenerarremisionComponent.prototype.ngOnInit = function () {
    };
    return GenerarremisionComponent;
}());
GenerarremisionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-generarremision',
        template: __webpack_require__(220),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [])
], GenerarremisionComponent);

//# sourceMappingURL=generarremision.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = (function () {
    function IndexComponent(loginService) {
        this.loginService = loginService;
        this.username = "";
        this.password = "";
        this.email = "";
        this.telefono = "";
    }
    IndexComponent.prototype.ngOnInit = function () {
        document.getElementById('login').style.display = 'inline';
        document.getElementById('olvido').style.display = 'none';
    };
    IndexComponent.prototype.ngOnOlvido = function () {
        document.getElementById('login').style.display = 'none';
        document.getElementById('olvido').style.display = 'inline';
    };
    IndexComponent.prototype.ngOnInicioSesion = function () {
        document.getElementById('respuesta').innerHTML = '';
        if (this.ngValidate('login') == false) {
            document.getElementById('respuesta').innerHTML = '<div class="card shadow mb-4">' +
                '<div class="card-body">' +
                '<div class="px-3 py-5 bg-gradient-danger text-white">Error en los datos ingresados</div>' +
                '</div>' +
                '</div>';
        }
        else {
            this.loginService.login(this.username, this.password).subscribe(function (res) {
                console.log(res);
                window.location.href = "/dashboard";
            }, function (error) {
                console.error(error);
                document.getElementById('respuesta').innerHTML = '<div class="card shadow mb-4">' +
                    '<div class="card-body">' +
                    '<div class="px-3 py-5 bg-gradient-danger text-white">' + error + '</div>' +
                    '</div>' +
                    '</div>';
                window.location.href = "/dashboard";
            });
        }
    };
    IndexComponent.prototype.ngValidate = function (tipo) {
        if (tipo == 'login') {
            if (this.username == '' || this.password == '') {
                return false;
            }
            else {
                return true;
            }
        }
        if (tipo == 'olvido') {
            if (this.email == '' || this.telefono == '') {
                return false;
            }
            else {
                return true;
            }
        }
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-index',
        template: __webpack_require__(221),
        styles: [__webpack_require__(205)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service_service__["a" /* LoginServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service_service__["a" /* LoginServiceService */]) === "function" && _a || Object])
], IndexComponent);

var _a;
//# sourceMappingURL=index.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service_service__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (username, password, event) {
        event.preventDefault();
        this.loginService.login(username, password).subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.error(error);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(222),
        styles: [__webpack_require__(206)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_login_service_service__["a" /* LoginServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_login_service_service__["a" /* LoginServiceService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_gps_service__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrogpsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrogpsComponent = (function () {
    function RegistrogpsComponent(gpsService) {
        this.gpsService = gpsService;
        this.codigo_barras = '';
        this.identificador = '';
        this.proveedor = '';
        this.celular_proveedor = '';
        this.id = 0;
        this.gpss = [];
    }
    RegistrogpsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.gpss);
        this.gpsService.consultAll().subscribe(function (res) {
            console.log(res);
            _this.gpss.push(res['body']);
        });
    };
    RegistrogpsComponent.prototype.ngOnGuardar = function () {
        this.gpsService.create(this.codigo_barras, this.identificador, this.proveedor, this.celular_proveedor).subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.error(error);
        });
    };
    RegistrogpsComponent.prototype.ngOnActualizar = function () {
        this.gpsService.update(this.id, this.codigo_barras, this.identificador, this.proveedor, this.celular_proveedor).subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.error(error);
        });
    };
    RegistrogpsComponent.prototype.ngOnDelete = function (id) {
        this.gpsService.delete(id).subscribe(function (res) {
            console.log(res);
        }, function (error) {
            console.error(error);
        });
    };
    RegistrogpsComponent.prototype.ngOnUpdate = function (id) {
        var _this = this;
        this.gpsService.consult(id).subscribe(function (res) {
            console.log(res);
            _this.codigo_barras = res['body'].codigo_barras;
            _this.identificador = res['body'].identificador;
            _this.proveedor = res['body'].proveedor;
            _this.celular_proveedor = res['body'].celular_proveedor;
            _this.id = res['body'].id;
        }, function (error) {
            console.error(error);
        });
    };
    return RegistrogpsComponent;
}());
RegistrogpsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-registrogps',
        template: __webpack_require__(223),
        styles: [__webpack_require__(207)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_gps_service__["a" /* GpsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_gps_service__["a" /* GpsService */]) === "function" && _a || Object])
], RegistrogpsComponent);

var _a;
//# sourceMappingURL=registrogps.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemisionesasignadasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RemisionesasignadasComponent = (function () {
    function RemisionesasignadasComponent() {
    }
    RemisionesasignadasComponent.prototype.ngOnInit = function () {
    };
    return RemisionesasignadasComponent;
}());
RemisionesasignadasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-remisionesasignadas',
        template: __webpack_require__(224),
        styles: [__webpack_require__(208)]
    }),
    __metadata("design:paramtypes", [])
], RemisionesasignadasComponent);

//# sourceMappingURL=remisionesasignadas.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportebodegueroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportebodegueroComponent = (function () {
    function ReportebodegueroComponent() {
    }
    ReportebodegueroComponent.prototype.ngOnInit = function () {
    };
    return ReportebodegueroComponent;
}());
ReportebodegueroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-reportebodeguero',
        template: __webpack_require__(225),
        styles: [__webpack_require__(209)]
    }),
    __metadata("design:paramtypes", [])
], ReportebodegueroComponent);

//# sourceMappingURL=reportebodeguero.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteconsultorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReporteconsultorComponent = (function () {
    function ReporteconsultorComponent() {
    }
    ReporteconsultorComponent.prototype.ngOnInit = function () {
    };
    return ReporteconsultorComponent;
}());
ReporteconsultorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-reporteconsultor',
        template: __webpack_require__(226),
        styles: [__webpack_require__(210)]
    }),
    __metadata("design:paramtypes", [])
], ReporteconsultorComponent);

//# sourceMappingURL=reporteconsultor.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteruteadorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReporteruteadorComponent = (function () {
    function ReporteruteadorComponent() {
    }
    ReporteruteadorComponent.prototype.ngOnInit = function () {
    };
    return ReporteruteadorComponent;
}());
ReporteruteadorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-reporteruteador',
        template: __webpack_require__(227),
        styles: [__webpack_require__(211)]
    }),
    __metadata("design:paramtypes", [])
], ReporteruteadorComponent);

//# sourceMappingURL=reporteruteador.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportetransportadorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportetransportadorComponent = (function () {
    function ReportetransportadorComponent() {
    }
    ReportetransportadorComponent.prototype.ngOnInit = function () {
    };
    return ReportetransportadorComponent;
}());
ReportetransportadorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-reportetransportador',
        template: __webpack_require__(228),
        styles: [__webpack_require__(212)]
    }),
    __metadata("design:paramtypes", [])
], ReportetransportadorComponent);

//# sourceMappingURL=reportetransportador.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeguimientorutaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeguimientorutaComponent = (function () {
    function SeguimientorutaComponent() {
    }
    SeguimientorutaComponent.prototype.ngOnInit = function () {
    };
    return SeguimientorutaComponent;
}());
SeguimientorutaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* Component */])({
        selector: 'app-seguimientoruta',
        template: __webpack_require__(229),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [])
], SeguimientorutaComponent);

//# sourceMappingURL=seguimientoruta.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigurationService = (function () {
    function ConfigurationService() {
    }
    return ConfigurationService;
}());
//public static url="localhost:8000/api/";
ConfigurationService.url = "http://api.fastlogapp.com/api/";
ConfigurationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ConfigurationService);

//# sourceMappingURL=configuration.service.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_configuration_service__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GpsService = (function () {
    function GpsService(http) {
        this.http = http;
    }
    GpsService.prototype.create = function (codigo_barras, identificador, proveedor, celular_proveedor) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__services_configuration_service__["a" /* ConfigurationService */].url + 'gps/create', {
            codigo_barras: codigo_barras,
            identificador: identificador,
            proveedor: proveedor,
            celular_proveedor: celular_proveedor
        });
    };
    GpsService.prototype.consult = function (index) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__services_configuration_service__["a" /* ConfigurationService */].url + 'gps/' + index);
    };
    GpsService.prototype.consultAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__services_configuration_service__["a" /* ConfigurationService */].url + 'gps');
    };
    GpsService.prototype.delete = function (index) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__services_configuration_service__["a" /* ConfigurationService */].url + 'gps/delete', {
            id: index
        });
    };
    GpsService.prototype.update = function (index, codigo_barras, identificador, proveedor, celular_proveedor) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__services_configuration_service__["a" /* ConfigurationService */].url + 'gps/update', {
            id: index,
            codigo_barras: codigo_barras,
            identificador: identificador,
            proveedor: proveedor,
            celular_proveedor: celular_proveedor
        });
    };
    return GpsService;
}());
GpsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], GpsService);

var _a;
//# sourceMappingURL=gps.service.js.map

/***/ })

},[275]);
//# sourceMappingURL=main.bundle.js.map