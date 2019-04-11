"use strict"

var React = require('react');
var createReactClass = require('create-react-class');

var About = createReactClass({
    render:function(){
        return ( 
            <div>
                <h1>About</h1>
                <p>ascascac</p>
                    <ul>
                        <li>React</li>
                        <li>React Rouyrt</li>
                        <li>Flux</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                   </ul>
            </div>
        );
    }
});

module.exports = About;