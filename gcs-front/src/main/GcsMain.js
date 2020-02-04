import React from 'react';
import { Route } from "react-router-dom";

import JapInput from './JapInput';
import JapReview from './JapReview';
import Others from './Others';

export default function GcsMain() {
    return (
        <div className="gcs-main">
            <Route exact path="/" render={() => (<JapReview num="0" />)} />
            <Route path="/japInput" render={() => (<JapInput num="1" />)} />
            <Route path="/printerManage" render={() => (<Others num="2" />)} />
            <Route path="/printerBook" render={() => (<Others num="3" />)} />
            <Route path="/userManage" render={() => (<Others num="4" />)} />
            <Route path="/systemSet" render={() => (<Others num="5" />)} />
        </div>
    );
}
