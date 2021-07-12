"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signUp = signUp;
exports.signIn = signIn;
exports.signInPartner = signInPartner;
exports.signInAffiliate = signInAffiliate;
exports.signInSB = signInSB;
exports.signInExcite = signInExcite;
exports.pageValidate = pageValidate;
exports.signOut = signOut;

var _init = _interopRequireWildcard(require("./init"));

var _token = require("./token");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function signUp(_ref) {
  var name = _ref.name,
      email = _ref.email,
      password = _ref.password;
  return _init["default"].post('/auth/sign-up', {
    name: name,
    email: email,
    password: password
  }).then(function (res) {
    var token = res.data.token; // console.log(token)

    (0, _init.setToken)(token);
    return (0, _token.getDecodedToken)();
  });
} // Sends a POST request to /auth on the server, with the email & password returning the JWT
// Belonging to the user with supplied credentials


function signIn(_ref2) {
  var email = _ref2.email,
      password = _ref2.password;
  var data = {
    email: email,
    password: password
  }; // console.log(data)

  return _init["default"].post('/auth', data).then(function (res) {
    var token = res.data.token; // console.log(token)

    (0, _init.setToken)(token);
    return {
      user: (0, _token.getDecodedToken)(),
      token: token
    };
  })["catch"](function (res) {
    if (res.response.status === 400 || res.response.status === 401) {
      // alert("There was an error with your email or password. Please try again.")
      return null;
    }
  });
} // sign in partner


function signInPartner(_ref3) {
  var email = _ref3.email,
      password = _ref3.password;
  var data = {
    email: email,
    password: password
  }; // console.log(data)

  return _init["default"].post('/auth/login/partners', data).then(function (res) {
    var token = res.data.token;
    (0, _init.setToken)(token);
    return (0, _token.getDecodedToken)();
  })["catch"](function (res) {
    // console.log(res)
    if (res.response.status === 400 || res.response.status === 401) {
      // alert("There was an error with your email or password. Please try again.")
      return null;
    }
  });
} // sign in affiliates


function signInAffiliate(_ref4) {
  var email = _ref4.email,
      password = _ref4.password;
  var data = {
    email: email,
    password: password
  }; // console.log(data)

  return _init["default"].post('/auth/login/affiliates', data).then(function (res) {
    var token = res.data.token;
    (0, _init.setToken)(token);
    return (0, _token.getDecodedToken)();
  })["catch"](function (res) {
    if (res.response.status === 400 || res.response.status === 401) {
      // alert("There was an error with your email or password. Please try again.")
      return null;
    }
  });
} //sign in springboard


function signInSB(_ref5) {
  var email = _ref5.email,
      password = _ref5.password;
  var data = {
    email: email,
    password: password
  };
  console.log(data);
  return _init["default"].post('/auth/login/springboard', data).then(function (res) {
    var token = res.data.token;
    (0, _init.setToken)(token);
    return (0, _token.getDecodedToken)();
  })["catch"](function (res) {
    if (res.response.status === 400 || res.response.status === 401) {
      alert("There was an error with your email or password. Please try again.");
    }
  });
} //sign in excite


function signInExcite(_ref6) {
  var email = _ref6.email,
      password = _ref6.password;
  var data = {
    email: email,
    password: password
  }; // console.log(data)

  return _init["default"].post('/auth/login/admin', data).then(function (res) {
    var token = res.data.token;
    (0, _init.setToken)(token);
    return (0, _token.getDecodedToken)();
  })["catch"](function (res) {
    if (res.response.status === 400 || res.response.status === 401) {
      alert("There was an error with your email or password. Please try again.");
      return null;
    } else {
      return null;
    }
  });
}

function pageValidate() {
  return _init["default"].get('/validation').then(function (res) {
    return res;
  });
}

function signOut() {
  (0, _init.setToken)(null);
}