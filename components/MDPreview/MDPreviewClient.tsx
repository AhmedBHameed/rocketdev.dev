import dynamic, {noSSR} from 'next/dynamic';
import React, {useEffect, useState} from 'react';

// import Audio from './components/Audio';
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
import Strong from './components/Strong';
import Table from './components/Table';
import TableData from './components/TableData';
import TableHead from './components/TableHead';
import TableHeaderCell from './components/TableHeaderCell';
import TableRow from './components/TableRow';
import parseEmojis from './utils/parseEmojis';

const remarkGfm: any = noSSR(() => import('remark-gfm') as any, {
  ssr: false,
});

const rehypeRaw: any = noSSR(() => import('./rehypeRaw') as any, {
  ssr: false,
});

const ReactMarkdown: any = dynamic(() => import('react-markdown') as any, {
  ssr: false,
});

interface MDPreviewClientProps {
  markdown: string;
}

const MDPreviewClient: React.FC<MDPreviewClientProps> = ({markdown}) => {
  const [rehypeRawFn, setRehypeRawFn] = useState(null);
  const [remarkGfmFn, setRemarkGfmFn] = useState(null);

  useEffect(() => {
    rehypeRaw.then((rehypeRaw) => setRehypeRawFn(rehypeRaw));
    remarkGfm.then((remarkGfm) => setRemarkGfmFn(remarkGfm));
  }, []);

  return rehypeRawFn && remarkGfmFn ? (
    <ReactMarkdown
      rehypePlugins={[remarkGfmFn.default, rehypeRawFn.default]}
      components={{
        blockquote: Blockquote,

        a: Link,
        // Audio: Audio,

        h1: Head1,

        h2: Head2,

        h3: Head3,

        p: Paragraph,

        strong: Strong,
        code: Code,
        img: (props: any) => <Img {...props} />,

        ol: OrderList,

        li: ListItem,

        table: Table,

        thead: TableHead,

        tr: TableRow,

        th: TableHeaderCell,

        td: TableData,
      }}
    >
      {parseEmojis(markdown)}
    </ReactMarkdown>
  ) : (
    <></>
  );
};

export default MDPreviewClient;
