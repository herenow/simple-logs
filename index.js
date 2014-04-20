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
	this.prepend = prep || null;
	
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
Log.info = Log.prototype.info = function Info() {
	var log = mes.apply(null, arguments);
	
	console.log('\x1b[1;32m[%s]:\x1b[0m %s', this.prepend || 'Info', log);
	
	eventEmitter.emit('logs.info', log);
	
	return this;
}


/**
 * Warnings
 */
Log.warn = Log.prototype.warn = function Warning() {
	var log = mes.apply(null, arguments);
	
	console.log('\x1b[1;33m[%s]:\x1b[0m %s', this.prepend || 'Warn', log);
	
	eventEmitter.emit('logs.warn', log);
	
	return this;
}



/**
 * Error information
 */
Log.error = Log.prototype.error = function Error() {
	var log = mes.apply(null, arguments);
	
	console.error('\x1b[1;31m[%s]:\x1b[0m %s', this.prepend || 'Error', log);
	
	eventEmitter.emit('logs.error', log); //Appended logs. to event names, because of naming conventions i guess
	
	return this;
}


/**
 * Debug information
 */
Log.debug = Log.prototype.debug = function Debug() {
	if(DEBUG === false) {
		return this;
	}
	
	var log = mes.apply(null, arguments);
	
	console.log('\x1b[1;34m[%s]:\x1b[0m %s', this.prepend || 'Debug', log);
	
	eventEmitter.emit('logs.debug', log);
	
	return this;
}


/**
 * Events
 */
Log.on = Log.addListener = function() {
	arguments[0] = 'logs.' + arguments[0];
	eventEmitter.on.apply(eventEmitter, arguments);
}


/**
 * Export
 */
module.exports = Log;
