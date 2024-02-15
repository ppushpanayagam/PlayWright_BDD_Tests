"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _cucumber = require("@cucumber/cucumber");
var _test = require("playwright/test");
var sonyPage = _interopRequireWildcard(require("../pages/sony-page"));
var playStationPage = _interopRequireWildcard(require("../pages/playstation-page"));
var data = _interopRequireWildcard(require("../../config/data.json"));
var locator = _interopRequireWildcard(require("../../config/locators.json"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//TODO
/**
 * Unable to implement SONY login functionality before redirecting the tests to Playstation application
 * I have tried various options that I know that are
 *      1. Normal flow using SONY login page and form,  with my SONY account.
 *      2. Tried using Google account login,  with my Gmail account.
 *      3. Preserve login method provided by Playwright using site keys and cookies
 *      4. Record and add the customised script to handle login.
 *      5. I tried to change the USER AGENT on the browser and
 *      6. Tried to reduce the scurity features of a browser and it didnt work
 * 
 *      Currently, I am skipping LOGIN functionality and trying to access Playstation applicaiton.
 */

(0, _cucumber.Given)(/^the user log into Sony application with valid credentials$/, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var page;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        page = this.screen.page;
        _context.next = 3;
        return sonyPage.navigateToSonyApplication(page, data.sonyUrl);
      case 3:
        _context.next = 5;
        return sonyPage.clickAcceptCookiesBtn(page);
      case 5:
      case "end":
        return _context.stop();
    }
  }, _callee, this);
})));
(0, _cucumber.When)(/^the user select playstation from the menu$/, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  var _this$screen, page, context, pagePromise;
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _this$screen = this.screen, page = _this$screen.page, context = _this$screen.context;
        _context2.next = 3;
        return sonyPage.clickMenuButton(page);
      case 3:
        pagePromise = context.waitForEvent('page');
        _context2.next = 6;
        return playStationPage.selectSubMenu(page, 'PlayStation');
      case 6:
        _context2.next = 8;
        return pagePromise;
      case 8:
        global.playStation = _context2.sent;
        _context2.next = 11;
        return global.playStation.waitForLoadState();
      case 11:
        _context2.next = 13;
        return acceptCookies(locator.playStationpage_AcceptCookiesBtn);
      case 13:
      case "end":
        return _context2.stop();
    }
  }, _callee2, this);
})));
function acceptCookies(_x) {
  return _acceptCookies.apply(this, arguments);
}
function _acceptCookies() {
  _acceptCookies = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(locator) {
    var acceptButton_PlayStationPage;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return global.playStation.locator(locator);
        case 2:
          acceptButton_PlayStationPage = _context12.sent;
          _context12.next = 5;
          return acceptButton_PlayStationPage.waitFor({
            state: "visible"
          });
        case 5:
          _context12.next = 7;
          return acceptButton_PlayStationPage.isVisible();
        case 7:
          if (!_context12.sent) {
            _context12.next = 10;
            break;
          }
          _context12.next = 10;
          return acceptButton_PlayStationPage.click();
        case 10:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _acceptCookies.apply(this, arguments);
}
(0, _cucumber.When)(/^the user on the playstation home page$/, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.next = 2;
        return playStationPage.verifyPlayStationPageTitle(data.playStationPageTitle);
      case 2:
      case "end":
        return _context3.stop();
    }
  }, _callee3);
})));
(0, _cucumber.When)(/^the carousel slides should be displayed as expected$/, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
  var listOfSlideItems;
  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        _context4.next = 2;
        return global.playStation.$$(locator.slide_Images);
      case 2:
        listOfSlideItems = _context4.sent;
        _context4.next = 5;
        return verifyDisplayedCarouselSlides(listOfSlideItems);
      case 5:
      case "end":
        return _context4.stop();
    }
  }, _callee4);
})));
function verifyDisplayedCarouselSlides(_x2) {
  return _verifyDisplayedCarouselSlides.apply(this, arguments);
}
/**
 * Main objective of below step is to capture screenshot of the big banner and compare during the test but commented
 * lines are not working with cucumber for some reason and I was able to achieve through regular TDD test approach.
 * 
 * So, I am trying to compate the property of the banner and confirm the selction of the slide.
 */
function _verifyDisplayedCarouselSlides() {
  _verifyDisplayedCarouselSlides = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(listOfSlideItems) {
    var arr, count, _iterator, _step, menu;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          arr = ['Helldivers 2 keyart', ' Final Fantasy XVI Rebirth keyart', 'Ultros keyart', 'Tekken 8 keyart', 'COD Modern Warfare season 2 keyart', 'Overwatch 2 - Season 9 keyart'];
          count = 0;
          _iterator = _createForOfIteratorHelper(listOfSlideItems);
          _context13.prev = 3;
          _iterator.s();
        case 5:
          if ((_step = _iterator.n()).done) {
            _context13.next = 15;
            break;
          }
          menu = _step.value;
          _context13.t0 = _test.expect;
          _context13.next = 10;
          return menu.getAttribute('alt');
        case 10:
          _context13.t1 = _context13.sent;
          (0, _context13.t0)(_context13.t1).toBe(arr[count]);
          count = count + 1;
        case 13:
          _context13.next = 5;
          break;
        case 15:
          _context13.next = 20;
          break;
        case 17:
          _context13.prev = 17;
          _context13.t2 = _context13["catch"](3);
          _iterator.e(_context13.t2);
        case 20:
          _context13.prev = 20;
          _iterator.f();
          return _context13.finish(20);
        case 23:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[3, 17, 20, 23]]);
  }));
  return _verifyDisplayedCarouselSlides.apply(this, arguments);
}
(0, _cucumber.When)(/^the user select the "([^"]*)" only by one$/, /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(slideToSelect) {
    var listOfSlideItems;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return global.playStation.$$(locator.slide_Images);
        case 2:
          listOfSlideItems = _context5.sent;
          _context5.next = 5;
          return clickOnSpecificSlide(listOfSlideItems, slideToSelect);
        case 5:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x3) {
    return _ref5.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the user should see the corresponding banner for selected "([^"]*)"$/, /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(slideToSelect) {
    var bigBanner;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          bigBanner = locator.specific_Slide.replace('*', slideToSelect);
          _context6.t0 = _test.expect;
          _context6.next = 4;
          return global.playStation.locator(bigBanner).getAttribute('alt');
        case 4:
          _context6.t1 = _context6.sent;
          (0, _context6.t0)(_context6.t1).toBe(slideToSelect);
        case 6:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x4) {
    return _ref6.apply(this, arguments);
  };
}());
function clickOnSpecificSlide(_x5, _x6) {
  return _clickOnSpecificSlide.apply(this, arguments);
}
function _clickOnSpecificSlide() {
  _clickOnSpecificSlide = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(listOfSlide, slideToSelect) {
    var _iterator2, _step2, slide, str;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _iterator2 = _createForOfIteratorHelper(listOfSlide);
          _context14.prev = 1;
          _iterator2.s();
        case 3:
          if ((_step2 = _iterator2.n()).done) {
            _context14.next = 13;
            break;
          }
          slide = _step2.value;
          _context14.next = 7;
          return slide.getAttribute('alt');
        case 7:
          str = _context14.sent;
          if (!(str === slideToSelect)) {
            _context14.next = 11;
            break;
          }
          _context14.next = 11;
          return slide.click();
        case 11:
          _context14.next = 3;
          break;
        case 13:
          _context14.next = 18;
          break;
        case 15:
          _context14.prev = 15;
          _context14.t0 = _context14["catch"](1);
          _iterator2.e(_context14.t0);
        case 18:
          _context14.prev = 18;
          _iterator2.f();
          return _context14.finish(18);
        case 21:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[1, 15, 18, 21]]);
  }));
  return _clickOnSpecificSlide.apply(this, arguments);
}
function verifySelectedAndNonSelectedSlides(_x7, _x8) {
  return _verifySelectedAndNonSelectedSlides.apply(this, arguments);
}
function _verifySelectedAndNonSelectedSlides() {
  _verifySelectedAndNonSelectedSlides = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(listOfSlide, selectedSlide) {
    var _iterator3, _step3, slide, selector, str, attributeVal;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _iterator3 = _createForOfIteratorHelper(listOfSlide);
          _context15.prev = 1;
          _iterator3.s();
        case 3:
          if ((_step3 = _iterator3.n()).done) {
            _context15.next = 16;
            break;
          }
          slide = _step3.value;
          selector = locator.specificSlide.replace('*', selectedSlide);
          _context15.next = 8;
          return global.playStation.locator(selector).getAttribute('alt');
        case 8:
          str = _context15.sent;
          if (!(str !== selectedSlide)) {
            _context15.next = 14;
            break;
          }
          _context15.next = 12;
          return slide.getAttribute('class');
        case 12:
          attributeVal = _context15.sent;
          (0, _test.expect)(attributeVal).not.toContain('is-selected');
        case 14:
          _context15.next = 3;
          break;
        case 16:
          _context15.next = 21;
          break;
        case 18:
          _context15.prev = 18;
          _context15.t0 = _context15["catch"](1);
          _iterator3.e(_context15.t0);
        case 21:
          _context15.prev = 21;
          _iterator3.f();
          return _context15.finish(21);
        case 24:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[1, 18, 21, 24]]);
  }));
  return _verifySelectedAndNonSelectedSlides.apply(this, arguments);
}
(0, _cucumber.When)(/^the user select a specific "([^"]*)" from carousel slides$/, /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(slideToSelect) {
    var listOfSlides;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return global.playStation.$$(locator.slide_Images);
        case 2:
          listOfSlides = _context7.sent;
          _context7.next = 5;
          return clickOnSpecificSlide(listOfSlides, slideToSelect);
        case 5:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x9) {
    return _ref7.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the user should be redirected  to playstation application$/, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
  return _regeneratorRuntime().wrap(function _callee8$(_context8) {
    while (1) switch (_context8.prev = _context8.next) {
      case 0:
        _context8.next = 2;
        return playStationPage.verifyPlayStationPageTitle(data.playStationPageTitle);
      case 2:
      case "end":
        return _context8.stop();
    }
  }, _callee8);
})));
(0, _cucumber.Then)(/^the carousel slides should move one by one automatically$/, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
  return _regeneratorRuntime().wrap(function _callee9$(_context9) {
    while (1) switch (_context9.prev = _context9.next) {
      case 0:
        _context9.next = 2;
        return verifySlideMoveAutomatically(locator.classAttributeForSlides);
      case 2:
      case "end":
        return _context9.stop();
    }
  }, _callee9);
})));
(0, _cucumber.Then)(/^the user should see the corresponding banner for the selected "([^"]*)"$/, /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(selectedSlide) {
    var banner, bigBanner;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          banner = locator.specific_Slide;
          _context10.next = 3;
          return global.playStation.locator(banner.replace('*', selectedSlide));
        case 3:
          bigBanner = _context10.sent;
          _context10.t0 = _test.expect;
          _context10.next = 7;
          return bigBanner;
        case 7:
          _context10.t1 = _context10.sent;
          (0, _context10.t0)(_context10.t1).toBeVisible();
        case 9:
        case "end":
          return _context10.stop();
      }
    }, _callee10);
  }));
  return function (_x10) {
    return _ref10.apply(this, arguments);
  };
}());
(0, _cucumber.Then)(/^the user should see the other "([^"]*)" should not be selected$/, /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(slides) {
    var listOfSlides;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.next = 2;
          return global.playStation.$$(locator.listOfSlides);
        case 2:
          listOfSlides = _context11.sent;
          _context11.next = 5;
          return verifySelectedAndNonSelectedSlides(listOfSlides, slides);
        case 5:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function (_x11) {
    return _ref11.apply(this, arguments);
  };
}());
function verifySlideMoveAutomatically(_x12) {
  return _verifySlideMoveAutomatically.apply(this, arguments);
}
function _verifySlideMoveAutomatically() {
  _verifySlideMoveAutomatically = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(locator) {
    var listOfSlides, count, _iterator4, _step4, menu;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.next = 2;
          return global.playStation.$$(locator);
        case 2:
          listOfSlides = _context16.sent;
          count = 1;
          _iterator4 = _createForOfIteratorHelper(listOfSlides);
          _context16.prev = 5;
          _iterator4.s();
        case 7:
          if ((_step4 = _iterator4.n()).done) {
            _context16.next = 19;
            break;
          }
          menu = _step4.value;
          _context16.t0 = _test.expect;
          _context16.next = 12;
          return menu.getAttribute('class');
        case 12:
          _context16.t1 = _context16.sent;
          (0, _context16.t0)(_context16.t1).toContain('is-selected');
          _context16.next = 16;
          return global.playStation.waitForTimeout(3000);
        case 16:
          count = count + 1;
        case 17:
          _context16.next = 7;
          break;
        case 19:
          _context16.next = 24;
          break;
        case 21:
          _context16.prev = 21;
          _context16.t2 = _context16["catch"](5);
          _iterator4.e(_context16.t2);
        case 24:
          _context16.prev = 24;
          _iterator4.f();
          return _context16.finish(24);
        case 27:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[5, 21, 24, 27]]);
  }));
  return _verifySlideMoveAutomatically.apply(this, arguments);
}