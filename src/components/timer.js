import React, { Component } from 'react';
import helpers from './helpers';

export default class Timer extends Component {
  render() {
    const elapsedString = helpers.renderElapsedString(
      this.props.elapsed,
      this.props.runningSince
    );
    return (
      <div className="timer-card">
        <div className="content">
          <div className="header">{this.props.title}</div>
          <div className="meta">{this.props.project}</div>
          <div className="timer-description">
            <h2>{elapsedString}</h2>
          </div>
        </div>
        <div className="btn green">Start</div>
      </div>
    );
  }
}