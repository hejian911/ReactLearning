"use strict";

var React = require('react');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

var AuthorList = createReactClass({
    propTypes:{
        authors: PropTypes.array.isRequired
    },
    render: function(){
        var createAuthorRow = function(author){
            return (
                    <tr key = {author.  id}>
                        <td><a href={'/#authors/' + author.id}>{author.id}</a> </td>
                        <td>{author.firstName} {author.lastName} </td>
                    </tr>
            );
        };

        return (
            <div>
                <h1>Authors</h1>
                <table className ='table'>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        </tr>
                    </thead>
                        <tbody>
                            {this.props.authors.map(createAuthorRow,this)}
                        </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorList;