"use strict";

import 'normalize.css';
import './index.styl';

import React from 'react';
import ReactDOM from 'react-dom';
import SayHello from './component/SayHello';

let oApp = document.getElementById('app');

ReactDOM.render(
	<SayHello />,
	oApp
);
