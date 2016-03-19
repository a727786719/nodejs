'use strict'

import path from 'path';
import ProjectCore from 'project-core';


const $ = global.$ = new ProjectCore();


// load config
$.init.add((done)=>{
  $.config.load(path.resolve(__dirname, 'config.js'));
  const env = process.env.NODE_ENV || null;
  if(env){
    $.config.load(path.resolve(__dirname, '../config', env + '.js'));
  }
  $.env = env;
  done();
});

$.init.load(path.resolve(__dirname, 'init', 'mongodb.js'));
$.init.load(path.resolve(__dirname, 'models'));


$.init.load(path.resolve(__dirname, 'init', 'express.js'));
$.init.load(path.resolve(__dirname, 'routes'));


$.init((err)=>{
  if(err){
    console.error(err);
    process.exit(-1);
  }else{
    console.log('init success, [env=%s]', $.env);
  }

});



