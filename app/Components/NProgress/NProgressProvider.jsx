'use client'; 

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false, trickleSpeed: 200, minimum: 0.1 });

const NProgressProvider = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();

    const startProgress = () => {
      NProgress.start();
    };

    const endProgress = () => {
      NProgress.done();
    };

    startProgress();
    const timeoutId = setTimeout(() => {
      endProgress();
    }, 500); 

    return () => {
      clearTimeout(timeoutId);
      endProgress(); 
    };

  }, [pathname, searchParams]); 

  return <>{children}</>;
};

export default NProgressProvider;