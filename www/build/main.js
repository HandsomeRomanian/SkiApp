webpackJsonp([0],{

/***/ 136:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Matei\Documents\Projects\SkiApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SkiApp</ion-title>\n    \n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="person"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  \n</ion-header>\n\n<ion-content  padding>\n<h1>Home</h1>\n  \n\n\n\n\n\n  \n</ion-content>\n  '/*ion-inline-end:"C:\Users\Matei\Documents\Projects\SkiApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LevelListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_list_group_list__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exercices_list_exercices_list__ = __webpack_require__(402);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LevelListPage = /** @class */ (function () {
    function LevelListPage(navCtrl, navParams, skiService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.skiService = skiService;
        this.loadingCtrl = loadingCtrl;
        // If we navigated to this page, we will have an item available as a nav param
        this.action = navParams.get("action");
        console.log(this.action);
        this.levels = skiService.getLevels().pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["finalize"])(function () { return loading.dismiss(); }));
        var loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
    }
    LevelListPage.prototype.openPage = function (id) {
        console.log(this.action + "-" + id);
        if (this.action == 1) {
            console.log(id);
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__exercices_list_exercices_list__["a" /* ExercicesListPage */], { "levelID": id });
        }
        else if (this.action == 2) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__group_list_group_list__["a" /* GroupListPage */], { "levelID": id, "action": this.action });
        }
    };
    LevelListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-level-list',template:/*ion-inline-start:"C:\Users\Matei\Documents\Projects\SkiApp\src\pages\level-list\level-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-list>\n    <button menuClose ion-item *ngFor="let lvl of (levels | async)" (click)="openPage(lvl.id)">\n      {{lvl.name}}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Matei\Documents\Projects\SkiApp\src\pages\level-list\level-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__["a" /* SkiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__["a" /* SkiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === "function" && _d || Object])
    ], LevelListPage);
    return LevelListPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=level-list.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__student_list_student_list__ = __webpack_require__(245);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the GroupListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GroupListPage = /** @class */ (function () {
    function GroupListPage(navCtrl, navParams, skiService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.skiService = skiService;
        this.loadingCtrl = loadingCtrl;
        this.title = "Temp";
        this.onlyCurrent = true;
        this.levelID = 0;
        this.action = 0;
        this.day = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
        this.levelID = navParams.get("levelID");
        this.action = navParams.get("action");
        this.title = __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__["a" /* SkiProvider */].levels[this.levelID];
        this.groups = this.skiService.getGroups(this.levelID).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["finalize"])(function () { return loading.dismiss(); }));
        var loading = this.loadingCtrl.create({
            content: ''
        });
        loading.present();
    }
    GroupListPage.prototype.currentClass = function (inTime) {
        var temp = new Date();
        var timeAr = inTime.split(":");
        temp.setHours(timeAr[0], timeAr[1], timeAr[2]);
        return !(temp.getTime() > new Date().getTime() && new Date().getTime() < temp.setHours(temp.getHours() + 1));
    };
    GroupListPage.prototype.getTime = function () {
        var date = new Date();
        return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    };
    GroupListPage.prototype.openPage = function (grp) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__student_list_student_list__["a" /* StudentListPage */], { "groupID": grp.id, "action": this.action });
    };
    GroupListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-group-list',template:/*ion-inline-start:"C:\Users\Matei\Documents\Projects\SkiApp\src\pages\group-list\group-list.html"*/'<!--\n\n  Generated template for the GroupListPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <!--<ion-grid>\n\n     <ion-row>\n\n      <ion-item>\n\n        <ion-label>Cours courrants seulement</ion-label>\n\n        <ion-toggle slot="end" [(ngModel)]="onlyCurrent"></ion-toggle>\n\n      </ion-item>\n\n    </ion-row>\n\n\n\n  </ion-grid> -->\n\n\n\n  <ion-list>\n\n    <ion-item\n\n      menuClose\n\n      \n\n      *ngFor="let grp of (groups | async)"\n\n      (click)="openPage(grp)"\n\n      class="list-item"\n\n    >\n\n    \n\n    <ion-label\n\n    *ngIf="onlyCurrent && currentClass(grp.Time)"\n\n    >      \n\n      <h2><ion-badge color="primary" slot="end">{{grp.Number}}</ion-badge> {{grp.Time.substr(0,5) + "  " + this.day[grp.day-1]}}</h2>\n\n      <h2>{{grp.TeacherName}} Matei</h2>\n\n    </ion-label>\n\n  </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Matei\Documents\Projects\SkiApp\src\pages\group-list\group-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__["a" /* SkiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], GroupListPage);
    return GroupListPage;
}());

//# sourceMappingURL=group-list.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentListPage = /** @class */ (function () {
    function StudentListPage(navCtrl, navParams, skiService, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.skiService = skiService;
        this.loadingCtrl = loadingCtrl;
        this.title = "Student List";
        this.groupID = navParams.get("groupID");
        this.action = navParams.get("action");
        this.skiService.getGroup(this.groupID).subscribe(function (resp) {
            _this.group = resp;
            _this.students = _this.group.Students;
            _this.students.forEach(function (element) {
                element.Status = __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__["a" /* SkiProvider */].status[element.Status];
            });
            _this.title = __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__["a" /* SkiProvider */].levels[_this.group.Level] + " " + _this.group.Number + " " + _this.group.Time;
            console.log(_this.group);
        });
    }
    StudentListPage_1 = StudentListPage;
    StudentListPage.prototype.statusChange = function (student) {
        var _this = this;
        var tempstatus;
        console.log(student.id + ":" + student.Status);
        for (var index = 0; index < __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__["a" /* SkiProvider */].status.length; index++) {
            if (__WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__["a" /* SkiProvider */].status[index] == student.Status) {
                tempstatus = index;
                break;
            }
        }
        var output = { "status": tempstatus, "studentID": student.id };
        this.skiService.setStatus(output).subscribe(function (x) {
            if (x) {
                _this.navCtrl.push(StudentListPage_1, { "groupID": _this.groupID, "action": _this.action });
            }
        });
    };
    StudentListPage.prototype.getStatusList = function () {
        return __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__["a" /* SkiProvider */].status;
    };
    StudentListPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.skiService.getGroup(this.groupID).subscribe(function (resp) {
            _this.group = resp;
            _this.students = _this.group.Students;
            _this.students.forEach(function (element) {
                element.Status = __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__["a" /* SkiProvider */].status[element.Status];
            });
            console.log(event);
            event.complete();
        });
    };
    StudentListPage = StudentListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-student-list',template:/*ion-inline-start:"C:\Users\Matei\Documents\Projects\SkiApp\src\pages\student-list\student-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-refresher slot="fixed" (ionRefresh)="doRefresh($event)">\n\n    <ion-refresher-content></ion-refresher-content>\n\n  </ion-refresher>\n\n\n\n  <ion-list>\n\n    <ion-item menuClose *ngFor="let sdnt of students" class="list-item">\n\n      <ion-label>\n\n        <h2>\n\n          {{sdnt.Name}}\n\n        </h2>\n\n        <h3>{{sdnt.Special}} Special student comment.</h3>\n\n      </ion-label>\n\n      <ion-select slot="end" [(ngModel)]="sdnt.Status" cancel-text="Annuler" interface="popover" placeholder="test"\n\n        (ionChange)="statusChange(sdnt)">\n\n        <ion-option *ngFor="let status of getStatusList();" value="{{status}}">{{status}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Matei\Documents\Projects\SkiApp\src\pages\student-list\student-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__["a" /* SkiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]])
    ], StudentListPage);
    return StudentListPage;
    var StudentListPage_1;
}());

//# sourceMappingURL=student-list.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(254);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http_ngx__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_group_list_group_list__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_level_list_level_list__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_student_list_student_list__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_exercices_list_exercices_list__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_ski_ski__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_level_list_level_list__["a" /* LevelListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_group_list_group_list__["a" /* GroupListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_student_list_student_list__["a" /* StudentListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_exercices_list_exercices_list__["a" /* ExercicesListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_level_list_level_list__["a" /* LevelListPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_group_list_group_list__["a" /* GroupListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_student_list_student_list__["a" /* StudentListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_exercices_list_exercices_list__["a" /* ExercicesListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_ski_ski__["a" /* SkiProvider */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_http_ngx__["a" /* HTTP */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_ski_ski__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_level_list_level_list__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, skiAPI) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.skiAPI = skiAPI;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: "Home", component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: "Exercices", component: __WEBPACK_IMPORTED_MODULE_6__pages_level_list_level_list__["a" /* LevelListPage */] },
            { title: "Gestion", component: __WEBPACK_IMPORTED_MODULE_6__pages_level_list_level_list__["a" /* LevelListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.title == "Exercices") {
            this.nav.setRoot(page.component, { action: 1 });
        }
        else if (page.title == "Gestion") {
            this.nav.setRoot(page.component, { action: 2 });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Matei\Documents\Projects\SkiApp\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Matei\Documents\Projects\SkiApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__providers_ski_ski__["a" /* SkiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_ski_ski__["a" /* SkiProvider */]) === "function" && _e || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExercicesListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ExercicesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExercicesListPage = /** @class */ (function () {
    function ExercicesListPage(navCtrl, navParams, skiService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.skiService = skiService;
        this.loadingCtrl = loadingCtrl;
        console.log(navParams.get("levelID"));
        this.levelID = navParams.get("levelID");
        this.exercices = this.skiService.getExercices(this.levelID);
    }
    ExercicesListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExercicesListPage');
    };
    ExercicesListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exercices-list',template:/*ion-inline-start:"C:\Users\Matei\Documents\Projects\SkiApp\src\pages\exercices-list\exercices-list.html"*/'<!--\n  Generated template for the ExercicesListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>ExercicesList</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button menuClose ion-item *ngFor="let ex of (exercices | async)" (click)="openPage(lvl.id)">\n      {{ex.description}}\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Matei\Documents\Projects\SkiApp\src\pages\exercices-list\exercices-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__["a" /* SkiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_ski_ski__["a" /* SkiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */]) === "function" && _d || Object])
    ], ExercicesListPage);
    return ExercicesListPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=exercices-list.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(224);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SkiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SkiProvider = /** @class */ (function () {
    function SkiProvider(http) {
        this.http = http;
    }
    SkiProvider_1 = SkiProvider;
    SkiProvider.prototype.getLevels = function () {
        return this.http.get(SkiProvider_1.apiUrl + "levels");
    };
    SkiProvider.prototype.getGroups = function (id) {
        var tmp = this.http.get(SkiProvider_1.apiUrl + "groups/" + id);
        console.log(tmp);
        return tmp;
    };
    SkiProvider.prototype.getGroup = function (groupID) {
        var tmp = this.http.get(SkiProvider_1.apiUrl + "group/" + groupID);
        return tmp;
    };
    SkiProvider.prototype.getExercices = function (levelID) {
        var tmp = this.http.get(SkiProvider_1.apiUrl + "levels/" + levelID + "/exercices");
        return tmp;
    };
    SkiProvider.prototype.setStatus = function (student) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        return this.http.post(SkiProvider_1.apiUrl + "status/", student, { headers: headers });
    };
    SkiProvider.levels = ["Test", "Ourson", " Kangourou", " Prélude", " Tigre", " Lion", " Christiania", " Parallèle I", " Parallèle II", " Compétence I", " Compétence II", " Élite I", " Élite II", " Excellence"];
    SkiProvider.status = ["Non évalué", "Normal", "En retard", "Absent", "Fort"];
    SkiProvider.apiUrl = "https://api.mateimartin.ca:8081/";
    SkiProvider = SkiProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], SkiProvider);
    return SkiProvider;
    var SkiProvider_1, _a;
}());

//# sourceMappingURL=ski.js.map

/***/ })

},[246]);
//# sourceMappingURL=main.js.map