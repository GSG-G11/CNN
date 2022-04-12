import React from 'react';
import './Card.css';

const data = {
  author: 'Mat Smith',
  title: 'The Morning After: Vivo claims itâ€™s solved the foldable phone crease problem',
  description:
    'The newest foldable on the scene is a China-exclusive, but it has enough to keep us interested even if we may never buy one. The Vivo X Fold, with a 6.53- or 8-inch unfolded screen, packs a Snapdragon Gen 1 processor and two ultrasonic fingerprint readers, buâ€',
  url: 'https://www.engadget.com/the-morning-after-vivo-claims-its-solved-the-foldable-phone-crease-111515939.html',
  urlToImage:
    'https://s.yimg.com/os/creatr-uploaded-images/2022-04/b45522e0-b9aa-11ec-8f3f-6fd1586d2927',
  publishedAt: '2022-04-12T11:15:15Z',
};
function Card() {
  return (
    <div className="Card">
      <img src={data.urlToImage} alt="img" />
      <span className="timeAt">{data.publishedAt.split('T')[0]}</span>
      <span className="author">{data.author}</span>
      <p className="titel">{data.title}</p>
      <p className="description">{data.description}</p>
      <a href={data.url}>
        <button type="button" className="moreBtn">Read more</button>
      </a>
    </div>
  );
}
export default Card;
