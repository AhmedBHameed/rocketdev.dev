import {kebabCase} from 'lodash';
import React from 'react';

function flatten(text, child) {
  return typeof child === 'string'
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
}

const useGetHashIdFromChildren = (props) => {
  let children = React.Children.toArray(props.children);
  let text = children.reduce(flatten, '');
  return kebabCase(text);
};

export default useGetHashIdFromChildren;
