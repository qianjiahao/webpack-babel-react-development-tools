
/**
 * common import
 */
import React from 'react';
import { render } from 'react-dom';
import '../style/common.css';

/**
 * component import
 */
import routes from '../lib/router.js'


/**
 * render method
 */
render(routes, document.getElementById('content'));