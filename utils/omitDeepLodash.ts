import {omit} from 'lodash';

function isNil(value) {
  return value === null || value === undefined;
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function omitDeepLodash(input: any, props: string[]) {
  function omitDeepOnOwnProps(obj) {
    if (typeof input === 'undefined') {
      return input;
    }

    if (!Array.isArray(obj) && !isObject(obj)) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return omitDeepLodash(obj, props);
    }

    const o = {};
    for (const [key, value] of Object.entries(obj)) {
      o[key] = !isNil(value) ? omitDeepLodash(value, props) : value;
    }

    return omit(o, props);
  }

  if (arguments.length > 2) {
    props = Array.prototype.slice.call(arguments).slice(1);
  }

  if (Array.isArray(input)) {
    return input.map(omitDeepOnOwnProps);
  }

  return omitDeepOnOwnProps(input);
}

export default omitDeepLodash;
