import React, { Component } from 'react';
import TimerForm from './timerForm';
import Timer from './timer';

export default class EditableTimer extends Component {

  state = {
    editFormOpen: false,
  };

  render() {
    if (this.state.editFormOpen) {
      return (
        <TimerForm 
          id={this.props.id}
          title={this.props.title} 
          project={this.props.project} />
      );
    } else {
      return (
        <Timer
          id={this.props.id}
          title={this.props.title}
          project={this.props.project}
          elapsed={this.props.elapsed}
          runningSince={this.props.runningSince}
        />
      );
    }
  }
}