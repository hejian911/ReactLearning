"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorAPi');
var AuthorList = require('./authorList');
var createReactClass = require('create-react-class');

var AuthorPage = createReactClass({
    getInitialState:function(){
        return{
            authors: []
        };
    },
    componentDidMount : function(){
        if(this.isMounted()){
        this.setState({authors: AuthorApi.getAllAuthors()});
        }
    },

    render: function(){
        return (
            <div>
                 <h1>Authors</h1>
                 <AuthorList authors = {this.state.authors} />
            </div>
        );
    }
});

module.exports = AuthorPage;

