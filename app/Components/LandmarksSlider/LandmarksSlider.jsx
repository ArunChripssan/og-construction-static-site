"use client"

import React, { useState, useEffect, useRef } from 'react';
import {carouselImages} from '../../../data/CarouselImg';
import './LandmarksSlider.scss';
import Image from 'next/image';

const slides = [
  	'Slide 1',
  	'Slide 2',
  	'Slide 3',
  	'Slide 4',
  	'Slide 5',
  	'Slide 6',
  	'Slide 7'
];

const Slider = () => {
  	const [active, setActive] = useState(3);
  	const itemsRef = useRef([]);

  	useEffect(() => {
    	const loadShow = () => {
    	  	let stt = 0;
    	  	itemsRef.current.forEach((item, i) => {
    	  	  	if (!item) return;
				
    	  	  	item.style.transition = 'transform 0.5s, opacity 0.5s';
    	  	  	if (i === active) {
    	  	  	  	item.style.transform = 'none';
    	  	  	  	item.style.zIndex = 1;
    	  	  	  	item.style.filter = 'none';
    	  	  	  	item.style.opacity = 1;
					item.style.width = '600px'
    	  	  	} else if (i > active) {
    	  	  	  	stt = i - active;
    	  	  	  	item.style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
    	  	  	  	item.style.zIndex = -stt;
    	  	  	  	item.style.filter = 'blur(5px)';
    	  	  	  	item.style.opacity = stt > 2 ? 0 : 0.6;
    	  	  	} else {
    	  	  	  	stt = active - i;
    	  	  	  	item.style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
    	  	  	  	item.style.zIndex = -stt;
    	  	  	  	item.style.filter = 'blur(5px)';
    	  	  	  	item.style.opacity = stt > 2 ? 0 : 0.6;
    	  	  	}
    	  	});
    	};

    loadShow();
  	}, [active]);

  	const handleNext = () => {
  	  	setActive((prev) => (prev + 1 < slides.length ? prev + 1 : prev));
  	};

  	const handlePrev = () => {
  	  	setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  	};

  	return (
  	  	<div className="wrapper">
  	  	  	<div className="slider">
  	  	    	{carouselImages.map((data, i) => (
  	  	    	  	<div
  	  	    	  	key={i}
  	  	    	  	className={`item ${active === i? 'active': ''}`}
  	  	    	  	ref={(el) => (itemsRef.current[i] = el)}
  	  	    	  	>
  	  	    	    	<Image
  	  	    	    	  	src={data.imgSrc}
  	  	    	    	  	alt=''
  	  	    	    	  	fill
  	  	    	    	  	style={{objectFit: 'cover'}}
  	  	    	    	/>
  	  	    	  	</div>
  	  	    	))}
  	  	    	<button id="prev" onClick={handlePrev}>
  	  	    	  	{'<'}
  	  	    	</button>
  	  	    	<button id="next" onClick={handleNext}>
  	  	    	  	{'>'}
  	  	    	</button>
  	  	    </div>
  	  	</div>
  	);
};

export default Slider;
