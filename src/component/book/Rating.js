import React from "react";

const Rating = ({ rating }) => {
  return (
    <div>
      <div className="rating">
        <div className="rating-user">
          {rating.client.name}
          <br />
          {rating.date}
        </div>
        <div className="rating-comment">{rating.comment}</div>
      </div>
    </div>
  );
};

export default Rating;
