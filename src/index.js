import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TimersDashboard from './components/timersDashboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TimersDashboard />, document.getElementById('root'));
registerServiceWorker();
