import dynamic from 'next/dynamic';
import React from 'react';
import {InteractionProps} from 'react-json-view';

const BrowserReactJsonView = dynamic(() => import('react-json-view'), {
  ssr: false,
});

interface JsonViewProps {
  name: string;
  src: object;
  onEdit: ((edit: InteractionProps) => false | any) | false;
  onAdd: ((edit: InteractionProps) => false | any) | false;
  onDelete: ((edit: InteractionProps) => false | any) | false;
}

const JsonView = ({name, src, onAdd, onEdit, onDelete}: JsonViewProps) => {
  return (
    <BrowserReactJsonView
      name={name}
      collapsed={1}
      displayObjectSize={false}
      enableClipboard={true}
      displayDataTypes={false}
      iconStyle="square"
      collapseStringsAfterLength={50}
      src={src}
      theme="monokai"
      onEdit={onEdit}
      onAdd={onAdd}
      onDelete={onDelete}
    />
  );
};

export default JsonView;
