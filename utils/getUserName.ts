import {get} from 'lodash';
import {Username} from '../graphql/generated/graphql';

const getUserName = (name?: Username) => {
  const lastName = get(name, 'last', '');

  return `${get(name, 'first', '')} ${lastName ? lastName : ''}`;
};

export default getUserName;
