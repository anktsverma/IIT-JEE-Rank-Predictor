import React, { Component } from "react";
import Switch from "react-switch";

class toggleSwitch extends Component {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(checked) {
      this.setState({ checked });
    }
  
    render() {
      return (
        <label style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <span>Dark Mode</span>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
          
        </label>
      );
    }
  }

  export default toggleSwitch;