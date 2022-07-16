import React, {useRef} from 'react';
import type {Identifier, XYCoord} from 'dnd-core';
import {useDrag, useDrop} from 'react-dnd';
import theme from '../../../styles/theme';
import clsx from '../../../utils/clsx';
import slugToTitle from '../../../utils/slugToTitle';

interface DragItem {
  index: number;
  id: string;
  type: string;
}

interface PostReorderProps {
  id: string;
  index: number;
  slug: string;
  groupName?: string;
  description: string;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

const PostItem = ({
  id,
  index,
  description,
  slug,
  groupName,
  moveCard,
}: PostReorderProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{handlerId}, drop] = useDrop<
    DragItem,
    void,
    {handlerId: Identifier | null}
  >({
    accept: `POST_ITEM`,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragItem, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{isDragging}, drag] = useDrag({
    type: 'POST_ITEM',
    item: (props) => {
      return {id, index};
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <div
      ref={ref}
      key={'person.email'}
      className={clsx(
        theme.bgMain,
        theme.text,
        'relative',
        'cursor-pointer',
        'rounded-lg',
        'border',
        'border-gray-300',
        'px-6',
        'py-5',
        'shadow-sm',
        'flex',
        'items-center',
        'space-x-3',
        'hover:border-gray-400',
        'focus-within:ring-2',
        'focus-within:ring-offset-2',
        'focus-within:ring-indigo-500'
      )}
    >
      <div className="flex-1 min-w-0">
        <span className="absolute inset-0" aria-hidden="true" />
        <div className="flex justify-between items-center mb-3">
          <p className="font-medium text-lg">
            {groupName || ''}
            {slugToTitle(slug)}
          </p>
          <span className="text-gray-400 text-xs">{id.slice(-6)}</span>
        </div>
        <p className="text-sm truncate">{description}</p>
      </div>
    </div>
  );
};

export default PostItem;
