import React from 'react';
require('../css/del.css');
import Dropdown from './dropdown';
//Creates a Del component
var Del = React.createClass({
    getInitialState() {
        return {
            typer: ['hus', 'hem', 'balkong']
        }
    },
    eachDel(text){
      return(<h1>{text}</h1>)

    },
    render() {

        return (

          <table className="table table-striped table-hover ">
            <thead>
              <tr>
                <th>Del:</th>
                <th>Typ:</th>
                <th>Antal:</th>
                <th>Annat:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.del}</td>
                <td><Dropdown arrOptions={this.state.typer}/></td>
                <td>  <input></input></td>
                <td>Hejhej</td>
              </tr>
            </tbody>
          </table>


        );

    }
});
module.exports = Del;
