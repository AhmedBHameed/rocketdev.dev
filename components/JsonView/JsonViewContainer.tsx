import React, {useCallback, useState} from 'react';
import {InteractionProps} from 'react-json-view';
import clsx from '../../utils/clsx';
import LoadingButton from '../Buttons/LoadingButton';
import JsonView from './JsonView';

interface JsonViewContainerProps {
  name: string;
  src: object;
  loading?: boolean;
  onSubmit?: (src: object) => void;
}

const JsonViewContainer = ({
  name,
  loading,
  src,
  onSubmit,
}: JsonViewContainerProps) => {
  const [object, setObject] = useState(src);

  const handleOnchange = useCallback((post: InteractionProps) => {
    setObject(post.updated_src);
  }, []);

  const handleOnSubmit = useCallback(async () => {
    onSubmit(object);
  }, [object]);

  return (
    <>
      <JsonView
        name={name}
        onAdd={handleOnchange}
        onDelete={handleOnchange}
        onEdit={handleOnchange}
        src={object}
      />

      <div className={clsx('flex', 'justify-end')}>
        <LoadingButton
          className={clsx(
            'text-white',
            'bg-indigo-600',
            'hover:bg-indigo-700',
            'focus:ring-indigo-500',
            'mt-5'
          )}
          loading={loading}
          onClick={handleOnSubmit}
        >
          Submit
        </LoadingButton>
      </div>
    </>
  );
};

export default JsonViewContainer;
