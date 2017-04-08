import React from 'react';
import ReactDOM from 'react-dom';
import Del from './del.js';

require('../css/index.css');

//put component into html
var Layout= React.createClass( {
    render() {
        return (
            <div>
                <Del del="Tak"></Del>
            </div>
        );
    }
});

ReactDOM.render(
    <Layout/>, document.getElementById('todo-wrapper'));
