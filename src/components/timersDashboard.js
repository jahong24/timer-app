import React, { Component } from 'react';
import EditableTimerList from './editableTimerList';
import ToggleableTimerForm from './toggleableTimerForm';

export default class TimersDashboard extends Component {
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: '1',
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: '2',
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  };

  render() {
    return (
      <div>
        <div>
          <EditableTimerList timers={this.state.timers} />
          <ToggleableTimerForm isOpen={false} />
        </div>
      </div>
    );
  }
}