/**
 * src/log.js
 *
 * Helper for logging and displaying whatever is passed.
 *
 */

"use strict";


/**
 * Dependencies
 */
var util = require('util');
var colors = require('colors');
var events = require('events');
var eventEmitter = new events.EventEmitter();


/**
 * Constants
 */
var mes = util.format;


/**
 * Debug setting
 */
var DEBUG = true;


/**
 * Constructor
 */
var Log = function Constructor(prep) {
	/*
	 * String that will be prepended to all log information
	 */
	this.prepend = prep;
	
	return this;
}


/**
 * Enable or disable the debug log
 */
Log.setDebug = function setDebugger(_enum) {
	DEBUG = _enum;
}


/**
 * Simple information
 */
Log.prototype.info = function Info() {
	var log = mes.apply(null, arguments);
	
	console.log('[%s]'.green + ': %s', this.prepend, log);
	
	eventEmitter.emit('info', log);
	
	return this;
}


/**
 * Error information
 */
Log.prototype.error = function Error() {
	var log = mes.apply(null, arguments);
	
	console.error('[%s]'.red + ': %s', this.prepend, log);
	
	eventEmitter.emit('error', log);
	
	return this;
}


/**
 * Debug information
 */
Log.prototype.debug = function Debug() {
	if(DEBUG === false) {
		return this;
	}
	
	var log = mes.apply(null, arguments);
	
	console.log('[%s]'.blue + ': %s', this.prepend, log);
	
	eventEmitter.emit('debug', log);
	
	return this;
}


/**
 * Events
 */
Log.on = Log.addListener = function() {
	eventEmitter.on.apply(eventEmitter, arguments);
}


/**
 * Export
 */
module.exports = Log;