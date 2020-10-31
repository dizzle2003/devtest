import React from "react";
import SinglePost from "../single/SinglePost";
import PropTypes from "prop-types";
import { Post } from "../post.type";
import design from "../../design.png";

const PostList = ({ posts }) => (
  <div className="posts-list">
    {posts.map((post) => (
      <div className="posts-list__single-post-wrapper">
        <SinglePost post={post} defaultImage={design} />
      </div>
    ))}
  </div>
);

PostList.PropTypes = {
  posts: PropTypes.arrayOf(Post),
};
export default PostList;
