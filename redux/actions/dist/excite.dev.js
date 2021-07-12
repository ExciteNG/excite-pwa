"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPartners = void 0;

var _init = _interopRequireDefault(require("./../../utility/axios-token-manager/init"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getPartners = function getPartners() {
  return function _callee(dispatch) {
    var getApplicants;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_init["default"].get("/excite/partners/all/partners"));

          case 3:
            getApplicants = _context.sent;
            return _context.abrupt("return", dispatch({
              type: "GET_PARTNERS",
              payload: getApplicants.data
            }));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", dispatch({
              type: "GET_PARTNERS",
              payload: null
            }));

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.getPartners = getPartners;