/* src/lib/isEmpty.js - verifies that a JS object is empty. */

/* Copyright (c) 2023 - present Rajesh's Personal Project */

/*
modification history
--------------------
01a,12nov23,rks  created.
*/

import { identical, isEmpty } from 'ramda';

const isNaN = identical(NaN);
const isZero = identical(0);
const isFalse = identical(false);

export default (val) => {
  if (val === null){
    return true;
  }

  switch (typeof val){
    case 'number':
      return isNaN(val) || isZero(val);
    case 'boolean':
      return isFalse(val);
    case 'undefined':
      return true;
    case 'string':
      return isEmpty(val.trim());
    default:
      return isEmpty(val);
  }
};
