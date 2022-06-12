import update from 'immutability-helper';
import React, {useCallback, useEffect, useState} from 'react';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend';
import PostItem from './PostItem';
import {
  Post,
  useListQuerierCoursePostsQuery,
} from '../../../graphql/generated/graphql';
import {get} from 'lodash';

export interface Item {
  id: number;
  text: string;
}

interface PostsReorderProps {
  ids: string[];
  onItemOrderChange: (ids: Post[]) => void;
}

const PostsReorder = ({ids, onItemOrderChange}: PostsReorderProps) => {
  const [coursePosts, setCoursePosts] = useState<Post[]>([]);

  const {data, error} = useListQuerierCoursePostsQuery({
    variables: {
      ids,
    },
  });

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const postOrder = update(coursePosts, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, coursePosts[dragIndex] as Post],
        ],
      });
      onItemOrderChange(postOrder);
      setCoursePosts(postOrder);
    },
    [coursePosts]
  );

  useEffect(() => {
    const posts = get(data, 'querier.listCoursePosts', []) as Post[];
    if (posts.length) {
      setCoursePosts(posts);
    }
  }, [data]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 max-h-96 overflow-y-auto">
      <DndProvider backend={HTML5Backend}>
        {coursePosts.map((post, index) => (
          <PostItem
            key={post.id}
            slug={post.slug}
            description={post.postContents[0].contentPreview}
            index={index}
            id={post.id}
            moveCard={moveCard}
          />
        ))}
      </DndProvider>
    </div>
  );
};

export default PostsReorder;
