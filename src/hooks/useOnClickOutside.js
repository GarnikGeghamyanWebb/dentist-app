import { useEffect } from 'react';

export const useOnClickOutside = (
  ref,
  handler
) => {
  useEffect(() => {
    let mouseIsDown = false;
    let isScrolling = false;
    let historizedEvent = null;

    const onScroll = () => {
      if (mouseIsDown) {
        isScrolling = true;
      }
    };

    const onMouseDown = (event) => {
      mouseIsDown = true;
      historizedEvent = event;
    };

    const onMouseUp = () => {
      if (!isScrolling && historizedEvent) {

        if (!ref.current || ref.current.contains(historizedEvent.target)) {
          return;
        }

        handler(historizedEvent);
      }

      historizedEvent = null;
      isScrolling = false;
      mouseIsDown = false;
    };

    document.addEventListener('scroll', onScroll, true);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchstart', onMouseUp);

    return () => {
      document.removeEventListener('scroll', onScroll, true);
      document.removeEventListener('mousedown', onMouseUp);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('touchstart', onMouseUp);
    };
  }, [ref, handler]);
}
