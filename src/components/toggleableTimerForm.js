import React, { Component } from 'react';
import TimerForm from './timerForm';

export default class ToggleableTimerForm extends Component {

    state = {
        isOpen: false,
    };

    handleFormOpen = () => {
        this.setState({ isOpen: true });
    };

    handleFormClose = () => {
        this.setState({ isOpen: false });
    };

    handleFormSubmit = (timer) => {
        this.props.onFormSubmit(timer);
        this.setState({ isOpen: false });
    };

    render() {
        if (this.state.isOpen) {
            return (
                <TimerForm
                    onFormSubmit={this.handleFormSubmit}
                    onFormClose={this.handleFormClose}
                />
            );
        } else {
            return (
                <div className="add-timer">
                    <button className="btn black"
                        onClick={this.handleFormOpen}>
                        Add Timer
        </button>
                </div>
            );
        }
    }
}