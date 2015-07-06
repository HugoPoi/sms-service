var fs = require('fs');
module.exports = function(Sms) {
  Sms.send = function(number, msg, cb) {
    fs.writeFile( Sms.settings.smsPath + '/test.msg', number + '\r\n' + msg + '\r\n', { flag : 'wx'}, function(err){
      //TODO: check if the file have been delete before callback
          return cb(err, 'Success send "' + msg + '" to '+ number);
    });
  }
  Sms.remoteMethod(
    'send',
    {
      accepts: [{arg: 'number', type: 'string'},{arg: 'msg', type: 'string'}],
      returns: {arg: 'successMsg', type: 'string'}
    }
  );
};
