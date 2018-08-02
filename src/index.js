import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToggleableTimerForm from './components/toggleableTimerForm';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ToggleableTimerForm />, document.getElementById('root'));
registerServiceWorker();
