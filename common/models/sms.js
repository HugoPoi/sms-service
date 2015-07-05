var fs = require('fs');
module.exports = function(Sms) {
  Sms.send = function(number, msg, cb) {
    fs.open(path, 'wx', function(err, fd){
      if(err){
        cb(err);
      }
      fs.write(fd, number + '\r\n' + msg + '\r\n', function(err, state){

      });
    });
    cb(null, 'Success send "' + msg + '" to '+ number);
  }
  Sms.remoteMethod(
        'send',
        {
          accepts: [{arg: 'number', type: 'string'},{arg: 'msg', type: 'string'}],
          returns: {arg: 'successMsg', type: 'string'}
        }
    );
};
