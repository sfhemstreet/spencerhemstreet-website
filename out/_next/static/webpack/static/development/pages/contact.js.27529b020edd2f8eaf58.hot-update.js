webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.tsx":
/*!***************************!*\
  !*** ./pages/contact.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-tilt */ "./node_modules/react-tilt/dist/tilt.js");
/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_tilt__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_Fade__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Fade */ "./components/Fade.tsx");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.tsx");
/* harmony import */ var _components_Backgrounds__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Backgrounds */ "./components/Backgrounds.tsx");
/* harmony import */ var _util_regexCheck__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../util/regexCheck */ "./util/regexCheck.tsx");
/* harmony import */ var _API_sendEmail__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../API/sendEmail */ "./API/sendEmail.tsx");









var _jsxFileName = "/Users/spencerhemstreet/Documents/Coding/NextPract/second/sfhemstreet/pages/contact.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;










var Title = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p.withConfig({
  displayName: "contact__Title",
  componentId: "lqhh94-0"
})(["font-size:1.5rem;text-align:center;padding:0.5rem;margin:0;color:white;"]);
var ContactContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(_components_Backgrounds__WEBPACK_IMPORTED_MODULE_16__["Container"]).withConfig({
  displayName: "contact__ContactContainer",
  componentId: "lqhh94-1"
})(["padding-top:40px;"]);
var FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "contact__FormContainer",
  componentId: "lqhh94-2"
})(["max-width:30em;padding:0 2rem 2rem 2rem;margin-left:auto;margin-right:auto;"]);
var PadTop = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "contact__PadTop",
  componentId: "lqhh94-3"
})(["padding-top:10px;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].label.withConfig({
  displayName: "contact__Label",
  componentId: "lqhh94-4"
})(["color:#EEE;font-weight:600;line-height:1.5;font-size:0.875rem;"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].input.withConfig({
  displayName: "contact__Input",
  componentId: "lqhh94-5"
})(["width:100%;padding:0.5rem;-webkit-appearance:none;-moz-appearance:none;background-clip:padding-box;border:1px solid #999;border-radius:0.225rem;font-weight:bold;font-size:18px;color:white;background:", ";"], function (props) {
  return props.isRed ? 'radial-gradient(circle, rgba(196,100,79,0.07326680672268904) 0%, rgba(215,27,27,0.7315301120448179) 100%)' : 'radial-gradient(circle, rgba(40,44,52,0.48783263305322133) 0%, rgba(0,224,255,0.196516106442577) 100%)';
});
var TextArea = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].textarea.withConfig({
  displayName: "contact__TextArea",
  componentId: "lqhh94-6"
})(["width:100%;padding:0.5rem;-webkit-appearance:none;-moz-appearance:none;background-clip:padding-box;border:1px solid #999;border-radius:0.225rem;font-weight:bold;font-size:18px;color:white;background:", ";"], function (props) {
  return props.isRed ? 'radial-gradient(circle, rgba(196,100,79,0.07326680672268904) 0%, rgba(215,27,27,0.7315301120448179) 100%)' : 'radial-gradient(circle, rgba(40,44,52,0.48783263305322133) 0%, rgba(0,224,255,0.196516106442577) 100%)';
});
var SendButton = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].button.withConfig({
  displayName: "contact__SendButton",
  componentId: "lqhh94-7"
})(["color:white;width:70px;height:40px;font-size:14px;background-clip:padding-box;-webkit-appearance:none;border:1px solid #999;border-radius:0.225rem;background:rgb(47,147,63);background:radial-gradient(circle,rgba(47,147,63,0.48783263305322133) 0%,rgba(0,224,255,0.196516106442577) 100%);-moz-osx-font-smoothing:grayscale;backface-visibility:hidden;transform:translateZ(0);transition:all 0.25s ease-out;cursor:pointer;:hover,:focus{transform:scale(1.05);background:rgb(35,185,38);background:radial-gradient(circle,rgba(35,185,38,0.6) 0%,rgba(0,224,255,0.6) 100%);}:active{transform:scale(.90);}"]);
var A = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].a.withConfig({
  displayName: "contact__A",
  componentId: "lqhh94-8"
})(["text-decoration:none;cursor:pointer;max-width:50px;max-height:50px;background-color:white;display:flex;justify-content:center;align-items:center;:hover{box-shadow:0 0 10px rgb(6,72,83);}"]);
var GitHubA = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(A).withConfig({
  displayName: "contact__GitHubA",
  componentId: "lqhh94-9"
})(["border-radius:100%;"]);
var LinkedInA = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(A).withConfig({
  displayName: "contact__LinkedInA",
  componentId: "lqhh94-10"
})(["border-radius:10%;"]);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].img.withConfig({
  displayName: "contact__Img",
  componentId: "lqhh94-11"
})(["width:105%;height:auto;-moz-osx-font-smoothing:grayscale;backface-visibility:hidden;transform:translateZ(0);transition:transform 0.25s ease-out;:hover,:focus{transform:scale(1.05);}:active{transform:scale(.90);}"]);
var SocialContainer = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "contact__SocialContainer",
  componentId: "lqhh94-12"
})(["margin-top:80px;"]);
var FlexBetween = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "contact__FlexBetween",
  componentId: "lqhh94-13"
})(["display:flex;justify-content:space-around;padding:2rem;max-width:30em;margin-left:auto;margin-right:auto;"]);
var FlexCenter = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "contact__FlexCenter",
  componentId: "lqhh94-14"
})(["display:flex;justify-content:center;align-items:center;height:442px;"]);
var TitleTilt = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(Title).withConfig({
  displayName: "contact__TitleTilt",
  componentId: "lqhh94-15"
})(["border-radius:0.225rem;background:radial-gradient(circle,rgba(47,147,63,0.48783263305322133) 0%,rgba(0,224,255,0.196516106442577) 100%);"]);
var ErrorMesage = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["default"])(Title).withConfig({
  displayName: "contact__ErrorMesage",
  componentId: "lqhh94-16"
})(["font-size:0.8rem;border-radius:0.225rem;background:rgba(215,27,27,0.7315301120448179);max-width:30em;padding:20px 20px;margin-left:auto;margin-right:auto;"]);
var Copy = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].span.withConfig({
  displayName: "contact__Copy",
  componentId: "lqhh94-17"
})(["text-decoration:underline;cursor:pointer;"]);

var Contact =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Contact, _React$Component);

  function Contact(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Contact);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Contact).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onNameChange", function (event) {
      var hlr = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.highlightRed);

      if (Object(_util_regexCheck__WEBPACK_IMPORTED_MODULE_17__["regexCheck"])(event.target.value, 'plain')) {
        hlr[0] = false;
      }

      _this.setState({
        name: event.target.value,
        highlightRed: hlr
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onEmailChange", function (event) {
      var hlr = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.highlightRed);

      if (Object(_util_regexCheck__WEBPACK_IMPORTED_MODULE_17__["checkEmail"])(event.target.value)) {
        hlr[1] = false;
      }

      _this.setState({
        email: event.target.value,
        highlightRed: hlr
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onTitleChange", function (event) {
      var hlr = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.highlightRed);

      if (Object(_util_regexCheck__WEBPACK_IMPORTED_MODULE_17__["checkSpecial"])(event.target.value)) {
        hlr[2] = false;
      }

      _this.setState({
        title: event.target.value,
        highlightRed: hlr
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onBodyChange", function (event) {
      var hlr = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.highlightRed);

      if (Object(_util_regexCheck__WEBPACK_IMPORTED_MODULE_17__["checkSpecial"])(event.target.value)) {
        hlr[3] = false;
      }

      _this.setState({
        body: event.target.value,
        highlightRed: hlr
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "onSend", function _callee() {
      var _this$state, name, email, title, body, highlightRed, hlr, success;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, name = _this$state.name, email = _this$state.email, title = _this$state.title, body = _this$state.body, highlightRed = _this$state.highlightRed;
              hlr = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(highlightRed);

              if (!Object(_util_regexCheck__WEBPACK_IMPORTED_MODULE_17__["regexCheck"])(name, 'plain') || !name) {
                hlr[0] = true;
              }

              if (!Object(_util_regexCheck__WEBPACK_IMPORTED_MODULE_17__["checkEmail"])(email) || !email) {
                hlr[1] = true;
              }

              if (!Object(_util_regexCheck__WEBPACK_IMPORTED_MODULE_17__["regexCheck"])(title, 'special') || !title) {
                hlr[2] = true;
              }

              if (!Object(_util_regexCheck__WEBPACK_IMPORTED_MODULE_17__["regexCheck"])(body, 'special') || !body) {
                hlr[3] = true;
              }

              _this.setState({
                highlightRed: hlr
              }); // Only sends if input is valid


              if (hlr.includes(true)) {
                _context.next = 13;
                break;
              }

              // set status to loading, then update status when we get result
              _this.setState({
                emailStatus: 'loading'
              });

              _context.next = 11;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_API_sendEmail__WEBPACK_IMPORTED_MODULE_18__["default"])({
                name: name,
                email: email,
                title: title,
                body: body
              }));

            case 11:
              success = _context.sent;

              if (success) {
                _this.setState({
                  emailStatus: 'success'
                });
              } else {
                _this.setState({
                  emailStatus: 'failed'
                });
              }

            case 13:
            case "end":
              return _context.stop();
          }
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "copyToClipBoard", function _callee2(event) {
      var evt, text;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (navigator.clipboard) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return");

            case 2:
              evt = event.target;
              text = evt.innerText;
              _context2.prev = 4;
              _context2.next = 7;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(navigator.clipboard.writeText(text));

            case 7:
              _context2.next = 11;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](4);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, null, [[4, 9]]);
    });

    _this.state = {
      name: '',
      email: '',
      title: '',
      body: '',
      highlightRed: new Array(4).fill(false),
      emailStatus: 'writing'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Contact, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          highlightRed = _this$state2.highlightRed,
          emailStatus = _this$state2.emailStatus;
      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 321
        },
        __self: this
      }, __jsx(_components_Backgrounds__WEBPACK_IMPORTED_MODULE_16__["YosemiteBackground"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322
        },
        __self: this
      }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_12__["Transition"], {
        "in": true,
        timeout: {
          appear: 150
        },
        appear: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      }, function (state) {
        return __jsx(_components_Fade__WEBPACK_IMPORTED_MODULE_14__["default"], {
          state: state,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          },
          __self: this
        }, __jsx(ContactContainer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332
          },
          __self: this
        }, __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_12__["Transition"], {
          "in": emailStatus === 'writing',
          timeout: {
            exit: 300
          },
          unmountOnExit: true,
          mountOnEnter: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335
          },
          __self: this
        }, function (state) {
          return __jsx(_components_Fade__WEBPACK_IMPORTED_MODULE_14__["default"], {
            state: state,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 344
            },
            __self: this
          }, __jsx(Title, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 345
            },
            __self: this
          }, "Send Me an Email"), __jsx(FormContainer, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 346
            },
            __self: this
          }, __jsx(Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 347
            },
            __self: this
          }, "Name", __jsx(Input, {
            onChange: _this2.onNameChange,
            isRed: highlightRed[0],
            type: "text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 348
            },
            __self: this
          })), __jsx(PadTop, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 354
            },
            __self: this
          }, __jsx(Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 355
            },
            __self: this
          }, "Email", __jsx(Input, {
            onChange: _this2.onEmailChange,
            isRed: highlightRed[1],
            type: "email",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 356
            },
            __self: this
          }))), __jsx(PadTop, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 363
            },
            __self: this
          }, __jsx(Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 364
            },
            __self: this
          }, "Subject", __jsx(Input, {
            onChange: _this2.onTitleChange,
            isRed: highlightRed[2],
            type: "text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 365
            },
            __self: this
          }))), __jsx(PadTop, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 372
            },
            __self: this
          }, __jsx(Label, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 373
            },
            __self: this
          }, "Message", __jsx(TextArea, {
            onChange: _this2.onBodyChange,
            isRed: highlightRed[3],
            __source: {
              fileName: _jsxFileName,
              lineNumber: 374
            },
            __self: this
          }))), __jsx(PadTop, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 380
            },
            __self: this
          }, __jsx(SendButton, {
            onClick: _this2.onSend,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 381
            },
            __self: this
          }, "Send"))));
        }), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_12__["Transition"], {
          "in": emailStatus === 'loading',
          timeout: {
            enter: 100,
            exit: 350
          },
          unmountOnExit: true,
          mountOnEnter: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 391
          },
          __self: this
        }, function (state) {
          return __jsx(_components_Fade__WEBPACK_IMPORTED_MODULE_14__["default"], {
            state: state,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 401
            },
            __self: this
          }, __jsx(FlexCenter, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 402
            },
            __self: this
          }, __jsx(_components_Loading__WEBPACK_IMPORTED_MODULE_15__["default"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 403
            },
            __self: this
          })));
        }), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_12__["Transition"], {
          "in": emailStatus === 'success',
          timeout: {
            enter: 350
          },
          unmountOnExit: true,
          mountOnEnter: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 410
          },
          __self: this
        }, function (state) {
          return __jsx(_components_Fade__WEBPACK_IMPORTED_MODULE_14__["default"], {
            state: state,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 419
            },
            __self: this
          }, __jsx(FlexCenter, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 420
            },
            __self: this
          }, __jsx(react_tilt__WEBPACK_IMPORTED_MODULE_11___default.a, {
            options: {
              max: 55,
              perspective: 75
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 421
            },
            __self: this
          }, __jsx(TitleTilt, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 422
            },
            __self: this
          }, "Email Sent!"))));
        }), __jsx(react_transition_group__WEBPACK_IMPORTED_MODULE_12__["Transition"], {
          "in": emailStatus === 'failed',
          timeout: {
            enter: 350,
            exit: 300
          },
          unmountOnExit: true,
          mountOnEnter: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 432
          },
          __self: this
        }, function (state) {
          return __jsx(_components_Fade__WEBPACK_IMPORTED_MODULE_14__["default"], {
            state: state,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 442
            },
            __self: this
          }, __jsx(FlexCenter, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 443
            },
            __self: this
          }, __jsx(ErrorMesage, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 444
            },
            __self: this
          }, "Error sending email... you can reach me at", __jsx(Copy, {
            onClick: _this2.copyToClipBoard,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 446
            },
            __self: this
          }, " spencerhemstreet@gmail.com"))));
        })), __jsx(SocialContainer, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 454
          },
          __self: this
        }, __jsx(Title, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 455
          },
          __self: this
        }, "Reach Out To Me On GitHub or LinkedIn"), __jsx(FlexBetween, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 456
          },
          __self: this
        }, __jsx(react_tilt__WEBPACK_IMPORTED_MODULE_11___default.a, {
          options: {
            max: 55,
            perspective: 75
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 457
          },
          __self: this
        }, __jsx(GitHubA, {
          target: "_blank",
          rel: "noopener noreferrer",
          href: "https://github.com/sfhemstreet",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 458
          },
          __self: this
        }, __jsx(Img, {
          alt: "github logo",
          src: "/images/GitHub.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 462
          },
          __self: this
        }))), __jsx(react_tilt__WEBPACK_IMPORTED_MODULE_11___default.a, {
          options: {
            max: 55,
            perspective: 75
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 465
          },
          __self: this
        }, __jsx(LinkedInA, {
          target: "_blank",
          rel: "noopener noreferrer",
          href: "https://www.linkedin.com/in/spencer-hemstreet-094331177/",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 466
          },
          __self: this
        }, __jsx(Img, {
          alt: "linked in logo",
          src: "/images/linkedIn.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 470
          },
          __self: this
        }))))));
      })));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=contact.js.27529b020edd2f8eaf58.hot-update.js.map