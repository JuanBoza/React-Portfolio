import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"




ReactDOM.render((
    <HashRouter>
     <App /> {/* The various pages will be displayed by the `Main` component. */}
    </HashRouter>

  ), document.getElementById('root')
);

//ReactDOM.render(<App />, document.getElementById('root'));



