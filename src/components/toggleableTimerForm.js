import React, { Component } from 'react';
import TimerForm from './timerForm';

export default class ToggleableTimerForm extends Component {
  render() {
    if (this.props.isOpen) {
      return <TimerForm />;
    } else {
      return (
        <div className="add-timer">
          <button className="btn black">Add Timer</button>
        </div>
      );
    }
  }
}