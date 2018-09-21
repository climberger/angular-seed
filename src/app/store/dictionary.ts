import {append, equals, filter, not, pipe, values} from 'ramda';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


export interface Dictionary<T> {
  [key: number]: T;
}

export const getArrayFromDictionaryObs = (transactionsDictionary$: Observable<Dictionary<any>>) =>
  transactionsDictionary$
    .pipe(map(values));

export const createArrayFromDictionary = (dictionary: any): any[] => {
  return values(dictionary);
};

export const createDictionaryFromArray = (dataElements: any[]): any => {
  const obj: any = {};
  dataElements.forEach((elm, index) => {
    obj[index] = copyDeep(elm);
  });
  return obj;
};

export const appendToDictionary = (dictionary, element): any => {
  return createDictionaryFromArray(append(copyDeep(element), values(copyDeep(dictionary))));

};

export const removeFromDictionary = (dictionary, element): any => {
  return createDictionaryFromArray(filter(pipe(equals(element), not), values(copyDeep(dictionary))));
};




const copyDeep = (object) => JSON.parse(JSON.stringify(object));
