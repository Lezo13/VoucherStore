(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../Voucher-Shop-Front-End-/Frontend-Seed/node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy recursive":
/*!***********************************************************************************************************************************************************************!*\
  !*** D:/Users/LezoWork/Documents/GitHub/OnBoardTraining/Voucher-Shop-Front-End-/Frontend-Seed/node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy namespace object ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../Voucher-Shop-Front-End-/Frontend-Seed/node_modules/@angular/core/__ivy_ngcc__/fesm2015 lazy recursive";

/***/ }),

/***/ "../../../Voucher-Shop-Front-End-/Frontend-Seed/src/app/core/services/orderService/SelectVoucher.service.ts":
/*!************************************************************************************************************************************************************!*\
  !*** D:/Users/LezoWork/Documents/GitHub/OnBoardTraining/Voucher-Shop-Front-End-/Frontend-Seed/src/app/core/services/orderService/SelectVoucher.service.ts ***!
  \************************************************************************************************************************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../Voucher-Shop-Front-End-/Frontend-Seed/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../Voucher-Shop-Front-End-/Frontend-Seed/node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../../Voucher-Shop-Front-End-/Frontend-Seed/node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_models_orderitem_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_shared/models/orderitem.model */ "./src/app/_shared/models/orderitem.model.ts");




let DataService = class DataService {
    constructor() {
        this.orderlist = new Array();
        this.cartNumber = 0;
        this.currentVoucherName = '';
        this.currentQty = 0;
        this.currentPrice = 0;
        this.totalPrice = 0;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('default message');
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(message) {
        this.messageSource.next(message);
    }
    changeToBtnSelect() {
        this.btn.name = 'select';
        this.btn.firstChild.textContent = 'SELECT';
        this.btn.classList.remove('red');
        this.btn.classList.remove('accent-2');
        this.btn.classList.add('amber');
        this.btn.classList.add('darken-3');
    }
    changeToBtnRemove() {
        this.btn.name = 'remove';
        this.btn.firstChild.textContent = `REMOVE (${this.currentQty})`;
        this.btn.classList.remove('amber');
        this.btn.classList.remove('darken-3');
        this.btn.classList.add('red');
        this.btn.classList.add('accent-2');
    }
    pushOrder() {
        const orders = {
            voucherName: this.currentVoucherName,
            itemPrice: this.currentPrice,
            itemQty: this.currentQty
        };
        const items = new src_app_shared_models_orderitem_model__WEBPACK_IMPORTED_MODULE_3__["OrderItem"]();
        items.voucherName = this.currentVoucherName;
        items.itemPrice = this.currentPrice;
        items.itemQty = this.currentQty;
        this.orderlist.push(items);
    }
    decreaseCartCount() {
        this.cartNumber -= 1;
    }
    decreasePrice(priceToDecrease) {
        this.totalPrice -= priceToDecrease;
    }
    resetService() {
        this.orderlist = new Array();
        this.cartNumber = 0;
        this.btn = null;
        this.currentVoucherName = '';
        this.currentQty = 0;
        this.currentPrice = 0;
        this.totalPrice = 0;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('default message');
        this.currentMessage = this.messageSource.asObservable();
    }
};
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/details-panel/details-panel.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/details-panel/details-panel.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdb-card class=\"text-center mb-3 panel__bg--resize green accent-2\">\r\n  <mdb-card-body class=\"panelContents--move\">\r\n    <h1>Shave Time. Shave Money.</h1><br><br>\r\n    <h3>Different vouchers are being sold everyday, Hurry up before it lasts!. Why not get one?</h3><br><br>\r\n    <h4>✔️ Easy to get (via Email)</h4><br>\r\n    <h4>✔️ Fast response  </h4><br>\r\n    <h4>✔️ Safe Transaction  </h4>\r\n    <button mdbBtn type=\"button\" class=\"buttonShop--move\" gradient=\"peach\" mdbWavesEffect (click)=\"goToPage('order')\">Shop now <mdb-icon fas icon=\"cart-arrow-down\"></mdb-icon> \r\n    </button>\r\n  </mdb-card-body>\r\n</mdb-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-header/home-header.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-header/home-header.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark blue darken-1\">\r\n\r\n    <mdb-navbar-brand>\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"https://bit.ly/305p5iH\" height=\"60\" class=\"d-inline-block align-top\" alt=\"\">\r\n      </a>\r\n    </mdb-navbar-brand>\r\n  \r\n    <mdb-icon fas icon=\"angle-left\" size=\"lg\" class=\"text-white mr-auto d-flex d-md-none align-self-center\"></mdb-icon>\r\n  \r\n    <links>\r\n  \r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect>Home<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect (click)=\"goToPage('order')\">Order Now</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect (click)=\"goToPage('vieworders')\">View Orders</a>\r\n        </li>\r\n  \r\n      </ul>\r\n  \r\n      \r\n    </links>\r\n  \r\n  \r\n  \r\n  </mdb-navbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"home__bg-change\">\r\n    <app-home-header></app-home-header>\r\n    <app-details-panel></app-details-panel>\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order-header/order-cart/order-cart.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order-header/order-cart/order-cart.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"modal-header blue lighten-4\">\r\n    <h4 class=\"modal-title fontHeader--change\">Cart Details</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"form-outline amber lighten-5\">\r\n\r\n    <table class=\"table mb-0\">\r\n      <thead>\r\n        <tr>\r\n          <th *ngFor=\"let column of headers\" scope=\"col\" class=\"th--bold\">\r\n            {{column}}\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let row of rows\">\r\n          <td *ngFor=\"let column of headers\">{{row[column]}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"text-center blue lighten-4\">\r\n    <h4 class=\"modal-title pt-3 mb-3\">TOTAL: <a class=\"text-success\">${{ totalPrice }}</a></h4>\r\n    <button type=\"button\" mdbBtn color=\"deep-orange\" class=\"waves-light\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\" mdbWavesEffect>Close</button>\r\n  <button type=\"button\" mdbBtn gradient=\"purple\" class=\"relative waves-light\" mdbWavesEffect (click)=\"CheckOut()\">Checkout</button>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order-header/order-header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order-header/order-header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark green accent-3\">\r\n\r\n    <mdb-navbar-brand>\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"https://bit.ly/305p5iH\" height=\"60\" class=\"d-inline-block align-top\" alt=\"\">\r\n      </a>\r\n    </mdb-navbar-brand>\r\n  \r\n    <mdb-icon fas icon=\"angle-left\" size=\"lg\" class=\"text-white mr-auto d-flex d-md-none align-self-center\"></mdb-icon>\r\n  \r\n    <links>\r\n  \r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect (click)=\"goToPage('home')\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect>Order Now<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect (click)=\"goToPage('vieworders')\">View Orders</a>\r\n        </li>\r\n  \r\n      </ul>\r\n  \r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link text-primary\" mdbWavesEffect (click)=\"openModal($event)\"><span class=\"text-dark\">({{_data.cartNumber}})</span><mdb-icon fas icon=\"shopping-cart\"></mdb-icon> Checkout</a>\r\n        </li>\r\n  \r\n      </ul>\r\n      \r\n    </links>\r\n  </mdb-navbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order-items/order-items.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order-items/order-items.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"sections random-product\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"container\">\r\n            <div class=\"row rowItems--move\">\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" src=\"assets/images/voucher_imgs/amazon/amazon_500.png\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">\r\n                                <a href=\"#\" class=\"text-dark voucherName\">Amazon Starter</a>\r\n                            </h5>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"badge badge-danger float-right\">NEW</div>\r\n                            <div class=\"float-left\">\r\n                                <a href=\"#\" class=\"text-danger\">$500</a>\r\n                            </div>\r\n                        </div>\r\n                        <button mdbBtn type=\"button\" class=\"amber darken-3\" mdbWavesEffect name=\"select\" (click)=\"openModal($event)\">SELECT<mdb-icon fas icon=\"tags\" class=\"ml-1\" readonly></mdb-icon></button>\r\n                    </div>\r\n                </div><!--.col-->\r\n\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" src=\"assets/images/voucher_imgs/itunes/itunes_500.png\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">\r\n                                <a href=\"#\" class=\"text-dark voucherName\">Itunes Novice</a>\r\n                            </h5>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"badge badge-danger float-right\">NEW</div>\r\n                            <div class=\"float-left\">\r\n                                <a href=\"#\" class=\"text-danger\">$500</a>\r\n                                <br>\r\n                            </div>\r\n                        </div>\r\n                        <button mdbBtn type=\"button\" class=\"amber darken-3\" mdbWavesEffect name=\"select\" (click)=\"openModal($event)\">SELECT<mdb-icon fas icon=\"tags\" class=\"ml-1\"></mdb-icon></button>\r\n                    </div>\r\n                </div><!--.col-->\r\n\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" src=\"assets/images/voucher_imgs/paypal/paypal_500.png\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">\r\n                                <a href=\"#\" class=\"text-dark voucherName\">Paypal Standard</a>\r\n                            </h5>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"badge badge-danger float-right\">NEW</div>\r\n                            <div class=\"float-left\">\r\n                                <a href=\"#\" class=\"text-danger\">$500</a>\r\n                                <br>\r\n                            </div>\r\n                        </div>\r\n                        <button mdbBtn type=\"button\" class=\"amber darken-3\" mdbWavesEffect name=\"select\" (click)=\"openModal($event)\">SELECT<mdb-icon fas icon=\"tags\" class=\"ml-1\"></mdb-icon></button>\r\n                    </div>\r\n                </div><!--.col-->\r\n                \r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" src=\"assets/images/voucher_imgs/visa/visa_500.png\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">\r\n                                <a href=\"#\" class=\"text-dark voucherName\">Visa Classic</a>\r\n                            </h5>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"badge badge-danger float-right\">NEW</div>\r\n                            <div class=\"float-left\">\r\n                                <a href=\"#\" class=\"text-danger\">$500</a>\r\n                                <br>\r\n                            </div>\r\n                        </div>\r\n                        <button mdbBtn type=\"button\" class=\"amber darken-3\" mdbWavesEffect name=\"select\" (click)=\"openModal($event)\">SELECT<mdb-icon fas icon=\"tags\" class=\"ml-1\"></mdb-icon></button>\r\n                    </div>\r\n                </div><!--.col-->\r\n\r\n            </div><!--.row-->\r\n\r\n            <div class=\"row rowItems--move\">\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" src=\"assets/images/voucher_imgs/amazon/amazon_1000.png\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">\r\n                                <a href=\"#\" class=\"text-dark\">Amazon Rare</a>\r\n                            </h5>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"badge badge-danger float-right\">NEW</div>\r\n                            <div class=\"float-left\">\r\n                                <a href=\"#\" class=\"text-danger\">$1000</a>\r\n                                <br>\r\n                            </div>\r\n                        </div>\r\n                        <button mdbBtn type=\"button\" class=\"amber darken-3\" mdbWavesEffect name=\"select\" (click)=\"openModal($event)\">SELECT<mdb-icon fas icon=\"tags\" class=\"ml-1\"></mdb-icon></button>\r\n                    </div>\r\n                </div><!--.col-->\r\n\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" src=\"assets/images/voucher_imgs/itunes/itunes_1000.png\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">\r\n                                <a href=\"#\" class=\"text-dark voucherName\">iTunes Intermediate</a>\r\n                            </h5>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"badge badge-danger float-right\">NEW</div>\r\n                            <div class=\"float-left\">\r\n                                <a href=\"#\" class=\"text-danger\">$1000</a>\r\n                                <br>\r\n                            </div>\r\n                        </div>\r\n                        <button mdbBtn type=\"button\" class=\"amber darken-3\" mdbWavesEffect name=\"select\" (click)=\"openModal($event)\">SELECT<mdb-icon fas icon=\"tags\" class=\"ml-1\"></mdb-icon></button>\r\n                    </div>\r\n                </div><!--.col-->\r\n\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" src=\"assets/images/voucher_imgs/paypal/paypal_1000.png\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">\r\n                                <a href=\"#\" class=\"text-dark voucherName\">Paypal Medium</a>\r\n                            </h5>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"badge badge-danger float-right\">NEW</div>\r\n                            <div class=\"float-left\">\r\n                                <a href=\"#\" class=\"text-danger\">$1000</a>\r\n                                <br>\r\n                            </div>\r\n                        </div>\r\n                        <button mdbBtn type=\"button\" class=\"amber darken-3\" mdbWavesEffect name=\"select\" (click)=\"openModal($event)\">SELECT<mdb-icon fas icon=\"tags\" class=\"ml-1\"></mdb-icon></button>\r\n                    </div>\r\n                </div><!--.col-->\r\n\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" src=\"assets/images/voucher_imgs/visa/visa_1000.png\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">\r\n                                <a href=\"#\" class=\"text-dark voucherName\">Visa Gifted</a>\r\n                            </h5>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"badge badge-danger float-right\">NEW</div>\r\n                            <div class=\"float-left\">\r\n                                <a href=\"#\" class=\"text-danger\">$1000</a>\r\n                                <br>\r\n                            </div>\r\n                        </div>\r\n                        <button mdbBtn type=\"button\" class=\"amber darken-3\" mdbWavesEffect name=\"select\" (click)=\"openModal($event)\">SELECT<mdb-icon fas icon=\"tags\" class=\"ml-1\"></mdb-icon></button>\r\n                    </div>\r\n                </div><!--.col-->\r\n\r\n            </div><!--.row-->\r\n\r\n            <div class=\"row rowItems--move\">\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" src=\"assets/images/voucher_imgs/amazon/amazon_2000.png\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">\r\n                                <a href=\"#\" class=\"text-dark\">Amazon Premium</a>\r\n                            </h5>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"badge badge-danger float-right\">NEW</div>\r\n                            <div class=\"float-left\">\r\n                                <a href=\"#\" class=\"text-danger\">$2000</a>\r\n                                <br>\r\n                            </div>\r\n                        </div>\r\n                        <button mdbBtn type=\"button\" class=\"amber darken-3\" mdbWavesEffect name=\"select\" (click)=\"openModal($event)\">SELECT<mdb-icon fas icon=\"tags\" class=\"ml-1\"></mdb-icon></button>\r\n                    </div>\r\n                </div><!--.col-->\r\n\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" src=\"assets/images/voucher_imgs/itunes/itunes_2000.png\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">\r\n                                <a href=\"#\" class=\"text-dark voucherName\">iTunes Expert</a>\r\n                            </h5>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"badge badge-danger float-right\">NEW</div>\r\n                            <div class=\"float-left\">\r\n                                <a href=\"#\" class=\"text-danger\">$2000</a>\r\n                                <br>\r\n                            </div>\r\n                        </div>\r\n                        <button mdbBtn type=\"button\" class=\"amber darken-3\" mdbWavesEffect name=\"select\" (click)=\"openModal($event)\">SELECT<mdb-icon fas icon=\"tags\" class=\"ml-1\"></mdb-icon></button>\r\n                    </div>\r\n                </div><!--.col-->\r\n\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" src=\"assets/images/voucher_imgs/paypal/paypal_2000.png\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">\r\n                                <a href=\"#\" class=\"text-dark voucherName\">Paypal Extreme</a>\r\n                            </h5>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"badge badge-danger float-right\">NEW</div>\r\n                            <div class=\"float-left\">\r\n                                <a href=\"#\" class=\"text-danger\">$2000</a>\r\n                                <br>\r\n                            </div>\r\n                        </div>\r\n                        <button mdbBtn type=\"button\" class=\"amber darken-3\" mdbWavesEffect name=\"select\" (click)=\"openModal($event)\">SELECT<mdb-icon fas icon=\"tags\" class=\"ml-1\"></mdb-icon></button>\r\n                    </div>\r\n                </div><!--.col-->\r\n\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"card\">\r\n                        <img class=\"card-img-top\" src=\"assets/images/voucher_imgs/visa/visa_2000.png\" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <h5 class=\"card-title\">\r\n                                <a href=\"#\" class=\"text-dark voucherName\">Visa Prime</a>\r\n                            </h5>\r\n                        </div>\r\n                        <div class=\"card-footer\">\r\n                            <div class=\"badge badge-danger float-right\">NEW</div>\r\n                            <div class=\"float-left\">\r\n                                <a href=\"#\" class=\"text-danger\">$2000</a>\r\n                                <br>\r\n                            </div>\r\n                        </div>\r\n                        <button mdbBtn type=\"button\" class=\"amber darken-3\" mdbWavesEffect name=\"select\" (click)=\"openModal($event)\">SELECT<mdb-icon fas icon=\"tags\" class=\"ml-1\"></mdb-icon></button>\r\n                    </div>\r\n                </div><!--.col-->\r\n\r\n            </div><!--.row-->\r\n\r\n        </div><!--.container-->\r\n    </div><!--.container-fluid-->\r\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order-items/order-selectmodal/order-selectmodal.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order-items/order-selectmodal/order-selectmodal.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  class=\"modal-header blue lighten-4\">\r\n    <h4 class=\"modal-title fontItem--change\">{{ itemName }}</h4>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"form-outline amber lighten-5\">\r\n\r\n    <input type=\"number\" id=\"typeNumber\" class=\"form-control text-center inputFont--change\" value=\"1\" #inputQty/>\r\n    <label class=\"form-label amber lighten-5 mt-1\" for=\"typeNumber\"><mdb-icon fas icon=\"cart-plus\"></mdb-icon> Input Quantity</label>\r\n  </div>\r\n  <div class=\"text-center blue lighten-4\">\r\n    <button type=\"button\" mdbBtn color=\"danger\" class=\"waves-light\" aria-label=\"Close\" (click)=\"activeModal.close('Close click')\" mdbWavesEffect>Close</button>\r\n  <button type=\"button\" mdbBtn color=\"success\" class=\"relative waves-light\" mdbWavesEffect (click)=\"PlaceOrder(inputQty)\">Place</button>\r\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-order-header></app-order-header>\r\n<app-order-items></app-order-items>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderform/orderform-body/orderform-body.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderform/orderform-body/orderform-body.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"panelForm--resize\">\r\n\r\n    <form class=\"p-5\" [formGroup]=\"validatingForm\" (keydown.enter)=\"$event.preventDefault()\">\r\n\r\n      <mdb-card class=\"card--change\">\r\n        <mdb-card-header class=\"cardHeader--change text-center light-blue darken-1\">Sender's Details</mdb-card-header>\r\n        <mdb-card-body class=\"light-blue lighten-4\">  \r\n          \r\n          <div class=\"md-form\">\r\n            <mdb-icon fas icon=\"user-alt\" class=\"prefix\"></mdb-icon>\r\n            <input mdbInput mdbValidate type=\"text\" id=\"form8\" class=\"form-control\" formControlName=\"sendername\">\r\n            <label for=\"form8\">Sender's Name</label>\r\n            <mdb-error *ngIf=\"GetInputSenderName.invalid && (GetInputSenderName.dirty || GetInputSenderName.touched)\">Name is required</mdb-error>\r\n          </div>\r\n        \r\n          <div class=\"md-form\">\r\n            <mdb-icon fas icon=\"envelope\" class=\"prefix\"></mdb-icon>\r\n            <input mdbInput mdbValidate type=\"email\" id=\"form8\" class=\"form-control\" formControlName=\"senderemail\">\r\n            <label for=\"form8\">Sender's Email Address</label>\r\n            <mdb-error *ngIf=\"GetInputSenderEmail.invalid && (GetInputSenderEmail.dirty || GetInputSenderEmail.touched)\">Email address is invalid</mdb-error>\r\n            <mdb-success *ngIf=\"GetInputSenderEmail.valid && (GetInputSenderEmail.dirty || GetInputSenderEmail.touched)\">Email address is valid</mdb-success>\r\n          </div>\r\n      \r\n        </mdb-card-body>\r\n      </mdb-card>\r\n    \r\n      <mdb-card class=\"card--change\">\r\n        <mdb-card-header class=\"cardHeader--change text-center green accent-3\">Recipient's Details</mdb-card-header>\r\n\r\n        <mdb-card-body class=\"green accent-1\">\r\n          \r\n          <div class=\"md-form\">\r\n            <mdb-icon fas icon=\"user-alt\" class=\"prefix\"></mdb-icon>\r\n            <input mdbInput mdbValidate type=\"text\" id=\"form8\" class=\"form-control\" formControlName=\"recipientname\">\r\n            <label for=\"form8\">Recipient's Name</label>\r\n            <mdb-error *ngIf=\"GetInputRecipientName.invalid && (GetInputRecipientName.dirty || GetInputRecipientName.touched)\">Name is required</mdb-error>\r\n          </div>\r\n          <div class=\"md-form\">\r\n            <mdb-icon fas icon=\"envelope\" class=\"prefix\"></mdb-icon>\r\n            <input mdbInput mdbValidate type=\"email\" id=\"form8\" class=\"form-control\" formControlName=\"recipientemail\">\r\n            <label for=\"form8\">Recipient's Email Address</label>\r\n            <mdb-error *ngIf=\"GetInputRecipientEmail.invalid && (GetInputRecipientEmail.dirty || GetInputRecipientEmail.touched)\">Email address is invalid</mdb-error>\r\n            <mdb-success *ngIf=\"GetInputRecipientEmail.valid && (GetInputRecipientEmail.dirty || GetInputRecipientEmail.touched)\">Email address is valid</mdb-success>\r\n          </div>\r\n\r\n        \r\n        </mdb-card-body>\r\n\r\n      </mdb-card>\r\n    \r\n      <div>\r\n        <h4 class=\"font-weight-bold text-center\">Dedication</h4>\r\n    \r\n        <div class=\"form-group\">\r\n          <textarea class=\"form-control rounded-0\" mdbInput id=\"dedication\"\r\n            rows=\"3\" placeholder=\"Message\" formControlName=\"dedication\"></textarea>\r\n        </div>\r\n    \r\n        <button mdbBtn color=\"light-green\" block=\"true\" class=\"z-depth-0 my-4 waves-effect\"\r\n          mdbWavesEffect type=\"submit\" [disabled]=\"clickedFlag\" (click)=\"SubmitOrder()\">Purchase Order <mdb-icon fas icon=\"shopping-cart\"></mdb-icon></button></div>\r\n      \r\n      </form>\r\n    \r\n\r\n      \r\n    </div>\r\n\r\n\r\n<app-spinner></app-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderform/orderform-header/orderform-header.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderform/orderform-header/orderform-header.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark red lighten-3\">\r\n\r\n    <mdb-navbar-brand>\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"https://bit.ly/305p5iH\" height=\"60\" class=\"d-inline-block align-top\" alt=\"\">\r\n      </a>\r\n    </mdb-navbar-brand>\r\n  \r\n    <mdb-icon fas icon=\"angle-left\" size=\"lg\" class=\"text-white mr-auto d-flex d-md-none align-self-center\"></mdb-icon>\r\n  \r\n    <links>\r\n  \r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect (click)=\"goToPage('home')\">Home<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect (click)=\"goToPage('order')\">Order Now</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect (click)=\"goToPage('vieworders')\">View Orders</a>\r\n        </li>\r\n        <li class=\"nav-item active\">\r\n            <a class=\"nav-link waves-light\" mdbWavesEffect>Order Form<span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n  \r\n      </ul>\r\n  \r\n      \r\n    </links>\r\n  \r\n  </mdb-navbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderform/orderform.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderform/orderform.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"home__bg-change\">\r\n  <app-orderform-header></app-orderform-header>\r\n  <app-orderform-body></app-orderform-body>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-overlay-wrapper\" *ngIf=\"showSpinner\">\n    <div class=\"bee-spinner\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vieworders/orderlist-body/orderlist-body.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vieworders/orderlist-body/orderlist-body.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <app-orderlist-top></app-orderlist-top>\r\n    <app-orderlist-table></app-orderlist-table>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vieworders/orderlist-body/orderlist-table/orderlist-table.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vieworders/orderlist-body/orderlist-table/orderlist-table.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"green lighten-4\">\r\n  <table mdbTable>\r\n  <thead class=\"black white-text\">\r\n    <tr>\r\n      <th scope=\"col\">Date Ordered </th>\r\n      <th scope=\"col\">Order No. </th>\r\n      <th scope=\"col\">Voucher Name </th>\r\n      <th scope=\"col\">Item Quantity </th>\r\n      <th scope=\"col\">Total Price </th>\r\n      <th scope=\"col\">Sender's Email Address </th>\r\n      <th scope=\"col\">Sender's Name </th>\r\n      <th scope=\"col\">Recipient's Email Address </th>\r\n      <th scope=\"col\">Recipient's Name </th>\r\n      <th scope=\"col\">Dedication</th>\r\n    </tr> \r\n  </thead>\r\n  <tbody>\r\n      <tr>\r\n        <th scope=\"row\">1</th>\r\n        <td>TEST</td>\r\n        <td>TEST</td>\r\n        <td>TEST</td>\r\n        <td>TEST</td>\r\n        <td>TEST</td>\r\n        <td>TEST</td>\r\n        <td>TEST</td>\r\n        <td>TEST</td>\r\n        <td>TEST</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vieworders/orderlist-body/orderlist-top/orderlist-top.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vieworders/orderlist-body/orderlist-top/orderlist-top.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"mt-5 text-center\">List of Orders <mdb-icon fas icon=\"cart-arrow-down\"></mdb-icon></h2>\r\n      \r\n<form class=\"form-inline md-form mr-auto mb-4\">\r\n    <input class=\"form-control mr-sm-5 inputSearch--resize \" type=\"text\" placeholder=\"Enter email address used to purchased the order\" aria-label=\"Search\">\r\n    <button mdbBtn type=\"button\" color=\"info\" outline=\"true\" mdbWavesEffect>Search<mdb-icon fas icon=\"search\" class=\"ml-1\"></mdb-icon></button>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vieworders/orderlist-header/orderlist-header.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vieworders/orderlist-header/orderlist-header.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark amber lighten-2\">\r\n\r\n    <mdb-navbar-brand>\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <img src=\"https://bit.ly/305p5iH\" height=\"60\" class=\"d-inline-block align-top\" alt=\"\">\r\n      </a>\r\n    </mdb-navbar-brand>\r\n  \r\n    <mdb-icon fas icon=\"angle-left\" size=\"lg\" class=\"text-white mr-auto d-flex d-md-none align-self-center\"></mdb-icon>\r\n  \r\n    <links>\r\n  \r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect (click)=\"goToPage('home')\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect (click)=\"goToPage('order')\">Order Now</a>\r\n        </li>\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect>View Orders<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n  \r\n      </ul>\r\n  \r\n      \r\n    </links>\r\n  \r\n\r\n  </mdb-navbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vieworders/orderlist.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vieworders/orderlist.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-orderlist-header></app-orderlist-header>\r\n<app-orderlist-body></app-orderlist-body>");

/***/ }),

/***/ "./src/app/_shared/models/orderitem.model.ts":
/*!***************************************************!*\
  !*** ./src/app/_shared/models/orderitem.model.ts ***!
  \***************************************************/
/*! exports provided: OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
class OrderItem {
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_canshowconfirmationform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/canshowconfirmationform */ "./src/app/core/canshowconfirmationform.ts");
/* harmony import */ var _orderform_orderform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./orderform/orderform.component */ "./src/app/orderform/orderform.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _vieworders_orderlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vieworders/orderlist.component */ "./src/app/vieworders/orderlist.component.ts");








const routes = [
    {
        path: 'home',
        data: { title: 'Home Page' },
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: 'order',
        component: _order_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"]
    },
    {
        path: 'vieworders',
        component: _vieworders_orderlist_component__WEBPACK_IMPORTED_MODULE_7__["OrderlistComponent"]
    },
    {
        path: 'order/orderform',
        component: _orderform_orderform_component__WEBPACK_IMPORTED_MODULE_4__["OrderformComponent"],
        canActivate: [src_app_core_canshowconfirmationform__WEBPACK_IMPORTED_MODULE_3__["CanShowConfirmationForm"]] // FOR PREVENTION OF LOAD OR ACCESS
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `
    <router-outlet></router-outlet>
  `
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/__ivy_ngcc__/fesm2015/angular-bootstrap-md.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/services/orderService/SelectVoucher.service */ "./src/app/core/services/orderService/SelectVoucher.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home-header/home-header.component */ "./src/app/home/home-header/home-header.component.ts");
/* harmony import */ var _home_details_panel_details_panel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/details-panel/details-panel.component */ "./src/app/home/details-panel/details-panel.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./order/order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _vieworders_orderlist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./vieworders/orderlist.component */ "./src/app/vieworders/orderlist.component.ts");
/* harmony import */ var _order_order_header_order_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./order/order-header/order-header.component */ "./src/app/order/order-header/order-header.component.ts");
/* harmony import */ var _order_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./order/order-items/order-items.component */ "./src/app/order/order-items/order-items.component.ts");
/* harmony import */ var _vieworders_orderlist_header_orderlist_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./vieworders/orderlist-header/orderlist-header.component */ "./src/app/vieworders/orderlist-header/orderlist-header.component.ts");
/* harmony import */ var _vieworders_orderlist_body_orderlist_table_orderlist_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./vieworders/orderlist-body/orderlist-table/orderlist-table.component */ "./src/app/vieworders/orderlist-body/orderlist-table/orderlist-table.component.ts");
/* harmony import */ var _vieworders_orderlist_body_orderlist_body_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./vieworders/orderlist-body/orderlist-body.component */ "./src/app/vieworders/orderlist-body/orderlist-body.component.ts");
/* harmony import */ var _vieworders_orderlist_body_orderlist_top_orderlist_top_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./vieworders/orderlist-body/orderlist-top/orderlist-top.component */ "./src/app/vieworders/orderlist-body/orderlist-top/orderlist-top.component.ts");
/* harmony import */ var _order_order_items_order_selectmodal_order_selectmodal_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./order/order-items/order-selectmodal/order-selectmodal.component */ "./src/app/order/order-items/order-selectmodal/order-selectmodal.component.ts");
/* harmony import */ var _order_order_header_order_cart_order_cart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./order/order-header/order-cart/order-cart.component */ "./src/app/order/order-header/order-cart/order-cart.component.ts");
/* harmony import */ var _orderform_orderform_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./orderform/orderform.component */ "./src/app/orderform/orderform.component.ts");
/* harmony import */ var _orderform_orderform_header_orderform_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./orderform/orderform-header/orderform-header.component */ "./src/app/orderform/orderform-header/orderform-header.component.ts");
/* harmony import */ var _orderform_orderform_body_orderform_body_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./orderform/orderform-body/orderform-body.component */ "./src/app/orderform/orderform-body/orderform-body.component.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/spinner/spinner.component.ts");
/* harmony import */ var _core_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./core/http-interceptor/interceptor */ "./src/app/core/http-interceptor/interceptor.ts");





























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
            _home_home_header_home_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
            _home_details_panel_details_panel_component__WEBPACK_IMPORTED_MODULE_13__["DetailsPanelComponent"],
            _order_order_component__WEBPACK_IMPORTED_MODULE_14__["OrderComponent"],
            _vieworders_orderlist_component__WEBPACK_IMPORTED_MODULE_15__["OrderlistComponent"],
            _order_order_header_order_header_component__WEBPACK_IMPORTED_MODULE_16__["OrderHeaderComponent"],
            _order_order_items_order_items_component__WEBPACK_IMPORTED_MODULE_17__["OrderItemsComponent"],
            _vieworders_orderlist_header_orderlist_header_component__WEBPACK_IMPORTED_MODULE_18__["OrderlistHeaderComponent"],
            _vieworders_orderlist_body_orderlist_table_orderlist_table_component__WEBPACK_IMPORTED_MODULE_19__["OrderlistTableComponent"],
            _vieworders_orderlist_body_orderlist_body_component__WEBPACK_IMPORTED_MODULE_20__["OrderlistBodyComponent"],
            _vieworders_orderlist_body_orderlist_top_orderlist_top_component__WEBPACK_IMPORTED_MODULE_21__["OrderlistTopComponent"],
            _order_order_items_order_selectmodal_order_selectmodal_component__WEBPACK_IMPORTED_MODULE_22__["OrderSelectmodalComponent"],
            _order_order_header_order_cart_order_cart_component__WEBPACK_IMPORTED_MODULE_23__["OrderCartComponent"],
            _orderform_orderform_component__WEBPACK_IMPORTED_MODULE_24__["OrderformComponent"],
            _orderform_orderform_header_orderform_header_component__WEBPACK_IMPORTED_MODULE_25__["OrderformHeaderComponent"],
            _orderform_orderform_body_orderform_body_component__WEBPACK_IMPORTED_MODULE_26__["OrderformBodyComponent"],
            _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_27__["SpinnerComponent"]
        ],
        imports: [
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrModule"].forRoot()
        ],
        providers: [_core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_8__["DataService"], _core_http_interceptor_interceptor__WEBPACK_IMPORTED_MODULE_28__["httpInterceptProviders"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/canshowconfirmationform.ts":
/*!*************************************************!*\
  !*** ./src/app/core/canshowconfirmationform.ts ***!
  \*************************************************/
/*! exports provided: CanShowConfirmationForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanShowConfirmationForm", function() { return CanShowConfirmationForm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let CanShowConfirmationForm = class CanShowConfirmationForm {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        const url = state.url;
        return this.checkOrderPage(url);
    }
    checkOrderPage(url) {
        if (this.router.url === '/order')
            return true;
        alert('Cannot access this site!');
        this.router.navigate(['home']);
        return false;
    }
};
CanShowConfirmationForm.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CanShowConfirmationForm = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CanShowConfirmationForm);



/***/ }),

/***/ "./src/app/core/http-interceptor/auth-header-interceptor.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/http-interceptor/auth-header-interceptor.ts ***!
  \******************************************************************/
/*! exports provided: AuthHeaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthHeaderInterceptor", function() { return AuthHeaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _Voucher_Shop_Front_End_Frontend_Seed_src_app_core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../../../Voucher-Shop-Front-End-/Frontend-Seed/src/app/core/services/orderService/SelectVoucher.service */ "../../../Voucher-Shop-Front-End-/Frontend-Seed/src/app/core/services/orderService/SelectVoucher.service.ts");
/* harmony import */ var _services_SpinnerService_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../services/SpinnerService/spinner.service */ "./src/app/core/services/SpinnerService/spinner.service.ts");








let AuthHeaderInterceptor = class AuthHeaderInterceptor {
    constructor(spinnerService, _toastrService, router, _data) {
        this.spinnerService = spinnerService;
        this._toastrService = _toastrService;
        this.router = router;
        this._data = _data;
    }
    intercept(request, next) {
        this.spinnerService.requestStarted();
        return this.handler(next, request);
    }
    handler(next, request) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                this.spinnerService.requestEnded();
                if (event.status >= 200 && event.status <= 202) {
                    this._data.resetService();
                    this._toastrService.success('The order has been placed!', 'PURCHASE COMPLETED', {
                        timeOut: 2000
                    });
                    setTimeout(() => {
                        this.router.navigate(['home'])
                            .then(() => {
                            window.location.reload();
                        });
                    }, 1900);
                }
            }
        }, (error) => {
            this.spinnerService.resetSpinner();
            try {
                if (error.status === 500) {
                    this._data.resetService();
                    this._toastrService.error("An error occured on the server's side. "
                        + 'You may have entered an unrecognized service email', 'PURCHASE INCOMPLETE', {
                        timeOut: 2000
                    });
                    setTimeout(() => {
                        this.router.navigate(['order'])
                            .then(() => {
                            window.location.reload();
                        });
                    }, 1900);
                }
            }
            catch (e) {
                this._data.resetService();
                this._toastrService.error(e, 'Error Occurred', {
                    timeOut: 2000
                });
                setTimeout(() => {
                    this.router.navigate(['order'])
                        .then(() => {
                        window.location.reload();
                    });
                }, 1900);
            }
            throw error;
        }));
    }
};
AuthHeaderInterceptor.ctorParameters = () => [
    { type: _services_SpinnerService_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _Voucher_Shop_Front_End_Frontend_Seed_src_app_core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }
];
AuthHeaderInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthHeaderInterceptor);



/***/ }),

/***/ "./src/app/core/http-interceptor/interceptor.ts":
/*!******************************************************!*\
  !*** ./src/app/core/http-interceptor/interceptor.ts ***!
  \******************************************************/
/*! exports provided: httpInterceptProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptProviders", function() { return httpInterceptProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_header_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-header-interceptor */ "./src/app/core/http-interceptor/auth-header-interceptor.ts");


const httpInterceptProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _auth_header_interceptor__WEBPACK_IMPORTED_MODULE_1__["AuthHeaderInterceptor"], multi: true }
];


/***/ }),

/***/ "./src/app/core/services/SpinnerService/spinner.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/services/SpinnerService/spinner.service.ts ***!
  \*****************************************************************/
/*! exports provided: SpinnerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function() { return SpinnerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SpinnerService = class SpinnerService {
    constructor() {
        this.count = 0;
        this.spinner$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
    }
    getSpinnerObserver() {
        return this.spinner$.asObservable();
    }
    requestStarted() {
        if (++this.count === 1) {
            this.spinner$.next('start');
        }
    }
    requestEnded() {
        if (this.count === 0 || --this.count === 0) {
            this.spinner$.next('stop');
        }
    }
    resetSpinner() {
        this.count = 0;
        this.spinner$.next('stop');
    }
};
SpinnerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SpinnerService);



/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let ApiService = class ApiService {
    constructor(_http) {
        this._http = _http;
    }
    placeOrder(senderName, senderEmail, recipientName, recipientEmail, dedication, totalSpent) {
        const url = 'api/place_order';
        this._http.post(url, {
            SenderName: senderName.value,
            SenderEmail: senderEmail.value,
            RecipientName: recipientName.value,
            RecipientEmail: recipientEmail.value,
            Dedication: dedication.value,
            TotalSpent: totalSpent
        }).toPromise().then((data) => { console.log(data); });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ApiService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/core/services/orderService/SelectVoucher.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/services/orderService/SelectVoucher.service.ts ***!
  \*********************************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_models_orderitem_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_shared/models/orderitem.model */ "./src/app/_shared/models/orderitem.model.ts");




let DataService = class DataService {
    constructor() {
        this.orderlist = new Array();
        this.cartNumber = 0;
        this.currentVoucherName = '';
        this.currentQty = 0;
        this.currentPrice = 0;
        this.totalPrice = 0;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('default message');
        this.currentMessage = this.messageSource.asObservable();
    }
    changeMessage(message) {
        this.messageSource.next(message);
    }
    changeToBtnSelect() {
        this.btn.name = 'select';
        this.btn.firstChild.textContent = 'SELECT';
        this.btn.classList.remove('red');
        this.btn.classList.remove('accent-2');
        this.btn.classList.add('amber');
        this.btn.classList.add('darken-3');
    }
    changeToBtnRemove() {
        this.btn.name = 'remove';
        this.btn.firstChild.textContent = `REMOVE (${this.currentQty})`;
        this.btn.classList.remove('amber');
        this.btn.classList.remove('darken-3');
        this.btn.classList.add('red');
        this.btn.classList.add('accent-2');
    }
    pushOrder() {
        const orders = {
            voucherName: this.currentVoucherName,
            itemPrice: this.currentPrice,
            itemQty: this.currentQty
        };
        const items = new src_app_shared_models_orderitem_model__WEBPACK_IMPORTED_MODULE_3__["OrderItem"]();
        items.voucherName = this.currentVoucherName;
        items.itemPrice = this.currentPrice;
        items.itemQty = this.currentQty;
        this.orderlist.push(items);
    }
    decreaseCartCount() {
        this.cartNumber -= 1;
    }
    decreasePrice(priceToDecrease) {
        this.totalPrice -= priceToDecrease;
    }
    resetService() {
        this.orderlist = new Array();
        this.cartNumber = 0;
        this.btn = null;
        this.currentVoucherName = '';
        this.currentQty = 0;
        this.currentPrice = 0;
        this.totalPrice = 0;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('default message');
        this.currentMessage = this.messageSource.asObservable();
    }
};
DataService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/home/details-panel/details-panel.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/home/details-panel/details-panel.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".panel__bg--resize {\n  margin-left: 60%;\n  height: 860px;\n  width: 760px;\n}\n\n.panelContents--move {\n  margin-top: 15%;\n  resize: auto;\n}\n\n.panelContents--move h1 {\n  font-size: 100px;\n}\n\n.buttonShop--move {\n  margin-top: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kZXRhaWxzLXBhbmVsL0Q6XFxVc2Vyc1xcTGV6b1dvcmtcXERvY3VtZW50c1xcR2l0SHViXFxPbkJvYXJkVHJhaW5pbmdcXFZvdWNoZXJTdG9yZVxcV2ViQXBwXFxBbmd1bGFyL3NyY1xcYXBwXFxob21lXFxkZXRhaWxzLXBhbmVsXFxkZXRhaWxzLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2RldGFpbHMtcGFuZWwvZGV0YWlscy1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQU9JLGVBQUE7RUFDQSxZQUFBO0FDTko7O0FEQUk7RUFFSSxnQkFBQTtBQ0NSOztBRE9BO0VBRUksZUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9kZXRhaWxzLXBhbmVsL2RldGFpbHMtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWxfX2JnLS1yZXNpemVcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDYwJTtcclxuICAgIGhlaWdodDogODYwcHg7XHJcbiAgICB3aWR0aDogNzYwcHg7XHJcbn1cclxuXHJcbi5wYW5lbENvbnRlbnRzLS1tb3ZlXHJcbntcclxuICAgIGgxXHJcbiAgICB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICByZXNpemU6IGF1dG87XHJcbiAgICBcclxufVxyXG5cclxuLmJ1dHRvblNob3AtLW1vdmVcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59IiwiLnBhbmVsX19iZy0tcmVzaXplIHtcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcbiAgaGVpZ2h0OiA4NjBweDtcbiAgd2lkdGg6IDc2MHB4O1xufVxuXG4ucGFuZWxDb250ZW50cy0tbW92ZSB7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgcmVzaXplOiBhdXRvO1xufVxuLnBhbmVsQ29udGVudHMtLW1vdmUgaDEge1xuICBmb250LXNpemU6IDEwMHB4O1xufVxuXG4uYnV0dG9uU2hvcC0tbW92ZSB7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/details-panel/details-panel.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/home/details-panel/details-panel.component.ts ***!
  \***************************************************************/
/*! exports provided: DetailsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPanelComponent", function() { return DetailsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let DetailsPanelComponent = class DetailsPanelComponent {
    constructor(router) {
        this.router = router;
    }
    goToPage(pageName) {
        this.router.navigate([`${pageName}`]);
    }
};
DetailsPanelComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DetailsPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details-panel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/details-panel/details-panel.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details-panel.component.scss */ "./src/app/home/details-panel/details-panel.component.scss")).default]
    })
], DetailsPanelComponent);



/***/ }),

/***/ "./src/app/home/home-header/home-header.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/home-header/home-header.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS1oZWFkZXIvaG9tZS1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/home/home-header/home-header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/home-header/home-header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let HeaderComponent = class HeaderComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToPage(pageName) {
        this.router.navigate([`${pageName}`]);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-header/home-header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-header.component.scss */ "./src/app/home/home-header/home-header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home__bg-change {\n  /* The image used */\n  background-image: url(\"https://bit.ly/3kDMu42\");\n  /* Full height */\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-repeat: no-repeat;\n  background-size: 87% auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcVXNlcnNcXExlem9Xb3JrXFxEb2N1bWVudHNcXEdpdEh1YlxcT25Cb2FyZFRyYWluaW5nXFxWb3VjaGVyU3RvcmVcXFdlYkFwcFxcQW5ndWxhci9zcmNcXGFwcFxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWVfX2JnLWNoYW5nZVxyXG57XHJcbiAgICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9iaXQubHkvM2tETXU0MlwiKTtcclxuICAgIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDg3JSBhdXRvO1xyXG5cclxufSIsIi5ob21lX19iZy1jaGFuZ2Uge1xuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2JpdC5seS8za0RNdTQyXCIpO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDg3JSBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/order/order-header/order-cart/order-cart.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/order/order-header/order-cart/order-cart.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".th--bold {\n  font-weight: bold;\n}\n\n.fontHeader--change {\n  color: #1928ff;\n  font-weight: bold;\n  margin-left: 35%;\n}\n\n.btnCheckout--hide {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXItaGVhZGVyL29yZGVyLWNhcnQvRDpcXFVzZXJzXFxMZXpvV29ya1xcRG9jdW1lbnRzXFxHaXRIdWJcXE9uQm9hcmRUcmFpbmluZ1xcVm91Y2hlclN0b3JlXFxXZWJBcHBcXEFuZ3VsYXIvc3JjXFxhcHBcXG9yZGVyXFxvcmRlci1oZWFkZXJcXG9yZGVyLWNhcnRcXG9yZGVyLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29yZGVyL29yZGVyLWhlYWRlci9vcmRlci1jYXJ0L29yZGVyLWNhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBQTtBQ0FKOztBRElBO0VBRUksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUVJLGFBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLWhlYWRlci9vcmRlci1jYXJ0L29yZGVyLWNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGgtLWJvbGRcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG59XHJcblxyXG4uZm9udEhlYWRlci0tY2hhbmdlXHJcbntcclxuICAgIGNvbG9yOiByZ2IoMjUsIDQwLCAyNTUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMzUlO1xyXG59XHJcblxyXG4uYnRuQ2hlY2tvdXQtLWhpZGVcclxue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iLCIudGgtLWJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmZvbnRIZWFkZXItLWNoYW5nZSB7XG4gIGNvbG9yOiAjMTkyOGZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDM1JTtcbn1cblxuLmJ0bkNoZWNrb3V0LS1oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/order/order-header/order-cart/order-cart.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/order/order-header/order-cart/order-cart.component.ts ***!
  \***********************************************************************/
/*! exports provided: OrderCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCartComponent", function() { return OrderCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../core/services/orderService/SelectVoucher.service */ "./src/app/core/services/orderService/SelectVoucher.service.ts");





let OrderCartComponent = class OrderCartComponent {
    constructor(activeModal, data, router) {
        this.activeModal = activeModal;
        this.data = data;
        this.router = router;
        this.rows = [];
        this.headers = ['#', 'Voucher Name', 'Quantity', 'Price', 'Amount'];
        this.rows = null;
        this.rows = [];
        let iterateNum = 0;
        this.data.orderlist.forEach(element => {
            iterateNum += 1;
            const feedData = {
                '#': iterateNum,
                'Voucher Name': element.voucherName,
                Quantity: element.itemQty,
                Price: element.itemPrice,
                Amount: element.itemPrice * element.itemQty
            };
            this.rows.push(feedData);
        });
    }
    ngOnInit() {
        this.totalPrice = this.data.totalPrice;
    }
    CheckOut() {
        if (this.data.totalPrice !== 0) {
            this.router.navigate(['order/orderform']);
            this.activeModal.close('Close click');
        }
    }
};
OrderCartComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderCartComponent.prototype, "totalPrice", void 0);
OrderCartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order-header/order-cart/order-cart.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-cart.component.scss */ "./src/app/order/order-header/order-cart/order-cart.component.scss")).default]
    })
], OrderCartComponent);



/***/ }),

/***/ "./src/app/order/order-header/order-header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/order/order-header/order-header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyL29yZGVyLWhlYWRlci9vcmRlci1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/order/order-header/order-header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/order/order-header/order-header.component.ts ***!
  \**************************************************************/
/*! exports provided: OrderHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHeaderComponent", function() { return OrderHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/orderService/SelectVoucher.service */ "./src/app/core/services/orderService/SelectVoucher.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _order_cart_order_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-cart/order-cart.component */ "./src/app/order/order-header/order-cart/order-cart.component.ts");






let OrderHeaderComponent = class OrderHeaderComponent {
    constructor(router, _data, modalService) {
        this.router = router;
        this._data = _data;
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    goToPage(pageName) {
        this._data.resetService();
        this.router.navigate([`${pageName}`]);
    }
    openModal(event) {
        const modalRef = this.modalService.open(_order_cart_order_cart_component__WEBPACK_IMPORTED_MODULE_5__["OrderCartComponent"]);
        modalRef.componentInstance.name = 'World';
    }
};
OrderHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
OrderHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order-header/order-header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-header.component.scss */ "./src/app/order/order-header/order-header.component.scss")).default]
    })
], OrderHeaderComponent);



/***/ }),

/***/ "./src/app/order/order-items/order-items.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/order/order-items/order-items.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rowItems--move {\n  margin-top: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXItaXRlbXMvRDpcXFVzZXJzXFxMZXpvV29ya1xcRG9jdW1lbnRzXFxHaXRIdWJcXE9uQm9hcmRUcmFpbmluZ1xcVm91Y2hlclN0b3JlXFxXZWJBcHBcXEFuZ3VsYXIvc3JjXFxhcHBcXG9yZGVyXFxvcmRlci1pdGVtc1xcb3JkZXItaXRlbXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL29yZGVyL29yZGVyLWl0ZW1zL29yZGVyLWl0ZW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksY0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvb3JkZXIvb3JkZXItaXRlbXMvb3JkZXItaXRlbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93SXRlbXMtLW1vdmVcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuXHJcbiIsIi5yb3dJdGVtcy0tbW92ZSB7XG4gIG1hcmdpbi10b3A6IDIlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/order/order-items/order-items.component.ts":
/*!************************************************************!*\
  !*** ./src/app/order/order-items/order-items.component.ts ***!
  \************************************************************/
/*! exports provided: OrderItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemsComponent", function() { return OrderItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/orderService/SelectVoucher.service */ "./src/app/core/services/orderService/SelectVoucher.service.ts");
/* harmony import */ var _order_selectmodal_order_selectmodal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-selectmodal/order-selectmodal.component */ "./src/app/order/order-items/order-selectmodal/order-selectmodal.component.ts");





let OrderItemsComponent = class OrderItemsComponent {
    constructor(modalService, data) {
        this.modalService = modalService;
        this.data = data;
        this.orders = [];
    }
    ngOnInit() {
    }
    openModal(event) {
        let targetElement;
        if (event.target.type === 'button') {
            targetElement = event.target;
        }
        else {
            targetElement = event.target.parentElement.parentElement;
        }
        this.data.btn = targetElement;
        const voucherName = targetElement.previousElementSibling.previousElementSibling.outerText;
        const voucherPrice = targetElement.previousElementSibling.childNodes[1].outerText;
        if (targetElement.name === 'select') {
            this.data.currentVoucherName = voucherName;
            this.data.currentPrice = +(voucherPrice);
            const modalRef = this.modalService.open(_order_selectmodal_order_selectmodal_component__WEBPACK_IMPORTED_MODULE_4__["OrderSelectmodalComponent"]);
            modalRef.componentInstance.name = 'World';
            const convPrice = +(voucherPrice.replace('$', ''));
            this.data.currentPrice = convPrice;
            modalRef.componentInstance.itemName = this.data.currentVoucherName;
        }
        else if (targetElement.name === 'remove') {
            this.data.changeToBtnSelect();
            this.data.decreaseCartCount();
            const voucherIndex = this.data.orderlist.findIndex(x => x.voucherName === voucherName);
            const storedPrice = this.data.orderlist[voucherIndex].itemPrice * (this.data.orderlist[voucherIndex].itemQty);
            this.data.decreasePrice(storedPrice);
            this.data.orderlist.splice(this.data.orderlist.findIndex(x => x.voucherName === voucherName), 1);
        }
    }
};
OrderItemsComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] },
    { type: src_app_core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
OrderItemsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-items',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-items.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order-items/order-items.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-items.component.scss */ "./src/app/order/order-items/order-items.component.scss")).default]
    })
], OrderItemsComponent);



/***/ }),

/***/ "./src/app/order/order-items/order-selectmodal/order-selectmodal.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/order/order-items/order-selectmodal/order-selectmodal.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fontItem--change {\n  color: #1928ff;\n  font-weight: bold;\n  margin-left: 30%;\n}\n\n.inputFont--change {\n  font-family: \"Trebuchet MS\", sans-serif;\n  font-weight: bold;\n  font-size: x-large;\n}\n\n.textBox--error {\n  border: 2px solid red;\n}\n\n.textBox--normal {\n  outline-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXItaXRlbXMvb3JkZXItc2VsZWN0bW9kYWwvRDpcXFVzZXJzXFxMZXpvV29ya1xcRG9jdW1lbnRzXFxHaXRIdWJcXE9uQm9hcmRUcmFpbmluZ1xcVm91Y2hlclN0b3JlXFxXZWJBcHBcXEFuZ3VsYXIvc3JjXFxhcHBcXG9yZGVyXFxvcmRlci1pdGVtc1xcb3JkZXItc2VsZWN0bW9kYWxcXG9yZGVyLXNlbGVjdG1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9vcmRlci9vcmRlci1pdGVtcy9vcmRlci1zZWxlY3Rtb2RhbC9vcmRlci1zZWxlY3Rtb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FERUE7RUFFSSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURFQTtFQUVJLHFCQUFBO0FDQUo7O0FER0E7RUFFSSxrQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvb3JkZXIvb3JkZXItaXRlbXMvb3JkZXItc2VsZWN0bW9kYWwvb3JkZXItc2VsZWN0bW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udEl0ZW0tLWNoYW5nZVxyXG57XHJcbiAgICBjb2xvcjogcmdiKDI1LCA0MCwgMjU1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxufVxyXG4uaW5wdXRGb250LS1jaGFuZ2Vcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbn1cclxuLnRleHRCb3gtLWVycm9yXHJcbntcclxuICAgIGJvcmRlcjoycHggc29saWQgcmVkO1xyXG59XHJcblxyXG4udGV4dEJveC0tbm9ybWFsXHJcbntcclxuICAgIG91dGxpbmUtY29sb3I6IHJlZDtcclxufSIsIi5mb250SXRlbS0tY2hhbmdlIHtcbiAgY29sb3I6ICMxOTI4ZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tbGVmdDogMzAlO1xufVxuXG4uaW5wdXRGb250LS1jaGFuZ2Uge1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cblxuLnRleHRCb3gtLWVycm9yIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkO1xufVxuXG4udGV4dEJveC0tbm9ybWFsIHtcbiAgb3V0bGluZS1jb2xvcjogcmVkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/order/order-items/order-selectmodal/order-selectmodal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/order/order-items/order-selectmodal/order-selectmodal.component.ts ***!
  \************************************************************************************/
/*! exports provided: OrderSelectmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSelectmodalComponent", function() { return OrderSelectmodalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/orderService/SelectVoucher.service */ "./src/app/core/services/orderService/SelectVoucher.service.ts");




let OrderSelectmodalComponent = class OrderSelectmodalComponent {
    constructor(activeModal, data) {
        this.activeModal = activeModal;
        this.data = data;
    }
    ngOnInit() {
        this.data.currentMessage.subscribe(message => this.message = message);
    }
    PlaceOrder(inputQty) {
        if (inputQty.value.length === 0 || inputQty.valueAsNumber === 0) {
            inputQty.classList.add('textBox--error');
            inputQty.placeholder = 'Please input a value';
            setTimeout(() => { inputQty.classList.remove('textBox--error'), inputQty.placeholder = ''; }, 1000);
        }
        else {
            const convNumberInput = inputQty.valueAsNumber;
            this.data.currentQty = convNumberInput;
            this.data.cartNumber += 1;
            this.data.totalPrice += this.data.currentPrice * convNumberInput;
            this.data.pushOrder();
            this.data.changeToBtnRemove();
            this.activeModal.close('Close click');
        }
    }
};
OrderSelectmodalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: src_app_core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrderSelectmodalComponent.prototype, "itemName", void 0);
OrderSelectmodalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-selectmodal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-selectmodal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order-items/order-selectmodal/order-selectmodal.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-selectmodal.component.scss */ "./src/app/order/order-items/order-selectmodal/order-selectmodal.component.scss")).default]
    })
], OrderSelectmodalComponent);



/***/ }),

/***/ "./src/app/order/order.component.scss":
/*!********************************************!*\
  !*** ./src/app/order/order.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rowItems--move {\n  margin-top: 2%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvRDpcXFVzZXJzXFxMZXpvV29ya1xcRG9jdW1lbnRzXFxHaXRIdWJcXE9uQm9hcmRUcmFpbmluZ1xcVm91Y2hlclN0b3JlXFxXZWJBcHBcXEFuZ3VsYXIvc3JjXFxhcHBcXG9yZGVyXFxvcmRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9vcmRlci9vcmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3dJdGVtcy0tbW92ZVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuIiwiLnJvd0l0ZW1zLS1tb3ZlIHtcbiAgbWFyZ2luLXRvcDogMiU7XG59Il19 */");

/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let OrderComponent = class OrderComponent {
    constructor(router) {
        this.router = router;
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    ngOnInit() {
    }
};
OrderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
OrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order.component.scss */ "./src/app/order/order.component.scss")).default]
    })
], OrderComponent);



/***/ }),

/***/ "./src/app/orderform/orderform-body/orderform-body.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/orderform/orderform-body/orderform-body.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fontHeader--change {\n  color: #1928ff;\n  font-weight: bold;\n  margin-left: 35%;\n}\n\n.panelForm--resize {\n  margin-top: 2%;\n  margin-left: 30%;\n  margin-right: 30%;\n}\n\n.card--change {\n  margin-top: -40px;\n  margin-bottom: 10%;\n}\n\n.cardHeader--change {\n  text-align: center;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJmb3JtL29yZGVyZm9ybS1ib2R5L0Q6XFxVc2Vyc1xcTGV6b1dvcmtcXERvY3VtZW50c1xcR2l0SHViXFxPbkJvYXJkVHJhaW5pbmdcXFZvdWNoZXJTdG9yZVxcV2ViQXBwXFxBbmd1bGFyL3NyY1xcYXBwXFxvcmRlcmZvcm1cXG9yZGVyZm9ybS1ib2R5XFxvcmRlcmZvcm0tYm9keS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3JkZXJmb3JtL29yZGVyZm9ybS1ib2R5L29yZGVyZm9ybS1ib2R5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRUksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURLQTtFQUdJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDSko7O0FEUUE7RUFDSSxpQkFBQTtFQUVBLGtCQUFBO0FDTko7O0FEU0E7RUFFSSxrQkFBQTtFQUNBLGlCQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9vcmRlcmZvcm0vb3JkZXJmb3JtLWJvZHkvb3JkZXJmb3JtLWJvZHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvbnRIZWFkZXItLWNoYW5nZVxyXG57XHJcbiAgICBjb2xvcjogcmdiKDI1LCA0MCwgMjU1KTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcclxufVxyXG5cclxuXHJcbi5wYW5lbEZvcm0tLXJlc2l6ZVxyXG57XHJcblxyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMCU7XHJcbn1cclxuXHJcblxyXG4uY2FyZC0tY2hhbmdle1xyXG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG4uY2FyZEhlYWRlci0tY2hhbmdlXHJcbntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiIsIi5mb250SGVhZGVyLS1jaGFuZ2Uge1xuICBjb2xvcjogIzE5MjhmZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAzNSU7XG59XG5cbi5wYW5lbEZvcm0tLXJlc2l6ZSB7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBtYXJnaW4tcmlnaHQ6IDMwJTtcbn1cblxuLmNhcmQtLWNoYW5nZSB7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5jYXJkSGVhZGVyLS1jaGFuZ2Uge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/orderform/orderform-body/orderform-body.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/orderform/orderform-body/orderform-body.component.ts ***!
  \**********************************************************************/
/*! exports provided: OrderformBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderformBodyComponent", function() { return OrderformBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_core_services_SpinnerService_spinner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/SpinnerService/spinner.service */ "./src/app/core/services/SpinnerService/spinner.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_app_core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/orderService/SelectVoucher.service */ "./src/app/core/services/orderService/SelectVoucher.service.ts");
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../core/services/api.service */ "./src/app/core/services/api.service.ts");







let OrderformBodyComponent = class OrderformBodyComponent {
    constructor(_data, _http, _apiCall, _spinnerService) {
        this._data = _data;
        this._http = _http;
        this._apiCall = _apiCall;
        this._spinnerService = _spinnerService;
        this.clickedFlag = false;
    }
    ngOnInit() {
        this.validatingForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            sendername: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            senderemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            recipientname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            recipientemail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            dedication: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [])
        });
    }
    get GetInputSenderName() { return this.validatingForm.get('sendername'); }
    get GetInputSenderEmail() { return this.validatingForm.get('senderemail'); }
    get GetInputRecipientName() { return this.validatingForm.get('recipientname'); }
    get GetInputRecipientEmail() { return this.validatingForm.get('recipientemail'); }
    SubmitOrder() {
        const senderName = this.validatingForm.get('sendername');
        const senderEmail = this.validatingForm.get('senderemail');
        const recipientName = this.validatingForm.get('recipientname');
        const recipientEmail = this.validatingForm.get('recipientemail');
        const dedication = this.validatingForm.get('dedication');
        const totalSpent = this._data.totalPrice;
        if (senderName.valid && senderEmail.valid && recipientName.valid && recipientEmail) {
            this.clickedFlag = true;
            this._apiCall.placeOrder(senderName, senderEmail, recipientName, recipientEmail, dedication, totalSpent);
        }
        else {
            this.validatingForm.markAllAsTouched();
        }
    }
};
OrderformBodyComponent.ctorParameters = () => [
    { type: src_app_core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _core_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_core_services_SpinnerService_spinner_service__WEBPACK_IMPORTED_MODULE_1__["SpinnerService"] }
];
OrderformBodyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orderform-body',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderform-body.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderform/orderform-body/orderform-body.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderform-body.component.scss */ "./src/app/orderform/orderform-body/orderform-body.component.scss")).default]
    })
], OrderformBodyComponent);



/***/ }),

/***/ "./src/app/orderform/orderform-header/orderform-header.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/orderform/orderform-header/orderform-header.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyZm9ybS9vcmRlcmZvcm0taGVhZGVyL29yZGVyZm9ybS1oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/orderform/orderform-header/orderform-header.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/orderform/orderform-header/orderform-header.component.ts ***!
  \**************************************************************************/
/*! exports provided: OrderformHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderformHeaderComponent", function() { return OrderformHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/orderService/SelectVoucher.service */ "./src/app/core/services/orderService/SelectVoucher.service.ts");




let OrderformHeaderComponent = class OrderformHeaderComponent {
    constructor(router, _data) {
        this.router = router;
        this._data = _data;
    }
    ngOnInit() {
    }
    goToPage(pageName) {
        this.router.navigate([`${pageName}`]);
        this._data.resetService();
    }
};
OrderformHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
OrderformHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderform-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderform-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderform/orderform-header/orderform-header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderform-header.component.scss */ "./src/app/orderform/orderform-header/orderform-header.component.scss")).default]
    })
], OrderformHeaderComponent);



/***/ }),

/***/ "./src/app/orderform/orderform.component.scss":
/*!****************************************************!*\
  !*** ./src/app/orderform/orderform.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home__bg-change {\n  /* The image used */\n  background-image: url(\"https://bit.ly/3ck8a1B\");\n  /* Full height */\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-repeat: no-repeat;\n  background-size: 100% auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXJmb3JtL0Q6XFxVc2Vyc1xcTGV6b1dvcmtcXERvY3VtZW50c1xcR2l0SHViXFxPbkJvYXJkVHJhaW5pbmdcXFZvdWNoZXJTdG9yZVxcV2ViQXBwXFxBbmd1bGFyL3NyY1xcYXBwXFxvcmRlcmZvcm1cXG9yZGVyZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3JkZXJmb3JtL29yZGVyZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL29yZGVyZm9ybS9vcmRlcmZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZV9fYmctY2hhbmdlXHJcbntcclxuICAgIC8qIFRoZSBpbWFnZSB1c2VkICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2JpdC5seS8zY2s4YTFCXCIpO1xyXG4gICAgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xyXG5cclxufSIsIi5ob21lX19iZy1jaGFuZ2Uge1xuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2JpdC5seS8zY2s4YTFCXCIpO1xuICAvKiBGdWxsIGhlaWdodCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIENlbnRlciBhbmQgc2NhbGUgdGhlIGltYWdlIG5pY2VseSAqL1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/orderform/orderform.component.ts":
/*!**************************************************!*\
  !*** ./src/app/orderform/orderform.component.ts ***!
  \**************************************************/
/*! exports provided: OrderformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderformComponent", function() { return OrderformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderformComponent = class OrderformComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderformComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderform',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderform/orderform.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderform.component.scss */ "./src/app/orderform/orderform.component.scss")).default]
    })
], OrderformComponent);



/***/ }),

/***/ "./src/app/spinner/spinner.component.scss":
/*!************************************************!*\
  !*** ./src/app/spinner/spinner.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@-webkit-keyframes bouncing {\n  0% {\n    top: 40%;\n  }\n  100% {\n    top: 30%;\n  }\n}\n@keyframes bouncing {\n  0% {\n    top: 40%;\n  }\n  100% {\n    top: 30%;\n  }\n}\n@-webkit-keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadein {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.page-overlay-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  z-index: 1009;\n  background: rgba(112, 191, 93, 0.5);\n}\n.page-overlay-wrapper .bee-spinner {\n  width: 40%;\n  height: 40%;\n  position: fixed;\n  top: 40%;\n  left: calc(50% - 10%);\n  z-index: 100;\n  background-image: url(\"https://bit.ly/3uZ6d2R\");\n  background-repeat: no-repeat;\n  background-size: 50%;\n  -webkit-animation: bouncing 0.4s cubic-bezier(0.1, 0.25, 0.1, 1) 0s infinite alternate both;\n          animation: bouncing 0.4s cubic-bezier(0.1, 0.25, 0.1, 1) 0s infinite alternate both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpbm5lci9EOlxcVXNlcnNcXExlem9Xb3JrXFxEb2N1bWVudHNcXEdpdEh1YlxcT25Cb2FyZFRyYWluaW5nXFxWb3VjaGVyU3RvcmVcXFdlYkFwcFxcQW5ndWxhci9zcmNcXGFwcFxcc3Bpbm5lclxcc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxRQUFBO0VDQ0Y7RURDQTtJQUNFLFFBQUE7RUNDRjtBQUNGO0FEUEE7RUFDRTtJQUNFLFFBQUE7RUNDRjtFRENBO0lBQ0UsUUFBQTtFQ0NGO0FBQ0Y7QURFQTtFQUNFO0lBQ0UsVUFBQTtFQ0FGO0VER0E7SUFDRSxVQUFBO0VDREY7QUFDRjtBRE5BO0VBQ0U7SUFDRSxVQUFBO0VDQUY7RURHQTtJQUNFLFVBQUE7RUNERjtBQUNGO0FESUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FDRkY7QURJRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyRkFBQTtVQUFBLG1GQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAa2V5ZnJhbWVzIGJvdW5jaW5nIHtcclxuICAwJSB7XHJcbiAgICB0b3A6IDQwJTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0b3A6IDMwJTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZWluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLnBhZ2Utb3ZlcmxheS13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDA5O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTEyLCAxOTEsIDkzLCAwLjUpO1xyXG5cclxuICAuYmVlLXNwaW5uZXIge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDEwJSk7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2JpdC5seS8zdVo2ZDJSXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogNTAlO1xyXG4gICAgYW5pbWF0aW9uOiBib3VuY2luZyAwLjRzIGN1YmljLWJlemllcigwLjEsIDAuMjUsIDAuMSwgMSkgMHMgaW5maW5pdGVcclxuICAgICAgYWx0ZXJuYXRlIGJvdGg7XHJcbiAgfVxyXG59IiwiQGtleWZyYW1lcyBib3VuY2luZyB7XG4gIDAlIHtcbiAgICB0b3A6IDQwJTtcbiAgfVxuICAxMDAlIHtcbiAgICB0b3A6IDMwJTtcbiAgfVxufVxuQGtleWZyYW1lcyBmYWRlaW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4ucGFnZS1vdmVybGF5LXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwOTtcbiAgYmFja2dyb3VuZDogcmdiYSgxMTIsIDE5MSwgOTMsIDAuNSk7XG59XG4ucGFnZS1vdmVybGF5LXdyYXBwZXIgLmJlZS1zcGlubmVyIHtcbiAgd2lkdGg6IDQwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTAlKTtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL2JpdC5seS8zdVo2ZDJSXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcbiAgYW5pbWF0aW9uOiBib3VuY2luZyAwLjRzIGN1YmljLWJlemllcigwLjEsIDAuMjUsIDAuMSwgMSkgMHMgaW5maW5pdGUgYWx0ZXJuYXRlIGJvdGg7XG59Il19 */");

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spinner/spinner.component.ts ***!
  \**********************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_SpinnerService_spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/SpinnerService/spinner.service */ "./src/app/core/services/SpinnerService/spinner.service.ts");



let SpinnerComponent = class SpinnerComponent {
    constructor(spinnerService, cdRef) {
        this.spinnerService = spinnerService;
        this.cdRef = cdRef;
        this.showSpinner = false;
    }
    ngOnInit() {
        this.init();
    }
    init() {
        this.spinnerService.getSpinnerObserver().subscribe((status) => {
            this.showSpinner = (status === 'start');
            this.cdRef.detectChanges();
        });
    }
};
SpinnerComponent.ctorParameters = () => [
    { type: src_app_core_services_SpinnerService_spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
SpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/spinner/spinner.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./spinner.component.scss */ "./src/app/spinner/spinner.component.scss")).default]
    })
], SpinnerComponent);



/***/ }),

/***/ "./src/app/vieworders/orderlist-body/orderlist-body.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/vieworders/orderlist-body/orderlist-body.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdvcmRlcnMvb3JkZXJsaXN0LWJvZHkvb3JkZXJsaXN0LWJvZHkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/vieworders/orderlist-body/orderlist-body.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/vieworders/orderlist-body/orderlist-body.component.ts ***!
  \***********************************************************************/
/*! exports provided: OrderlistBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistBodyComponent", function() { return OrderlistBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderlistBodyComponent = class OrderlistBodyComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderlistBodyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderlist-body',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderlist-body.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vieworders/orderlist-body/orderlist-body.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderlist-body.component.scss */ "./src/app/vieworders/orderlist-body/orderlist-body.component.scss")).default]
    })
], OrderlistBodyComponent);



/***/ }),

/***/ "./src/app/vieworders/orderlist-body/orderlist-table/orderlist-table.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/vieworders/orderlist-body/orderlist-table/orderlist-table.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdvcmRlcnMvb3JkZXJsaXN0LWJvZHkvb3JkZXJsaXN0LXRhYmxlL29yZGVybGlzdC10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/vieworders/orderlist-body/orderlist-table/orderlist-table.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/vieworders/orderlist-body/orderlist-table/orderlist-table.component.ts ***!
  \****************************************************************************************/
/*! exports provided: OrderlistTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistTableComponent", function() { return OrderlistTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderlistTableComponent = class OrderlistTableComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderlistTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderlist-table',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderlist-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vieworders/orderlist-body/orderlist-table/orderlist-table.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderlist-table.component.scss */ "./src/app/vieworders/orderlist-body/orderlist-table/orderlist-table.component.scss")).default]
    })
], OrderlistTableComponent);



/***/ }),

/***/ "./src/app/vieworders/orderlist-body/orderlist-top/orderlist-top.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/vieworders/orderlist-body/orderlist-top/orderlist-top.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".inputSearch--resize {\n  width: 88%;\n}\n\n.btnSearch--resize {\n  width: 150px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld29yZGVycy9vcmRlcmxpc3QtYm9keS9vcmRlcmxpc3QtdG9wL0Q6XFxVc2Vyc1xcTGV6b1dvcmtcXERvY3VtZW50c1xcR2l0SHViXFxPbkJvYXJkVHJhaW5pbmdcXFZvdWNoZXJTdG9yZVxcV2ViQXBwXFxBbmd1bGFyL3NyY1xcYXBwXFx2aWV3b3JkZXJzXFxvcmRlcmxpc3QtYm9keVxcb3JkZXJsaXN0LXRvcFxcb3JkZXJsaXN0LXRvcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld29yZGVycy9vcmRlcmxpc3QtYm9keS9vcmRlcmxpc3QtdG9wL29yZGVybGlzdC10b3AuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxVQUFBO0FDQUo7O0FER0E7RUFFSSxZQUFBO0VBQ0EsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvdmlld29yZGVycy9vcmRlcmxpc3QtYm9keS9vcmRlcmxpc3QtdG9wL29yZGVybGlzdC10b3AuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRTZWFyY2gtLXJlc2l6ZVxyXG57XHJcbiAgICB3aWR0aDogODglO1xyXG59XHJcblxyXG4uYnRuU2VhcmNoLS1yZXNpemVcclxue1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59IiwiLmlucHV0U2VhcmNoLS1yZXNpemUge1xuICB3aWR0aDogODglO1xufVxuXG4uYnRuU2VhcmNoLS1yZXNpemUge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/vieworders/orderlist-body/orderlist-top/orderlist-top.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/vieworders/orderlist-body/orderlist-top/orderlist-top.component.ts ***!
  \************************************************************************************/
/*! exports provided: OrderlistTopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistTopComponent", function() { return OrderlistTopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderlistTopComponent = class OrderlistTopComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderlistTopComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderlist-top',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderlist-top.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vieworders/orderlist-body/orderlist-top/orderlist-top.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderlist-top.component.scss */ "./src/app/vieworders/orderlist-body/orderlist-top/orderlist-top.component.scss")).default]
    })
], OrderlistTopComponent);



/***/ }),

/***/ "./src/app/vieworders/orderlist-header/orderlist-header.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/vieworders/orderlist-header/orderlist-header.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdvcmRlcnMvb3JkZXJsaXN0LWhlYWRlci9vcmRlcmxpc3QtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/vieworders/orderlist-header/orderlist-header.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/vieworders/orderlist-header/orderlist-header.component.ts ***!
  \***************************************************************************/
/*! exports provided: OrderlistHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistHeaderComponent", function() { return OrderlistHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/orderService/SelectVoucher.service */ "./src/app/core/services/orderService/SelectVoucher.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let OrderlistHeaderComponent = class OrderlistHeaderComponent {
    constructor(router, _data) {
        this.router = router;
        this._data = _data;
    }
    ngOnInit() {
    }
    goToPage(pageName) {
        this.router.navigate([`${pageName}`]);
        this._data.resetService();
    }
};
OrderlistHeaderComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_services_orderService_SelectVoucher_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
];
OrderlistHeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-orderlist-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderlist-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vieworders/orderlist-header/orderlist-header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderlist-header.component.scss */ "./src/app/vieworders/orderlist-header/orderlist-header.component.scss")).default]
    })
], OrderlistHeaderComponent);



/***/ }),

/***/ "./src/app/vieworders/orderlist.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/vieworders/orderlist.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdvcmRlcnMvb3JkZXJsaXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/vieworders/orderlist.component.ts":
/*!***************************************************!*\
  !*** ./src/app/vieworders/orderlist.component.ts ***!
  \***************************************************/
/*! exports provided: OrderlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderlistComponent", function() { return OrderlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderlistComponent = class OrderlistComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderlist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vieworders/orderlist.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderlist.component.scss */ "./src/app/vieworders/orderlist.component.scss")).default]
    })
], OrderlistComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\LezoWork\Documents\GitHub\OnBoardTraining\VoucherStore\WebApp\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map