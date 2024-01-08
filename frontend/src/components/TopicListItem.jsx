import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, fetchPhotosByTopic }) => {

  const handleTopicClick = (e) => {
    e.preventDefault();
    fetchPhotosByTopic(topic.id);
  }

  return (
    <div className="topic-list__item">
      <span onClick={handleTopicClick}>{topic.title}</span>
    </div>
  );
};

export default TopicListItem;
