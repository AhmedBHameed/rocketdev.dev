import emoji from 'emoji-dictionary';

const parseEmojis = (markdown: string) => {
  markdown = markdown
    .replace(/:\+1:/g, ':thumbsup:')
    .replace(/:-1:/g, ':thumbsdown:')
    .replace(
      /<(pre|template|code)[^>]*?>[\s\S]+?<\/(pre|template|code)>/g,
      function (m) {
        return m.replace(/:/g, '__colon__');
      }
    )
    .replace(/:(\w+?):/gi, (name) => emoji.getUnicode(name))
    .replace(/__colon__/g, ':');

  return markdown;
};

export default parseEmojis;
