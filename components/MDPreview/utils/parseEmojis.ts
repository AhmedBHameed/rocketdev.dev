import emoji from 'node-emoji';

const parseEmojis = (markdown: string) => {
  const emojify = (match: string) =>
    `<span className="emoji">${emoji.emojify(match)}</span>`;

  markdown = markdown
    .replace(/:\+1:/g, ':thumbsup:')
    .replace(/:-1:/g, ':thumbsdown:')
    .replace(
      /<(pre|template|code)[^>]*?>[\s\S]+?<\/(pre|template|code)>/g,
      function (m) {
        return m.replace(/:/g, '__colon__');
      }
    )
    .replace(/:(\w+?):/gi, emojify)
    .replace(/__colon__/g, ':');

  return markdown;
};

export default parseEmojis;
