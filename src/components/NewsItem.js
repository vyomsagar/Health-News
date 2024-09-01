import React from 'react';
import './NewsItem.css';

function NewsItem({ article, isBookmarked, toggleBookmark }) {
  const { title, description, url, urlToImage, publishedAt, source } = article;

  return (
    <div className="news-item">
      {urlToImage && <img src={urlToImage} alt={title} className="news-image" />}
      <div className="news-content">
        <h3><a href={url} target="_blank" rel="noopener noreferrer">{title}</a></h3>
        <p>{description}</p>
        <div className="news-meta">
          <span>{source.name}</span>
          <span className='date'>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>
        <button onClick={() => toggleBookmark(article)} className="bookmark-button">
          {isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
        </button>
      </div>
    </div>
  );
}

export default NewsItem;
