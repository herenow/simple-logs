var Log = require('../index.js');

var log = new Log('SomeModule');

log.info('this is %s', 'running');
log.warn('failed to log action');
log.error('failed to %s', 'write to buffer');
log.debug('his name was %s', 'john');

Log.info('this is %s', 'running');
Log.warn('failed to log action');
Log.error('failed to %s', 'write to buffer');
Log.debug('his name was %s', 'john');
