import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
    {
      src: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
      caption: 'Street Tacos'
     
    },
    {
      src: 'https://images.unsplash.com/photo-1475869430886-fb14585f7443?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        caption: ' BBQ '
    },
    {
      src: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
        caption:'Korean '
    }
   
  ];
  
  const ImgSlider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} className="custom-tag" />
          <CarouselCaption className="text-primary" captionHeader={item.caption} captionText={item.caption} />
        </CarouselItem>
      );
    });
  
    return (
      <div>
        <style>
        {
          `.custom-tag {
              margin-top: 20px;
              margin-bottom: 0px;
              width: 100%;
              border-radius: 0px;
            }`
        }
      </style>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
      
          <CarouselIndicators   items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    ]
        </Carousel>
      </div>
    );
  };
  
  export default ImgSlider;