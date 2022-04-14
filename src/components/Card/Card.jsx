import React from 'react';
import './Card.css';

function Card(_props) {
  const {
    obj: {
      author, time, title, content, readMoreUrl, imageUrl,
    },
  } = _props;
  return (
    <div className="Card" key={time}>
      <img src={imageUrl} alt="img" />
      <span className="timeAt">{time}</span>
      <span>{author}</span>
      <p className="titel">{title}</p>
      <p className="description">{content.split('<')[0]}</p>
      <a href={readMoreUrl}>
        <button type="button" className="moreBtn">
          Read more
        </button>
      </a>
    </div>
  );
}
export default Card;
