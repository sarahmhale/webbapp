import React from 'react';
var Dropdown = React.createClass({
    getInitialState() {
        console.log(this.props.arrOptions)
        return ({open: false, value: null, arrOptions: this.props.arrOptions.typer})
    },

    eachOption(text, i) {

        return (
            <option key={i} value={text}>{text}
            </option>
        );

    },
    selectChange() {
        console.log(this.refs.optionSelector.value)

    },
    render() {

        return (
            <select ref="optionSelector" onChange={(e) => {this.selectChange();}}>{this.state.arrOptions.map(this.eachOption)}</select>
        );
    }

});
module.exports = Dropdown;
