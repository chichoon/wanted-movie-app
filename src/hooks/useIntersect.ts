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
    if (target) {
      observer = new IntersectionObserver(onIntersect, { threshold });
      target.current && observer.observe(target.current);
    }
    return () => observer && observer.disconnect();
  }, [target, threshold, onIntersect]);

  return target;
};
