'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ModernCarousel.module.scss';

const CarouselSlide = ({ image, title, isActive }) => (
  <div className={`${styles.slide} ${isActive ? styles.slideActive : ''}`}>
    <Image
      src={image}
      alt={title}
      fill
      className={styles.slideImage}
      priority={isActive}
    />
    <div className={styles.slideOverlay} />
    <div className={styles.slideContent}>
      <h2 className={styles.slideTitle}>{title}</h2>
    </div>
  </div>
);

const NavigationArrow = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`${styles.navArrow} ${styles[`navArrow${direction.charAt(0).toUpperCase() + direction.slice(1)}`]} ${
      disabled ? styles.navArrowDisabled : ''
    }`}
  >
    {direction === 'left' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
  </button>
);

const CarouselIndicators = ({ slides, activeIndex, onIndicatorClick }) => (
  <div className={styles.indicators}>
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => onIndicatorClick(index)}
        className={`${styles.indicator} ${
          index === activeIndex ? styles.indicatorActive : ''
        }`}
      />
    ))}
  </div>
);

const ModernCarousel = ({ slides: propSlides, autoPlayInterval = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Default slides if none provided
  const defaultSlides = [
    {
      image: '/api/placeholder/1200/400',
      title: 'Al Khuwair Villa'
    },
    {
      image: '/api/placeholder/1200/400',
      title: 'Modern Architecture'
    },
    {
      image: '/api/placeholder/1200/400',
      title: 'Luxury Living'
    },
    {
      image: '/api/placeholder/1200/400',
      title: 'Premium Design'
    }
  ];

  const slides = propSlides || defaultSlides;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [activeIndex, isAutoPlaying, autoPlayInterval]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <div className={styles.carouselWrapper}>
      <div 
        className={styles.carousel}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <CarouselSlide
            key={index}
            image={slide.image}
            title={slide.title}
            isActive={index === activeIndex}
          />
        ))}

        {/* Navigation Arrows */}
        <NavigationArrow
          direction="left"
          onClick={prevSlide}
          disabled={false}
        />
        <NavigationArrow
          direction="right"
          onClick={nextSlide}
          disabled={false}
        />

        {/* Indicators */}
        <CarouselIndicators
          slides={slides}
          activeIndex={activeIndex}
          onIndicatorClick={goToSlide}
        />

        {/* Progress bar */}
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill}
            style={{ 
              width: isAutoPlaying ? `${((activeIndex + 1) / slides.length) * 100}%` : '0%'
            }}
          />
        </div>
      </div>

      {/* Carousel Info */}
      <div className={styles.carouselInfo}>
        <p className={styles.carouselCounter}>
          {activeIndex + 1} of {slides.length}
        </p>
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className={styles.playPauseBtn}
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default ModernCarousel;