import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom' ;
import 'antd/dist/antd.css';
import './index.css';


import { App } from './App';
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.querySelector("#root"));
//ReactDOM.render(<App/>, document.querySelector("#root"));
