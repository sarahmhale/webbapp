import React from 'react';
require('../css/del.css');
import Dropdown from './dropdown';
//Creates a Del component
var Del = React.createClass({
    getInitialState() {
        return {
            typer: this.props.takOptions}


    },

    render() {
        return (
          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>Del:</th>
                <th>Typ:</th>
                <th>Antal:</th>
                <th>Enhet:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.takOptions.del}</td>
                <td><Dropdown arrOptions={this.state.typer}/></td>
                <td><label></label><input></input></td>
                <td></td>
              </tr>
            </tbody>
          </table>


        );

    }
});
module.exports = Del;
