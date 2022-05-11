import { useCallback, useRef, useEffect } from 'react';

export const useIntersect = (onIntersectFunc: () => void, threshold: number) => {
  const target = useRef(null);

  const onIntersect: IntersectionObserverCallback = useCallback(
    async ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        await onIntersectFunc();
        observer.observe(entry.target);
      }
    },
    [onIntersectFunc]
  );

  useEffect(() => {
    let observer: IntersectionObserver;
    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, { threshold });
      observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target, threshold, onIntersect]);

  return target;
};
