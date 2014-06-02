simple-logs
=======

Simple logs is a simple method for logging, its straight foward. See the examples below.

There are 4 methods, log.info, log.warn, log.error and log.debug.

For each module simple-logs will be in, you can instanciate a new Log, and pass in a text to prepend to each log, so in this case:

```javascript
var Log = require('simple-logs');

var log = new Log('module_name');

//now we have our methods:
//log.info()
//log.warn()
//log.error()
//log.debug()
```


Installation
----------
```
npm install simple-logs
```


Usage example
----------
* Core.js

```javascript
var Log = require('simple-logs');

//Every logging method will try to emit an event, you can listen to them as follow.
Log.on('error', function ErrorEvent(log) {
	//Do something
});

// Setting debug to false, will make log.debug print or emit no events!
Log.setDebug(true); //Defaults to true
```

* SomeModule.js

```javascript
var Log = require('simple-logs');

var log = new Log('SomeModule');

log.info('this is %s', 'running');
log.warn('failed to log action');
log.error('failed to %s', 'write to buffer');
log.debug('his name was %s', 'john');

//I dont recommend doing this, but you can :)
Log.info('this is %s', 'running');
Log.warn('failed to log action');
Log.error('failed to %s', 'write to buffer');
Log.debug('his name was %s', 'john');
```
![ScreenShot](https://raw.githubusercontent.com/herenow/simple-logs/master/examples/print.png)

Authors
---------
- [herenow](https://github.com/herenow)


Contribute
----------
If you want to send any contributions, just send me a pull request.
