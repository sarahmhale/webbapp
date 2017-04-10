import React from 'react';
import ReactDOM from 'react-dom';
import Del from './del.js';

require('../css/index.css');

//put component into html
var Layout = React.createClass({

    getInitialState() {
        return {
            takOptions: {
                del: "Tak",
                typer: [
                    'hus', 'hem'
                ],
                hus: ['enhet', 'mat']
            }
        }
    },
    render() {
        return (
            <div className="container">
                <Del del="Tak" takOptions={this.state.takOptions}></Del>
            </div>
        );
    }
});

ReactDOM.render(
    <Layout/>, document.getElementById('todo-wrapper'));
