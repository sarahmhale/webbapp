import React from 'react';
var Dropdown = React.createClass({
  getInitialState() {
    console.log(this.props.arrOptions)
    return ({
      open: false,
      arrOptions:this.props.arrOptions



    })
  },

  eachOption(text, i){
    return(<option key={i}>{text} </option>);

  },
  selectChange(){
    console.log("select change")
  },
  render() {

    return ( <select onChange={this.selectChange}>{this.state.arrOptions.map(this.eachOption)}</select>);
  }

}); module.exports = Dropdown;
