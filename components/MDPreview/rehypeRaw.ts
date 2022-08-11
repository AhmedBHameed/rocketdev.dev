import {get} from 'lodash';
import {raw} from 'hast-util-raw';

function rehypeRaw(options = {}) {
  return (tree, file) => {
    let index = 0,
      metadata: any = {};
    for (let node of tree.children) {
      if (node.tagName === 'pre') {
        const metaData = get(node, 'children[0].data.meta', '');
        if (metaData) {
          metadata[`${index}`] = metaData;
        }
      }
      index++;
    }

    const result = raw(tree, file, options) as any;
    for (const [key, value] of Object.entries(metadata)) {
      result.children[+key].children[0].metaData = value;
    }
    return result;
  };
}

export default rehypeRaw;
