simple-logs
=======

Simple logs is a simple method for logging, its straight foward. See the examples below.

There is only 3 methods, log.info, log.error and log.debug.

For each module simple-logs will be in, you need to instanciate a new Log, and pass it a text to prepend, so in this case:

```
var Log = require('simple-logs');

var log = new Log('module_name')";

//now we have our methods:
//log.info()
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
[Core.js]
```javascript
var Log = require('simple-logs');

// Listening to events, current events are: 'error', 'info' or 'debug'
Log.on('error', function ErrorEvent(log) {
  //Do something, you might wanna send this to an api server or a file, log will contain the processed log
});

// Setting debug to false, will make log.debug print or emit no events!
Log.setDebug(true); //Defaults to true
```

[SomeModule.js]
```javascript
var Log = require('simple-logs');

var log = new Log('SomeModule');

log.info('this is %s', 'running');
//Prints: '[SomeModule]: this is running'
//Color: [SomeModule] would print Green

log.error('failed to %s', 'write to buffer');
//Prints: '[SomeModule]: failed to write to buffer'
//Color: [SomeModule] would print Red
//This will also emit the error event, since we added the listener at Core.js

log.debug('his name was %s', 'john');
//Prints: '[SomeModule]: his name was john'
//Color: [SomeModule] would print Blue
```


Authors
---------
- [herenow](https://github.com/herenow)


Contribute
----------
If you want to send any contributions, just send me a pull request.
