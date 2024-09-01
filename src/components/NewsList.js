import React from 'react';
import NewsItem from './NewsItem';
import './NewsList.css';

function NewsList({ articles, bookmarks, toggleBookmark }) {
  if (articles.length === 0) {
    return <p>No articles found.</p>;
  }

  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <NewsItem
          key={index}
          article={article}
          isBookmarked={bookmarks.some((item) => item.url === article.url)}
          toggleBookmark={toggleBookmark}
        />
      ))}
    </div>
  );
}

export default NewsList;
