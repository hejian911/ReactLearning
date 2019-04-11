"use strict"
var React = require('react');


var Router = require('react-router');
var RouteHandler = require('react-router').RouteHandler;
var routes = require('./routes');
var ReactDOM = require('react-dom');
// Router.run(routes,function(Handler){
//     React.render(<Handler/>, document.getElementById('app'));
// });

ReactDOM.render(<Router><RouteHandler /></Router>, document.getElementById('app'));
    