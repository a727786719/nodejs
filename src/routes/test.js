'use strict';


module.exports = function(done){

  $.router.get('/', function(req, resp, next){
    resp.end(`北京时间${new Date()}`);
  });

  done();
}
