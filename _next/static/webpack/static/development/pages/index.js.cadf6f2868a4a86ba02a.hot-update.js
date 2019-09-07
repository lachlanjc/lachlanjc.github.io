webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/blocks.js":
/*!******************************!*\
  !*** ./components/blocks.js ***!
  \******************************/
/*! exports provided: Banner, Container, Tiles, List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tiles", function() { return Tiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");



var _jsxFileName = "/Users/lachlanjc/src/site/components/blocks.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

var Banner = function Banner(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    sx: {
      py: [4, 5],
      h1: {
        fontSize: [6, 7],
        fontWeight: 'heading',
        lineHeight: 'tight',
        mt: [0, -2, -3],
        mb: 3
      },
      h2: {
        fontSize: [3, 4],
        fontWeight: 'light',
        mb: 2,
        a: {
          color: 'red'
        }
      },
      p: {
        mb: 4
      },
      ul: {
        listStyle: 'none',
        display: 'flex',
        p: 0,
        m: 0
      },
      li: {
        mr: 3
      },
      a: {
        variant: 'styles.navitem'
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
};
var Container = function Container(_ref) {
  var wide = _ref.wide,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["wide"]);

  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    variant: "container",
    sx: {
      maxWidth: wide ? 'wide' : 'container'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
};
var Tiles = function Tiles(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    sx: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ul: {
        listStyle: 'none',
        p: 0,
        m: 0,
        display: 'grid',
        gridGap: [3, 4],
        gridTemplateColumns: 'repeat(auto-fit, minmax(384px, 1fr))'
      },
      li: {
        bg: 'elevated',
        p: [3, 4],
        borderRadius: 'extra',
        boxShadow: 'card',
        overflow: 'hidden',
        position: 'relative',
        transition: 'transform .125s ease-in-out',
        ':hover': {
          transform: 'scale(1.025) translateY(-4px)'
        },
        '> a:first-child': {
          m: [-3, -4],
          mb: [2, 3, 4]
        }
      },
      h2: {
        fontSize: [2, 3],
        mb: 1,
        lineHeight: 'heading',
        a: {
          color: 'text',
          textDecoration: 'none'
        }
      },
      p: {
        my: 0
      },
      img: {
        display: 'block',
        width: '100%',
        maxWidth: '100%',
        height: 256,
        objectFit: 'cover',
        objectPosition: 'center'
      }
    }, props.sx),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }));
};
var List = function List(props) {
  return __jsx(rebass__WEBPACK_IMPORTED_MODULE_4__["Box"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    sx: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
      ul: {
        p: 0,
        m: 0,
        listStyle: 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
        gridGap: [3, 4]
      },
      a: {
        fontWeight: 'bold',
        color: 'primary',
        textDecoration: 'none'
      },
      em: {
        display: 'block',
        color: 'muted',
        fontWeight: 'body',
        fontStyle: 'normal',
        fontSize: 0
      }
    }, props.sx),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.cadf6f2868a4a86ba02a.hot-update.js.map