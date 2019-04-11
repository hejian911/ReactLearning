"use strict";
var React = require('react');
var Router = require('react-router');

var DefautRoute = Router.DefautRoute;

var Route = Router.Route;

var routes = (
    <Route name = "app" path="/" handler = {require('./components/app')}>
        <DefautRoute handler ={require('./components/homepage')}/>
        <Route name = "authors" handler = {require('./components/authors/authorPage')}/>
        <Route name = "about"  handler = {require('./components/about/aboutPage')}/>  
    </Route>
);

module.exports = routes;
