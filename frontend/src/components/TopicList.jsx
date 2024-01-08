import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, fetchPhotosByTopic }) => {

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        return (
          <TopicListItem
            key={topic.id}
            topic={topic}
            fetchPhotosByTopic={fetchPhotosByTopic}
          />
        )
      })}
    </div>
  );
};

export default TopicList;
