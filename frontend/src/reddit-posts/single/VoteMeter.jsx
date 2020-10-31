import React, { useState } from "react";
import PropTypes from "prop-types";
import "./single-post.css";

const VoteMeter = ({ votesCount, voteDirection, onVote }) => {
  // Vote states = 'UP' | 'DOWN'
  const [voteDirectionState, setVoteDirectionState] = useState(voteDirection);

  const vote = (direction) => {
    setVoteDirectionState(direction);
    onVote(direction);
  };
  return (
    <div className="single-post__controls__votes">
      <span
        onClick={() => vote("UP")}
        className={`${voteDirectionState === "UP" ? "active" : ""}`}
      ></span>
      <span>{votesCount}</span>
      <span
        onClick={() => vote("DOWN")}
        className={`${voteDirectionState === "DOWN" ? "active" : ""}`}
      ></span>
    </div>
  );
};

VoteMeter.PropTypes = {
  votesCount: PropTypes.number.isRequired,
  voteDirection: PropTypes.oneOf(["UP", "DOWN"]),
  onVote: PropTypes.func.isRequired,
};

export default VoteMeter;
