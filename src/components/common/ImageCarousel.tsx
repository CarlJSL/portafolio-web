import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  alt: string;
  isMobile?: boolean; // Nueva prop para indicar si son capturas móviles
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt, isMobile = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className={`w-full ${isMobile ? 'h-[500px]' : 'h-80'} bg-slate-700 rounded-t-xl flex items-center justify-center text-slate-400`}>
        Sin imagen
      </div>
    );
  }

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative w-full ${isMobile ? 'h-[500px] bg-slate-950' : 'h-80 bg-slate-700'} rounded-t-xl overflow-hidden group flex items-center justify-center`}>
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`${alt} - imagen ${currentIndex + 1}`}
        className={`${isMobile ? 'max-h-full w-auto max-w-full' : 'w-full h-full object-cover'} transition-opacity duration-300`}
        loading="lazy"
      />

      {/* Overlay gradient - solo para proyectos no móviles */}
      {!isMobile && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
      )}

      {/* Navigation arrows (visible on hover) */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-900/80 hover:bg-slate-900 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all"
            aria-label="Imagen siguiente"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute top-3 right-3 px-2 py-1 bg-slate-900/80 text-white text-xs rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};
