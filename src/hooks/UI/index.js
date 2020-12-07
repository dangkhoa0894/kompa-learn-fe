import { useCallback, useEffect, useState } from 'react';

export const useScrollInfinity = (refElement) => {
  const [isFetch, setIsFetch] = useState(false);

  const handleScroll = useCallback(() => {
    const { scrollHeight, offsetHeight, scrollTop } = refElement.current;
    if ((scrollHeight - offsetHeight) / 2 <= scrollTop && !isFetch) {
      setIsFetch(true);
      console.log('=================================================');
    }
  });

  const changeStatusFetch = useCallback((bool) => setIsFetch(bool), []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return [changeStatusFetch, handleScroll, { isFetch }];
};

export const useIntersectionObserverLazyContent = (ref, rootMargin = '0px', threshold = 0) => {
  useEffect(() => {
    let isLeaving = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelector('#lazy-content').innerHTML = entry.target.querySelector(
              '#lazy-content',
            ).dataset.content;
            isLeaving = true;
          } else if (isLeaving) {
            entry.target.querySelector('#lazy-content').innerHTML = '';
            isLeaving = false;
          }
        });
      },
      { rootMargin, threshold },
    );

    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, []);
};
