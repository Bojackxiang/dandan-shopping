
import "./directory.styles.scss";
import MenuItem from "../MenuItem/MenuItem";
import React, { Component } from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'
import { directory } from "../../redux/directory/directory.selector";

class Directory extends Component {

  render() {
    const {directoryData} = this.props;

    return (
      <div className="directory-menu">
        {directoryData.map(({ id, ...props}) => (
          <MenuItem key={id} {...props}/>
        ))}
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   directoryData:  state.directory
// })
const mapStateToProps = createStructuredSelector({
  directoryData: directory
})


export default connect(mapStateToProps, null)(Directory)
