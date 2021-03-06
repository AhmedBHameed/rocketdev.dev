import Markdown from 'markdown-to-jsx';
import React from 'react';

import Audio from './components/Audio';
import Blockquote from './components/Blockquote';
import Code from './components/Code';
import Head1 from './components/Head1';
import Head2 from './components/Head2';
import Head3 from './components/Head3';
import Img from './components/Img';
import Link from './components/Link';
import ListItem from './components/ListItem';
import OrderList from './components/OrderList';
import Paragraph from './components/Paragraph';
import Pre from './components/Pre';
import Strong from './components/Strong';
import Table from './components/Table';
import TableData from './components/TableData';
import TableHead from './components/TableHead';
import TableHeaderCell from './components/TableHeaderCell';
import TableRow from './components/TableRow';
import parseEmojis from './utils/parseEmojis';

interface MDPreviewClientProps {
  markdown: string;
}

const MDPreviewClient: React.FC<MDPreviewClientProps> = ({markdown}) => {
  return (
    <Markdown
      children={parseEmojis(markdown)}
      options={{
        overrides: {
          blockquote: {
            component: Blockquote,
          },
          a: {
            component: Link,
          },
          Audio: {
            component: Audio,
          },
          h1: {
            component: Head1,
          },
          h2: {
            component: Head2,
          },
          h3: {
            component: Head3,
          },
          pre: {
            component: Pre,
          },
          code: {
            component: Code,
          },
          p: {
            component: Paragraph,
          },
          strong: {
            component: Strong,
          },
          img: {
            component: Img,
          },
          ol: {
            component: OrderList,
          },
          li: {
            component: ListItem,
          },
          table: {
            component: Table,
          },
          thead: {
            component: TableHead,
          },
          tr: {
            component: TableRow,
          },
          th: {
            component: TableHeaderCell,
          },
          td: {
            component: TableData,
          },
        },
      }}
    />
  );
};

export default MDPreviewClient;
