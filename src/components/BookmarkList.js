
import React from 'react';
import NewsItem from './NewsItem';
import './BookmarkList.css';

function BookmarkList({ bookmarks, toggleBookmark }) {
  return (
    <div className="bookmark-list">
      {bookmarks.map((article, index) => (
        <NewsItem
          key={index}
          article={article}
          isBookmarked={true}
          toggleBookmark={toggleBookmark}
        />
      ))}
    </div>
  );
}

export default BookmarkList;
