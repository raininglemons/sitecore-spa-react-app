import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

declare var self: { prerenderReady: boolean };

const props = {
    steps: [
        {
            title: 'Step 1',
            subtitle: 'asdgdfs asfdaksdfakjhs afsdfa'
        },
        {
            title: 'Step 2',
            subtitle: 'asdgdfs asfdaksdfakjhs afsdfa'
        },
        {
            title: 'Step 3',
            subtitle: 'asgdfs asfdaksdfakjhs afsdfa'
        },
    ]
};

ReactDOM.hydrate(<App {...props} />, document.getElementById('root'), () => { self.prerenderReady = true });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
