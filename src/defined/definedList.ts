import { defined } from './defined';

export const definedList = (prop: any): any[] => {
  if (!defined(prop) || !defined(prop.constructor)) {
    return [];
  }

  if (prop.constructor !== [].constructor) {
    return [prop].filter((p) => defined(p));
  }
  return prop.filter((p: any) => defined(p));
};
