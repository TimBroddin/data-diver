'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var optional = function optional(obj, path) {
    var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

    var steps = path.split('.');
    var o = obj;

    try {
        steps.forEach(function (step) {
            if (o instanceof Array) {
                o = o[parseInt(step)];
            } else {
                o = o[step];
            }
        });
    } catch (err) {
        o = defaultValue;
    }

    if (typeof o === 'undefined') {
        o = defaultValue;
    }

    return o;
};

exports.default = optional;