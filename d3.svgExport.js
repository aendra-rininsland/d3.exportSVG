/*! d3.svgExport v0.0.0 - MIT license */

;(function (global) { function moduleDefinition(/*dependency*/) {

// ---------------------------------------------------------------------------

'use strict';

/**
 * @param {}
 * @return {}
 * @api public
 */

function d3.svgExport() {
}

/**
 * Expose d3.svgExport
 */

return d3.svgExport;

// ---------------------------------------------------------------------------

} if (typeof exports === 'object') {
    // node export
    module.exports = moduleDefinition(/*require('dependency')*/);
} else if (typeof define === 'function' && define.amd) {
    // amd anonymous module registration
    define([/*'dependency'*/], moduleDefinition);
} else {
    // browser global
    global.d3.svgExport = moduleDefinition(/*global.dependency*/);
}}(this));
