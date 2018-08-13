import React, { Component } from 'react';

export default class TimerActionButton extends Component {

    render() {
        if (this.props.timerIsRunning) {
            return (
                <div
                    className='btn red'
                    onClick={this.props.onStopClick}
                >
                    Stop
		        </div>
            );
        } else {
            return (
                <div
                    className='btn green'
                    onClick={this.props.onStartClick}
                >
                    Start
                </div>
            );
        }
    }
}