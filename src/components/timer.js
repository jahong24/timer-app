import React, { Component } from 'react';
import helpers from './helpers';
import TimerActionButton from './timerActionButton'

export default class Timer extends Component {

    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval);
    }

    handleStartClick = () => {
        this.props.onStartClick(this.props.id);
    };

    handleStopClick = () => {
        this.props.onStopClick(this.props.id);
    };

    handleDeleteClick = () => {
        this.props.onDeleteClick(this.props.id);
    };

    render() {
        const elapsedString = helpers.renderElapsedString(
            this.props.elapsed, this.props.runningSince
        );
        return (
            <div className="timer-card">
                <div className="content">
                    <div className="header">{this.props.title}</div>
                    <div className="meta">{this.props.project}</div>
                    <div className="description">
                        <h2>{elapsedString}</h2>
                    </div>
                    <div className='misc'>
                        <span className='edit_icon' onClick={this.props.onEditClick}>
                            <i className='glyphicon glyphicon-edit' />
                        </span>
                        <span className='trash_icon' onClick={this.handleDeleteClick}>
                            <i className='glyphicon glyphicon-trash' />
                        </span>
                    </div>
                </div>
                <TimerActionButton
                    timerIsRunning={!!this.props.runningSince}
                    onStartClick={this.handleStartClick}
                    onStopClick={this.handleStopClick}
                />
            </div>
        );
    }
}