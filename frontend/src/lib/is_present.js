/* src/lib/is_present.js - verifies that a JS object is not empty. */

/* Copyright (c) 2023 - present Rajesh's Personal Project */

/*
modification history
--------------------
01a,12nov23,rks  created.
*/

import isEmpty from './is_empty';

export default (obj) => !isEmpty(obj);
