import React from 'react';
class Dropdown extends React.Component{

  constructor(props){
    super(props);

    this.state={currentOption: 'null', arrOptions: this.props.arrOptions.typer

    }

  }

    eachOption(text, i) {

        return (
            <option key={i} value={text}>{text}
            </option>
        );

    }
    selectChange() {
        this.props.myFunc(this.refs.optionSelector.value);
    }
    render() {

        return (
            <select ref="optionSelector" onChange={(e) => {
                this.selectChange();
            }}>{this.state.arrOptions.map(this.eachOption)}</select>
        );
    }

}
module.exports = Dropdown;
