import {isObject, transform} from 'lodash';

const omitDeepLodash = <T extends object>(obj: any, props: string[]) =>
  transform(obj, (r, v, k: string) => {
    if (props.includes(k)) return;
    r[k] = isObject(v) ? omitDeepLodash(v, props) : v;
  }) as T;

export default omitDeepLodash;
