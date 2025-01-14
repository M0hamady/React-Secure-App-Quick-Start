// src/components/LoadingScreen.tsx
import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  images: string[];
  children: React.ReactNode;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ images, children }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((src) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = reject;
        });
      });

      await Promise.all(imagePromises);
    };

    const minimumLoadingTime = new Promise<void>((resolve) => {
      setTimeout(resolve, 500); // Minimum loading time of 500ms
    });

    Promise.all([preloadImages(), minimumLoadingTime]).then(() => {
      setLoaded(true);
    });
  }, [images]);

  if (!loaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-secondary animate-ping"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default LoadingScreen;
