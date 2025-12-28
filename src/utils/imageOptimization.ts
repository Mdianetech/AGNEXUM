export interface ImageVariant {
  src?: string;
  srcSet?: string;
  sizes?: string;
  media?: string;
  type?: string;
}

export interface OptimizedImage {
  src: string;
  srcSet: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'auto' | 'sync' | 'async';
}

export const generateImageUrl = (
  url: string,
  width: number,
  height?: number,
  quality: number = 80
): string => {
  if (!url.includes('pexels.com')) return url;

  const separator = url.includes('?') ? '&' : '?';
  const params = [
    `w=${width}`,
    height && `h=${height}`,
    `fit=crop`,
    `auto=compress`,
    `cs=tinysrgb`,
    `q=${quality}`
  ].filter(Boolean).join('&');

  return `${url}${separator}${params}`;
};

export const getResponsiveImageSrcSet = (
  baseUrl: string,
  sizes: number[] = [400, 800, 1200]
): string => {
  return sizes
    .map(size => `${generateImageUrl(baseUrl, size)} ${size}w`)
    .join(', ');
};

export const createOptimizedImage = (
  src: string,
  alt: string,
  options: {
    sizes?: string;
    loading?: 'lazy' | 'eager';
    className?: string;
    width?: number;
    height?: number;
  } = {}
): OptimizedImage => {
  const {
    loading = 'lazy',
    className = '',
    width = 800,
    height = 600
  } = options;

  const baseUrl = src.includes('pexels.com')
    ? generateImageUrl(src, width, height)
    : src;

  const srcSet = src.includes('pexels.com')
    ? getResponsiveImageSrcSet(src, [400, 800, 1200])
    : baseUrl;

  return {
    src: baseUrl,
    srcSet,
    alt,
    loading,
    className
  };
};

export const imageConfig = {
  fallback: 'https://images.pexels.com/photos/158829/tractor-agriculture-farming-158829.jpeg?w=800&h=600&fit=crop&auto=compress&cs=tinysrgb',
  sizes: {
    thumbnail: 100,
    small: 400,
    medium: 800,
    large: 1200,
    xlarge: 1600
  },
  formats: {
    webp: 'image/webp',
    jpeg: 'image/jpeg',
    avif: 'image/avif'
  },
  quality: {
    high: 90,
    medium: 80,
    low: 60
  }
};

export const generatePictureElement = (
  src: string,
  alt: string,
  options: {
    className?: string;
    loading?: 'lazy' | 'eager';
  } = {}
) => {
  const sources: ImageVariant[] = [];

  if (src.includes('pexels.com')) {
    sources.push({
      srcSet: getResponsiveImageSrcSet(src, [400, 800, 1200, 1600]),
      type: 'image/jpeg'
    });
  }

  return {
    sources,
    fallback: {
      src: src.includes('pexels.com') ? generateImageUrl(src, 800) : src,
      alt,
      className: options.className || '',
      loading: options.loading || 'lazy'
    }
  };
};
