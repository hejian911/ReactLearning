
$ = jQuery = require('jquery');

var React = require('react');
var createReactClass = require('create-react-class');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;

var App = createReactClass({
    render:function(){
        return (
            <div>
                <Header/>
                <div className = "container-fluid">
                <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = App;
