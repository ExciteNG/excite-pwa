"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _auth = _interopRequireDefault(require("./reducers/auth"));

var _membership = _interopRequireDefault(require("./reducers/membership"));

var _payments = _interopRequireDefault(require("./reducers/payments"));

var _loading = _interopRequireDefault(require("./reducers/loading"));

var _flash = _interopRequireDefault(require("./reducers/flash"));

var _excite = _interopRequireDefault(require("./reducers/excite"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var rootReducer = (0, _redux.combineReducers)({
  auth: _auth["default"],
  membership: _membership["default"],
  payment: _payments["default"],
  loading: _loading["default"],
  flash: _flash["default"],
  partners: _excite["default"]
});
var _default = rootReducer;
exports["default"] = _default;