import React, { Component } from 'react';

export default class TimerForm extends Component {
  render() {
    const submitText = this.props.title ? 'Update' : 'Create';
    return (
      <div className="timer-card">
        <div className="content">
          <div className="timer-form">
            <div className="field">
              <label>Title</label>
              <input type="text" defaultValue={this.props.title} />
            </div>
            <div className="field">
              <label>Project</label>
              <input type="text" defaultValue={this.props.project} />
            </div>
            <div className="form-buttons">
              <button className="btn green">{submitText}</button>
              <button className="btn red">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}