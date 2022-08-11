import React, {useCallback, useMemo} from 'react';
import clsx from '../../../utils/clsx';
import rangeParser from 'parse-numeric-range';
import {vscDarkPlus} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {get} from 'lodash';

vscDarkPlus['code[class*="language-"]'].fontSize = '14px';

const Code = ({node, inline, className, ...props}: any) => {
  const match = /language-(\w+)/.exec(className || '');
  const metaData = get(node, 'metaData');

  const applyHighlights = useCallback(
    (applyHighlights: number) => {
      if (metaData) {
        const RE = /{([\d,-]+)}/;
        const metadata = metaData?.replace(/\s/g, '');
        const strlineNumbers = RE?.test(metadata) ? RE?.exec(metadata)[1] : '0';
        const highlightLines = rangeParser(strlineNumbers);
        const highlight = highlightLines;
        const data: string = highlight.includes(applyHighlights)
          ? 'highlight'
          : null;
        return {data};
      } else {
        return {};
      }
    },
    [metaData]
  );

  const fileName = useMemo(
    () => get(metaData?.match(/\[(.*?)\]/), '1', ''),
    [metaData]
  );

  return match ? (
    <div className={clsx('bg-[#1e1e1e]', 'rounded', 'overflow-hidden')}>
      <small
        className={clsx(
          'text-gray-50',
          'font-bold',
          'p-2',
          'pb-0',
          'block',
          'opacity-70',
          'm-0'
        )}
      >
        {fileName}
      </small>

      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        className="codeStyle"
        showLineNumbers={true}
        wrapLines={metaData ? true : false}
        useInlineStyles={true}
        lineProps={applyHighlights}
        {...props}
        customStyle={{
          padding: 0,
          margin: 0,
        }}
      />

      <small
        className={clsx(
          'text-gray-50',
          'font-bold',
          'p-2',
          'text-right',
          'block',
          'opacity-70',
          'm-0'
        )}
      >
        {match[1]}
      </small>
    </div>
  ) : (
    <code
      className={clsx(
        className,
        'before:content-none',
        'after:content-none',
        'bg-gray-300',
        'text-zinc-700',
        'dark:bg-neutral-700',
        'dark:text-zinc-300',
        'p-0.5',
        'px-2',
        'rounded-md',
        'overflow-x-scroll'
      )}
      {...props}
    />
  );
};

export default Code;
