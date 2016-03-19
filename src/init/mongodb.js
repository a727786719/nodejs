'use strict';

import mongoose  from 'mongoose';

module.exports = function(done){
  
  const conn = mongoose.createConnection($.config.get('mongodb.url'));
  $.mongodb = conn;
  $.model = {};
  done();
}
