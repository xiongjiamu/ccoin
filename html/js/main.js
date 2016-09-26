/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	$('.close').click(function (e) {
	    e.preventDefault();
	    $('.mask').hide();
	    $('.alert-box').hide();
	});
	$('.alert1>a').click(function (e) {
	    e.preventDefault();
	    $('.mask').hide();
	    $('.alert-box').hide();
	});
	$('.alert2>a').click(function (e) {
	    e.preventDefault();
	    $('.mask').hide();
	    $('.alert-box').hide();
	});
	// prefix补全
	var CSSTransform = function () {
	    var _elementStyle = document.createElement("div").style;
	    var _vendor = function () {
	        var vendors = ["t", "webkitT", "MozT", "msT", "OT"],
	            transform,
	            i = 0,
	            l = vendors.length;
	        for (; i < l; i++) {
	            transform = vendors[i] + "ransform";
	            if (transform in _elementStyle) return vendors[i].substr(0, vendors[i].length - 1);
	        }
	        return false;
	    }();

	    function _prefixStyle(style) {
	        if (_vendor === false) return false;
	        if (_vendor === "") return style;
	        return _vendor + style.charAt(0).toUpperCase() + style.substr(1);
	    }
	    return _prefixStyle("transform");
	}();

	// 转盘旋转效果
	var Lottery = function Lottery(el) {
	    this.running = false;
	    this.el = $(el)[0];
	    /*
	    旋转转盘至指定位置
	    参数：
	    giftIndex: 礼物的索引（从0开始到数组.length - 1）
	    endCallback：转盘旋转完成时的回调
	    */
	    this.rotateToGift = function (giftIndex, endCallback) {
	        if (typeof endCallback != "function") return;
	        if (giftIndex < 0) return;
	        if (this.running) return;
	        this.running = true;
	        var degToRotate = (giftIndex + 1) * 45 + 360 * 3 - 22.5; //最少转3圈
	        var rotatedDeg = 0;
	        var speed = 20; //deg
	        var speedRatio = 1;
	        var _this = this;

	        function r() {
	            _this.el.style[CSSTransform] = "rotate(" + -rotatedDeg + "deg)";
	            rotatedDeg += speed * speedRatio;
	            if (rotatedDeg + 180 >= degToRotate) //开始减速
	                speedRatio = (degToRotate - rotatedDeg) / 180;
	            if (rotatedDeg >= degToRotate - 0.5) {
	                rotatedDeg = degToRotate;
	                _this.el.style[CSSTransform] = "rotate(" + -rotatedDeg + "deg)";
	                _this.running = false;
	                endCallback();
	            } else setTimeout(r, 1000 / 24);
	        };
	        r();
	    };
	};
	$('.pointer').click(function (e) {
	    e.preventDefault();
	    var isLogin = true;
	    var chances = 1;
	    var giftindex = 7;
	    if (!isLogin) {
	        $('.mask').show();
	        $('.alert1').show().siblings().not('.close').hide();
	        $('.alert-box').show();
	    } else if (chances <= 0) {
	        $('.mask').show();
	        $('.alert2').show().siblings().not('.close').hide();
	        $('.alert-box').show();
	    } else {
	        var myLottery = new Lottery($('.awards'));
	        myLottery.rotateToGift(giftindex, function () {
	            $('.mask').show();
	            switch (giftindex) {
	                case 0:
	                    $('.alert1').find('h2').text('半年/600次VIP免积分下载');
	                    $('.alert1').show().siblings().not('.close').hide();
	                    $('.alert-box').show();
	                    break;
	                case 1:
	                    $('.alert1').find('h2').text('学院20元优惠券');
	                    $('.alert1').find('div').css('background-position', '-402px -159px');
	                    $('.alert1').find('div').css('transform', 'rotate(-63deg)');
	                    $('.alert1').show().siblings().not('.close').hide();
	                    $('.alert-box').show();
	                    break;
	                case 2:
	                    $('.alert1').find('h2').text('10个下载积分');
	                    $('.alert1').find('div').css('background-position', '-399px -301px');
	                    $('.alert1').find('div').css('transform', 'rotate(-114deg)');
	                    $('.alert1').show().siblings().not('.close').hide();
	                    $('.alert-box').show();
	                    break;
	                case 3:
	                    $('.alert1').find('h2').text('再来一次');
	                    $('.alert1').find('div').css('background-position', '-297px -401px');
	                    $('.alert1').find('div').css('transform', 'rotate(-152deg)');
	                    $('.alert1').show().siblings().not('.close').hide();
	                    $('.alert-box').show();
	                    break;
	                case 4:
	                    $('.alert2').find('h2').text('半年程序员电子版');
	                    $('.alert2').find('div').css('background-position', '-159px -398px');
	                    $('.alert2').find('div').css('transform', 'rotate(-200deg)');
	                    $('.alert2').show().siblings().not('.close').hide();
	                    $('.alert-box').show();
	                    break;
	                case 5:
	                    $('.alert1').find('h2').text('学院3元现金券');
	                    $('.alert1').find('div').css('background-position', '-62px -298px');
	                    $('.alert1').find('div').css('transform', 'rotate(116deg)');
	                    $('.alert1').show().siblings().not('.close').hide();
	                    $('.alert-box').show();
	                    break;
	                case 6:
	                    $('.alert3').find('h2').text('定制保温杯');
	                    $('.alert3').find('div').css('background-position', '-63px -162px');
	                    $('.alert3').find('div').css('transform', 'rotate(61deg)');
	                    $('.alert3').show().siblings().not('.close').hide();
	                    $('.alert-box').show();
	                    break;
	                case 7:
	                    $('.alert3').find('h2').text('定制电脑背包');
	                    $('.alert3').find('div').css('background-position', '-159px -65px');
	                    $('.alert3').find('div').css('transform', 'rotate(27deg)');
	                    $('.alert3').show().siblings().not('.close').hide();
	                    $('.alert-box').show();
	                    break;
	                default:
	                    $('.alert10').show().siblings().not('.close').hide();
	            }
	        });
	    }
	});

/***/ }
/******/ ]);