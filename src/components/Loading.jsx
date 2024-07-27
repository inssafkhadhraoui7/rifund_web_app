import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import styles from './Loading.module.css';

function Loading() {
  const lottieRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/f3825b57-3f94-4c82-9b17-07a7e653ee68/BqLwRiX0So.json' // URL to your Lottie JSON file
    });

    return () => animation.destroy(); // Cleanup on unmount
  }, []);

  return (
    <div className={styles.loading}>
      <div className={styles.lottieContainer} ref={lottieRef}></div>
    </div>
  );
}

export default Loading;
