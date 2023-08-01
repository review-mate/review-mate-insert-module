import React, { useState } from 'react';
import starFill from '../../assets/icons/star_fill.png';
import starEmpty from '../../assets/icons/star_empty.png';

interface Props {
  rating: number;
  setRating: (rating: number) => void;
}

export default function ReviewRating(props: Props) {
  const [stars, setStars] = useState([1, 2, 3, 4, 5]);
  const [hover, setHover] = useState(0);

  const { rating, setRating } = props;

  return (
    <div>
      {stars.map((star, index) => {
        return (
          <img
            key={index}
            role="presentation"
            src={star <= (hover || rating) ? starFill : starEmpty}
            width={40}
            alt="별점"
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          />
        );
      })}
    </div>
  );
}