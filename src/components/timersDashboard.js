import React, { Component } from 'react';
import EditableTimerList from './editableTimerList';
import ToggleableTimerForm from './toggleableTimerForm';
import helpers from './helpers';
import { v4 } from "uuid"

const uuidv4 = require('uuid/v4');

export default class TimersDashboard extends Component {

  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: uuidv4(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: uuidv4(),
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  };

  handleCreateFormSubmit = (timer) => {
    this.createTimer(timer);
  };

  createTimer = (timer) => {
    const t = helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    });
  };

  render() {
    return (
      <div>
        <div>
          <EditableTimerList 
            timers={this.state.timers} 
          />
          <ToggleableTimerForm
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}