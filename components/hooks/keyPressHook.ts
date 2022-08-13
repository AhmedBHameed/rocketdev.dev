import {useEffect, useLayoutEffect, useRef} from 'react';
import hotkeys, {HotkeysEvent} from 'hotkeys-js';

const useKeyPress = (
  keys: string,
  callback: (event: KeyboardEvent, hotkeysEvent: HotkeysEvent) => void,
  config: {filter: string} // as RegExp
) => {
  const callbackRef = useRef(callback);
  useLayoutEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    function keyboardHandler(event: KeyboardEvent, hotkeysEvent: HotkeysEvent) {
      return callbackRef.current(event, hotkeysEvent);
    }

    if (config.filter)
      hotkeys.filter = function (event: any) {
        var tagName = (event.target || event.srcElement).tagName;
        return new RegExp(config.filter).test(tagName);
      };

    hotkeys(keys, keyboardHandler);

    return () => {
      hotkeys.unbind(keys, keyboardHandler);
    };
  }, []);
};

export default useKeyPress;
