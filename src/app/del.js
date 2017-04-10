import React from 'react';
require('../css/del.css');
import Dropdown from './dropdown';
//Creates a Del component
class Del extends React.Component{
  constructor(props){
    super(props);

    this.state={typer: this.props.takOptions,
    update:false,
  enhet:null}
  }
    // getInitialState() {
    //     return {
    //         typer: this.props.takOptions}
    //
    //
    // }
  updateComponent(text){
    this.setState({update:true});
    this.setState({enhet:this.state.typer[text][0]});
  
    }

    render() {

      if(this.state.update){
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
                <td><Dropdown arrOptions={this.state.typer} myFunc={this.updateComponent.bind(this)}/></td>
                <td><label></label><input></input></td>
                <td>{this.state.enhet}</td>
              </tr>
            </tbody>
          </table>


        );
      }else{
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
                <td><Dropdown arrOptions={this.state.typer} myFunc={this.updateComponent.bind(this)}/></td>
                <td><label></label><input></input></td>
                <td></td>
              </tr>
            </tbody>
          </table>


        );
      }

    }
}
module.exports = Del;
