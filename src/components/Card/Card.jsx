import React from 'react';
import './Card.css';

// eslint-disable-next-line no-unused-vars
function Card(_props) {
  const {
    obj: {
      urlToImage, publishedAt, author, title, description, url,
    },
  } = _props;
  return (
    <div className="Card" key={publishedAt}>
      <img src={urlToImage} alt="img" />
      <span className="timeAt">{publishedAt.split('T')[0]}</span>
      <span className="author">{author}</span>
      <p className="titel">{title}</p>
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
