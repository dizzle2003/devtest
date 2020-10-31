import React from "react";
import PropTypes from "prop-types";
import VoteMeter from "./VoteMeter";
import "./single-post.css";
import { Post } from "../post.type";

const SinglePost = ({ post, defaultImage }) => {
  const dateAgo = "";
  const onVote = (voteType) => {
    console.log(voteType);
  };

  return (
    <div className="single-post">
      <div className="single-post__controls">
        <div className="single-post__controls__actions">
          <VoteMeter
            votesCount={post.votesCount}
            voteDirection={null}
            onVote={onVote}
          />
          <div className=""></div>
        </div>
      </div>
      <div className="single-post__info">
        <div className="single-post__info__title">
          <h2>{post.title}</h2>
        </div>
        <div className="single-post__info__meta">
          <h4>
            submitted {dateAgo} by
            <a className="single-post__info__meta__author" href="#">
              {post.author.name}
            </a>
          </h4>
        </div>
        <div className="single-post__info__image">
          <img
            src={post.previewImage || defaultImage}
            alt={post.title + " preview image"}
          />
        </div>
        <div className="single-post__info__category">
          <span>{post.category}</span>
        </div>
      </div>
    </div>
  );
};

SinglePost.propTypes = {
  post: Post.isRequired,
  defaultImage: PropTypes.string.isRequired,
};

export default SinglePost;
