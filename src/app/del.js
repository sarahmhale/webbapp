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
          <div className="row col-lg-7 bottom">
            <div className="col-sm-1">
              <h3>{this.props.del}</h3>
            </div>
            <div className="col-sm-1">
              <label></label>
              <Dropdown arrOptions={this.state.typer}/>
            </div>

          </div>
        );

    }
});
module.exports = Del;
