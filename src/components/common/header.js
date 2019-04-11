"use strict";

var React = require('react');
var createReactClass = require('create-react-class');
var Header = createReactClass({ 
        render:function(){
            return ( 
                    <nav className = 'navbar navbar-default'>
                        <div className = 'container'>
                            <a href='/' className = 'navbar-brand'>
                                <img src='images/logo.png'/>
                            </a>
                            <ul className = 'nav navbar-nav'>
                                <li><a href="/">Home</a></li>
                                <li><a href='/#authors'>Authors</a></li>                              
                                <li><a href='/#about'>About</a></li>
                            </ul>

                        </div>
                    </nav>
            );
        }
});


module.exports = Header;