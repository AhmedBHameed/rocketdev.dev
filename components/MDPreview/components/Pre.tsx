import React, {useCallback} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import darkTheme from 'prism-react-renderer/themes/vsDark';
import lightTheme from 'prism-react-renderer/themes/nightOwl';
import {useTheme} from 'next-themes';
import clsx from '../../../utils/clsx';
import {useNotifications} from '../../ToastMessage/Hooks/NotificationsHook';
import {toUpper} from 'lodash';

type Language =
  | 'markup'
  | 'bash'
  | 'clike'
  | 'c'
  | 'cpp'
  | 'css'
  | 'javascript'
  | 'jsx'
  | 'coffeescript'
  | 'actionscript'
  | 'css-extr'
  | 'diff'
  | 'git'
  | 'go'
  | 'graphql'
  | 'handlebars'
  | 'json'
  | 'less'
  | 'makefile'
  | 'markdown'
  | 'objectivec'
  | 'ocaml'
  | 'python'
  | 'reason'
  | 'sass'
  | 'scss'
  | 'sql'
  | 'stylus'
  | 'tsx'
  | 'typescript'
  | 'wasm'
  | 'yaml';

interface PreProps {
  children: {
    props: {
      children: string;
      className: string;
    };
  };
}

const Pre: React.FC<PreProps> = (props) => {
  const {notify} = useNotifications();
  const {theme} = useTheme();
  const language =
    props.children.props.className.trim().replace(/lang-/, '') || '';

  const upperCaseLanguage = toUpper(language);
  const code = props.children.props.children.trim();

  const copy = useCallback(() => {
    navigator.clipboard.writeText(code);
    notify({
      title: 'Code snippet',
      message: `${upperCaseLanguage} code snippet copied to clipboard`,
      type: 'info',
    });
  }, [upperCaseLanguage, code]);

  return (
    <div className={clsx('show-language-name', 'relative')}>
      <div className={clsx('absolute', 'top-2', 'right-2', 'text-xs')}>
        <span
          className={clsx(
            'p-1',
            'rounded-tl-md',
            'rounded-bl-md',
            'leading-tight',
            'bg-red-500',
            'text-gray-100',
            'font-semibold'
          )}
        >
          {upperCaseLanguage}
        </span>
        <span
          onClick={copy}
          className={clsx(
            'p-1',
            'cursor-pointer',
            'rounded-br-md',
            'rounded-tr-md',
            'leading-tight',
            'bg-green-500',
            'text-gray-100',
            'font-semibold'
          )}
        >
          Copy
        </span>
      </div>
      <Highlight
        {...defaultProps}
        theme={theme === 'dark' ? darkTheme : lightTheme}
        code={code}
        language={language as Language}
      >
        {({className, style, tokens, getLineProps, getTokenProps}) => {
          return (
            <pre className={clsx(className, 'pt-7')} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </pre>
          );
        }}
      </Highlight>
    </div>
  );
};

export default Pre;
