import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import GcsTop from './top/GcsTop';
import GcsLeft from './left/GcsLeft';
import GcsMain from './main/GcsMain';

function App() {
    return (
        <div className="page-wrapper wrapper">
            <Router>
                <GcsTop />
                <GcsLeft />
                <GcsMain />
            </Router>
        </div>
    );
}

export default App;
