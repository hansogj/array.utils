export const defined = (prop: any): boolean => {
  if (prop === undefined || prop === null) {
    return false;
  }

  if (typeof prop === 'function') {
    return true;
  }

  if (prop.hasOwnProperty('length')) {
    return prop.length > 0;
  }

  if (prop.hasOwnProperty('size')) {
    return prop.size > 0;
  }

  if (typeof prop === 'boolean') {
    return prop;
  }
  return true;
};
