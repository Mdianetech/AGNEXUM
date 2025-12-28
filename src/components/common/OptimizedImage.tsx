import React, { useState } from 'react';
import { createOptimizedImage } from '../../utils/imageOptimization';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  width?: number;
  height?: number;
  onLoad?: () => void;
  onError?: () => void;
  fallbackSrc?: string;
  aspectRatio?: 'square' | 'video' | '3:4' | '4:3' | 'auto';
}

const aspectRatioClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  '3:4': 'aspect-[3/4]',
  '4:3': 'aspect-[4/3]',
  auto: ''
};

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  width = 800,
  height = 600,
  onLoad,
  onError,
  fallbackSrc,
  aspectRatio = 'auto'
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const optimized = createOptimizedImage(src, alt, {
    width,
    height,
    loading,
    className
  });

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const displaySrc = hasError && fallbackSrc ? fallbackSrc : optimized.src;

  const aspectClass = aspectRatioClasses[aspectRatio as keyof typeof aspectRatioClasses];

  return (
    <div className={`relative overflow-hidden ${aspectClass}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={displaySrc}
        srcSet={optimized.srcSet}
        alt={optimized.alt}
        loading={optimized.loading}
        decoding="async"
        className={`w-full h-full object-cover ${className} ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};

export default OptimizedImage;
