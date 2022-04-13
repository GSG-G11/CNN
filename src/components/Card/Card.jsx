import React from 'react';
import './Card.css';

function Card(_props) {
  const {
    obj: {
      image, datePublished, name, description, url,
    },
  } = _props;
  return (
    <div className="Card" key={datePublished}>
      <img src={image.thumbnail.contentUrl} alt="img" />
      <span className="timeAt">{datePublished.split('T')[0]}</span>
      <p className="titel">{name}</p>
      <p className="description">{description.split('<')[0]}</p>
      <a href={url}>
        <button type="button" className="moreBtn">
          Read more
        </button>
      </a>
    </div>
  );
}
export default Card;
