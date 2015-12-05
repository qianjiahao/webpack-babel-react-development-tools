
/**
 * common import
 */
import React from 'react';
import { render } from 'react-dom';
import '../style/common.css';

/**
 * component import
 */
import Router from '../lib/router.js'


/**
 * render method
 */
render(<Router />, document.getElementById('content'));